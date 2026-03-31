/*1. Создай объект student с вложенными объектами и массивами. Затем создай поверхностную копию этого объекта (разными способами!)
     и измени вложенные структуры (массивы, объекты) у копии, распечатай их. Затем распечатай те же свойства у оригинала, чтобы увидеть, как на нем отразились изменения.
     Объясни своими словами, что произошло;*/

const student = {
    name: 'Alice',
    age: 12,
    hobbies: ['music', 'sports'],
    school: {
        type:'Public school',
        city: 'Birmingham',
        number: 12
    },
}; //создаем объект 'student'

const studentCopy = Object.assign({}, student); //копируем его с помощью метода поверхностного копирования Object.assign()
console.log(studentCopy); //выводим в консоль

studentCopy.school.number = 13;
studentCopy.hobbies.push('art');//меняем св-ва в копии

console.log(studentCopy.school.number);//13
console.log(studentCopy.hobbies);//['music', 'sports', 'art']
console.log(student.school.number)//13
console.log(student.hobbies);//['music', 'sports', 'art']

//В оригинальном объектe 'student' также изменились св-ва 'number' и 'hobbies', изменение вложенности влияет на оригинал

const studentCopy2 = {...student};//копируем объект 'student' с помощью еще одного метода поверхностного копирования - spread{...}

console.log(studentCopy2); //видим, что свойство 'number' теперь и тут изначально имеет значение 13

studentCopy2.name = 'Anna';//меняем значение первого уровня в копии

console.log(studentCopy2.name);//'Anna'
console.log(studentCopy.name);//'Alice'
console.log(student.name);//'Alice'

/* При поверхностном копировании создаётся новый объект только на первом уровне.
   Вложенные объекты и массивы копируются по ссылке, поэтому они остаются общими для оригинала и копии.
   Из-за этого изменения во вложенных структурах копии приводят к изменениям в оригинальном объекте. */ 

/*2. Создать копию объекта, внутри которого есть методы (функции), с помощью использовать JSON методов.
     Затем попробуй вызывать метод у копии объекта. Объясни своими словами, что произошло;*/

const user = {
    name:'Kate',
    age:25,
    address:{
        city:'Berlin',
        zip:'12345'
    },
    sayHi () {
        console.log(`Hello, ${this.name}!`);
    }
};//Создали объект, внутри которого есть методы (функции).

const userCopy = JSON.parse(JSON.stringify(user));//Cоздали копию объекта с помощью JSON метода

userCopy.sayHi(); // TypeError
console.log(userCopy.sayHi); //undefined

/* При копировании объекта с помощью JSON методов функции не копируются, так как JSON поддерживает только данные (строки, числа, массивы, объекты).
   В результате в копии объекта метод отсутствует, и при попытке его вызвать возникает ошибка. */
