"use strict";
/*
  Напиши функцию checkNumberType(num)
  
  Функция получает число num как аргумент и возвращает 
  строку "Even" если число четное и строку "Odd" если не четное.
*/
// const checkNumberType = function(num) {
//   const number = num % 2;
//   if (number) {
//     return "Odd";
//   } else {
//     return "Even";
//   }
// };
// // // Вызовы функции для проверки
// console.log(checkNumberType(2)); // 'Even'

// console.log(checkNumberType(46)); // 'Even'

// console.log(checkNumberType(3)); // 'Odd'

// console.log(checkNumberType(17)); // 'Odd'

// ======================2
/*
  Напиши функцию formatString(str)
  
  - Функия принимает на вход строку str
  - Если длина строки не превышает 40 символов, функция возвращает ее. 
  - Если длина больше 40 символов, то функция обрезает строку до 40-ка
    символов и добавляет в конец строки троеточие '...', после чего 
    возвращает укороченную версию.
*/
// const formatString = function(str) {
//   const letterArry = str.split("");

//   if (letterArry.length > 40) {
//     let letterArry40;
//     for (let i = 0; i < 40; i++) {

//       letterArry40 += str[i];
//       // const letterArryShort = letterArry40;
//     }
//     const letterArryShort = `${letterArry40} ...`
//     return letterArryShort;

//     // return letterArry40;
//   } else {
//     return str;
//   }
// };
// // Вызовы функции для проверки
// console.log(formatString("Curabitur ligula sapien, tincidunt non.")); // вернется оригинальная строка

// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")); // вернется форматированная строка

// console.log(formatString("Curabitur ligula sapien.")); // вернется оригинальная строка

// console.log(
//   formatString(
//     "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
//   )
// ); // вернется форматированная строка

// ======================3
/*
  Напиши функцию checkForSpam(str)
  
  Функция принимает 1 параметр str - строку,
  и проверять ее на содержание слов: spam и sale
  
  Если нашли зарещенное слово то функция возвращает true,
  если запрещенных слов нет функция возвращает false
  
  PS: слова могут быть в произвольном регистре
*/

// const checkForSpam = function(str) {
//   const arryString = str.split(" ");
//   console.log(arryString);
//   const arry = ["spam", "sale"];

//   for (let i = 0; i < arryString.length; i++) {
//   console.log(arryString[i]);

//     for (let j = 0; j < arry.length; j++) {
//   console.log(arry[j]);

//       if (arryString[i] == arry[j]) {
//         return true;
 
//       } 
//     }
//   }
//   return false;
// };

// Вызовы функции для проверки
// console.log( checkForSpam('Latest technology news') ); // false

// console.log( checkForSpam('JavaScript weekly newsletter') ); // false

// console.log(checkForSpam("Get best sale offers now!")); // true

// console.log( checkForSpam('[SPAM] How to earn fast money?') ); // true

// =======================4