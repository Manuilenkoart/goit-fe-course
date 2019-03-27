"use strict";

//======1
// Напиши скрипт имитирующий авторизацию администратора в панели управления.

// Есть переменная message в которую будет записано сообщение о результате. При загрузке страницы у посетителя запрашивается пароль через prompt:

// Если нажали Cancel, записать в message строку 'Отменено пользователем!'
// В протовном случае, если введен пароль который не совпадает со значением константы ADMIN_PASSWORD, записать в message строку 'Доступ запрещен, неверный пароль!'
// В противном случае, то есть если ни одно из предыдущих условий не выполнилось, записать в message строку 'Добро пожаловать!'
// После всех проверок вывести в alert значение переменной message.

const ADMIN_PASSWORD = 'm4ng0h4ckz';
let message;
let inputPassword = prompt('Введите пароль');
if(inputPassword === null) {
  message = 'Отменено пользователем!';
} else if(inputPassword !== ADMIN_PASSWORD) {
  message = 'Доступ запрещен, неверный пароль!';
} else {
  message = 'Добро пожаловать!';
}
alert(message);

//=======2
// На счету пользователя есть 23580 кредитов, хранится в переменной credits (создай и присвой).

// Пользователь решает купить ремонтных дроидов, которые стоят по 3000 кредитов за штуку.

// переменная pricePerDroid (создай и присвой) хранит цену одного дроида
// переменная quantity (создай и присвой) хранит количество дроидов которые пользователь хочет купить, пусть будет 3.
// Напиши скрипт который:

// Рассчитывает общую цену заказа и сохраняет в переменной totalPrice.
// Проверяет сможет ли пользователь оплатить заказ:
// если сумма к оплате превышает количество кредитов на счету, выводи в консоль сообщение 'Недостаточно средств на счету!'.
// в противном случае необходимо посчитать остаток кредитов на счету и вывести сообщение 'Вы купили [число] дроидов, на счету осталось [число] кредитов.'
// Проверь работоспособность скрипта со значениями переменной quantity: 3, 5, 8 и 12.

let credits = 23580;
const pricePerDroid = 3000;
let quantity = prompt('Купить дроидов (шт)');
let totalPrice = pricePerDroid * quantity;
if(totalPrice > credits) {
console.log('Недостаточно средств на счету!');
} else {
  console.log(`Вы купили ${quantity} дроидов, на счету осталось ${credits - totalPrice} кредитов.`)
}

//=========3
// Пользователь может оформить доставку товара к себе в страну, указав ее в переменной country, но доставка есть не везде.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну.

// Формат сообщения - Доставка в [страна] будет стоить [цена]

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Южная Америка - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов
// Если указанной страны нет в списке, то выводи в консоль сообщение 'В вашей стране доставка не доступна'. Протестируй работоспособность кода подставив разные значения в переменную country.

// PS: используй switch

let country = prompt("Введите страну доставки");
let price;
country = country.toLowerCase();

function capitaliseFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

switch (country) {
  case "индия":
    price = 80;
    alert(`Доставка в ${capitaliseFirstLetter(country)} будет стоить ${price}`);
    break;

  case "южная америка":
    price = 250;
    alert(`Доставка в ${capitaliseFirstLetter(country)} будет стоить ${price}`);
    break;

  case "австралия":
    price = 170;
    alert(`Доставка в ${capitaliseFirstLetter(country)} будет стоить ${price}`);
    break;

  case "китай":
    price = 100;
    alert(`Доставка в ${capitaliseFirstLetter(country)} будет стоить ${price}`);
    break;

  case "ямайка":
    price = 120;
    alert(`Доставка в ${capitaliseFirstLetter(country)} будет стоить ${price}`);
    break;

  default:
    alert("В вашей стране доставка не доступна");
}
