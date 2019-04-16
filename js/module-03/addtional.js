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
/*  
  Написать функцию, getPx(str) 

  Функция getPx должна получать строку вида '10px',
  проверять была ли передана строка, если да, 
  возвращать только числовую составляющую, к примеру 10.
    
  Если была передана не строка, функция возвращает null.
*/
// const getPx = (str) => {
//   const as = typeof str;

//   if (as === "string") {
//     return Number.parseFloat(str);
//   } else {
//     return null;
//   }
// }
// // const str = "8d8";

// // console.log(typeof str);

// // Вызовы функции для проверки
// console.log( getPx("10px") === 10 ); // true
// console.log( getPx("10.5") === 10.5 ); // true
// console.log( getPx("0") === 0 ); // true
// console.log( getPx(-1) ); // null
// console.log( getPx(10) ); // null

// ==================5

/*  
  Напиши фукнцию findLongestWord(str), которая принимает 
  параметром произвольную строку и возвращает самое длинное слово в этой строке.   
  
  Важное условие - в строке могут быть только пробелы, символы букв и цифр!
*/

// const findLongestWord = str => {
//   const InputArry = str.split(" ");
//   let longesWord = InputArry[0];

//   for (let i = 0; i < InputArry.length; i++) {
//     const InputArryi = InputArry[i];
//     const InputArryLength = InputArryi.length;
//     if (longesWord.length < InputArryLength) {
//       longesWord = InputArry[i];
//     }
//   }
//   return longesWord;
// };

// // Вызовы функции для проверки
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

// console.log(findLongestWord("Google do a roll")); // 'Google'

// console.log(findLongestWord("May the force be with you")); // 'force'

// ===========================6

/*  
  Напиши функцию findLargestNumber(numbers), 
  которая получает массив чисел numbers, и возвращает 
  самое большое число в массиве.
*/

// const findLargestNumber = numbers => {
//   const numbersArry = numbers;
//   let LargestNumber = numbersArry[0];
//   for (let i = 0; i < numbersArry.length; i++) {
//     const numbersArryi = numbersArry[i];
//     if (LargestNumber < numbersArryi) {
//       LargestNumber = numbersArry[i];
//     }
//   }
//   return LargestNumber;
// };

// // Вызовы функции для проверки
// console.log(findLargestNumber([1, 2, 3])); // 3

// console.log(findLargestNumber([27, 12, 18, 5])); // 27

// console.log(findLargestNumber([31, 128, 14, 74])); // 128

// =====================7
/*  
  Есть массив уникальных чисел uniqueNumbers.
  
  Написать функцию, addUniqueNumbers(...), 
  которая получает произвольное кол-во чисел как аргументы, 
  и добавляет в массив uniqueNumbers только уникальные,
  а те которые в массиве уже есть игнорирует.
*/
const uniqueNumbers = [2, 1, 4, 9];

const addUniqueNumbers = (...arg) => {
// console.log('uniqueNumbers', uniqueNumbers);

  const argum = [...arg];
// console.log('argum', argum);

  // console.log(uniqueNumbers);
for(let i=0; i <argum.length; i++){
  if(!uniqueNumbers.includes(argum[i])){
    uniqueNumbers.push(argum[i])
  }
}
//  console.log(uniqueNumbers);
 
  return uniqueNumbers;
  
};

// Вызовы функции для проверки

addUniqueNumbers(1, 2, 3);
console.log(
  uniqueNumbers
); // [2, 1, 4, 9, 3]

addUniqueNumbers(12, 2, 3, 19);
console.log(
  uniqueNumbers
); // [2, 1, 4, 9, 3, 12, 19]

addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
console.log(
  uniqueNumbers
); // [2, 1, 4, 9, 3, 12, 19, 5, 8] 
