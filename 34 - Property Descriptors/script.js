//1. Напиши объект с несколькими свойствами и сделай все свойства неизменяемыми (с помощью Object.defineProperty).
//   Проверь можно ли изменить их значения после этого.

const user = {};

Object.defineProperties(user, {
  name: {
    value: "Anna",
    writable: false,
    enumerable: true,
    configurable: false,
  },
  age: {
    value: 26,
    writable: false,
    enumerable: true,
    configurable: false,
  },
});

console.log(user.name); //Anna

user.name = "Kate";
console.log(user.name); //Anna

for (const key in user) {
  console.log(key); //name age
}

delete user.name;
console.log(user.name); //Anna

console.log(user.age); //26

user.age = 25;
console.log(user.age); //26

for (const key in user) {
  console.log(key); //name age
}

delete user.age;
console.log(user.age); //26

//2. Создай объект с несколькими свойствами, где одно из них будет неперечисляемым (не должно выводиться в циклах).
//.  Убедись, что свойство не отображается при выводе ключей объекта через цикл for...in.
const shelf = {};

Object.defineProperties(shelf, {
  book1: {
    value: "Dune",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  book2: {
    value: "Under The Dome",
    writable: true,
    enumerable: false,
    configurable: true,
  },
});

for (const key in shelf) {
  console.log(key); //book1
}

console.log(shelf.book2); //Under the Dome

console.log(Object.keys(shelf)); //['book1']
