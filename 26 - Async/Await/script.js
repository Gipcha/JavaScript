//1. Напиши асинхронную функцию `delay`, которая принимает один аргумент - количество миллисекунд, и возвращает промис,
//   который разрешается (резолвится) через заданное количество времени.
//   Используй `async/await` для ожидания этого промиса и выведите сообщение "Задержка завершена" после завершения ожидания;

async function delay(ms) {
  await new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

  console.log("Задержка завершена");
}

//2. Напиши асинхронную функцию `fetchUserData`, которая делает запрос к фейковому API (любому) и возвращает данные пользователя.
//   Используй функцию fetch().
async function fetchUserData() {
  try {
    const response = await fetch("https://dummyjson.com/users/1");

    if (!response.ok) {
      throw new Error("Ошибка загрузки данных");
    }

    const user = await response.json();
    return user;
  } catch (error) {
    console.log("Ошибка:", error.message);
    return null;
  }
}
