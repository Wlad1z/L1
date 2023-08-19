let stackSize1 = 0;
//вычислим количество вызовов в функции без объявления переменной
function recursiveFunction1() {
    stackSize1++;
    recursiveFunction1();
}

try {
    recursiveFunction1();
} catch (error) {
    // console.log(`Размер стека: ${stackSize1} вызовов`);
}
//вычислим количество вызовов в функции c объявлением переменной
let stackSize2 = 0;
function recursiveFunction2() {
    let x = stackSize2 + 1 ;
    let y = x + 1 ;
    stackSize2++;
    recursiveFunction2();
}

try {
    recursiveFunction2();
} catch (error) {
    // console.log(`Размер стека: ${stackSize2} вызовов`);
}

//примем что на объявление одной переменной необходимо 8 бит (из гугла)
//формула для получения количества байт, которое занимает функция (в упрощенном виде) будет: Sf = N + K*Sv, где N - вес вызова функции, K - количество переменных, Sv - вес переменной(8 бит)
//получаем для наших функций: 
//recursiveFunction1: Sf1 = N + 0*8
//размер колстека: X = stackSize1*Sf1 = stackSize1*N
//recursiveFunction1: Sf2 = N + 2*8
//размер колстека: X = stackSize1*Sf1= stackSize1*(N+2*8)
//приравниваем: stackSize1*N = stackSize2*N + stackSize2*16
//получаем N = stackSize2*16/(stackSize1 - stackSize2)


//считаем стекк по первой функции
// console.log("Размер стека браузера: " + Math .round(stackSize1*(stackSize2*16/(stackSize1 - stackSize2)+0*8)) + " байт")