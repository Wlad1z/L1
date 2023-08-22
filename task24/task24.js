
const del = document.querySelector('.remove');
fetch('https://www.filltext.com/?rows=1000&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true')
    .then(response => response.json())
    .then(data => {
        
        del.remove();
        const thead = document.getElementById('thead');
        for (const key in data[0]) {
            const th = document.createElement('th');
            th.innerHTML = key;
            th.addEventListener('click', () => {
                sortTable(key);
            });
            thead.appendChild(th);
        }

        // Сохраняем данные в переменную для использования в пагинации
        const tableData = data;

        const itemsPerPage = 50;
        let currentPage = 1;

        const renderPage = (page) => {
            const start = (page - 1) * itemsPerPage;
            const end = start + itemsPerPage;
            const pageData = tableData.slice(start, end);

            const tbody = document.getElementById('tbody');
            tbody.innerHTML = '';

            pageData.forEach(target => {
                const tr = document.createElement('tr');
                for (const key in target) {
                    if (target.hasOwnProperty(key)) {
                        const td = document.createElement('td');
                        td.innerHTML = target[key];
                        tr.appendChild(td);
                    }
                }
                tbody.appendChild(tr);
            });
        };

        const updatePagination = () => {
            const totalPages = Math.ceil(tableData.length / itemsPerPage);

            const pagination = document.getElementById('pagination');
            pagination.innerHTML = '';

            for (let i = 1; i <= totalPages; i++) {
                const pageButton = document.createElement('button');
                pageButton.textContent = i;
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

        const sortState = {}; // Объект для хранения состояния сортировки

        
        const sortTable = (column) => {
            const start = (currentPage - 1) * itemsPerPage;
            const end = start + itemsPerPage;
            const pageData = tableData.slice(start, end);
        
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
        
            // Обновляем отсортированные данные только для текущей страницы
            for (let i = start, j = 0; i < end; i++, j++) {
                tableData[i] = pageData[j];
            }
        
            renderPage(currentPage);
        };

    })
    .catch(error => {
        console.error('Произошла ошибка при получении данных:', error);
        del.innerHTML = 'Произошла ошибка при получении данных';
    });