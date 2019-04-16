"use strict";

// =======================1
// * Есть массив имен пользователей
// * Используя методы массива, последовательно выполнить указанные операции
// */

// const users = ["Mango", "Poly", "Ajax", "Chelsey"];

// // Удалить первый элемент массива
// users.shift();
// console.log(users); // ["Poly", "Ajax", "Chelsey"]

// // // Удалить последний элемент массива
// users.pop();
// console.log(users); // ["Poly", "Ajax"]

// // // Добавить в начало массива пользователя "Lux"
// users.unshift("Lux");
// console.log(users); // ["Lux", "Poly", "Ajax"]

// // // Добавить в конец массива два пользователя ("Jay" и "Kiwi") за одну операцию
// users.push("Jay, Kiwi");
// console.log(users); //  ["Lux", "Poly", "Ajax", "Jay", "Kiwi"]

// // // Удалить из массива элемент хранящийся в переменной userToDelete
// const userToDelete = "Ajax";
// const index = users.indexOf(userToDelete);
// users.splice(index, 1);
// console.log(users); //  ["Lux", "Poly", "Jay", "Kiwi"]

// // // Добавить в массив пользователя "Kong", перед пользователем хранящейся в переменной userToInsertBefore
// const userToInsertBefore = "Jay";
// const indexJay = users.indexOf(userToInsertBefore);
// users.splice(indexJay, 0, "Kong");
// // console.log(indexJay);
// console.log(users); //  ["Lux", "Poly", "Kong", "Jay", "Kiwi"]

// =====================2
/*
 * Есть массив имен пользователей users
 *
 * Напиши цикл, который для каждого пользователя будет выводить в консоль
 * сообщение в формате [номер элемента] - [значение элемента].
 *
 * Нумерация должна начинаться с 1. К примеру для первого элемента массива
 * с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'
 *
 * Цикл должен выводить сообщения до тех пор, пока не закончатся элементы массива
 */

// const users = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];
// for (let i = 0; i < users.length; i++) {
//   console.log(`${i + 1} - ${users[i]}`);
// }

// =======================3
/*
 * Напиши скрипт по автоматизации оплаты процесса гравировки украшений.
 * Гравировка одного слова стоит 10 кредитов.
 */

// // В переменной message хранится произвольная строка
// const message = "Proin sociis natoque et magnis parturient montes mus";
// let price = 0;
// const wordPrice = 10;
// const words= message.split(' ')
// // Разбить строку в массив, разделитель - пробел, и записать в переменную words
// console.log(words);

// // Выведи в консоли длину массива words
// console.log(words.length); // 8
// for(let i=0; i<words.length; i +=1){
//   price= wordPrice* (i+1);
// }

// // Используя цикл вычисли сколько будет стоить гравировка и запиши результат в переменную price
// console.log(price); // 80

// =================================4
/*
  Напиши цикл, который просит, через prompt, ввести число больше 100. 
  
  Если посетитель нажал Cancel - завершить цикл.
  
  Если посетитель ввёл другое число – попросить ввести ещё раз, 
  и так далее, пока не введет число больше 100.
  
  Предполагается, что посетитель вводит только числа, 
  обрабатывать невалидный ввод вроде строк 'qwerty' не нужно.
*/
// let input;
// do {
//   input = prompt("Введите число больше 100");
// console.log(input);

//   if (input > 100) {
//     break;
//   }
// } while (input !== null);

// ========================5
/*
  Напиши скрипт, который выбирает из массива numbers 
  все числа, которые больше чем значение переменной num, 
  записывая эти числа в массив matched.
      
  В результате в массиве matched будут все подходяшие числа.
      
  PS: используй цикл for или for...of и оператор ветвления if
*/

// const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
// const num = 10;
// const matched = [];
// for (const value of numbers) {
//   if (value > num) {
//     matched.push(value);
//   }
// }

// console.log(matched); // [17, 14, 14, 32, 18, 26]

// ===================6
/*
  Напиши скрипт, который проверяет произвольную строку 
  в переменной message и находит в ней самое длинное слово,
  записывая его в переменную longestWord.
*/

// const message = "May the force be with you";

// let messageSplit = message.split(" ");
// let longestWord = messageSplit[0];

// for (let i = 0; i < messageSplit.length; i++) {
//   let messageSpliti = messageSplit[i];
//   let messageSplitILength = messageSpliti.length;
//   if (longestWord.length < messageSplitILength) {
//     longestWord = messageSplit[i];
//   }
// }

// console.log(longestWord); // 'force'

// ====================7