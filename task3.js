const MathX = (function() {
    
    function isPrime(num) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    return {
        //вычисляем n-число фибоначи
        fibNumber: function(n) {
            if ( n <= 0){
                return 0
            }
            if (n === 1 || n === 2){
                return 1
            }
            let a = 1;
            let b = 1;
            for (let i = 3; i <= n; i++) {
                let c = a + b;
                a = b;
                b = c;
            }
            return b;
        },
        //вычисляем числа фибоначи до n-числа
        fibNumbers: function(n) {
            const fibNumbers = [1, 1]; 
            let a = 1;
            let b = 1;
            for (let i = 3; b <= n; i++) {
                let c = a + b;
                a = b;
                b = c;
                fibNumbers.push(b);
            }
            fibNumbers.pop()// удаляем результат последней проверки, так как при ней b ещё будет меньше n, а в массив вносится уже большее число
            return fibNumbers;
        },
        //вычисление n-го просто числа
        primeNumber: function(n) {
            //отсеиваем числа меньше 0
            if (n <= 0) return 0;
            //перебор будем начинать с 2, так как это первое простое число
            let count = 0;
            let num = 1;
            // перебираем простые числа
            for (let i = 2; count < n; i++){
                if (isPrime(i)) {
                    count++;
                }
                num++;
            }

            return num;
        },
        //вычисление простых чисел до n-числа
        primeNumbers: function (n){
            const primeNumbers = [];
            for (let i = 2; i <= n; i++) {
                if (isPrime(i)) {
                    primeNumbers.push(i);
                }
            }
            return primeNumbers;
        }
    };
})();

// console.log(MathX.fibNumber(10))
// console.log(MathX.fibNumbers(10))
// console.log(MathX.primeNumber(10))
// console.log(MathX.primeNumbers(10))
