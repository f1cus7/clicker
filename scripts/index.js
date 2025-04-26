const balanceNode = document.getElementById('balance');
const sectionClick = document.querySelector('.inner-section');
const bonusForClickNode = document.getElementById('bonusForClick');
const costOfUpdateNode = document.getElementById('costOfUpdate');
const btnBuyUpdClickNode = document.querySelector('.btn-buy-upd-click');

let balance = 0.00;
const updClick = [1.00, 2.50, 5.00, 10.00, 25.00];
const updClickCost = [1000, 10000, 25000, 100000];
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

const BusinessBonus = [
    [   50,   65,   90,  125,  180,  250,  350,  655,  780,  955],
    [   100,  130,  185,  275,  360,  500,  700,  975, 1375, 1900],
    [  180,  260,  360,  510,  710,  1000, 1400, 1950, 2730, 3900],
    [  400,  530,  750, 1050, 1420, 2000, 2750, 3900, 5500, 6700],
    [  750, 1050, 1500, 2000, 3000, 4000, 5500, 8000,11000,15200],
  ];

const BusinessCost = [
    [  3000,   9426,  16024,  27241,   46310,   78727,  133836,  227521,  386786,  657536],
    [ 10000,  18852,  32048,  54482,   92620,  157454,  267672,  455042,  773572, 1315072],
    [ 25000,  37704,  64097, 108965,  185240,  314908,  535344,  910084, 1547143, 2630143],
    [ 40000,  75408, 128194, 217929,  370480,  629816, 1070687, 1820168, 3094286, 5260287],
    [ 90000, 150000, 256500, 435000,  740000, 1260000, 2141375, 3640337, 6188572,10520573],
];
  

let businessAdd = 0;
let businessSum = localStorage.getItem('businessSum') || 0;

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('businessSum').textContent = businessSum;
});

let lvlBusinessShaurma = parseInt(localStorage.getItem("lvlBusinessShaurma")) || 0;
let lvlBusinessShop = parseInt(localStorage.getItem("lvlBusinessShop")) || 0;
let lvlBusinessComputer = parseInt(localStorage.getItem("lvlBusinessComputer")) || 0;
let lvlBusinessAirplane = parseInt(localStorage.getItem("lvlBusinessAirplane")) || 0;
let lvlBusinessEarth = parseInt(localStorage.getItem("lvlBusinessEarth")) || 0;

let justShaurma = parseInt(localStorage.getItem("justShaurma")) || 0;
let justShop = parseInt(localStorage.getItem("justShop")) || 0;
let justComputer = parseInt(localStorage.getItem("justComputer")) || 0;
let justAirplane = parseInt(localStorage.getItem("justAirplane")) || 0;
let justEarth = parseInt(localStorage.getItem("justEarth")) || 0;

businessAdd = justShaurma + justShop + justComputer + justAirplane + justEarth;

setInterval(() => {
    balance += businessAdd;
    localStorage.setItem("balance", balance);
}, 1000);

document.addEventListener("DOMContentLoaded", function () {
    const loadLvl = (index, lvl) => `- ${BusinessCost[index][lvl]} $<br>+ ${BusinessBonus[index][lvl]} $ в сек`;

    const updateBusinessUI = (lvl, costEl, lvlEl, just, index, btn) => {
        lvlEl.textContent = lvl;
        if (lvl < 10) {
            costEl.innerHTML = loadLvl(index, lvl);
        } else {
            costEl.textContent = `+ ${just} $ в сек`;
            btn.classList.add("d-none");
        }
    };

    updateBusinessUI(lvlBusinessShaurma, putCostShaurma, businessLvlShaurma, justShaurma, 0, btnBuyShaurmaNode);
    updateBusinessUI(lvlBusinessShop, putCostShop, businessLvlShop, justShop, 1, btnBuyShopNode);
    updateBusinessUI(lvlBusinessComputer, putCostComputer, businessLvlComputer, justComputer, 2, btnBuyComputerNode);
    updateBusinessUI(lvlBusinessAirplane, putCostAirplane, businessLvlAirplane, justAirplane, 3, btnBuyAirplaneNode);
    updateBusinessUI(lvlBusinessEarth, putCostEarth, businessLvlEarth, justEarth, 4, btnBuyEarthNode);
});

