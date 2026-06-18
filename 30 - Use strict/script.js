//1. Напиши функцию, которая добавляет два числа.
//   Включи строгий режим и попробуй создать переменную внутри функции без использования ключевого слова.
//   Исправь код, чтобы он работал в строгом режиме;

/*function sum(a, b) {
"use strict";
result = a + b;
return result;
}
sum(23, 24);*/

//Исправленный код:
function sum(a, b) {
  "use strict";
  let result = a + b;
  return result;
}
console.log(sum(23, 24));

//2. Создай функцию, которая принимает два параметра с одинаковыми именами.
//   Включи строгий режим и исправь ошибку, чтобы функция работала корректно;
/*"use strict";
function multiply(a, a) {
  return a * a;
}*/

//Исправленный код:
function multiply(a, b) {
  "use strict";
  return a * b;
}
console.log(multiply(10, 5));

//3. Напиши код, в котором функция выводит значение this в консоль.
//   Включи строгий режим и проанализируй, как изменилось значение this;

/*function showThis() {
  console.log(this);    
}
showThis();*/

//Код с "use strict":

function showThis() {
  "use strict";
  console.log(this);
}
showThis();

// В строгом режиме при обычном вызове функции значение this равно undefined.
//Без строгого режима this ссылается на глобальный объект (window в браузере).

//4. Попробуй удалить встроенное свойство объекта (например, метод toString у объекта) в строгом режиме.
//   Объясни, почему это не работает, и что нужно сделать, чтобы избежать подобных ошибок.
// prettier-ignore
"use strict";
const user = {
  name: "Anna",
  age: 26,
};
// удаляем своё свойство — можно
delete user.name;
console.log(user.name); //undefined

// встроенные методы принадлежат Object.prototype
// и имеют configurable: false,
// поэтому их нельзя удалить
delete Object.prototype.toString; // TypeError в strict mode
