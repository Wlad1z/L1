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
    console.log(num == sumDivisors ? true : false);
}