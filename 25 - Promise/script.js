// 1. Напиши функцию `getUserData`, которая возвращает промис с данными пользователя через 2 секунды.
//    Затем создай цепочку промисов, которая обрабатывает эти данные и выводит результат в консоль;

function getUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("User data");
    }, 2000);
  });
}

getUserData()
  .then((data) => {
    console.log(data); // 'User data'
    return "Data processing";
  })
  .then((processedData) => {
    console.log(processedData); // 'Обработка данных'
  })
  .catch((error) => {
    console.log("Error:", error);
  });

//2. Напиши две функции, каждая из которых возвращает промис с данными через 3 и 5 секунд соответственно.
//   Используй такой метод промисов, чтобы дождаться выполнения обоих промисов и вывести результаты в консоль;

function firstUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("User 1 data");
    }, 3000);
  });
}

function secondUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Failed to load User 2 data");
    }, 5000);
  });
}

Promise.allSettled([firstUser(), secondUser()]).then((results) => {
  results.forEach((result) => {
    if (result.status === "fulfilled") {
      console.log("Done:", result.value);
    } else {
      console.log("Declined:", result.reason);
    }
  });
});

//3. Напиши две функции, каждая из которых возвращает промис через случайное время (от 1 до 5 секунд).
//   Используй такой метод промисов, чтобы вывести результат первого выполненного промиса в консоль.

function firstRacer() {
  return new Promise((resolve) => {
    const time = Math.floor(Math.random() * 5000) + 1000;
    setTimeout(() => {
      resolve("First racer finished");
    }, time);
  });
}

function secondRacer() {
  return new Promise((resolve) => {
    const time = Math.floor(Math.random() * 5000) + 1000;
    setTimeout(() => {
      resolve("Second racer finished");
    }, time);
  });
}

Promise.race([firstRacer(), secondRacer()])
  .then((result) => {
    console.log("Winner:", result);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
