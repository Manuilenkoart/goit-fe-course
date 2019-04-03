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

const users = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];
for(let i=1; i<users.length; i +=1) {
  console.log(`${users.indexOf(users[i])} `);
  for(let i=0;i<i<users.length; i +=1){
    console.log(`${(users[i])} `);

  }
}