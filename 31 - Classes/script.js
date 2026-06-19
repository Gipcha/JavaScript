//1. Напиши класс Book, который имеет поля title, author и pages. Добавь метод для вывода краткой информации о книге;

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  getInfo() {
    console.log(`'${this.title}' by ${this.author} (${this.pages} pages).`);
  }
}

const book1 = new Book("Dune", "Frank Herbert", 946);
const book2 = new Book("Under The Dome", "Stephen King", 654);
const book3 = new Book("Flowers for Algernon", "Daniel Keyes", 267);

book3.getInfo();

//2. Создай класс User с полями name и email, методом displayInfo, который выводит информацию о пользователе.
//   Создай несколько экземпляров и вызови метод displayInfo;

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  displayInfo() {
    console.log(`User:${this.name} | Email:${this.email}`);
  }
}

const user1 = new User("Alex", "Alex1985@gmail.com");
const user2 = new User("Anna", "Anna2000@gmail.com");
const user3 = new User("Kostya", "Kstslhv16.09@gmail.com");

user1.displayInfo();
user2.displayInfo();
user3.displayInfo();

//3. В классе Rectangle из примера добавь геттер perimeter, который вычисляет и возвращает периметр прямоугольника.
//   Добавь сеттер height. Он должен проверять, что устанавливаемое значение высоты height больше 0.
//   Если значение не положительное, то выводится сообщение об ошибке в консоль, а высота остается неизменной.
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get width() {
    return this._width;
  }

  set width(value) {
    this._width = value;
  }

  get height() {
    return this._height;
  }

  set height(value) {
    if (value <= 0) {
      console.error("Высота должна быть положительным числом.");
    } else {
      this._height = value;
    }
  }

  get perimeter() {
    return 2 * (this._width + this._height);
  }
}

const myRect = new Rectangle(5, 10);
console.log(myRect.perimeter); // 30
myRect.height = -3; // Высота должна быть положительным числом.
console.log(myRect.height); // 10
