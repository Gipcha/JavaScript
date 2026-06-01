//1. Напиши асинхронную функцию `delay`, которая принимает один аргумент - количество миллисекунд, и возвращает промис,
//   который разрешается (резолвится) через заданное количество времени.
//   Используй `async/await` для ожидания этого промиса и выведите сообщение "Задержка завершена" после завершения ожидания;

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

async function asyncDelay(ms) {
  await delay(ms);
  console.log("Задержка завершена");
}
asyncDelay(2000);

//2. Напиши асинхронную функцию `fetchUserData`, которая делает запрос к фейковому API (любому) и возвращает данные пользователя.
//   Используй функцию fetch().
async function fetchUserData() {
  const response = await fetch("https://dummyjson.com/users/1");
  const user = await response.json();
  return user;
}

async function main() {
  const user = await fetchUserData();

  if (!user) {
    console.log("Пользователь не найден");
    return;
  }

  console.log("Пользователь загружен:", user);
}
main();
