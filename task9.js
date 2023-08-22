function jsonToString(data) {
    //функция преобрразования значения
    function convertValue(value) {
        if (typeof value === 'object'){
            if (Array.isArray(value)) { //работа с масссивами
                return `[${value.map(convertValue).join(',')}]`;
            } else { //работа с объектами
                const properties = Object.keys(value).map(key => `"${key}":${convertValue(value[key])}`).join(',');//переписываем по ключам каждый элемент объекта
                return `{${properties}}`;
            }
        } else if (typeof value === 'string') {//работа со строками
            return `"${value}"`;
        } else { //работа с остальными типами данных
            return String(value);
        }
    }

    return convertValue(data);
}


const obj = { name: "John", age: 30, city: "New York" };
const jsonString = jsonToString(obj);


createSimpleElement('Задание 9', jsonString)

