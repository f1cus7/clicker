const balanceNode = document.getElementById('balance');
const sectionClick = document.querySelector('.inner-section');
const bonusForClickNode = document.getElementById('bonusForClick');
const costOfUpdateNode = document.getElementById('costOfUpdate');
const btnBuyUpdClickNode = document.querySelector('.btn-buy-upd-click');

let balance = 10000.00;
const updClick = [1.01, 2.50, 5.00, 10.00, 25.00];
const updClickCost = [10, 15, 20, 30];

let clickLvl = 0;


document.addEventListener("DOMContentLoaded", function () {
    const savedBalance = localStorage.getItem('balance');
    const savedClickLvl = localStorage.getItem('clickLvl');

    if (savedBalance !== null) balance = parseFloat(savedBalance);
    if (savedClickLvl !== null) clickLvl = parseInt(savedClickLvl);

    UpdBalance();
    costOfUpdateNode.textContent = updClickCost[clickLvl] ?? '-';
    bonusForClickNode.textContent = updClick[clickLvl].toFixed(2);

    if (clickLvl >= updClick.length - 1) {
        btnBuyUpdClickNode.style.opacity = 0;
        btnBuyUpdClickNode.style.cursor = 'default';
    }
});

const saveGame = () => {
    localStorage.setItem('balance', balance.toFixed(2));
    localStorage.setItem('clickLvl', clickLvl.toString());
};

const UpdBalance = () => {
    balanceNode.textContent = balance.toFixed(2);
    saveGame();
};

sectionClick.addEventListener('click', () => {
    balance += updClick[clickLvl];
    UpdBalance();
});

btnBuyUpdClickNode.addEventListener('click', () => {
    if (balance >= updClickCost[clickLvl]) {
        balance -= updClickCost[clickLvl];
        clickLvl++;

        costOfUpdateNode.textContent = updClickCost[clickLvl] ?? '-';
        bonusForClickNode.textContent = updClick[clickLvl]?.toFixed(2) ?? updClick[clickLvl - 1].toFixed(2);
        new Audio('audio/success.mp3').play();

        if (clickLvl >= updClick.length - 1) {
            btnBuyUpdClickNode.style.opacity = 0;
            btnBuyUpdClickNode.style.cursor = 'default';
        }

        UpdBalance();
    }
});

setInterval(UpdBalance, 1000);

localStorage.clear();

// бонус с клику:

const btnAd = document.querySelector('.btn-ad-money');
btnAd.addEventListener('click', () => {
    const rand = Math.floor(Math.random() * 3) + 2;
    updClick[clickLvl] *= rand;
    bonusForClickNode.textContent = updClick[clickLvl].toFixed(2);
    btnAd.style.cursor = 'default';
    btnAd.disabled = true;
    btnBuyUpdClickNode.disabled = true;

    let seconds = 30;
    const interval = setInterval(() => {
        btnAd.textContent = `${seconds} секунд`;
        seconds--;
        btnBuyUpdClickNode.style.opacity = 0;
        btnBuyUpdClickNode.style.cursor = 'default';
        
        if (seconds < 0) {
            clearInterval(interval);
            updClick[clickLvl] /= rand;
            bonusForClickNode.textContent = updClick[clickLvl].toFixed(2);
            btnAd.textContent = 'Бонус к клику x2 — x4 на 30 секунд';
            btnAd.style.cursor = 'pointer';
            btnAd.disabled = false;
            btnBuyUpdClickNode.style.opacity = 1;
            btnBuyUpdClickNode.style.cursor = 'pointer';
            btnBuyUpdClickNode.disabled = false;
        }
    }, 1000);
});




// ===== БИЗНЕСЫ =====

const btnBuyShaurmaNode = document.getElementById('btnBuyShaurma');
const btnBuyShopNode = document.getElementById('btnBuyShop');
const btnBuyComputerNode = document.getElementById('btnBuyComputer');
const btnBuyAirplaneNode = document.getElementById('btnBuyAirplane');
const btnBuyEarthNode = document.getElementById('btnBuyEarth');

