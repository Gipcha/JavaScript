//1. Назначь для кнопки обработчик события click, который будет изменять текст этой кнопки при нажатии;

const firstButton = document.getElementById('changeTextBtn');
firstButton.addEventListener ('click', function(event) {
    event.target.textContent = 'CLICKED!';
    event.target.style.background = 'pink';
});

//2. Назначь для любого элемента обработчик события mouseover, который будет изменять размер элемента при наведении;

const hoverEvent = document.querySelector('.box');
hoverEvent.addEventListener('mouseover', function (event){
    event.target.style.width = '400px';
    event.target.style.height = '300px';
});
hoverEvent.addEventListener('mouseout',function(event){
    event.target.style.width = '200px';
    event.target.style.height = '100px';
});

//3. Назначь для инпута обработчик события keyup, который будет выводить отпущенную клавишу в консоль;

const inputEvent = document.getElementById('keyboardInput');
inputEvent.addEventListener('keyup', function(event){
    console.log(event.key)
})

//4. Создай форму и добавь обработчик события submit, который будет показывать сообщение об успешной отправке;

const submitEvent = document.getElementById('myForm');
submitEvent.addEventListener('submit', function(event){
    event.preventDefault();
    alert('Sent');
})

/*5. Пусть на странице есть кнопка с надписью 'Изменить тему', которая позволяет переключать тему страницы.
     Например, по умолчанию тема светлая: задний фон - белый, текст - черный. Нажимаем на кнопку -> тема меняется на темную: цвет фона - черный, текст - белый.
     Еще раз нажимаем на кнопку -> тема снова светлая и т. д.*/

const themeButton = document.getElementById('theme-button');
themeButton.addEventListener('click', function(){
    document.body.classList.toggle ('dark-theme');
});


