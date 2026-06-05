//1. Создай форму для ввода контактной информации (имя, телефон, email). Сохрани данные в LocalStorage в виде объекта JSON.
//   Затем извлеки данные из LocalStorage, преобразуй их обратно в объект и отобрази контактную информацию на странице;
const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const phoneInput = document.getElementById("phone-input");

const form = document.getElementById("form-id");
const successMessage = document.getElementById("success-message");
const output = document.getElementById("output");

function renderUser(user) {
  output.innerHTML = `
    <h3>Contact info</h3>
    <p><b>Name:</b> ${user.name}</p>
    <p><b>Email:</b> ${user.email}</p>
    <p><b>Phone:</b> ${user.phone}</p>
  `;
}

const saved = localStorage.getItem("user");
if (saved) {
  const newUser = JSON.parse(saved);
  renderUser(newUser);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();

  if (!name || !email || !phone) {
    successMessage.textContent = "Please fill in all fields!";
    successMessage.style.color = "red";

    setTimeout(() => {
      successMessage.textContent = "";
    }, 3000);

    return;
  }

  const user = {
    name,
    email,
    phone,
  };

  localStorage.setItem("user", JSON.stringify(user));

  renderUser(user);

  successMessage.textContent = "Contact saved successfully!";
  successMessage.style.color = "green";

  setTimeout(() => {
    successMessage.textContent = "";
  }, 3000);

  form.reset();
});

//2. Создай приложение для учета расходов. Сохрани каждую запись расхода (описание, сумма, дата) в LocalStorage в виде массива объектов JSON.
//   Затем извлеки данные из LocalStorage и отобрази список расходов. Также реализуй функцию удаления записи из LocalStorage;
const descriptionInput = document.getElementById("description-input");
const amountInput = document.getElementById("total-input");
const dateInput = document.getElementById("date-input");

const expenseForm = document.getElementById("second-form-id");
const expenseOutput = document.getElementById("second-output");

let editingIndex = null;

let expenses = JSON.parse(localStorage.getItem("expenses") ?? "[]");

function renderExpenses(expenses) {
  expenseOutput.innerHTML = `
    <h3>Expenses</h3>

    <div class="expense-list">
      ${expenses
        .map(
          (expense, index) => `
            <div class="expense-card">
              <div>
                <p><b>${expense.description}</b></p>
                <p>${expense.amount} €</p>
                <p>${expense.date}</p>
              </div>

              <div class="buttons">
                <button class="delete-btn" data-index="${index}">
                  Delete
                </button>

                <button class="edit-btn" data-index="${index}">
                  Edit
                </button>
              </div>
            </div>
          `,
        )
        .join("")}
    </div>
  `;
}

function deleteExpense(index) {
  expenses.splice(index, 1);

  localStorage.setItem("expenses", JSON.stringify(expenses));

  renderExpenses(expenses);
}

function editExpense(index) {
  const expense = expenses[index];

  descriptionInput.value = expense.description;
  amountInput.value = expense.amount;
  dateInput.value = expense.date;

  editingIndex = index;
}

expenseOutput.addEventListener("click", (event) => {
  const index = Number(event.target.dataset.index);

  if (event.target.classList.contains("delete-btn")) {
    deleteExpense(index);
  }

  if (event.target.classList.contains("edit-btn")) {
    editExpense(index);
  }
});

renderExpenses(expenses);

expenseForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const description = descriptionInput.value.trim();
  const amount = amountInput.value.trim();
  const date = dateInput.value;

  if (!description || !amount || !date) {
    alert("Please fill in all fields");
    return;
  }

  const newExpense = {
    description,
    amount,
    date,
  };

  if (editingIndex !== null) {
    expenses[editingIndex] = newExpense;
    editingIndex = null;
  } else {
    expenses.push(newExpense);
  }

  localStorage.setItem("expenses", JSON.stringify(expenses));

  renderExpenses(expenses);

  expenseForm.reset();
});
//3. Создай счетчик, который отслеживает и отображает активное время пользователя на странице.
//   Время должно обновляться каждую секунду и сохраняться в SessionStorage.
const timerElement = document.getElementById("timer");

let time = sessionStorage.getItem("activeTime");

if (time === null) {
  time = 0;
} else {
  time = Number(time);
}

timerElement.textContent = time;

setInterval(() => {
  time++;

  timerElement.textContent = time;

  sessionStorage.setItem("activeTime", time);
}, 1000);
