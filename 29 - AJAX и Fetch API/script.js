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
    .then((response) => {
      if (!response.ok) {
        throw new Error("Request failed");
      }
      return response.json();
    })
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
    })
    .catch(() => {
      alert("Error");
    });
});

//2. Реализуй кнопку для загрузки списка постов.
//   При нажатии на кнопку выполни GET запрос к API и отобрази список постов на странице;
const showListBtn = document.getElementById("show-list-btn");
const postsList = document.getElementById("posts-list");

function getPosts() {
  postsList.classList.add("active");
  postsList.innerHTML = "<p>Loading...</p>";
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((posts) => {
      let html = "";

      posts.forEach((post) => {
        html += `
          <div class="post">
            <p><b>ID:</b> ${post.id}</p>
            <p><b>Title:</b> ${post.title}</p>
            <p><b>Body:</b> ${post.body}</p>
            <button data-id="${post.id}">Delete</button>
          </div>
        `;
      });
      postsList.innerHTML = html;
      const buttons = postsList.querySelectorAll("button");
      buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
          const id = btn.dataset.id;

          deleteIdPost(id, btn);
        });
      });
    })

    .catch(() => {
      postsList.innerHTML = "<p>Error loading posts</p>";
    });
}

showListBtn.addEventListener("click", () => {
  getPosts();
});

//3. Создай функцию для удаления поста по id. Выполни DELETE запрос к API и обнови DOM, удалив соответствующий пост;

function deleteIdPost(id, btn) {
  btn.disabled = true;
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Delete failed");
      }
      getPosts();
    })
    .catch(() => {
      alert("Error");
    })
    .finally(() => {
      btn.disabled = false;
    });
}

//4. Реализуй функциональность для обновления данных пользователя.
//   Используй PUT запрос для отправки обновленных данных на сервер и отобрази обновленный профиль на странице.
//   Объясни, в чём разница между PUT и PATCH запросами.

const updateBtn = document.getElementById("update-btn");

updateBtn.addEventListener("click", () => {
  const id = userId.value;
  if (!userId.value || !title.value || !body.value) {
    serverResponse.style.display = "block";
    serverResponse.innerHTML = `
      <div class="error">Please fill in all fields</div>
    `;
    return;
  }
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      userId: userId.value,
      title: title.value,
      body: body.value,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Request failed");
      }
      return response.json();
    })

    .then((data) => {
      serverResponse.style.display = "block";

      serverResponse.innerHTML = `
        <div class="success">POST UPDATED SUCCESSFULLY</div>

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
    })
    .catch(() => {
      alert("Error");
    });
});

//PUT и PATCH отличаются тем, как они обновляют данные на сервере.
//PUT — полностью заменяет ресурс.
//Мы отправляем объект целиком и старые данные переписываются новыми.
//PATCH — обновляет только часть ресурса.
//Мы отправляем только те поля, которые нужно изменить, остальные остаются без изменений.
