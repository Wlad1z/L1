function isStrangeNumber (num){
    //исключаем числа меньше 0
    if (num <= 0){
        return false;
    }
    let sumDivisors = 0;
    // складываем делители
    for (let i = 1; i < num; i++){
        if ( num % i == 0){
            sumDivisors += i;
        }
    }
    if(num == sumDivisors){
        return num + " - это странное число"
    } else{
        return num + " - это не странное число"
    }
}

createSimpleElement('Задание 2', (isStrangeNumber(6)+"<br>"+isStrangeNumber(8)));
