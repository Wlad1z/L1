//данная функция преобразует простые конструкции без вложенности из строки в JSON
function stringToJSON(str) {
    str = str.trim();
    //определяем тип данных
    if (str.startsWith('{')) {
        return parseObject(str);
    } else if (str.startsWith('[')) {
        return parseArray(str);
    } else if (str.startsWith('"')) {
        return parseString(str);
    } else if (str === 'true' || str === 'false') {
        return parseBoolean(str);
    } else if (!isNaN(str)) {
        return parseNumber(str);
    } else {
        throw new Error('Неизвестный тип данных');
    }
}
//работаем с объектами
function parseObject(str) {
    if (str[0] !== '{' || str[str.length - 1] !== '}') {
        throw new Error('Не допустимый JSON-объект');
    }
  
    const obj = {};
    //получаем пары ключ значение
    const keyValues = str.substring(1, str.length - 1).split(',');
    
    for (let keyValue of keyValues) {
        const parts = keyValue.split(':');
        if (parts.length !== 2) {
            throw new Error('Неправильный формат пары ключ-значение');
        }
        //удаляем прообелы и ковычки у ключей
        const key = parts[0].trim().slice(1, -1);
        const value = parts[1].trim();
        //записываем данные в объект
        obj[key] = stringToJSON(value);
    }
  
    return obj;
}
//работаем с массивами 
function parseArray(str) {
    if (str[0] !== '[' || str[str.length - 1] !== ']') {
        throw new Error('Не допустимый JSON-массив');
    }
    //разбиваем строку на элементы
    const arr = str.substring(1, str.length - 1).split(',').map(item => stringToJSON(item.trim()));
    return arr;
}

//работаем со строками
function parseString(str) {
    if (str[0] !== '"' || str[str.length - 1] !== '"') {
        throw new Error('Не допустимая JSON-строка');
    }
    return str.slice(1, -1);
}
//работаем с true/false
function parseBoolean(str) {
    return str === 'true';
}
//работаем со числами
function parseNumber(str) {
    return Number(str);
}
  
createSimpleElement('Задание 10', 'Cтрока ["apple","24","true"] выведена в консоль' + '<br>' + 'Cтрока {"name": "John", "age": "30", "isStudent": "false"} выведена в консоль')
console.log(stringToJSON('["apple","24","true"]'));
console.log(stringToJSON('{"name": "John", "age": "30", "isStudent": "false"}'));

