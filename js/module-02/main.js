"use strict";

// Напиши скрипт со следующим функционалом:

// При загрузке страницы пользователю предлагается в prompt ввести число. Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
// Операция ввода числа пользователем и сохранение в массив продолжается до тех пор, пока пользователь не нажмет Cancel в prompt.
// После того как пользователь прекратил ввод нажав Cancel, если массив не пустой, необходимо посчитать сумму всех элементов массива и записать ее в переменную total. Используй цикл for или for...of. После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'
const numbers = [];
let inputNumber;
let total = 0;
do {
  inputNumber = prompt("Введите число");
 
  if (inputNumber !== null) {
    inputNumber = Number(inputNumber);
    if(Number.isNaN(inputNumber) !==true){
      numbers.push(inputNumber);
    }else {
      alert('Было введено не число, попробуйте еще раз');
    }
  }

  if (inputNumber === null && numbers.length) {
    for (let i = 0; i < numbers.length; i += 1) {
      total += numbers[i];
    }
    console.log(`Общая сумма чисел равна ${total}`);
    break;
  }
} while (inputNumber !== null);

// Напиши скрипт имитирующий авторизацию пользователя.

// Есть массив паролей зарегистрированных пользователей passwords. При посещении страницы, необходимо попросить пользователя ввести свой пароль, после чего проверить содержит ли массив passwords пароль введенный пользователем. Пароль можно ввести не верно всего n раз, кол-во хранится в переменной attemptsLeft.

// 🔔 Используй цикл while или do...while

// Если был введен пароль который есть в массиве passwords, вывести alert с текстом 'Добро пожаловать!' и прекратить спрашивать пароль в цикле.
// Если был введен не существующий пароль, отнять от лимита попыток единицу, вывести alert с текстом 'Неверный пароль, у вас осталось n попыток', где n это оставшееся количество попыток.
// Если закончились попытки, вывести alert с текстом 'У вас закончились попытки, аккаунт заблокирован!'
// Продолжать запрашивать пароль до тех пор, пока пользователь не введет существующий пароль, не кончатся попытки или пока пользователь не нажмет Cancel в prompt.
let input;
const passwords = ["qwerty", "111qwe", "123123", "r4nd0mp4zzw0rd"];
let attemptsLeft = 3;

do {
  input = prompt("Введите пароль");
  if (input === null) {
    break;
  }

  if (passwords.includes(input)) {
    alert("Добро пожаловать");
    break;
  } else {
    attemptsLeft -= 1;
    if (attemptsLeft === 0) {
      alert("У вас закончились попытки, аккаунт заблокирован!");
      break;
    }
    alert(`Неверный пароль, у вас осталось ${attemptsLeft} попыток`);
  }
} while (input !== null);
