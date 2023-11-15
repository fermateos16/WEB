
const menuTrigger = document.querySelector('.menu-trigger');
const menuList = document.querySelector('.menu-lista');

menuTrigger.addEventListener('click', () => {
  menuList.classList.toggle('open')
  menuTrigger.classList.toggle('open');
});