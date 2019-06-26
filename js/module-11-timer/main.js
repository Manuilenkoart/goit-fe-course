"use strict";

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }
  interval() {
    setInterval(() => {
      const time = this.targetDate - Date.now();
      /*
       * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
       * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
       */
      const days = Math.floor(time / (1000 * 60 * 60 * 24));

      /*
       * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
       * остатка % и делим его на количество миллисекунд в одном часе
       * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
       */
      const hours = Math.floor(
        (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      /*
       * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
       * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
       */
      const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

      /*
       * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
       * миллисекунд в одной секунде (1000)
       */
      const secs = Math.floor((time % (1000 * 60)) / 1000);
      refs.days.textContent = `${days}`;
      refs.hours.textContent = `${hours}`;
      refs.mins.textContent = `${mins}`;
      refs.secs.textContent = `${secs}`;
    }, 1000);
  }
}

let timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2019")
});
const refs = {
  timerId: document.querySelector(timer.selector),
  days: document.querySelector(".field [data-value='days']"),
  hours: document.querySelector(".field [data-value='hours']"),
  mins: document.querySelector(".field [data-value='mins']"),
  secs: document.querySelector(".field [data-value='secs']")
};

document.addEventListener("DOMContentLoaded", timer.interval.bind(timer));
