const clickBtn = document.getElementById('click-btn');
const scoreNode = document.getElementById('score');

const upgrades = {
  click: [
    { btn: 'update-1', cost: 10, bonus: 1.34, increment: 2 },
    { btn: 'update-2', cost: 100, bonus: 2.66, increment: 5 },
    { btn: 'update-3', cost: 500, bonus: 6.5, increment: 5 },
    { btn: 'update-4', cost: 1000, bonus: 13, increment: 5 },
    { btn: 'update-5', cost: 5000, bonus: 35, increment: 5 }
  ],
  auto: [
    { btn: 'auto-update-1', cost: 100, bonus: 1, increment: 1 },
    { btn: 'auto-update-2', cost: 1000, bonus: 2, increment: 1 },
    { btn: 'auto-update-3', cost: 5000, bonus: 4, increment: 1 },
    { btn: 'auto-update-4', cost: 10000, bonus: 6, increment: 1 },
    { btn: 'auto-update-5', cost: 50000, bonus: 10, increment: 1 }
  ]
};

let scoreForClick = 1;
let score = 0;

// Обновление счета
const updateScoreDisplay = () => {
  scoreNode.innerText = `Score: ${score.toFixed()}`;
};

// клик
clickBtn.addEventListener('click', function () {
  score += scoreForClick;
  updateScoreDisplay();
});

// апгрейд клика
const handleClickUpgrade = (btn, cost, increment, bonus) => {
  const button = document.getElementById(btn);
  button.addEventListener('click', () => {
    if (score >= cost) {
      score -= cost;
      scoreForClick += increment + bonus;
      updateScoreDisplay();
      cost *= 2;
      button.innerText = '$' + cost;
    }
  });
};

// автоапгрейд
const handleAutoUpgrade = (btn, cost, increment, bonus) => {
  const button = document.getElementById(btn);
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
    }
  });
};

upgrades.click.forEach(({ btn, cost, increment, bonus }) => handleClickUpgrade(btn, cost, increment, bonus));
upgrades.auto.forEach(({ btn, cost, increment, bonus }) => handleAutoUpgrade(btn, cost, increment, bonus));