function handlePurchase(btn, costDisplay, levelDisplay, index, levelVar, justVar, storageLvlKey, storageJustKey) {
    if (balance >= BusinessCost[index][levelVar]) {
        balance -= BusinessCost[index][levelVar];
        const bonus = BusinessBonus[index][levelVar];
        businessAdd += bonus;
        justVar += bonus;
        levelVar++;
        new Audio('audio/success.mp3').play();
        levelDisplay.textContent = levelVar;
        businessSum++;
        localStorage.setItem('businessSum', businessSum);
        document.getElementById('businessSum').textContent = businessSum;

        if (levelVar < 10) {
            costDisplay.innerHTML = `- ${BusinessCost[index][levelVar]} $<br>+ ${BusinessBonus[index][levelVar]} $ в сек`;
        } else {
            btn.classList.add('d-none');
            costDisplay.textContent = `+ ${justVar} $ в сек`;
        }

        localStorage.setItem("balance", balance);
        localStorage.setItem(storageLvlKey, levelVar);
        localStorage.setItem(storageJustKey, justVar);
    } else {
        new Audio('audio/no.mp3').play();
    }
    return [levelVar, justVar];
}

btnBuyShaurmaNode.addEventListener('click', () => {
    [lvlBusinessShaurma, justShaurma] = handlePurchase(
        btnBuyShaurmaNode,
        putCostShaurma,
        businessLvlShaurma,
        0,
        lvlBusinessShaurma,
        justShaurma,
        "lvlBusinessShaurma",
        "justShaurma"
    );
});

btnBuyShopNode.addEventListener('click', () => {
    [lvlBusinessShop, justShop] = handlePurchase(
        btnBuyShopNode,
        putCostShop,
        businessLvlShop,
        1,
        lvlBusinessShop,
        justShop,
        "lvlBusinessShop",
        "justShop"
    );
});

btnBuyComputerNode.addEventListener('click', () => {
    [lvlBusinessComputer, justComputer] = handlePurchase(
        btnBuyComputerNode,
        putCostComputer,
        businessLvlComputer,
        2,
        lvlBusinessComputer,
        justComputer,
        "lvlBusinessComputer",
        "justComputer"
    );
});

btnBuyAirplaneNode.addEventListener('click', () => {
    [lvlBusinessAirplane, justAirplane] = handlePurchase(
        btnBuyAirplaneNode,
        putCostAirplane,
        businessLvlAirplane,
        3,
        lvlBusinessAirplane,
        justAirplane,
        "lvlBusinessAirplane",
        "justAirplane"
    );
});

btnBuyEarthNode.addEventListener('click', () => {
    [lvlBusinessEarth, justEarth] = handlePurchase(
        btnBuyEarthNode,
        putCostEarth,
        businessLvlEarth,
        4,
        lvlBusinessEarth,
        justEarth,
        "lvlBusinessEarth",
        "justEarth"
    );
});

// ===== ПРЕДМЕТЫ =====

const carsNode = document.querySelector('.cars');
const planesNode = document.querySelector('.planes');
const housesNode = document.querySelector('.houses');
const picturesNode = document.querySelector('.pictures');

const btnSwitchCarsNode = document.getElementById('btn-switch-cars');
const btnSwitchPlanesNode = document.getElementById('btn-switch-planes');
const btnSwitchHousesNode = document.getElementById('btn-switch-houses');
const btnSwitchPicturesNode = document.getElementById('btn-switch-pictures');

btnSwitchCarsNode.addEventListener('click', () => {
    btnSwitchCarsNode.classList.add('page-items-btn-checked');
    btnSwitchPlanesNode.classList.remove('page-items-btn-checked');
    btnSwitchHousesNode.classList.remove('page-items-btn-checked');
    btnSwitchPicturesNode.classList.remove('page-items-btn-checked');
    carsNode.classList.remove('d-none');
    planesNode.classList.add('d-none');
    housesNode.classList.add('d-none');
    picturesNode.classList.add('d-none');
})

