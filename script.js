let menu = document.querySelector('#menubar');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('fa-xmark');
  menu.classList.toggle('open');
}