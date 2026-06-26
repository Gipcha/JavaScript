//1. Создай класс Car с конструктором, который принимает марку и модель автомобиля.
//   Добавь метод для вывода информации об автомобиле.
//   Создай несколько экземпляров класса и выведи их информацию.

class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  showInfo() {
    console.log(`Car: ${this.brand} ${this.model}`);
  }
}

const car1 = new Car("Volkswagen", "Passat");
const car2 = new Car("Audi", "Q3");

car1.showInfo();
car2.showInfo();

//2. Создай класс ElectricCar, который наследует класс Car и добавь дополнительное свойство для емкости батареи.
//   Переопредели метод вывода информации, чтобы включить информацию о батарее.

class ElectricCar extends Car {
  constructor(brand, model, batteryCapacity) {
    super(brand, model);
    this.batteryCapacity = batteryCapacity;
  }

  showInfo() {
    console.log(
      `Car: ${this.brand} ${this.model}, battery capacity: ${this.batteryCapacity}`,
    );
  }
}

const electricCar = new ElectricCar("Tesla", "Model Y", "75 kWh");
electricCar.showInfo();

//3. Напиши пример использования полиморфизма, создав несколько классов, наследующих общий базовый класс, и вызывая общий метод для всех объектов.

class People {
  speak() {
    console.log("People speak.");
  }
}

class Chinese extends People {
  speak() {
    console.log("Chinese people speak Chinese language.");
  }
}

class French extends People {
  speak() {
    console.log("French people speak French language.");
  }
}

class Japanese extends People {
  speak() {
    console.log("Japanese people speak Japanese language.");
  }
}

const people = [new Chinese(), new French(), new Japanese()];
people.forEach((people) => {
  people.speak();
});
