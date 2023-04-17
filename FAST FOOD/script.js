let parent = document.querySelector('.nav__list');
let itemList = document.querySelector('.nav__item');
let link = document.querySelector('.nav__link');
let btn = document.querySelector('#btnMy');
let form = document.querySelector('.form');

let btnYou = document.querySelector('#btnYou');
let popup = document.querySelector('.popup');
let popup__msg = document.querySelector('.popup__msg');
let form__input = document.querySelector('.comment');

let form__inputO = document.querySelector('#form__inputO');
let form__close = document.querySelector('.form__close');
let form__closeC = document.querySelector('#form__closeC');
let food__list = document.querySelector('.food__list');

let food__item = document.querySelector('.food__item dish');
let fullscreen = document.querySelector('.fullscreen');



btn.addEventListener('click', function (evt) {
    evt.preventDefault();
    form.classList.add('active')
    btnYou.addEventListener('click', function (evt) {
        evt.preventDefault();
        popup.classList.add('active');
        form.classList.remove('active');
        let list = comment.value;
        popup__msg.textContent = `Уважаемый ${form__inputO.value}, спасибо за заказ:${list}`;
        form__closeC.addEventListener('click', (evt) => {
            popup.classList.remove('active');
        })
    })
    form__close.addEventListener('click', (evt) => {
        form.classList.remove('active');
    })
})




food__list.addEventListener('click', (event) => {
    let target = event.target;
    let elem = target.getAttribute('src');
    console.log(elem)
    fullscreen.setAttribute('src', elem);
    console.log(fullscreen)
    fullscreen.style.height = 'auto';

})

fullscreen.addEventListener('click', (event) => {
    fullscreen.style.height = '';
})