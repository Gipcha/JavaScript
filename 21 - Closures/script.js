/*1. Напиши функцию, которая создает и возвращает другую функцию.
     Внутренняя функция должна иметь доступ к переменной, объявленной во внешней функции, даже после завершения внешней функции;*/


function score () {  
    let a = 0; 
    let b = 2;
    return function increment(){ 
        a++
        return a * b
    }
}
const result = score();
console.log(result());
console.log(result());

/*2. Реализуй пример с несколькими вложенными функциями, где каждая функция использует переменные из своего
     собственного и внешних лексических окружений; */

function calc () {  
    let a = 0;
    let b = 1;
    return function (){ 
        let c = 2
        let d = 3
        let e = 0
        return function (){
            let f = 4
            let g = 5
            e++
            return a + b + c + d + e + f + g
        }
    }
}
const level1 = calc();
const level2 = level1();

console.log(level2());
console.log(level2());
console.log(level2());

/*3*. Тебе нужно написать функцию для вычисления чисел Фибоначчи с использованием цикла и кэширования. */

function createFibonacciCalculator(){
    const cache = {0:0, 1:1};

    return function(n) {
    if (n <= 1) return cache[n];
        let prev = 0;
        let curr = 1;

           for (let i = 2;i <= n; i++) {
        let next = prev + curr;
        prev = curr;
        curr = next;
    }
    
    cache[n] = curr;
    return curr;
};
}


const fib = createFibonacciCalculator();

console.log(fib(6)); // 8
console.log(fib(6)); // 8 (из cache, быстро)
console.log(fib(7)); // 13