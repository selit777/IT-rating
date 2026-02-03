const navListMain = document.querySelector('.nav_list');
const scroll = document.querySelector('.scroll');
const cart = document.querySelector('.cart');
const mobileMenuLinks = document.querySelectorAll('.nav_list_mobile .nav_link');


const reproductButtons = document.querySelectorAll('.reproduct_button');
const reproductBlocks = document.querySelectorAll('.reproduct_block');

window.onload = function () {
    setTimeout(function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, 10);
};

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('mobile_menu-active');
    navList.classList.toggle('nav_list_mobile-active');
    navListMain.classList.toggle('nav_list-active');
    scroll.classList.toggle('scroll-active');
});

mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('mobile_menu-active');
        navList.classList.remove('nav_list_mobile-active');
        navListMain.classList.remove('nav_list-active');
        scroll.classList.remove('scroll-active');
    });
});

if ('ontouchstart' in window || navigator.maxTouchPoints) {
    if (navList) {
        navList.classList.add('nav_list_mobile-touch');
    }
}

document.addEventListener('click', (event) => {
    if (!mobileMenu.contains(event.target)) {
        mobileMenu.classList.remove('mobile_menu-active');
        navList.classList.remove('nav_list_mobile-active');
        navListMain.classList.remove('nav_list-active');
        scroll.classList.remove('scroll-active');
    }
});

const closeMobileMenu = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth > 500) {
        mobileMenu.classList.remove('mobile_menu-active');
        navList.classList.remove('nav_list_mobile-active');
        navListMain.classList.remove('nav_list-active');
        scroll.classList.remove('scroll-active');
    }
};

window.addEventListener('scroll', closeMobileMenu);
window.addEventListener('resize', closeMobileMenu);




reproductButtons.forEach(button => {
    button.addEventListener('click', () => {
        reproductButtons.forEach(btn => btn.classList.remove('reproduct_button-active'));
        button.classList.add('reproduct_button-active');

        const targetId = button.id + '-block';

        reproductBlocks.forEach(block => {
            if (block.id === targetId) {
                block.classList.add('reproduct_block-active');
            } else {
                block.classList.remove('reproduct_block-active');
            }
        });
    });
});

document.querySelector("[method='POST']").addEventListener("submit", function (e) {
    const name = document.querySelector("[name='fn']").value.trim();
    const email = document.querySelector("[name='email']").value.trim();
    const subject = document.querySelector("[name='topic']").value.trim();
    const message = document.querySelector("[name='mess']").value.trim();

    if (!name || !email || !subject || !message) {
        alert("Пожалуйста, заполните все поля.");
        e.preventDefault();
        return;
    }

    const fioParts = name.split(/\s+/); 
    if (fioParts.length !== 3 || fioParts.some(word => word.length < 2)) { 
        alert("Введите корректное ФИО."); 
        e.preventDefault(); 
        return; 
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Введите корректный email.");
        e.preventDefault();
        return;
    }

    if (message.length < 15 || subject.length < 5) {
        alert("Тема должна быть не короче 5 символов. Сообщение должно быть не короче 15 символов.");
        e.preventDefault();
        return;
    }
});
