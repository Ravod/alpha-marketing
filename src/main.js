`use strict`;


/* ---------- ********** ИМПОРТЫ ********** ---------- */


import './swiper/swiper-bundle.css';
import './main.scss';

import './swiper/swiper-bundle.js';







/* ---------- ********** HEADER ********** ---------- */


{
    //клик на кнопку-бургер

    const burger = document.querySelector (`.header--button__BURGER`);
    const ul = document.querySelector (`.header--ul__MENU`);
    
    const line1 = document.querySelector (`.header--line:first-of-type`);
    const line2 = document.querySelector (`.header--line:nth-of-type(2)`);
    const line3 = document.querySelector (`.header--line:last-of-type`);

    burger.addEventListener ('click', () => {
        ul.classList.toggle (`header--ul__MENU__open`);
        line1.classList.toggle (`line1`);
        line2.classList.toggle (`line2`);
        line3.classList.toggle (`line3`);
    });
}







/* ---------- ********** СЕКЦИЯ HERO ********** ---------- */


{
    //открытие - закрытие модальных окон

    const body = document.querySelector (`body`);
    const open = document.querySelector (`.hero--button`);

    const close = Array.from (document.querySelectorAll (`.hero--img__CLOSE`));
    const modal = Array.from (document.querySelectorAll (`.modal`));

    const form = document.querySelector (`.hero--form`);

    const toMain = document.querySelector (`.TO_MAIN`);



    open.addEventListener (`click`, () => {
        modal[0].classList.add (`visible`);
        window.scrollTo(0, 0);
    });

    close.forEach ((v, i, a) => {
        a[i].addEventListener (`click`, () => {
            modal[i].classList.remove (`visible`);
        });
    });

    form.addEventListener (`submit`, (event) => {
        event.preventDefault ();
        modal[0].classList.remove (`visible`);
        modal[1].classList.add (`visible`);
    });

    toMain.addEventListener (`click`, () => {
        modal[1].classList.remove (`visible`);
    })
}







/* ---------- ********** СЕКЦИЯ VACANCY ********** ---------- */


{
    //клики на кнопки выбора подразделений (без
    //последующего выбора группы блока в связи с наличием 
    //в макете только одной группы блоков)

    const buttons = Array.from (document.querySelectorAll (`.vacancy--button`));

    buttons.forEach ((v, i, a) => {
        a[i].addEventListener (`click`, () => {
            a[i].classList.add (`selected`);
            a.filter ((v1, i1, a1) => a1[i1] !== a[i]).forEach ((v2, i2, a2) => {
                a2[i2].classList.remove (`selected`);
            });
        });
    });


    //клики на кнопки раскрытия/закрытия подробностей вакансии

    const imgOpen = Array.from (document.querySelectorAll (`.vacancy--img__OPEN`));
    const imgClose = Array.from (document.querySelectorAll (`.vacancy--img__CLOSE`));
    const hiddenBlock = Array.from (document.querySelectorAll (`.vacancy--div__HIDDEN`));

    imgOpen.forEach ((v, i, a) => {
        a[i].addEventListener (`click`, () => {
            a[i].style.display = `none`;
            imgClose[i].style.display = `block`;
            hiddenBlock[i].style.display = `flex`;
        });
    });

    imgClose.forEach ((v, i, a) => {
        a[i].addEventListener (`click`, () => {
            a[i].style.display = `none`;
            imgOpen[i].style.display = `block`;
            hiddenBlock[i].style.display = `none`;
        });
    });



    //кнопка отклика на вакансию

    const buttonRespond = document.querySelector (`.vacancy--button__RESPOND`);
    const modal = Array.from (document.querySelectorAll (`.modal`));


    buttonRespond.addEventListener (`click`, () => {
        modal[0].classList.add (`visible`);
        window.scrollTo(0, 0);
    });
}







/* ---------- ********** СЕКЦИЯ ADVANTAGES ********** ---------- */


