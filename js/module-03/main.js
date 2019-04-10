"use strict";

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = login => {
  const letterArry = login.split("");
  return letterArry.length >= 4 && letterArry.length <= 16;
};

const isLoginUnique = (allLogins, login) => {
  return allLogins.includes(login);
};
const addLogin = function(allLogins, login) {
  if (!isLoginValid(login)) {
    return "Ошибка! Логин должен быть от 4 до 16 символов";
  }

  if (!isLoginUnique(allLogins, login)) {
    logins.push(login);
    return "Логин успешно добавлен!";
  } else {
    return "Такой логин уже используется!";
  }
};

// //Вызовы функции для проверки
// addLogin(logins, "Ajax"); // 'Логин успешно добавлен!'

// addLogin(logins, "robotGoogles"); // 'Такой логин уже используется!'

// addLogin(logins, "Zod"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// addLogin(logins, "jqueryisextremelyfast"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
