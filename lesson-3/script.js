let price = 100; //объявили переменную price и присвоили ей значение 100
price = 150; //изменили значение price на 150
console.log(price);//вывели в консоль
/*let price = 200; Uncaught SyntaxError: Identifier 'price' has already been declared 
                    нельзя объявлять переменную повторно в одной области видимости*/
const user = {
    name:'Anna'
};
user.name = 'Kate';
console.log(user); //С const нельзя менять саму переменную, но можно менять свойства объектов
//const user = { name: 'John' }; //Error "Identifier 'user' has already been declared" - oшибка