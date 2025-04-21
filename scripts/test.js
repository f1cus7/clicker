const pageMain = document.querySelector('.page-main');
const pageBusiness = document.querySelector('.page-business');

const btnPageMain = document.getElementById('btn-page-main');
const btnPageBusiness = document.getElementById('btn-page-business');


btnPageBusiness.addEventListener('click', () => {
    pageMain.classList.add('d-none');
    pageBusiness.classList.remove('d-none');
    btnPageMain.classList.remove('navigation-btn-active');
    btnPageBusiness.classList.add('navigation-btn-active');
})

btnPageMain.addEventListener('click', () => {
    pageMain.classList.remove('d-none');
    pageBusiness.classList.add('d-none');
    btnPageMain.classList.add('navigation-btn-active');
    btnPageBusiness.classList.remove('navigation-btn-active');
})

