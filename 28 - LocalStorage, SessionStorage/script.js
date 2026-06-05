//1. Создай форму для ввода контактной информации (имя, телефон, email). Сохрани данные в LocalStorage в виде объекта JSON.
//   Затем извлеки данные из LocalStorage, преобразуй их обратно в объект и отобрази контактную информацию на странице;
const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const phoneInput = document.getElementById("phone-input");

const form = document.getElementById("form-id");
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

  const user = {
    name: nameInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
  };

  localStorage.setItem("user", JSON.stringify(user));

  renderUser(user);
});

//2. Создай приложение для учета расходов. Сохрани каждую запись расхода (описание, сумма, дата) в LocalStorage в виде массива объектов JSON.
//   Затем извлеки данные из LocalStorage и отобрази список расходов. Также реализуй функцию удаления записи из LocalStorage;
const descriptionInput = document.getElementById("description-input");
const amountInput = document.getElementById("total-input");
const dateInput = document.getElementById("date-input");

const expenseForm = document.getElementById("second-form-id");
const expenseOutput = document.getElementById("second-output");
let editingIndex = null;

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
                <button onclick="deleteExpense(${index})">Delete</button>
                <button onclick="editExpense(${index})">Edit</button>
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

let expenses = localStorage.getItem("expenses");

if (expenses) {
  expenses = JSON.parse(expenses);
} else {
  expenses = [];
}

renderExpenses(expenses);

expenseForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const newExpense = {
    description: descriptionInput.value,
    amount: amountInput.value,
    date: dateInput.value,
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
