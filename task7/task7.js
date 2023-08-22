//создаём массив функций с колбеками для последовательной отработки функций
const functions = [
    (par, callback) => { setTimeout(() => {
        createSimpleElement(' ', ("Функция " + par + ` через ${3-par} сек.`));
        callback();//тут будет вызываться следующая функция
    }, ((functions.length - par) * 1000)); },//тайм аут имитирует время необходимое для выполнения функции
    (par, callback) => { setTimeout(() => {
        createSimpleElement(' ', ("Функция " + par + ` через ${3-par} сек.`));
        callback();
    }, ((functions.length - 1) * 1000)); },
    (par) => { setTimeout(() => {
        createSimpleElement(' ', ("Функция " + par + ` через ${3-par} сек.`));
        //тут нет колбека потому что функция последняя
    }, ((functions.length - 1) * 1000)); },
];


function callFunction(index) {
    if (index < functions.length) {
        functions[index](index, () => {
            callFunction(index + 1);
        });
    }
}

callFunction(0)