btnSwitchPlanesNode.addEventListener('click', () => {
    btnSwitchCarsNode.classList.remove('page-items-btn-checked');
    btnSwitchPlanesNode.classList.add('page-items-btn-checked');
    btnSwitchHousesNode.classList.remove('page-items-btn-checked');
    btnSwitchPicturesNode.classList.remove('page-items-btn-checked');
    carsNode.classList.add('d-none');
    planesNode.classList.remove('d-none');
    housesNode.classList.add('d-none');
    picturesNode.classList.add('d-none');
})

btnSwitchHousesNode.addEventListener('click', () => {
    btnSwitchCarsNode.classList.remove('page-items-btn-checked');
    btnSwitchPlanesNode.classList.remove('page-items-btn-checked');
    btnSwitchHousesNode.classList.add('page-items-btn-checked');
    btnSwitchPicturesNode.classList.remove('page-items-btn-checked');
    carsNode.classList.add('d-none');
    planesNode.classList.add('d-none');
    housesNode.classList.remove('d-none');
    picturesNode.classList.add('d-none');
})

btnSwitchPicturesNode.addEventListener('click', () => {
    btnSwitchCarsNode.classList.remove('page-items-btn-checked');
    btnSwitchPlanesNode.classList.remove('page-items-btn-checked');
    btnSwitchHousesNode.classList.remove('page-items-btn-checked');
    btnSwitchPicturesNode.classList.add('page-items-btn-checked');
    carsNode.classList.add('d-none');
    planesNode.classList.add('d-none');
    housesNode.classList.add('d-none');
    picturesNode.classList.remove('d-none');
})




const cars = [
    { id: 1, name: 'ГАЗ-3110 «Волга»', cost: 500, country: 'Россия', rare: 'default' },
    { id: 2, name: 'Honda Civic', cost: 1000, country: 'Япония', rare: 'default' },
    { id: 3, name: 'Toyota Corolla', cost: 1500, country: 'Япония', rare: 'default' },
    { id: 4, name: 'Kia Soul', cost: 3000, country: 'Южная Корея', rare: 'default' },
    { id: 5, name: 'Mini Cooper S', cost: 5000, country: 'Британия', rare: 'default' },
    { id: 6, name: 'Mazda 3', cost: 7500, country: 'Япония', rare: 'common' },
    { id: 7, name: 'Mercedes C-class', cost: 10000, country: 'Германия', rare: 'common' },
    { id: 8, name: 'Honda Accord', cost: 15000, country: 'Япония', rare: 'common' },
    { id: 9, name: 'Volkswagen Golf GTI', cost: 20000, country: 'Германия', rare: 'common' },
    { id: 10, name: 'Audi A6 C8', cost: 25000, country: 'Германия', rare: 'common' },
    { id: 11, name: 'Tesla Model 3', cost: 400000, country: 'США', rare: 'epic' },
    { id: 12, name: 'Porsche Cayman 718', cost: 500000, country: 'Германия', rare: 'epic' },
    { id: 13, name: 'BMW M3', cost: 750000, country: 'Германия', rare: 'epic' },
    { id: 14, name: 'Tesla Model S', cost: 1000000, country: 'США', rare: 'epic' },
    { id: 15, name: 'Porsche 911', cost: 1750000, country: 'Германия', rare: 'epic' },
    { id: 16, name: 'Lamborghini Huracán EVO', cost: 2500000, country: 'Италия', rare: 'legendary' },
    { id: 17, name: 'Aston Martin DB11', cost: 3500000, country: 'Британия', rare: 'legendary' },
    { id: 18, name: 'Bugatti Chiron', cost: 5000000, country: 'Франция', rare: 'legendary' },
    { id: 19, name: 'Ferrari 812 Superfast', cost: 7000000, country: 'Италия', rare: 'legendary' },
    { id: 20, name: 'Pagani Huayra Roadster', cost: 10000000, country: 'Италия', rare: 'legendary' }
];
  

document.addEventListener("DOMContentLoaded", function () {
    for (let car of cars) {
    carsNode.innerHTML += `
    <div class="car-container">
        <div class="car-image-container">
            <img src="images/car-${car.id}.png" alt="" class="car-image">
        </div>
        <div class="car-title">${car.name}<br><span class="country-text">Страна: </span><span class="item-country">${car.country}</span></div>
            <button class="item-btn" id="btnCar${car.id}">${car.cost} $</button>
        </div>
        <div class="page-items-hr-container">
            <hr class="item-hr">
        </div>
    `
}
});


