//отправляем асинхронный запрос к указанной ссылке, для получения данных
async function jsonp(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Произошла ошибка при получении данных:', error);
        throw error;
    }
}


//информируем о загрузке данных
const del = document.querySelector('.remove');
jsonp('http://www.filltext.com/?rows=1000&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true')
    .then(data => {
        
        del.remove();
        const thead = document.getElementById('thead');
        //создаём заголовки таблицы и привязываем фунцию сортировки к заголовкам таблицы
        for (const key in data[0]) {
            const th = document.createElement('th');
            th.innerHTML = key;
            th.addEventListener('click', () => {
                sortTable(key);
            });
            thead.appendChild(th);
        }

        // сохраняем данные в переменную для использования в пагинации
        const tableData = data;

        const itemsPerPage = 50;
        let currentPage = 1;
        //создаём страницу в соотвествии с пагинацмей
        const renderPage = (page) => {
            const start = (page - 1) * itemsPerPage;
            const end = start + itemsPerPage;
            const pageData = tableData.slice(start, end);

            const tbody = document.getElementById('tbody');
            tbody.innerHTML = '';

            pageData.forEach(target => {
                const tr = document.createElement('tr');
                for (const key in target) {
                    //вносим данные в таблицу
                    if (target.hasOwnProperty(key)) {
                        const td = document.createElement('td');
                        td.innerHTML = target[key];
                        tr.appendChild(td);
                    }
                }
                tbody.appendChild(tr);
            });
        };
        //обновляем пагинцию для текущей страницы
        const updatePagination = () => {
            const totalPages = Math.ceil(tableData.length / itemsPerPage);
        
            const pagination = document.getElementById('pagination');
            pagination.innerHTML = '';
        
            for (let i = 1; i <= totalPages; i++) {
                const pageButton = document.createElement('button');
                pageButton.textContent = i;
        
                if (i === currentPage) {
                    pageButton.classList.add('active'); // Добавляем класс для активной кнопки
                }
        
                pageButton.addEventListener('click', () => {
                    currentPage = i;
                    renderPage(currentPage);
                    updatePagination();
                });
                
                pagination.appendChild(pageButton);
            }
        };

        renderPage(currentPage);
        updatePagination();

        const sortState = {}; // объект для хранения состояния сортировки

        //объявляем функции сортировки в соотвествии с текущей пагинацией
        const sortTable = (column) => {
            const start = (currentPage - 1) * itemsPerPage;
            const end = start + itemsPerPage;
            const pageData = tableData.slice(start, end);
            //проверяем состояние для сортировки по возрастанию или убыванию и тип данных для сортировки
            if (!sortState[column]) {
                if (typeof pageData[0][column] === 'number') {
                    pageData.sort((a, b) => a[column] - b[column]);
                } else if (typeof pageData[0][column] === 'string') {
                    pageData.sort((a, b) => a[column].localeCompare(b[column]));
                }
                sortState[column] = 'asc';
            } else {
                if (typeof pageData[0][column] === 'number') {
                    pageData.sort((a, b) => b[column] - a[column]);
                } else if (typeof pageData[0][column] === 'string') {
                    pageData.sort((a, b) => b[column].localeCompare(a[column]));
                }
                sortState[column] = null;
            }
        
            // обновляем отсортированные данные только для текущей страницы
            for (let i = start, j = 0; i < end; i++, j++) {
                tableData[i] = pageData[j];
            }
            //заново рендерим страницу
            renderPage(currentPage);
        };

    })
    .catch(error => {
        console.error('Произошла ошибка при получении данных:', error);
        del.innerHTML = 'Произошла ошибка при получении данных';
    });