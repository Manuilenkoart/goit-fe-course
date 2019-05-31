"use strict";
// ================ 1
/*
  Есть список категорий с классом categories (на вкладке HTML).
  
  Напишите код, который для каждого элемента li (первая вложенность) 
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li
  
  К примеру:
    Категория: Животные
    Количество вложенных li: 4
*/
// const categories = document.querySelector(".categories");
// const categoriesChildren = categories.children;
// // console.log("Категория:", categoriesChildren[0].firstChild);
// const animal = categoriesChildren[0].firstChild;

// const animalUl = categoriesChildren[0].children;
// console.log(
//   `Категория:", ${animal.textContent} Количество вложенных li: ${
//     animalUl[0].children.length
//   }`
// );

// ===================== 2
/*
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/
// const list = document.querySelector(".list");
// const firstEl = list.firstElementChild;
// firstEl.style.color = "red";
// console.log(firstEl);
// const lastEl = list.lastElementChild;
// lastEl.style.color = "blue";

// ================= 3
/*
  Дан ul склассом .list и массив строк. 
  
  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/

// const elements = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const list = document.querySelector(".list");
// elements.forEach((el, idx) => createLi(idx));
// function createLi(idx) {
//   const createLi = document.createElement("li");
//   createLi.textContent = elements[idx];
//   list.append(createLi);
//   return;
// }

// ============= 4
