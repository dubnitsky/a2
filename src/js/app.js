import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();


// import Swiper, { Navigation, Pagination } from 'swiper';
// const swiper = new Swiper();




document.addEventListener('DOMContentLoaded', function() {
    // Находим все кнопки-переключатели
    const triggers = document.querySelectorAll('.btn__item');

    triggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            // Предотвращаем стандартное поведение, если нужно
            e.preventDefault();
            
            // Получаем ID списка из data-toggle
            const targetId = this.getAttribute('data-toggle');
            const targetList = document.getElementById(targetId);
            
            if (targetList) {
                // Переключаем классы
                this.classList.toggle('active');
                targetList.classList.toggle('show');
            }
        });
    });
});