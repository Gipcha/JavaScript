//1. Создай класс Person и класс-наследник Student.
//   Класс Person должен иметь свойства name и метод introduce, который выводит строку вида "Привет, меня зовут (имя)".
//   Класс Student должен наследовать Person и добавлять свойство course и переопределенный метод introduce, который выводит строку вида "Привет, меня зовут (имя), и я учусь на (курсе) курсе".
//   Используй console.log(Student.prototype) и исследуй, как JavaScript создает цепочку прототипов;

class Person {
  constructor(name) {
    this.name = name;
  }
  introduce() {
    console.log(`Hello! My name is ${this.name}.`);
  }
}

const person = new Person("John");
person.introduce();

class Student extends Person {
  constructor(name, course) {
    super(name);
    this.course = course;
  }

  introduce() {
    console.log(
      `Hello, my name is ${this.name} and I'm on ${this.course} course.`,
    );
  }
}
const student = new Student("Anna", 3);
student.introduce();

console.log(Student.prototype);
console.log(Person.prototype);

//2. Создай класс Employee, наследующий Person.
//   Класс должен добавлять свойство position и метод work, который выводит строку "Я работаю на позиции (должность)".
//   Переопредели метод introduce так, чтобы он также включал информацию о должности;
class Employee extends Person {
  constructor(name, position) {
    super(name);
    this.position = position;
  }
  work() {
    console.log(`I work as ${this.position}`);
  }
  introduce() {
    console.log(
      `Hello, my name is ${this.name} and I work as ${this.position}`,
    );
  }
}
const employee = new Employee("Michael", "backend developer");
employee.introduce();
//3. Создай объектное наследование без использования классов.
//   Создай объект Vehicle с методом move. Создай объект Car, который наследует от Vehicle, добавив свой метод drive.
//   Используй Object.create для наследования.

const Vehicle = {
  move() {
    console.log("The vehicle moves.");
  },
};

const car = Object.create(Vehicle);

car.drive = function () {
  console.log("The car drives.");
};

car.drive();
car.move();
