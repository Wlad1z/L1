async function asyncFunction() {
    const result1 = await operation1();
    const result2 = await operation2();
    return result1 + result2;
}

function operation1() {
    return new Promise(resolve => setTimeout(() =>{ 
        resolve(5);
        createSimpleElement('', "Функция 1" );
    }, 1000));
}

function operation2() {
    return new Promise(resolve => setTimeout(() =>{                     
        resolve(5);
        createSimpleElement('', "Функция 2" );
    }, 1000));
}

asyncFunction()
    .then(result => {
        createSimpleElement('', "Результаты функций -" + result);
    })
    .catch(error => {
        console.error("Ошибка:", error);
    });