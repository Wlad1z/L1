async function asyncFunction() {
    const result1 = await operation1();
    const result2 = await operation2();
    return result1 + result2;
}

async function operation1() {
    return new Promise(resolve => setTimeout(() =>{ 
        resolve(5);
        console.log("Function 1");
    }, 1000));
}

async function operation2() {
    return new Promise(resolve => setTimeout(() =>{                     
        resolve(5);
        console.log("Function 2");
    }, 1000));
}

// asyncFunction()
//     .then(result => {
//         console.log("Результат:", result);
//     })
//     .catch(error => {
//         console.error("Ошибка:", error);
//     });