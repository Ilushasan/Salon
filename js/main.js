let burgerMenu = document.querySelector('.icon-menu');

burgerMenu.addEventListener("click", function(e) {
    let menuBody = document.querySelector(".menu__body");
    menuBody.classList.toggle('_active');
    burgerMenu.classList.toggle('_krest');
    const menuLinks = document.querySelectorAll('.menu__link');
    if(window.innerWidth <= 767) {
        for ( let i = 0; i < menuLinks.length; i++){
            menuLinks[i].addEventListener('click', () => {
                menuBody.classList.remove('_active');
                burgerMenu.classList.remove('_krest');
            });
        }
    }
})
//Header color
let color = function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
        }else {
            header.classList.remove('header_active');
        }
    };
};
color();
//smoothScroll
let smoothScroll = function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}
smoothScroll();
//Accordion
let accordion = function () {
    let data = $('.accordion').attr('data-accordion');

    $('.services__accordion').on('click', function() {
        if (data === 'close') {
            $('.panel').slideUp();
            if($(this).hasClass('active')) {
                $(this).toggleClass('active');
            }else {
                $('.services__accordion').removeClass('active');
                $(this).toggleClass('active')
            }
        }
        else {
            $(this).toggleClass('active');
        }
        $(this).next('.panel').not(':animated').slideToggle();
    });
}
accordion();

//Tabs 

// let tabs = document.querySelectorAll('.tabs__item');
// let tabsBody = document.querySelectorAll('.tabs__block');

// if(tabs.length > 0) {
//     for(i=0; i <tabs.length; i++) {
//         const tabsM = tabs[i];
//         const tabsB = tabsBody[i];
//         console.log(tabsB);
//         tabsM.addEventListener('click', function(e) {
//             if(tabsM.classList.contains("selected")) {
//                 tabsM.classList.remove('selected');
//             }else {
//                 tabsM.classList.toggle('selected');
//                 tabsB.classList.toggle('checked');
//             }

//         })
//     }
// }

//Tabs
window.onload = function () {
    document.querySelector('.tabs__items').addEventListener('click', fTabs);
    let activeTab = document.querySelectorAll('.tabs__item');
    function fTabs(e) {
        if(e.target.className == 'tabs__item'){
            let dataTab = e.target.getAttribute('data-tab');
            let tabBody = document.getElementsByClassName('tabs__block');
            for(i=0; i < tabBody.length; i++) {
                if (dataTab == i) {
                    tabBody[i].classList.add('checked');
                    activeTab[i].classList.add('selected');
                }else {
                    tabBody[i].classList.remove('checked');
                    activeTab[i].classList.remove('selected');
                }
            }
        }
    }
}
//Lazy Load

$(function() {
    let a = $(".tabs-pic1");
    if($(window).width() <= '768') {        
        a.slice(0,2).show();
        $('.works__btn').on('click', function(e){
            e.preventDefault();
            $('.tabs-pic1:hidden').slice(0,2).slideDown();
            let b = $('.tabs-pic1:hidden');
        })
    }else {
        a.slice(0,3).show();
        $('.works__btn').on('click', function(e){
            e.preventDefault();
            $('.tabs-pic1:hidden').slice(0,3).slideDown();
            let b = $('.tabs-pic1:hidden');
        })
    }
})
$(function() {
    let a = $(".tabs-pic2");
    if($(window).width() <= '768') {        
        a.slice(0,2).show();
        $('.works__btn').on('click', function(e){
            e.preventDefault();
            $('.tabs-pic2:hidden').slice(0,2).slideDown();
            let b = $('.tabs-pic2:hidden');
        })
    }else if($(window).width() > '768' && $(window).width() <= '1500') {
        a.slice(0,3).show();
        $('.works__btn').on('click', function(e){
            e.preventDefault();
            $('.tabs-pic2:hidden').slice(0,3).slideDown();
            let b = $('.tabs-pic2:hidden');
        })
    }else {
        a.slice(0,4).show();
        $('.works__btn').on('click', function(e){
            e.preventDefault();
            $('.tabs-pic2:hidden').slice(0,4).slideDown();
            let b = $('.tabs-pic2:hidden');
        })
    }
})
$(function() {
    let a = $(".tabs-pic3");
    if($(window).width() <= '768') {        
        a.slice(0,2).show();
        $('.works__btn').on('click', function(e){
            e.preventDefault();
            $('.tabs-pic3:hidden').slice(0,2).slideDown();
            let b = $('.tabs-pic3:hidden');
        })
    }else {
        a.slice(0,3).show();
        $('.works__btn').on('click', function(e){
            e.preventDefault();
            $('.tabs-pic3:hidden').slice(0,3).slideDown();
            let b = $('.tabs-pic3:hidden');
        })
    }
})
$(function() {
    let a = $(".tabs-pic4");
    if($(window).width() <= '768') {        
        a.slice(0,2).show();
        $('.works__btn').on('click', function(e){
            e.preventDefault();
            $('.tabs-pic4:hidden').slice(0,2).slideDown();
            let b = $('.tabs-pic4:hidden');
        })
    }else {
        a.slice(0,3).show();
        $('.works__btn').on('click', function(e){
            e.preventDefault();
            $('.tabs-pic4:hidden').slice(0,3).slideDown();
            let b = $('.tabs-pic4:hidden');
        })
    }
})
