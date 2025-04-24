// document.addEventListener('contextmenu', event => event.preventDefault());
// document.querySelectorAll('img').forEach(img => {
//     img.setAttribute('draggable', 'false');
//   });

const mainZarabotokClick = document.querySelector('.main-zarabotok-click');

mainZarabotokClick.addEventListener('click', () => {
    const clickSound = new Audio('/audio/click.mp3');
    clickSound.play();
});