const planes = [
    { id: 1, name: 'Cessna 172 Skyhawk', cost: 5000, country: 'США', rare: 'default' },
    { id: 2, name: 'Cirrus SR20', cost: 25000, country: 'США', rare: 'default' },
    { id: 3, name: 'Piper Meridian', cost: 50000, country: 'США', rare: 'common' },
    { id: 4, name: 'Beechcraft Baron 58', cost: 100000, country: 'США', rare: 'common' },
    { id: 5, name: 'Cessna Citation I', cost: 500000, country: 'США', rare: 'common' },
    { id: 6, name: 'Embraer Phenom 100', cost: 1000000, country: 'Бразилия', rare: 'epic' },
    { id: 7, name: 'Cessna Citation XLS', cost: 5000000, country: 'США', rare: 'epic' },
    { id: 8, name: 'Gulfstream G280', cost: 10000000, country: 'Израиль', rare: 'epic' },
    { id: 9, name: 'Gulfstream G550', cost: 25000000, country: 'США', rare: 'legendary' },
    { id: 10, name: 'Gulfstream G650ER', cost: 50000000, country: 'США', rare: 'legendary' }
  ];

document.addEventListener("DOMContentLoaded", function () {
    for (let plane of planes) {
    planesNode.innerHTML += `
    <div class="car-container">
        <div class="car-image-container">
            <img src="images/plane-${plane.id}.jpg" alt="" class="plane-image">
        </div>
        <div class="car-title">${plane.name}<br><span class="country-text">Страна: </span><span class="item-country">${plane.country}</span></div>
            <button class="item-btn" id="btnPlane${plane.id}">${plane.cost} $</button>
        </div>
        <div class="page-items-hr-container">
            <hr class="item-hr">
        </div>
    `
}
});

const houses = [
    { id: 1, name: 'Южная Каролина', cost: 5000, rare: 'default' },
    { id: 2, name: 'Южная Каролина', cost: 10000, rare: 'default' },
    { id: 3, name: 'Аризона', cost: 25000, rare: 'default' },
    { id: 4, name: 'Айова', cost: 50000, rare: 'default' },
    { id: 5, name: 'Огайо', cost: 100000, rare: 'common' },
    { id: 6, name: 'Арканзас', cost: 250000, rare: 'common' },
    { id: 7, name: 'Кентукки', cost: 500000, rare: 'common' },
    { id: 8, name: 'Калифорния', cost: 1000000, rare: 'common' },
    { id: 9, name: 'Калифорния', cost: 5000000, rare: 'epic' },
    { id: 10, name: 'Флорида', cost: 10000000, rare: 'epic' },
    { id: 11, name: 'Вашингтон', cost: 20000000, rare: 'epic' },
    { id: 12, name: 'Калифорния', cost: 35000000, rare: 'legendary' },
    { id: 13, name: 'Даллас', cost: 50000000, rare: 'legendary' },
    { id: 14, name: 'Калифорния', cost: 100000000, rare: 'legendary' },
    { id: 15, name: 'Калифорния', cost: 250000000, rare: 'legendary' }
];

document.addEventListener("DOMContentLoaded", function () {
    for (let house of houses) {
    housesNode.innerHTML += `
    <div class="car-container">
        <div class="car-image-container">
            <img src="images/house-${house.id}.webp" alt="" class="plane-image">
        </div>
        <div class="car-title">${house.name}</div>
            <button class="item-btn" id="btnHouse${house.id}">${house.cost} $</button>
        </div>
        <div class="page-items-hr-container">
            <hr class="item-hr">
        </div>
    `
}
});

