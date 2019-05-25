"use strict";
import quizData from "./quiz-data.js";

{
  const form = document.querySelector(".form");
  const button = document.querySelector(".form-btn");
  const arryOfObj = quizData.questions;
  const formTitle = document.createElement("h2");
  formTitle.textContent = quizData.title;
  form.appendChild(formTitle);

  arryOfObj.forEach(function(obj, idxx) {
    const section = createQuestion(obj.question);
    form.appendChild(section);
    const answerList = createanswerList(section);
    section.appendChild(answerList);
    const objChoicesArry = obj.choices;
    objChoicesArry.forEach((answerChoice, idx) =>
      answerList.appendChild(createQLable(section, answerChoice, idx, idxx + 1))
    );
  });
  form.appendChild(button);

  function createQuestion(question) {
    const questionContainer = document.createElement("section");
    questionContainer.classList.add("form-section");

    const questionTitle = document.createElement("h3");
    questionTitle.textContent = question;
    questionContainer.appendChild(questionTitle);
    return questionContainer;
  }
  function createanswerList(section) {
    const questionList = document.createElement("ol");
    questionList.classList.add("form-list");
    section.appendChild(questionList);
    return questionList;
  }

  function createQLable(section, choices, idx, idxx) {
    const questionItem = document.createElement("li");
    questionItem.classList.add("form-item");
    const questionLabel = document.createElement("label");
    questionLabel.textContent = choices;
    const input = document.createElement("input");
    input.setAttribute("name", "question" + idxx);
    input.setAttribute("type", "radio");
    input.setAttribute("value", idx);
    section.appendChild(questionItem);
    questionItem.appendChild(questionLabel);
    questionLabel.appendChild(input);

    return questionItem;
  }
}

// слушатели событий
const form = document.querySelector("form");
form.addEventListener("submit", handleSubmitWithFormData);

function handleSubmitWithFormData(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const data = {};

  formData.forEach((value, name) => {
    data[name] = value;
  });

  const values = Object.values(data);
  const valuesArry = []; //массив ответов пользователя
  values.forEach(function(el) {
    valuesArry.push(Number.parseInt(el));
  });

  const trueAnswerArry = []; //массив правильных ответов
  const trueAnswer = quizData.questions;
  trueAnswer.forEach(function(el) {
    trueAnswerArry.push(el.answer);
  });

  let trueAnswerCounter = 0; //счетчик правильных ответов

  for (let i = 0; i < valuesArry.length; i++) {
    if (valuesArry[i] === trueAnswerArry[i]) {
      trueAnswerCounter += 1;
    }
  }

  console.log("правильных ответов", trueAnswerCounter);
  const percentTrueAnswer = (100 * trueAnswerCounter) / trueAnswerArry.length;
  console.log(percentTrueAnswer, "%");
  const sucsessTestPercent = 80;
}
