/* 1 задание
В следующем коде несколько раз повторяются похожие операции. Проведите рефакторинг, чтобы избежать дублирования,
используя функции или другие средства:
const product1 = { name: 'Product 1', price: 10 };
const product2 = { name: 'Product 2', price: 20 };
const total1 = product1.price * 1.2;
const total2 = product2.price * 1.2;
console.log('Total for Product 1:', total1);
console.log('Total for Product 2:', total2);*/

const product1 = { name: 'Product 1', price: 10 };
const product2 = { name: 'Product 2', price: 20 };

function getTotalPrice(price) {
    return price * 1.2;
}

const total1 = getTotalPrice(product1.price);
const total2 = getTotalPrice(product2.price);

console.log('Total for Product 1:', total1);
console.log('Total for Product 2:', total2);

/*2 задание
// Код ниже содержит сложные вложенные условия. Упростите его, чтобы улучшить читаемость и уменьшить вероятность ошибок:
if (user.isAdmin) {
  if (user.isActive) {
    if (user.age > 18) {
      console.log('Access granted');
    }
  }
}*/

const isAdult = user.age >= 18;
const isAdmin = user.isAdmin;
const isActive = user.isActive;

if (isAdult && isActive && isAdmin) {
    console.log('Access granted');
} else {
    console.log('Access denied')
};



/* 3 задание
В следующей функции выполняется слишком много операций. Разделите её на несколько более коротких функций,
 чтобы улучшить читаемость и повторное использование кода:

function checkStock(item) {
  return Math.random() < 0.5; // Возвращает рандомно true или false, это просто иммитация функции!
}
function processOrder(order) {
  // Валидация данных заказа
  if (!order.id || !order.items || order.items.length === 0) {
    console.log('Invalid order');
    return;
  }
  // Рассчет суммы
  let total = 0;
  for (let item of order.items) {
    total += item.price * item.quantity;
  }
  // Проверка наличия на складе
  for (let item of order.items) {
    if (!checkStock(item)) {
      console.log('Item out of stock:', item.name);
      return;
    }
  }
  // Выполнение заказа
  console.log('Order processed with total:', total);
}
*/




 // Валидация данных заказа
function validateOrder(order) {
  // Проверяем: есть ли id, есть ли товары и не пустой ли список
  return order.id && order.items && order.items.length > 0;
}

// Проверка наличия товара на складе
function checkStock(item) {
  // имитация: случайно "есть/нет на складе"
  return Math.random() < 0.5;
}

// Расчет общей суммы заказа
function calculateTotal(order) {
  let total = 0;

  // проходим по каждому товару в заказе
  for (let item of order.items) {
    total += item.price * item.quantity;
  }

  return total;
}

// Главная функция, которая управляет процессом заказа
function processOrder(order) {

// 1. проверяем корректность заказа
  if (!validateOrder(order)) {
    console.log('Invalid order');
    return; // останавливаем выполнение функции
  }

// 2. проверяем наличие каждого товара на складе
  for (let item of order.items) {
    if (!checkStock(item)) {
      console.log('Item out of stock:', item.name);
      return; // если товара нет — прекращаем заказ
    }
  }

// 3. если всё ок — считаем сумму
  const total = calculateTotal(order);

// 4. выводим результат
  console.log('Order processed with total:', total);
}