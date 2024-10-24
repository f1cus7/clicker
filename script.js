const clickBtn = document.getElementById('click-btn');
const scoreNode = document.getElementById('score');

const upgrades = {
  click: [
    { btn: 'update-1', cost: 10, bonus: 0.34, increment: 1, scale: 'prirost1' },
    { btn: 'update-2', cost: 100, bonus: 1.66, increment: 3, scale: 'prirost2' },
    { btn: 'update-3', cost: 500, bonus: 3, increment: 5, scale: 'prirost3' },
    { btn: 'update-4', cost: 1000, bonus: 5, increment: 7, scale: 'prirost4' },
    { btn: 'update-5', cost: 5000, bonus: 10, increment: 10, scale: 'prirost5' }
  ],
  auto: [
    { btn: 'auto-update-1', cost: 100, bonus: 0.5, increment: 1, scale: 'auto-prirost1' },
    { btn: 'auto-update-2', cost: 1000, bonus: 2, increment: 3, scale: 'auto-prirost2' },
    { btn: 'auto-update-3', cost: 5000, bonus: 4, increment: 5, scale: 'auto-prirost3' },
    { btn: 'auto-update-4', cost: 10000, bonus: 6, increment: 7, scale: 'auto-prirost4' },
    { btn: 'auto-update-5', cost: 50000, bonus: 10, increment: 10, scale: 'auto-prirost5' }
  ]
};

let scoreForClick = 1;
let score = 0;

// Обновление счета
const updateScoreDisplay = () => {
  scoreNode.innerText = 'Счёт: ' + score.toFixed(2) + '$';
};

// клик
clickBtn.addEventListener('click', function () {
  score += scoreForClick;
  updateScoreDisplay();
});

// апгрейд клика
const handleClickUpgrade = (btn, cost, increment, bonus, scale) => {
  const button = document.getElementById(btn);
  const scaleNode = document.getElementById(scale);
  button.addEventListener('click', () => {
    if (score >= cost) {
      score -= cost;
      scoreForClick += increment + bonus;
      updateScoreDisplay();
      cost *= 2;
      button.innerText = '$' + cost;
      scaleNode.innerText = 'Текущий прирост: ' + scoreForClick.toFixed(2) + '$'
    }
  });
};

// автоапгрейд
const handleAutoUpgrade = (btn, cost, increment, bonus, scale) => {
  const button = document.getElementById(btn);
  const scaleNode = document.getElementById(scale);
  button.addEventListener('click', () => {
    if (score >= cost) {
      score -= cost;
      updateScoreDisplay();
      cost *= 2;
      button.innerText = '$' + cost;


      setInterval(() => {
        score += increment + bonus;
        updateScoreDisplay();
      }, 1000);
      let inbo = increment + bonus
      scaleNode.innerText = 'Текущий прирост: ' + inbo.toFixed(2) + '$'
    }
  });
};

upgrades.click.forEach(({ btn, cost, increment, bonus, scale }) => handleClickUpgrade(btn, cost, increment, bonus, scale));
upgrades.auto.forEach(({ btn, cost, increment, bonus, scale }) => handleAutoUpgrade(btn, cost, increment, bonus, scale));
