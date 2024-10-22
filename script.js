const clickBtn = document.getElementById('click-btn');
const update1 = document.getElementById('update-1');
const update2 = document.getElementById('update-2');
const update3 = document.getElementById('update-3');
const update4 = document.getElementById('update-4');
const update5 = document.getElementById('update-5');
const autoUpdate1 = document.getElementById('auto-update-1');
const autoUpdate2 = document.getElementById('auto-update-2');
const autoUpdate3 = document.getElementById('auto-update-3');
const autoUpdate4 = document.getElementById('auto-update-4');
const autoUpdate5 = document.getElementById('auto-update-5');
const scoreNode = document.getElementById('score');

let scoreForClick = 1;
let score = 0;

// стоимость апдейтов
let costUpdate1 = 10;
let costUpdate2 = 100;
let costUpdate3 = 500;
let costUpdate4 = 1000;
let costUpdate5 = 5000;
let autoCostUpdate1 = 100;
let autoCostUpdate2 = 1000;
let autoCostUpdate3 = 5000;
let autoCostUpdate4 = 10000;
let autoCostUpdate5 = 50000;
// плюс за покупку
let bonusCost1 = 1;
let bonusCost2 = 2;
let bonusCost3 = 5;
let bonusCost4 = 10;
let bonusCost5 = 25;
let autoBonusCost1 = 1;
let autoBonusCost2 = 2;
let autoBonusCost3 = 5;
let autoBonusCost4 = 10;
let autoBonusCost5 = 25;
clickBtn.addEventListener('click', function () {
    score += scoreForClick;
        scoreNode.innerText = `Score: ${score.toFixed()}`;
});


update1.addEventListener(`click`, () => {
    if (score >= costUpdate1) {
        score -= costUpdate1;
        scoreForClick += 2 + bonusCost1;
        scoreNode.innerText = `Score: ${score.toFixed()}`
        costUpdate1 *= 2;
        update1.innerText = '$' + costUpdate1;
        bonusCost1 += 0.34;
    }
});

update2.addEventListener(`click`, () => {
    if (score >= costUpdate2) {
        score -= costUpdate2;
        scoreForClick += 5 + bonusCost2;
        scoreNode.innerText = `Score: ${score.toFixed()}`
        costUpdate2 *= 2;
        update2.innerText = '$' + costUpdate2;
        bonusCost2 += 0.66;
    }
});

update3.addEventListener(`click`, () => {
    if (score >= costUpdate3) {
        score -= costUpdate3;
        scoreForClick += 5 + bonusCost3;
        scoreNode.innerText = `Score: ${score.toFixed()}`
        costUpdate3 *= 2;
        update3.innerText = '$' + costUpdate3;
        bonusCost3 += 1.5;
    }
});

update4.addEventListener(`click`, () => {
    if (score >= costUpdate4) {
        score -= costUpdate4;
        scoreForClick += 5 + bonusCost4;
        scoreNode.innerText = `Score: ${score.toFixed()}`
        costUpdate4 *= 2;
        update4.innerText = '$' + costUpdate4;
        bonusCost4 += 3;
    }
});

update5.addEventListener(`click`, () => {
    if (score >= costUpdate5) {
        score -= costUpdate5;
        scoreForClick += 5 + bonusCost5;
        scoreNode.innerText = `Score: ${score.toFixed()}`
        costUpdate5 *= 2;
        update5.innerText = '$' + costUpdate5;
        bonusCost5 += 10;
    }
});

autoUpdate1.addEventListener(`click`, () => {
    if (score >= autoCostUpdate1) {
        score -= autoCostUpdate1; // Снимаем стоимость только один раз при клике
        autoCostUpdate1 *= 2;
        autoUpdate1.innerText = '$' + autoCostUpdate1;
        autoBonusCost1 += 1;

        // Запускаем интервал для добавления бонуса каждые 1 сек
        setInterval(() => {
            score += 1 + autoBonusCost1;
            scoreNode.innerText = `Score: ${score.toFixed()}`;
        }, 1000);
    }
});

autoUpdate2.addEventListener(`click`, () => {
    if (score >= autoCostUpdate2) {
        score -= autoCostUpdate2; // Снимаем стоимость только один раз при клике
        autoCostUpdate2 *= 2;
        autoUpdate2.innerText = '$' + autoCostUpdate2;
        autoBonusCost2 += 2;

        // Запускаем интервал для добавления бонуса каждые 1 сек
        setInterval(() => {
            score += 1 + autoBonusCost2;
            scoreNode.innerText = `Score: ${score.toFixed()}`;
        }, 1000);
    }
});

autoUpdate3.addEventListener(`click`, () => {
    if (score >= autoCostUpdate3) {
        score -= autoCostUpdate3; // Снимаем стоимость только один раз при клике
        autoCostUpdate3 *= 2;
        autoUpdate3.innerText = '$' + autoCostUpdate3;
        autoBonusCost3 += 4;

        // Запускаем интервал для добавления бонуса каждые 1 сек
        setInterval(() => {
            score += 1 + autoBonusCost3;
            scoreNode.innerText = `Score: ${score.toFixed()}`;
        }, 1000);
    }
});

autoUpdate4.addEventListener(`click`, () => {
    if (score >= autoCostUpdate4) {
        score -= autoCostUpdate4; // Снимаем стоимость только один раз при клике
        autoCostUpdate4 *= 2;
        autoUpdate4.innerText = '$' + autoCostUpdate4;
        autoBonusCost4 += 6;

        // Запускаем интервал для добавления бонуса каждые 1 сек
        setInterval(() => {
            score += 1 + autoBonusCost4;
            scoreNode.innerText = `Score: ${score.toFixed()}`;
        }, 1000);
    }
});

autoUpdate5.addEventListener(`click`, () => {
    if (score >= autoCostUpdate5) {
        score -= autoCostUpdate5; // Снимаем стоимость только один раз при клике
        autoCostUpdate5 *= 2;
        autoUpdate5.innerText = '$' + autoCostUpdate5;
        autoBonusCost5 += 10;

        // Запускаем интервал для добавления бонуса каждые 1 сек
        setInterval(() => {
            score += 1 + autoBonusCost5;
            scoreNode.innerText = `Score: ${score.toFixed()}`;
        }, 1000);
    }
});
