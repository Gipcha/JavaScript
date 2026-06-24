//1. Создай класс Counter, который будет иметь приватное свойство count.
//   Напиши публичные методы для увеличения, уменьшения и отображения значения счетчика;

class Counter {
  #count = 0;

  increment() {
    this.#count++;
  }

  decrement() {
    this.#count--;
  }

  showCount() {
    console.log(this.#count);
  }
}
const counter = new Counter();

counter.increment();
counter.increment();

counter.showCount(); // 2

counter.decrement();

counter.showCount(); // 1

//2. Создай класс EmailValidator со статическим методом isValid(email),
//   который будет проверять, является ли строка корректным email (достаточно простой проверки на наличие символа @);

class EmailValidator {
  static isValid(email) {
    return email.includes("@");
  }
}
console.log(EmailValidator.isValid("test@gmail.com"));

//3. Создай класс Order с приватным методом #calculateTotal(), который будет рассчитывать общую стоимость заказа.
//   Сделай публичный метод, который возвращает результат этого расчета, и вызывай его через созданный экземпляр класса.
class Order {
  constructor(prices) {
    this.prices = prices;
  }
  #calculateTotal() {
    return this.prices.reduce((acc, item) => acc + item, 0);
  }

  getTotal() {
    return this.#calculateTotal();
  }
}

const order = new Order([100, 200, 300]);

console.log(`Total price is ${order.getTotal()}$.`);
