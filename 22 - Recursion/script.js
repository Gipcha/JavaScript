//1. Напиши рекурсивную функцию для вычисления суммы всех элементов в массиве;

const arr = [12, 23, 48, 59];
function calcSum(arr, index){
    if (index >= arr.length) {
        return 0;
    }else{
        return arr[index] + calcSum(arr, index + 1);
    }
}
console.log(calcSum(arr, 0));

//2. Реализуй функцию для нахождения максимального элемента в массиве с использованием рекурсии;

const array = [2, 5, 7, 15];
function maxValue(array, index){
    if (index === array.length - 1) {
        return array[index];
    }else{
        return Math.max(
            array[index],
            maxValue(array, index + 1))
    };
}

console.log(maxValue(array, 0));

//4. Нужно реализовать функцию для вычисления чисел Фибоначчи с кэшированием через рекурсию.

function fibonacci (n, cache = {0:0, 1:1}) {
    if (cache[n] !== undefined) {
        return cache [n];
    }else{
        cache[n] = fibonacci(n - 1, cache) + fibonacci(n - 2, cache);
        return cache[n];
    }
}
console.log(fibonacci(32));