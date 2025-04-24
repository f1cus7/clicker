const pageMain = document.querySelector('.page-main');
const pageBusiness = document.querySelector('.page-business');
const pageItems = document.querySelector('.page-items');
const pageCards = document.querySelector('.page-cards');
const pageStat = document.querySelector('.page-stat');

const btnPageMain = document.getElementById('btn-page-main');
const btnPageBusiness = document.getElementById('btn-page-business');
const btnPageItems = document.getElementById('btn-page-items');
const btnPageCards = document.getElementById('btn-page-cards');
const btnPageStat = document.getElementById('btn-page-stat');

btnPageMain.addEventListener('click', () => {
    pageMain.classList.remove('d-none');
    pageBusiness.classList.add('d-none');
    pageItems.classList.add('d-none');
    pageCards.classList.add('d-none');
    pageStat.classList.add('d-none');
    btnPageMain.classList.add('navigation-btn-active');
    btnPageBusiness.classList.remove('navigation-btn-active');
    btnPageItems.classList.remove('navigation-btn-active');
    btnPageCards.classList.remove('navigation-btn-active');
    btnPageStat.classList.remove('navigation-btn-active');
})

btnPageBusiness.addEventListener('click', () => {
    pageMain.classList.add('d-none');
    pageBusiness.classList.remove('d-none');
    pageItems.classList.add('d-none');
    pageCards.classList.add('d-none');
    pageStat.classList.add('d-none');
    btnPageMain.classList.remove('navigation-btn-active');
    btnPageBusiness.classList.add('navigation-btn-active');
    btnPageItems.classList.remove('navigation-btn-active');
    btnPageCards.classList.remove('navigation-btn-active');
    btnPageStat.classList.remove('navigation-btn-active');
})

btnPageItems.addEventListener('click', () => {
    pageMain.classList.add('d-none');
    pageBusiness.classList.add('d-none');
    pageItems.classList.remove('d-none');
    pageCards.classList.add('d-none');
    pageStat.classList.add('d-none');
    btnPageMain.classList.remove('navigation-btn-active');
    btnPageBusiness.classList.remove('navigation-btn-active');
    btnPageItems.classList.add('navigation-btn-active');
    btnPageCards.classList.remove('navigation-btn-active');
    btnPageStat.classList.remove('navigation-btn-active');
})

btnPageCards.addEventListener('click', () => {
    pageMain.classList.add('d-none');
    pageBusiness.classList.add('d-none');
    pageItems.classList.add('d-none');
    pageCards.classList.remove('d-none');
    pageStat.classList.add('d-none');
    btnPageMain.classList.remove('navigation-btn-active');
    btnPageBusiness.classList.remove('navigation-btn-active');
    btnPageItems.classList.remove('navigation-btn-active');
    btnPageCards.classList.add('navigation-btn-active');
    btnPageStat.classList.remove('navigation-btn-active');
})

btnPageStat.addEventListener('click', () => {
    pageMain.classList.add('d-none');
    pageBusiness.classList.add('d-none');
    pageItems.classList.add('d-none');
    pageCards.classList.add('d-none');
    pageStat.classList.remove('d-none');
    btnPageMain.classList.remove('navigation-btn-active');
    btnPageBusiness.classList.remove('navigation-btn-active');
    btnPageItems.classList.remove('navigation-btn-active');
    btnPageCards.classList.remove('navigation-btn-active');
    btnPageStat.classList.add('navigation-btn-active');
})