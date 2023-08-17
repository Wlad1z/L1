function debounceAndThrottle(func, delay) {
    
    let timeout;//таймер
    let lastExecuted = 0;//время выполнения пеоследнейй функции

    return function (...args) {
        const context = this;

        const executeFunction = () => {
            func.apply(context, args);//вызываем необходимую функцию
            lastExecuted = Date.now();//меняем время вызова последней функции
        };

        if (Date.now() - lastExecuted >= delay) {//вызываем если время между вызовами меньше задержки
            executeFunction();
        } else {//вызываем с задержкой
            clearTimeout(timeout);//обнуяем таймер
            timeout = setTimeout(executeFunction, delay);
        }
    };
}

const addressInput = document.getElementById('address-input');
const suggestionsList = document.getElementById('suggestions-list');
const apiKey = 'aae5f5ae756ce14410d12226d814fec6e7b29f93';


async function geocodeAddress(address) {
    try {
        //делаем запрос к api ДаДата
        const response = await axios.post(
            'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address',
            { query: address },
            { headers: { Authorization: `Token ${apiKey}` } }
        );
        //получаем список адрессов
        const suggestions = response.data.suggestions;
        console.log(response)
        
        //создаём список в html
        suggestionsList.innerHTML = '';
        suggestions.forEach(suggestion => {
            const li = document.createElement('li');
            li.textContent = suggestion.value;
            li.addEventListener('click', () => {
                addressInput.value = suggestion.value;
                suggestionsList.innerHTML = '';
            });
            suggestionsList.appendChild(li);
        });
    } catch (error) {
        console.error('Ошибка в получении адресов', error);
    }
}

//объявляем функцию защиты от дебоунса и тротлинга
const debouncedGeocode = debounceAndThrottle(geocodeAddress, 300);

//вызываем функцию
addressInput.addEventListener('input', () => {
    const address = addressInput.value;
    if (address.length >= 2) {
        debouncedGeocode(address);
    }
});