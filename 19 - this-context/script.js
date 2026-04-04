/*1. Создай объект со свойствами и методом, который использует `this` для доступа к этим свойствам.
     Затем присвой этот метод другой переменной и вызовите её. Объясни своими словами, что произошло; */

     const worker = {
        name:'Anna',
        age:26,
        greet: function(){
            console.log(`My name is ${this.name}`);
            console.log(`I am ${this.age} years old`);
        }
     };
     worker.greet();//Все работает корректно, this указывает на объект worker
                    // My name is Anna
                    // I am 26 years old

     const workerCopy = worker.greet;

     workerCopy(); //this теряется, функция вызывается без объекта слева, поэтому this = undefined (в strict mode) или window (в браузере)
                   //My name is undefined
                   //I am undefined years old

/*2. Объясни, почему в примере ниже в первом случае выводится имя, а во втором - undefined.
     Как сделать так, чтобы в методе delayedGreet тоже выводилось имя (без использования call, apply или bind)?*/

const student = {
  name: 'Alice',
  greet: function() {

    console.log(`Hello, ${this.name}!`);
  },

  delayedGreet: function() {
    setTimeout(this.greet, 1000);
  }
};

student.greet() // Hello, Alice
student.delayedGreet() // Hello, undefined  

/*В первом случае метод greet вызывается через объект student, поэтому this указывает на student, и имя выводится корректно.
  Во втором случае метод greet передаётся в setTimeout как callback-функция. 
  При таком вызове функция выполняется без привязки к объекту student, поэтому this теряется и становится undefined.
  Из-за этого this.name не находит значение и выводится undefined. */

/*3. Напиши функцию и вызови её с разными контекстами, используя `call`, `apply` и `bind`; */
    function regist (seat){
        console.log(`Welcome, ${this.name}. Your seat is number ${seat}`);
    }
    const visitor = {
        name:'Kate',
    };
regist.call(visitor,'7');

regist.apply(visitor,['7']);

const boundRegist = regist.bind(visitor);
boundRegist(7);

/*4. Что будет в консоли в результате выполнения функций sayHelloToAdmin() и sayHelloToUser()?
     Объясни, почему так произошло. Как это можно изменить?*/

function sayHello() {
    console.log('Hello, ' + this.name)
}
const admin = {
    name: 'Bob'
};

const user = {
    name: 'John'
};

const sayHelloToAdmin = sayHello.bind(admin)
sayHelloToAdmin()

const sayHelloToUser = sayHelloToAdmin.bind(user)
sayHelloToUser() 

/*В первом случае функция sayHello привязывается к объекту admin с помощью bind, поэтому this указывает на admin,
  и выводится "Hello, Bob". Во втором случае вызывается bind на уже привязанной функции.
  Однако bind фиксирует значение this один раз и не может быть переопределён. Поэтому даже при попытке привязать
  функцию к объекту user, this остаётся равным admin, и снова выводится "Hello, Bob". */

