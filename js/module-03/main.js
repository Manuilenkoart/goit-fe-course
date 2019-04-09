"use strict";

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function(login) {
  const letterArry = login.split("");
  if (letterArry.length >= 4 && letterArry.length <= 16) {
    return true;
  } else {
    return false;
  }
};

const isLoginUnique = function(allLogins, login) {
  if (allLogins.includes(login)) {
    return false; // логин есть
  } else {
    return true; // логина нет
  }
};
const addLogin = function(allLogins, login) {
  if (!isLoginValid(login)) {
    return "Ошибка! Логин должен быть от 4 до 16 символов";
  }

  if (isLoginUnique(allLogins, login)) {
    console.log(isLoginUnique(allLogins, login));

    logins.push(login);

    return "Логин успешно добавлен!";
  }
  if (!isLoginUnique(allLogins, login)) {
    console.log(isLoginUnique(allLogins, login));

    return "Такой логин уже используется!";
  }
};

// //Вызовы функции для проверки
// addLogin(logins, "Ajax"); // 'Логин успешно добавлен!'

// addLogin(logins, "robotGoogles"); // 'Такой логин уже используется!'


// addLogin(logins, "Zod"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// addLogin(logins, "jqueryisextremelyfast"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
