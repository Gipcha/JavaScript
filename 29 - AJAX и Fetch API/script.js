//1. Сделай HTML-форму для создания нового поста с полями id пользователя, заголовок, текст.
//   При отправке формы выполни POST запрос и отобрази ответ сервера на странице;

const userData = document.getElementById("userData");
const userId = document.getElementById("userId");
const title = document.getElementById("title");
const body = document.getElementById("body");
const serverResponse = document.getElementById("server-response");

userData.addEventListener("submit", (event) => {
  event.preventDefault();

  const userInfo = {
    userId: userId.value,
    title: title.value,
    body: body.value,
  };
  if (!userId.value || !title.value || !body.value) {
    serverResponse.style.display = "block";
    serverResponse.innerHTML = `
      <div class="error">Please fill in all fields</div>
    `;
    return;
  }

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(userInfo),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      serverResponse.style.display = "block";
      serverResponse.innerHTML = `
        <div class="success">POST CREATED SUCCESSFULLY</div>

        <div class="post-card">
          <p><b>ID:</b> ${data.id}</p>
          <p><b>User ID:</b> ${data.userId}</p>
          <p><b>Title:</b> ${data.title}</p>
          <p><b>Body:</b> ${data.body}</p>
        </div>
      `;

      userId.value = "";
      title.value = "";
      body.value = "";
    });
});

//2. Реализуй кнопку для загрузки списка постов.
//   При нажатии на кнопку выполни GET запрос к API и отобрази список постов на странице;

//3. Создай функцию для удаления поста по id. Выполни DELETE запрос к API и обнови DOM, удалив соответствующий пост;

//4. Реализуй функциональность для обновления данных пользователя.
//   Используй PUT запрос для отправки обновленных данных на сервер и отобрази обновленный профиль на странице.
//   Объясни, в чём разница между PUT и PATCH запросами.