const pictures = [
    { id: 1, name: 'Телефонные будки', author: 'Ричард Эстес', cost: 250000, rare: 'default' },
    { id: 2, name: 'Чоп-сюи', author: 'Эдвард Хоппер', cost: 500000, rare: 'default' },
    { id: 3, name: 'Американский пейзаж', author: 'Чарльз Шилер', cost: 750000, rare: 'default' },
    { id: 4, name: 'Прибытие весны, Нормандия', author: 'Дэвид Хокни', cost: 1500000, rare: 'default' },
    { id: 5, name: 'Оушен Парк №54', author: 'Ричард Дайбенкорн', cost: 3000000, rare: 'default' },
    { id: 6, name: 'Синие столбы', author: 'Джексон Поллок', cost: 5000000, rare: 'common' },
    { id: 7, name: 'Пароход у устья гавани', author: 'Дж. М. У. Тернер', cost: 8000000, rare: 'common' },
    { id: 8, name: 'Бродвей Буги-Вуги', author: 'Пит Мондриан', cost: 15000000, rare: 'common' },
    { id: 9, name: 'Оранжевый, Красный, Жёлтый', author: 'Марк Ротко', cost: 20000000, rare: 'common' },
    { id: 10, name: 'Без названия (Море, Воздух и Солнце)', author: 'Сай Твомбли', cost: 25000000, rare: 'epic' },
    { id: 11, name: 'Парижская улица, дождливый день', author: 'Гюстав Кабийботт', cost: 60000000, rare: 'epic' },
    { id: 12, name: 'Школьные будни', author: 'Фикус Комнатный', cost: 80000000, rare: 'epic' },
    { id: 13, name: 'Большой всплеск', author: 'Дэвид Хокни', cost: 90000000, rare: 'epic' },
    { id: 14, name: 'Водяные лилии', author: 'Клод Моне', cost: 95000000, rare: 'legendary' },
    { id: 15, name: 'Пшеничное поле с кипарисами', author: 'Винсент Ван Гог', cost: 100000000, rare: 'legendary' }
];

document.addEventListener("DOMContentLoaded", function () {
    for (let picture of pictures) {
    picturesNode.innerHTML += `
    <div class="car-container">
        <div class="car-image-container">
            <img src="images/picture-${picture.id}.jpg" alt="" class="plane-image">
        </div>
        <div class="car-title">${picture.name}<br><span class="country-text">Автор: </span><span class="item-country">${picture.author}</span></div>
            <button class="item-btn" id="btnPicture${picture.id}">${picture.cost} $</button>
        </div>
        <div class="page-items-hr-container">
            <hr class="item-hr">
        </div>
    `
}
});

let itemsBuyed = localStorage.getItem('itemsBuyed') || 0;
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('itemsBuyed').textContent = itemsBuyed;
})

