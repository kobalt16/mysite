let menuBtn = document.querySelector('.btn');

let menu = document.querySelector('.menu-burger');


menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})