{
    //клики на кнопки раскрытия/закрытия подробностей преимуществ

    const imgOpen = Array.from (document.querySelectorAll (`.advantages--img__OPEN`));
    const imgClose = Array.from (document.querySelectorAll (`.advantages--img__CLOSE`));
    const hiddenBlock = Array.from (document.querySelectorAll (`.advantages--div__HIDDEN`));

    imgOpen.forEach ((v, i, a) => {
        a[i].addEventListener (`click`, () => {
            a[i].style.display = `none`;
            imgClose[i].style.display = `block`;
            hiddenBlock[i].style.display = `flex`;
        });
    });

    imgClose.forEach ((v, i, a) => {
        a[i].addEventListener (`click`, () => {
            a[i].style.display = `none`;
            imgOpen[i].style.display = `block`;
            hiddenBlock[i].style.display = `none`;
        });
    });
}







/* ---------- ********** СЕКЦИЯ PRODUCTS ********** ---------- */


{
    //клик по кнопкам выбора раздела

    const buttons = Array.from (document.querySelectorAll (`.products--button`));

    buttons.forEach ((v, i, a) => {
        a[i].addEventListener (`click`, () => {
            a[i].classList.add (`selected`);
            a.filter ((v1, i1, a1) => a1[i1] !== a[i]).forEach ((v2, i2, a2) => {
                a2[i2].classList.remove (`selected`);
            });
        });
    });



    //слайдер

    // const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

    const swiper = new Swiper ('.products--div__SWIPER', {

        effect: "coverflow",
        speed: 600,
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        slidesPerView: 2,
        slidesPerGroup: 1,
        initialSlide: 2,
        coverflowEffect: {
            rotate: 0,
            stretch: '15%',
            depth: 200,
            modifier: -2,
            slideShadows: true,
            scale: 1,
        },
        
        navigation: {
            nextEl: '.products--div__SWIPER_NEXT',
            prevEl: '.products--div__SWIPER_PREV',
        },
    
        pagination: {
            el: '.products--div__SWIPER_PAGINATION',
            type: 'bullets',
            clickable: true,
        }
    });
}







/* ---------- ********** СЕКЦИЯ CAREER ********** ---------- */


{
    //слайдер

    // const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

    const swiper = new Swiper ('.career--div__SWIPER', {

        loop: true,

        speed: 600,

        grabCursor: true,

        centeredSlides: true,

        slidesPerView: 1,

        initialSlide: 0,
	
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}







/* ---------- ********** СЕКЦИЯ PROGRESS ********** ---------- */


{
    //клик по кнопке перехода к анкете

    const button = document.querySelector (`.progress--button`);
    const modal = Array.from (document.querySelectorAll (`.modal`));


    button.addEventListener (`click`, () => {
        modal[0].classList.add (`visible`);
        window.scrollTo(0, 0);
    });
}







/* ---------- ********** СЕКЦИЯ CONTACTS ********** ---------- */


{
    //клик по кнопкам выбора города

    const buttons = Array.from (document.querySelectorAll (`.contacts--button`));
    const tel = Array.from (document.querySelectorAll (`.tel`));
    const geo = Array.from (document.querySelectorAll (`.geo`));
    const maps = Array.from (document.querySelectorAll (`.map`));


    buttons.forEach ((v, i, a) => {
        a[i].addEventListener (`click`, () => {
            a[i].classList.add (`selected`);
            a.filter ((v1, i1, a1) => a1[i1] !== a[i]).forEach ((v2, i2, a2) => {
                a2[i2].classList.remove (`selected`);
            });

            tel[i].classList.add (`sel`);
            tel.filter ((v1, i1, a1) => a1[i1] !== tel[i]).forEach ((v2, i2, a2) => {
                a2[i2].classList.remove (`sel`);
            });

            geo[i].classList.add (`sel`);
            geo.filter ((v1, i1, a1) => a1[i1] !== geo[i]).forEach ((v2, i2, a2) => {
                a2[i2].classList.remove (`sel`);
            });

            maps[i].classList.add (`sel`);
            maps.filter ((v1, i1, a1) => a1[i1] !== maps[i]).forEach ((v2, i2, a2) => {
                a2[i2].classList.remove (`sel`);
            });
        });
    });
}