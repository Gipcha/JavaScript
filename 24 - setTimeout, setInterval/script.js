// 1. Напиши функцию, которая использует `setTimeout` для создания таймера обратного отсчета.
//    Таймер должен выводить оставшееся время каждую секунду и остановиться, когда время истечет;

function showNumber(num) {
  console.log(num);
  if (num !== 0) {
    setTimeout(showNumber, 1000, --num);
  }
}
setTimeout(showNumber, 1000, 10);

// 2. Напиши функцию, которая использует `setInterval` для вывода сообщения "Не забудь выпить воды!" каждые 30 минут;

const second = 1000;
const minute = 60 * second;

setInterval(function () {
  console.log("Не забудь выпить воды!");
}, 30 * minute);

/* 3. Создай HTML-форму, где есть три элемента:
      - поле "Задержка"

      - поле "Текст"

      - кнопка "Начать".
      При клике на кнопку текст выводится в консоль через указанную задержку до тех пор, пока пользователь снова не нажмет начать. 
      Если пользователь снова нажмет на кнопку - текст снова начнет выводится в консоль, нажмет еще раз - прекратит и т. д.*/

const delayField = document.getElementById("delay");
const textField = document.getElementById("text");
const startBtn = document.getElementById("start-btn");

let timerId = null;

startBtn.addEventListener("click", () => {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
    startBtn.textContent = "Start";
  } else {
    timerId = setInterval(() => {
      console.log(textField.value);
    }, Number(delayField.value));

    startBtn.textContent = "Stop";
  }
});