const putCostShaurma = document.getElementById('putCostShaurma');
const putCostShop = document.getElementById('putCostShop');
const putCostComputer = document.getElementById('putCostComputer');
const putCostAirplane = document.getElementById('putCostAirplane');
const putCostEarth = document.getElementById('putCostEarth');

const businessLvlShaurma = document.getElementById('business-lvl-shaurma');
const businessLvlShop = document.getElementById('business-lvl-shop');
const businessLvlComputer = document.getElementById('business-lvl-computer');
const businessLvlAirplane = document.getElementById('business-lvl-airplane');
const businessLvlEarth = document.getElementById('business-lvl-earth');

const BusinessCost = [
    [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    [110, 120, 130, 140, 150, 160, 170, 180, 190, 200],
    [210, 220, 230, 240, 250, 260, 270, 280, 290, 300],
    [310, 320, 330, 340, 350, 360, 370, 380, 390, 400],
    [410, 420, 430, 440, 450, 460, 470, 480, 490, 500]
]

const BusinessBonus = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
    [41, 42, 43, 44, 45, 46, 47, 48, 49, 50]
]

let businessAdd = 0;

let lvlBusinessShaurma = 0;
let lvlBusinessShop = 0;
let lvlBusinessComputer = 0;
let lvlBusinessAirplane = 0;
let lvlBusinessEarth = 0;

let justShaurma = 0;
let justShop = 0;
let justComputer = 0;
let justAirplane = 0;
let justEarth = 0;

setInterval(()=> {
    balance += businessAdd
},1000)

document.addEventListener("DOMContentLoaded", function () {
    putCostShaurma.innerHTML = `- ${BusinessCost[0][lvlBusinessShaurma]} $<br>+ ${BusinessBonus[0][lvlBusinessShaurma]} $ в сек`;
    putCostShop.innerHTML = `- ${BusinessCost[1][lvlBusinessShop]} $<br>+ ${BusinessBonus[1][lvlBusinessShop]} $ в сек`;
    putCostComputer.innerHTML = `- ${BusinessCost[2][lvlBusinessComputer]} $<br>+ ${BusinessBonus[2][lvlBusinessComputer]} $ в сек`;
    putCostAirplane.innerHTML = `- ${BusinessCost[3][lvlBusinessAirplane]} $<br>+ ${BusinessBonus[3][lvlBusinessAirplane]} $ в сек`;
    putCostEarth.innerHTML = `- ${BusinessCost[4][lvlBusinessEarth]} $<br>+ ${BusinessBonus[4][lvlBusinessEarth]} $ в сек`;
});

btnBuyShaurmaNode.addEventListener('click', ()=>{
    if(balance >= BusinessCost[0][lvlBusinessShaurma]) {
        balance -= BusinessCost[0][lvlBusinessShaurma];
        businessAdd += BusinessBonus[0][lvlBusinessShaurma];
        justShaurma += BusinessBonus[0][lvlBusinessShaurma];
        lvlBusinessShaurma++;
        putCostShaurma.innerHTML = `- ${BusinessCost[0][lvlBusinessShaurma]} $<br>+ ${BusinessBonus[0][lvlBusinessShaurma]} $ в сек`;
        new Audio('audio/success.mp3').play();
        businessLvlShaurma.textContent = lvlBusinessShaurma;
        console.log(businessAdd)
        if (lvlBusinessShaurma == 10) {
            btnBuyShaurmaNode.classList.add('d-none');
            putCostShaurma.textContent = `+ ${justShaurma} $ в сек`;
        }
    } else {
        new Audio('audio/no.mp3').play();
    }
    
})

