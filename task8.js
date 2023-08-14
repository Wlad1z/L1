function functionsAndResults(functions) {
    return function() {
        const results = [];
        //записываем результаты функций в новый массив
        for (let i = 0; i < functions.length; i++) {
            results.push(functions[i]());
        }

        return results;
    };
}


const functions8 = [
    () => 1,
    () => 2,
    () => 3
];

//присваиваем имя новой функции
const results = functionsAndResults(functions8);

//вызываем её
// console.log(results()); 
