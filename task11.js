function createCounter() {
    let count = 0; // переменная, которая будет доступна в замыкании
    
    function increment() {
        count++;
        console.log(count);
    }
    
    return increment;
}

const counter = createCounter(); // объявляем внутреннюю функцию

// counter(); 
// counter();
// counter(); 