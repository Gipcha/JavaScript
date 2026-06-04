// 1.Создай три вложенных элемента (например, `div` внутри `div` внутри `div`).
//   Назначь обработчики событий для каждого из них и проследи за последовательностью вызовов при клике на внутренний элемент с помощью console.log();

const firstDiv = document
  .getElementById("first-div")
  .addEventListener("click", () => {
    console.log("First div is clicked");
  });
const secondDiv = document
  .getElementById("second-div")
  .addEventListener("click", (event) => {
    console.log("Second div is clicked");
    event.stopPropagation(); // 2.Напиши код, который останавливает всплытие события на среднем элементе из предыдущего задания;
  });
const thirdDiv = document
  .getElementById("third-div")
  .addEventListener("click", () => {
    console.log("Third div is clicked");
  });

// 3.Создай форму с несколькими полями ввода и кнопкой отправки.
//   Реализуй делегирование события, например, валидации каждого поля ввода при его изменении.
//   Пусть это будет простое условие, например, длина строки не более 20 символов.

document.getElementById("form-id").addEventListener("input", (event) => {
  if (event.target.matches("input")) {
    if (event.target.value.length > 20) {
      console.log("Too long line");
    } else {
      console.log("It is ok");
    }
  }
});
