"use strict";

const quizData = {
  title: "Тест на базовый уровень JavaScript.",
  questions: [
    {
      question: "Что возвращает метод Array.prototype.filter()?",
      choices: [
        "Массив, если результат работы содержит более одного элемента",
        "Один элемент, если только он прошел фильтрацию",
        "Всегда массив"
      ],
      answer: 2
    },
    {
      question: "Как получить список всех ключей объекта obj?",
      choices: [
        "obj.keys()",
        "Object.keys(obj)",
        "obj.keys",
        "Object.getKeys(obj)"
      ],
      answer: 1
    },
    {
      question: "Что такое статическое свойство класса?",
      choices: [
        "Свойство доступное только экземплярам, но не классу",
        "Свойство доступное только классу, но не его экземплярам",
        "Свойство которое нельзя изменять после создания"
      ],
      answer: 1
    },
    {
      question: "Что такое обещание (promise)?",
      choices: [
        "Функция, представляющая конечный результат асинхронной операции",
        "Данные полученные в результате асинхронной операции",
        "Объект, представляющий конечный результат асинхронной операции"
      ],
      answer: 2
    },
    {
      question: "Выберите не существующий HTTP-метод.",
      choices: ["PUT", "GET", "GRAB", "DELETE", "PATCH"],
      answer: 2
    },
    {
      question: "Какой командой будет запускаться npm-скрипт с именем server?",
      choices: [
        "npm server",
        "npm start server",
        "npm execute server",
        "npm run server"
      ],
      answer: 3
    }
  ]
};
{
  const form = document.querySelector(".form");
  const arryOfObj = quizData.questions;
  const formTitle = document.createComment("h2");
  formTitle.textContent = quizData.title;
  form.appendChild(formTitle);

  for (const obj of arryOfObj) {
    const objChoicesArry = obj.choices;

    const section = createQuestion(obj.question);
    const answerList = createanswerList(section);

    form.appendChild(section);
    section.appendChild(answerList);

    for (const answerChoice of objChoicesArry) {
      const answer = createQLable(section, answerChoice);
      answerList.appendChild(answer);
      // console.log(answerChoice);
    }
  }

  // создание секции вопроса
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

  function createQLable(section, choices) {
    const questionItem = document.createElement("li");
    questionItem.classList.add("form-item");
    const questionLabel = document.createElement("label");
    questionLabel.textContent = choices;

    const input = document.createElement("input");
    input.setAttribute("name", "name");
    input.setAttribute("type", "radio");
    input.setAttribute("value", "value");
    section.appendChild(questionItem);

    questionLabel.appendChild(input);

    questionItem.appendChild(questionLabel);
    return questionItem;
  }
}
