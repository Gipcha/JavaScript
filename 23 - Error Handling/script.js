/*1. Напиши функцию `safeDivide`, которая принимает два числа и возвращает результат их деления.
     Если второй аргумент равен нулю, функция должна бросать ошибку с сообщением "Деление на ноль невозможно".
     Используй `try...catch` для обработки ошибок и выведи сообщение об ошибке в консоль;*/

     function safeDivide (a, b){
        if (b === 0) {
            throw new Error('Деление на ноль невозможно!');
        }
        return a / b;
     }
     try {
        console.log(safeDivide(10, 0));
     } catch (error) {
        console.log('Ошибка:', error.message);
     }
    
/*2. Напиши функцию `transfromJSON`, которая принимает строку в формате JSON и возвращает объект.
     Используй `try...catch` для обработки возможных ошибок при парсинге JSON и выведи сообщение об ошибке в консоль;*/

     function transfromJSON (str){
       try { 
        return JSON.parse(str);
       } catch (error){
        console.log('Ошибка парсинга JSON:', error.message);
        return null;
       }
     }
     console.log(transfromJSON('{"name":"Anna","age":25}'));


/*3. Напиши функцию `checkAccess`, которая принимает возраст пользователя. Если возраст меньше 18,
     функция должна бросать ошибку с сообщением "Доступ запрещен".
     Используйте `try...catch` для обработки ошибок и выведи сообщение об ошибке в консоль.*/

      function checkAccess (age){ 
         if(age < 18) {
         throw new Error('возраст меньше 18');
      }
      return age
   }
     try {
    console.log(checkAccess(10));
} catch (error) {
    console.log('Доступ запрещен:', error.message); 
}