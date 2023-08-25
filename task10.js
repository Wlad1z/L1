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


// "склеиваем" вложенный массив
function putArr (keyValues){
    let putArr = keyValues.slice();
    let startArr = 0;
    let endArr = 0;
    for (let i = 0; i < keyValues.length; i++){
        if (keyValues[i].includes("[")){
            startArr = i;
            for (let x = keyValues.length-1; x > i; x--){
                if (keyValues[x].includes("]")){
                    endArr = x;
                    break;
                }
            }
            for (let j = i+1; j <= endArr; j++){
                putArr[i] +=(",") + keyValues[j];
                
            }

            keyValues.splice(startArr+1, (endArr-startArr));
            keyValues[startArr] = putArr[startArr];
        }
        
    }
}
// "склеиваем" вложенный объект
function putObj (keyValues){
    let putObj = keyValues.slice();
    let startObj = 0;
    let endObj = 0;
    for (let i = 0; i < keyValues.length; i++){
        if (keyValues[i].includes("{")){
            startObj = i;
            for (let x = keyValues.length-1; x > i; x--){
                if (keyValues[x].includes("}")){
                    endObj = x;
                    break;
                }
            }
            for (let j = i+1; j <= endObj; j++){
                putObj[i] +=(",") + keyValues[j];
            }

            keyValues.splice(startObj+1, (endObj-startObj));
            keyValues[startObj] = putObj[startObj];
        }
        
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
    putArr (keyValues);
    putObj (keyValues);


    for (let keyValue of keyValues) {
        const parts = keyValue.split(':');
        let partsClone = parts.slice();
        for (let i = 0; i < parts.length; i++){
            if (parts[i].includes("{")){
                startObj = i;
                for (let x =parts.length-1; x > i; x--){
                    if (parts[x].includes("}")){
                        endObj = x;
                        break;
                    }
                }
                for (let j = i+1; j <=endObj; j++){
                    partsClone[i] +=(":") + parts[j];
                }
                parts.splice(startObj+1, (endObj-startObj));
                parts[startObj] = partsClone[startObj];
            }
        }

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
   

    let arr = str.substring(1, str.length - 1).split(',');
    putArr (arr);
    putObj (arr);

    arr = arr.map(item => stringToJSON(item.trim()));
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

// решение приведенное в этой задачи работает только для примеров с "колодцем" вложенности одного типа
 
console.log(stringToJSON('["apple", 24, true, ["str", 4, {"name": "John", "age": 30}, true]]'));
console.log(stringToJSON('["apple", 24, ["str", 4, true,["next", 2, true,[["ring", 3, true], "waffle", 22, true,]]], true]'));
console.log(stringToJSON('{"name": "John", "age": 30, "isStudent": false, "items": {"pen": "parker", "cash": 30}, "end1": "end1", "items2": ["apple", 24, true]}'));
console.log(stringToJSON('{"name": "John", "age": 30,"items1": {"pen": "parker", "items2": {"items3": {"pen": "parker", "cash": 30}, "city": "Boston", "age1": 31}, "age2": 32}, "isStudent": false}'));
console.log(stringToJSON('{"name": "John", "age": 30, "items1": {"pen": "parker", "age": 30, "items2": ["apple", 24, true, {"pen": "parker", "cash": 30, "items2": ["apple", 24, true, ]}]}}'));



const text10 = 'Строки: <br>["apple", 24, true, ["str", 4, {"name": "John", "age": 30}, true]] <br> ["apple", 24, ["str", 4, true,["next", 2, true,[["ring", 3, true], "waffle", 22, true,]]], true] <br>{"name": "John", "age": 30, "isStudent": false, "items": {"pen": "parker", "cash": 30}, "end1": "end1", "items2": ["apple", 24, true]} <br> {"name": "John", "age": 30,"items1": {"pen": "parker", "items2": {"items3": {"pen": "parker", "cash": 30}, "city": "Boston", "age1": 31}, "age2": 32}, "isStudent": false} <br> {"name": "John", "age": 30, "items1": {"pen": "parker", "age": 30, "items2": ["apple", 24, true, {"pen": "parker", "cash": 30, "items2": ["apple", 24, true, ]}]}} <br> Выведены в консоль'

createSimpleElement('Задание 10', text10)