btnBuyShopNode.addEventListener('click', () => {
    if (balance >= BusinessCost[1][lvlBusinessShop]) {
        balance -= BusinessCost[1][lvlBusinessShop];
        businessAdd += BusinessBonus[1][lvlBusinessShop];
        justShop += BusinessBonus[1][lvlBusinessShop];
        lvlBusinessShop++;
        if (lvlBusinessShop < 10) {
            putCostShop.innerHTML = `- ${BusinessCost[1][lvlBusinessShop]} $<br>+ ${BusinessBonus[1][lvlBusinessShop]} $ в сек`;
        }
        new Audio('audio/success.mp3').play();
        businessLvlShop.textContent = lvlBusinessShop;
        if (lvlBusinessShop == 10) {
            btnBuyShopNode.classList.add('d-none');
            putCostShop.textContent = `+ ${justShop} $ в сек`;
        }
    } else {
        new Audio('audio/no.mp3').play();
    }
});

btnBuyComputerNode.addEventListener('click', () => {
    if (balance >= BusinessCost[2][lvlBusinessComputer]) {
        balance -= BusinessCost[2][lvlBusinessComputer];
        businessAdd += BusinessBonus[2][lvlBusinessComputer];
        justComputer += BusinessBonus[2][lvlBusinessComputer];
        lvlBusinessComputer++;
        if (lvlBusinessComputer < 10) {
            putCostComputer.innerHTML = `- ${BusinessCost[2][lvlBusinessComputer]} $<br>+ ${BusinessBonus[2][lvlBusinessComputer]} $ в сек`;
        }
        new Audio('audio/success.mp3').play();
        businessLvlComputer.textContent = lvlBusinessComputer;
        if (lvlBusinessComputer == 10) {
            btnBuyComputerNode.classList.add('d-none');
            putCostComputer.textContent = `+ ${justComputer} $ в сек`;
        }
    } else {
        new Audio('audio/no.mp3').play();
    }
});

btnBuyAirplaneNode.addEventListener('click', () => {
    if (balance >= BusinessCost[3][lvlBusinessAirplane]) {
        balance -= BusinessCost[3][lvlBusinessAirplane];
        businessAdd += BusinessBonus[3][lvlBusinessAirplane];
        justAirplane += BusinessBonus[3][lvlBusinessAirplane];
        lvlBusinessAirplane++;
        if (lvlBusinessAirplane < 10) {
            putCostAirplane.innerHTML = `- ${BusinessCost[3][lvlBusinessAirplane]} $<br>+ ${BusinessBonus[3][lvlBusinessAirplane]} $ в сек`;
        }
        new Audio('audio/success.mp3').play();
        businessLvlAirplane.textContent = lvlBusinessAirplane;
        if (lvlBusinessAirplane == 10) {
            btnBuyAirplaneNode.classList.add('d-none');
            putCostAirplane.textContent = `+ ${justAirplane} $ в сек`;
        }
    } else {
        new Audio('audio/no.mp3').play();
    }
});

btnBuyEarthNode.addEventListener('click', () => {
    if (balance >= BusinessCost[4][lvlBusinessEarth]) {
        balance -= BusinessCost[4][lvlBusinessEarth];
        businessAdd += BusinessBonus[4][lvlBusinessEarth];
        justEarth += BusinessBonus[4][lvlBusinessEarth];
        lvlBusinessEarth++;
        if (lvlBusinessEarth < 10) {
            putCostEarth.innerHTML = `- ${BusinessCost[4][lvlBusinessEarth]} $<br>+ ${BusinessBonus[4][lvlBusinessEarth]} $ в сек`;
        }
        new Audio('audio/success.mp3').play();
        businessLvlEarth.textContent = lvlBusinessEarth;
        if (lvlBusinessEarth == 10) {
            btnBuyEarthNode.classList.add('d-none');
            putCostEarth.textContent = `+ ${justEarth} $ в сек`;
        }
    } else {
        new Audio('audio/no.mp3').play();
    }
});