document.addEventListener("click", function (event) {
    const button = event.target;
    if (!button.id || !(button.classList.contains("item-btn") || button.classList.contains("item-btn-buyed"))) return;
  
    const id = button.id;
    const text = button.textContent.trim();
  
    if (text === "Использовать") {
      const num = parseInt(id.replace(/^\D+/g, ""), 10);
  
      if (id.startsWith("btnPicture")) {
        const picture = pictures.find(p => p.id === num);
        console.log("Используем Картину:", picture);
        localStorage.setItem("selectedPicture", JSON.stringify(picture));
        document.getElementById('used-picture').innerHTML = `
        <div class="page-stat-use-items-img-container">
            <img src="images/picture-${picture.id}.jpg" alt="" class="person-plane-img">
        </div>
        <div class="page-stat-use-items-description" >${picture.name}<br>
        Автор: <span class="carCountry">${picture.author}</span></div>
        `
      }
      else if (id.startsWith("btnHouse")) {
        const house = houses.find(h => h.id === num);
        console.log("Используем дом:", house);
        localStorage.setItem("selectedHouse", JSON.stringify(house));
        document.getElementById('used-house').innerHTML = `
        <div class="page-stat-use-items-img-container">
            <img src="images/house-${house.id}.webp" alt="" class="person-plane-img">
        </div>
        <div class="page-stat-use-items-description" >${house.name}</div>
        `
      }
      else if (id.startsWith("btnCar")) {
        const car = cars.find(c => c.id === num);
        console.log("Используем машину:", car);
        localStorage.setItem("selectedCar", JSON.stringify(car));
        document.getElementById('used-car').innerHTML = `
        <div class="page-stat-use-items-img-container">
            <img src="images/car-${car.id}.png" alt="" class="person-svg">
        </div>
        <div class="page-stat-use-items-description" >${car.name}<br>
        Страна: <span class="carCountry">${car.country}</span></div>
        `
      }
      else if (id.startsWith("btnPlane")) {
        const plane = planes.find(pl => pl.id === num);
        console.log("Используем самолёт:", plane);
        localStorage.setItem("selectedPlane", JSON.stringify(plane));
        document.getElementById('used-plane').innerHTML = `
        <div class="page-stat-use-items-img-container">
            <img src="images/plane-${plane.id}.jpg" alt="" class="person-plane-img">
        </div>
        <div class="page-stat-use-items-description" >${plane.name}<br>
        Страна: <span class="carCountry">${plane.country}</span></div>
        `
      }
  
      return;
    }
  
    const cost = Number(text.replace('$', '').trim());
    if (balance >= cost) {
      balance -= cost;
      localStorage.setItem(id, 'buyed');
      itemsBuyed++;
      document.getElementById('itemsBuyed').textContent = itemsBuyed;
      localStorage.setItem('itemsBuyed', itemsBuyed);
      button.classList.remove('item-btn');
      button.classList.add('item-btn-buyed');
      button.textContent = 'Использовать';
      new Audio('audio/success.mp3').play();
    } else {
      new Audio('audio/no.mp3').play();
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    // Картинка
    const savedPic = localStorage.getItem("selectedPicture");
    if (savedPic) {
      const picture = JSON.parse(savedPic);
      document.getElementById('used-picture').innerHTML = `
        <div class="page-stat-use-items-img-container">
          <img src="images/picture-${picture.id}.jpg" alt="" class="person-plane-img">
        </div>
        <div class="page-stat-use-items-description">${picture.name}<br>
          Автор: <span class="carCountry">${picture.author}</span>
        </div>
      `;
    }
    // Дом
    const savedHouse = localStorage.getItem("selectedHouse");
    if (savedHouse) {
      const house = JSON.parse(savedHouse);
      document.getElementById('used-house').innerHTML = `
        <div class="page-stat-use-items-img-container">
          <img src="images/house-${house.id}.webp" alt="" class="person-plane-img">
        </div>
        <div class="page-stat-use-items-description">${house.name}</div>
      `;
    }
    // Машина
    const savedCar = localStorage.getItem("selectedCar");
    if (savedCar) {
      const car = JSON.parse(savedCar);
      document.getElementById('used-car').innerHTML = `
        <div class="page-stat-use-items-img-container">
          <img src="images/car-${car.id}.png" alt="" class="person-svg">
        </div>
        <div class="page-stat-use-items-description">${car.name}<br>
          Страна: <span class="carCountry">${car.country}</span>
        </div>
      `;
    }
    // Самолёт
    const savedPlane = localStorage.getItem("selectedPlane");
    if (savedPlane) {
      const plane = JSON.parse(savedPlane);
      document.getElementById('used-plane').innerHTML = `
        <div class="page-stat-use-items-img-container">
          <img src="images/plane-${plane.id}.jpg" alt="" class="person-plane-img">
        </div>
        <div class="page-stat-use-items-description">${plane.name}<br>
          Страна: <span class="carCountry">${plane.country}</span>
        </div>
      `;
    }
  });

document.addEventListener("DOMContentLoaded", function () {
    const allButtons = document.querySelectorAll(".item-btn");
    const boughtButtons = [];

    allButtons.forEach(button => {
        const id = button.id;
        const storedState = localStorage.getItem(id);

        if (storedState === 'buyed') {
            button.classList.remove('item-btn');
            button.classList.add('item-btn-buyed');
            button.textContent = 'Использовать';

            boughtButtons.push(id);
        }
    });

    console.log("Список купленных кнопок:", boughtButtons);
});

// ===== КАРТЫ =====

const btnCard1Node = document.getElementById('card1');
const btnCard2Node = document.getElementById('card2');
const btnCard3Node = document.getElementById('card3');
const btnCard4Node = document.getElementById('card4');
const btnCard5Node = document.getElementById('card5');
const btnCard6Node = document.getElementById('card6');

let cardsSum = localStorage.getItem('cardsSum') || 0;
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('cardsSum').textContent = cardsSum;
});


