const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector('body'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const switcherColor = {
    isActive: false,
    switcherId: null,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.switcherId = setInterval(() => changeBgColor(colors), 1000);
    refs.startBtn.disabled = true;
  },
  stop() {
    clearInterval(this.switcherId);
    this.isActive = false;
    refs.startBtn.disabled = false;
  },
};

function changeBgColor(colors) {
  const colorId = randomIntegerFromInterval(0, colors.length - 1);
  refs.body.style.backgroundColor = colors[colorId];
}


refs.startBtn.addEventListener("click",switcherColor.start.bind(switcherColor));
refs.stopBtn.addEventListener("click", switcherColor.stop.bind(switcherColor));