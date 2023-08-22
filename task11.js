function createCounter() {
    let count = 0; // переменная, которая будет доступна в замыкании
    
    function increment() {
        count++;
        return count;
    }
    
    return increment;
}

const counter = createCounter(); // объявляем внутреннюю функцию

createSimpleElement('Задание 11', (counter() + '<br>' + counter() + '<br>'+ counter() + '<br>'))