function loadButtonState() {
    const buttonStates = JSON.parse(localStorage.getItem('buttonStates')) || {};

    Object.keys(buttonStates).forEach(key => {
        const state = buttonStates[key];
        const button = document.getElementById(key);

        if (state.textContent) {
            button.textContent = state.textContent;
        }

        if (state.classList) {
            button.className = '';
            state.classList.forEach(cls => button.classList.add(cls));
        }

        if (state.disabled !== undefined) {
            if (state.disabled) {
                button.setAttribute('disabled', true);
            } else {
                button.removeAttribute('disabled');
            }
        }
    });

    const savedImage = localStorage.getItem('mc');
    if (savedImage) {
        document.querySelector('.main-zarabotok-mc').style.backgroundImage = savedImage;
    }
}

document.addEventListener('DOMContentLoaded', loadButtonState);

function saveButtonState() {
    const buttonStates = {};

    [btnCard1Node, btnCard2Node, btnCard3Node, btnCard4Node, btnCard5Node, btnCard6Node].forEach(button => {
        buttonStates[button.id] = {
            textContent: button.textContent,
            classList: [...button.classList],
            disabled: button.hasAttribute('disabled')
        };
    });

    localStorage.setItem('buttonStates', JSON.stringify(buttonStates));
}

function handleCardButtonClick(currentBtn, nextBtn, cardImageUrl) {
    if (currentBtn.textContent !== 'Использовать') {
        if (nextBtn) {
            nextBtn.removeAttribute("disabled");
            nextBtn.classList.remove('btn-buy-card-locked');
            nextBtn.textContent = 'Получить стиль';
            }
        currentBtn.textContent = 'Использовать';
        cardsSum++;
        document.getElementById('cardsSum').textContent = cardsSum;
        localStorage.setItem('cardsSum', cardsSum);
        localStorage.setItem(currentBtn.id, true);
        saveButtonState();
    } else {
        document.querySelector('.main-zarabotok-mc').style.backgroundImage = `url(${cardImageUrl})`;
        new Audio('audio/success.mp3').play();
        localStorage.setItem('mc', `url(${cardImageUrl})`);
        saveButtonState();
    }
}

btnCard1Node.addEventListener('click', () => handleCardButtonClick(btnCard1Node, btnCard2Node, 'images/card1.jpg'));
btnCard2Node.addEventListener('click', () => handleCardButtonClick(btnCard2Node, btnCard3Node, 'images/card2.jpg'));
btnCard3Node.addEventListener('click', () => handleCardButtonClick(btnCard3Node, btnCard4Node, 'images/card3.jpg'));
btnCard4Node.addEventListener('click', () => handleCardButtonClick(btnCard4Node, btnCard5Node, 'images/card4.jpg'));
btnCard5Node.addEventListener('click', () => handleCardButtonClick(btnCard5Node, btnCard6Node, 'images/card5.jpg'));
btnCard6Node.addEventListener('click', () => handleCardButtonClick(btnCard6Node, null, 'images/card6.jpg'));


let hours = 0;
let minutes = 0;
let startTime = Date.now();

document.addEventListener('DOMContentLoaded', function () {
    const savedTime = JSON.parse(localStorage.getItem('gameTime'));

    if (savedTime) {
        startTime = savedTime.startTime;
        hours = savedTime.hours;
        minutes = savedTime.minutes;
    }

    updateTimeDisplay();

    startTimer();
});

function updateTimeDisplay() {
    document.getElementById('hourses').textContent = hours;
    document.getElementById('Minutes').textContent = minutes;
}

function startTimer() {
    setInterval(() => {

        const currentTime = Date.now();
        
        const timeElapsed = Math.floor((currentTime - startTime) / 1000);

        hours = Math.floor(timeElapsed / 3600);
        minutes = Math.floor((timeElapsed % 3600) / 60);

        updateTimeDisplay();

        localStorage.setItem('gameTime', JSON.stringify({
            startTime: startTime,
            hours: hours,
            minutes: minutes
        }));
    }, 1000);
}

const images = document.querySelectorAll('img');

images.forEach(img => {
  img.draggable = false;                        
  img.addEventListener('dragstart', e => e.preventDefault());
});

document.addEventListener('dragstart', e => {
  if (e.target.tagName === 'IMG') {
    e.preventDefault();
  }
});


// localStorage.clear();