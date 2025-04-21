const mainZarabotokClick = document.querySelector('.main-zarabotok-click');

mainZarabotokClick.addEventListener('click', () => {
    const clickSound = new Audio('audio/click1.mp3');
    clickSound.play();
});

