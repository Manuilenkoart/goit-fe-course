"use strict";
/*  
  Напиши скрипт, который, для объекта user, последовательно: 
  
    - добавляет поле mood со значением 'happy'
    
    - заменяет значение hobby на 'javascript'
    
    - заменяет значение premium на false
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.keys и for...of
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.entries и for...of
*/

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true
// };

// user.mood = "happy";
// user.hobby = "javascript";
// user.premium = false;

// const keys = Object.keys(user);
// console.log(keys);

// for (const key of keys) {
//   console.log("value: ", user[key]);
// }
// const entries = Object.entries(user);
// console.log(entries);
// for(const entry of entries) {
//   const key = entry[0];
//   const value = entry[1];

//   console.log(`${key}: ${value}`);
// }

// =======================2
/*
  Напиши скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"
*/

// const tasksCompleted = {
//   ann: 29,
//   david: 99,
//   helen: 1,
//   lorence: 35
// };
// const entries = Object.entries(tasksCompleted);
// console.table(entries);
// let max = 0;
// let name;
// for (const entry of entries) {
//   const value = entry[1];
//   // console.log(value);

//   if (max < value) {
//     max = value;
//     name = entry[0]
//   }
// }
// console.log(`${max} ${name}`);

// ===============3
/*  
  Напиши функцию countProps(obj), считающую кол-во свойств в объекте.
  Функция возвращает количество свойств.
*/

// Вызовы функции для проверки
// const countProps = {
//   a: 1,
//   b: 3,
//   c: 'hello'
// }
// const keys = Object.keys(countProps);

// console.log(keys.length);

// const countProps = function(obj) {
//   const keys = Object.keys(obj);
//   return keys.length
// }

// console.log(
//   countProps({})
// ); // 0

// console.log(
//   countProps({a: 1, b: 3, c: 'hello'})
// ); // 3

// =================4
/*  
  Напиши функцию isObjectEmpty(obj), которая получает 
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
  
  Возвращает true если объект пустой, false если не пустой.
*/

// const isObjectEmpty= function(obj) {
//   const keys = Object.keys(obj);
//   if(!keys.length) {
// return true
//   } else{
//     return false
//   }
// }

// const isObjectEmpty =(obj) =>{
//   const keys = Object.keys(obj);
//   if(!keys.length) {
// return true
//   } else{
//     return false
//   }
// }
// // Вызовы функции для проверки
// console.log(
//   isObjectEmpty({})
// ); // true

// console.log(
//   isObjectEmpty({a: 1})
// ); // false

// console.log(
//   isObjectEmpty({a: 1, b: 2})
// ); // false

// =================5
/*  
  Напиши функцию countTotalSalary(salaries). 
  
  Функция получает объект зарплат и считает общую сумму запрплаты работников.
  Возвращает общую сумму зарплаты.
  
  Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата"
*/
// const countTotalSalary = salaries => {
//   let total = 0;

//   for (const key in salaries) {
//     total += salaries[key];
//   }

//   return total;
// };
// // Вызовы функции для проверки
// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80
//   })
// ); // 330

// ===================6
/*  
  Напиши функцию getAllPropValues(arr, prop), 
  которая получает массив объектов и имя ключа. 
  Возвращает массив значений определенного поля prop
  из каждого объекта в массиве
*/

// const users = [
//   { name: "Poly", age: 7, mood: "happy" },
//   { name: "Mango", age: 4, mood: "blissful" },
//   { name: "Ajax", age: 3, mood: "tired" }
// ];


// const getAllPropValues = (arr, prop) => {
//   const names = [];
//   for (const user of arr) {
//     if (prop in user) {
//       names.push(user[prop]);
//     }
//   }
//   return names;
// };

// // Вызовы функции для проверки
// console.log(getAllPropValues(users, "name")); // ['Poly', 'Mango', 'Ajax']

// console.log(
//   getAllPropValues(users, 'mood')
// ); // ['happy', 'blissful', 'tired']

// console.log(
//   getAllPropValues(users, 'active')
// ); // []

// ===============7
/*
* Есть два массива names и prices с именами и ценами товаров.
* Напишите функцию combine(names, prices), которая получает 
* эти два массива и возвращает массив объектов со свойствами name и price. 
*/

const names = ['Радар', 'Сканер', 'Дроид', 'Захват', 'Двигатель', 'Топливный бак'];
const prices = [1000, 2000, 1500, 2700, 1600, 8000];
// {
//   'Радар':  1000,
//   'Сканер': 2000
// }

const combine= (names, prices) => {
const combined = [];
  for(let i =0; i<names.length; i++) {

const obj = {
  name: names[i],
  price: prices[i]
}
combined.push(obj)

  }
return combined;
  
}



const products = combine(names, prices);
console.table(products); // массив объектов со свойствами name и price
