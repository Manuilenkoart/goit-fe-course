"use strict";
const refs = {
  body: document.querySelector("body"),
  startBtn: document.querySelector("button[data-action='start']"),
  stopBtn: document.querySelector("button[data-action='stop']")
};
const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];
const timer = {
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;

    this.timerId = setInterval(() => {
      refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
    }, 1000);
  },
  stop() {
    clearInterval(this.timerId);
    this.isActive = false;
  }
};

refs.startBtn.addEventListener("click", timer.start.bind(timer));
refs.stopBtn.addEventListener("click", timer.stop.bind(timer));

function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
