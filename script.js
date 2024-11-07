const clickBtn = document.getElementById('click-btn');
const scoreNode = document.getElementById('score');

// теги для раскрытия 
const openUpdClickBtn = document.getElementById('open-upd-click')
const openUpdAutoClickBtn = document.getElementById('open-upd-auto-click')
const placeUpdClick = document.getElementById('place-upd-click')
const placeAutoUpdClick = document.getElementById('place-auto-upd-click')

openUpdClickBtn.addEventListener('click', () => {
  placeUpdClick.classList.toggle('hidden');
  placeAutoUpdClick.classList.toggle('hidden');
  openUpdClickBtn.classList.toggle('back-upd-btn')
  openUpdAutoClickBtn.classList.remove('back-upd-btn')
})
openUpdAutoClickBtn.addEventListener('click', () => {
  placeUpdClick.classList.toggle('hidden');
  placeAutoUpdClick.classList.toggle('hidden');
  openUpdAutoClickBtn.classList.toggle('back-upd-btn')
  openUpdClickBtn.classList.remove('back-upd-btn')
})





// Массивы для апгрейдов
const upgrades = {
  click: [
    { btn: 'update-1', cost: 10, bonus: 0.34, increment: 1, scale: 'prirost1', skyscaperNode: 'skyscaper-1' },
    { btn: 'update-2', cost: 100, bonus: 1.66, increment: 3, scale: 'prirost1', skyscaperNode: 'skyscaper-2' },
    { btn: 'update-3', cost: 500, bonus: 2, increment: 5, scale: 'prirost1', skyscaperNode: 'skyscaper-3' },
    { btn: 'update-4', cost: 1000, bonus: 3, increment: 7, scale: 'prirost1', skyscaperNode: 'skyscaper-4' },
    { btn: 'update-5', cost: 5000, bonus: 5, increment: 10, scale: 'prirost1', skyscaperNode: 'skyscaper-5' }
  ],
  auto: [
    { btn: 'auto-update-1', cost: 100, bonus: 0.5, increment: 1, scale: 'auto-prirost1', skyscaperNode: 'skyscaper-1' },
    { btn: 'auto-update-2', cost: 1000, bonus: 1, increment: 3, scale: 'auto-prirost1', skyscaperNode: 'skyscaper-2' },
    { btn: 'auto-update-3', cost: 5000, bonus: 2, increment: 5, scale: 'auto-prirost1', skyscaperNode: 'skyscaper-3' },
    { btn: 'auto-update-4', cost: 10000, bonus: 3, increment: 7, scale: 'auto-prirost1', skyscaperNode: 'skyscaper-4' },
    { btn: 'auto-update-5', cost: 50000, bonus: 5, increment: 10, scale: 'auto-prirost1', skyscaperNode: 'skyscaper-5' }
  ]
};

let scoreForClick = 1;
let score = 0;
let autoIncome = 0;

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
const handleClickUpgrade = (btn, cost, increment, bonus, scale, skyscaperNode) => {
  const button = document.getElementById(btn);
  const scaleNode = document.getElementById(scale);
  const skyscaper = document.getElementById(skyscaperNode);
  console.log(skyscaper);
  button.addEventListener('click', () => {
    if (score >= cost) {
      score -= cost;
      scoreForClick += increment + bonus;
      updateScoreDisplay();
      cost *= 2;
      bonus += 0.1;
      button.innerText = '$' + cost;
      scaleNode.innerText = 'Текущий прирост: ' + scoreForClick.toFixed(2) + '$';

      skyscaper.classList.remove('invise-skyscaper');
    }
  });
};

// автоапгрейд
const handleAutoUpgrade = (btn, cost, increment, bonus, scale, skyscaperNode) => {
  const button = document.getElementById(btn);
  const scaleNode = document.getElementById(scale);
  const skyscaper = document.getElementById(skyscaperNode);
  button.addEventListener('click', () => {
    if (score >= cost) {
      score -= cost;
      updateScoreDisplay();
      cost *= 2;
      button.innerText = '$' + cost;

      autoIncome += increment + bonus;
      scaleNode.innerText = 'Текущий прирост: ' + autoIncome.toFixed(2) + '$/сек';
      if (skyscaper.classList.contains('skyscapers-lvl-1')){
        skyscaper.innerHTML = `<img src="images/2.png" alt="" class="responsive-img">`;
        skyscaper.classList.remove('skyscapers-lvl-1')
        skyscaper.classList.add('skyscapers-lvl-2');
      } else if (skyscaper.classList.contains('skyscapers-lvl-2')){
        skyscaper.innerHTML = `<img src="images/3.png" alt="" class="responsive-img">`;
        skyscaper.classList.remove('skyscapers-lvl-2')
        skyscaper.classList.add('skyscapers-lvl-3');
      } else if (skyscaper.classList.contains('skyscapers-lvl-3')){
        skyscaper.innerHTML = `<img src="images/4.png" alt="" class="responsive-img">`;
        skyscaper.classList.remove('skyscapers-lvl-3')
        skyscaper.classList.add('skyscapers-lvl-4');
      } else if (skyscaper.classList.contains('skyscapers-lvl-4')){
        skyscaper.innerHTML = `<img src="images/5.png" alt="" class="responsive-img" > `;
        skyscaper.classList.remove('skyscapers-lvl-4')
        skyscaper.classList.add('skyscapers-lvl-5');
      } else if (skyscaper.classList.contains('skyscapers-lvl-5')){
        skyscaper.innerHTML = `<img src="images/6.png" alt="" class="responsive-img">`;
        skyscaper.classList.remove('skyscapers-lvl-5')
        skyscaper.classList.add('skyscapers-lvl-6');
      }

    }
  });
};

setInterval(() => {
  if (autoIncome > 0) {
    score += autoIncome;
    updateScoreDisplay();
  }
}, 1000);

upgrades.click.forEach(({ btn, cost, increment, bonus, scale, skyscaperNode }) => handleClickUpgrade(btn, cost, increment, bonus, scale, skyscaperNode));
upgrades.auto.forEach(({ btn, cost, increment, bonus, scale, skyscaperNode }) => handleAutoUpgrade(btn, cost, increment, bonus, scale, skyscaperNode));
