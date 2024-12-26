const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

const swiper = new Swiper('.home__swiper', {
    speed: 1200,
    effect: 'fade',

    });

    document
      .querySelector('.slide-1')
      .addEventListener('click', function (e) {
        const slider2 = document.querySelector('.slide-2');
        slider2.classList.remove('hidden-btn');
        const slider1 = document.querySelector('.slide-1');
        slider1.classList.add('hidden-btn');
        e.preventDefault();
        swiper.slideTo(0, 0);
      });

    document
      .querySelector('.slide-2')
      .addEventListener('click', function (e) {
        const slider1 = document.querySelector('.slide-1');
        slider1.classList.remove('hidden-btn');
        const slider2 = document.querySelector('.slide-2');
        slider2.classList.add('hidden-btn');
        e.preventDefault();
        swiper.slideTo(2, 0);
      });

// const swiperHome = new Swiper('.home__swiper', {
//     speed: 1200,
//     effect: 'fade',

//     pagination:{
//         el: '.swiper-pagination',
//         clickable: true,
//         renderBullet: (index, className) => {
//             return '<span class="' + className + '">' + String(index + 1).padStart(2, '0') + "</span>";
//         },
//     },
// })