document.querySelectorAll('.slider_flex').forEach(slider => {
    const slides = slider.querySelector('.slides');
    const images = slides.children;
    const prevBtn = slider.querySelector('.left');
    const nextBtn = slider.querySelector('.right');
    let currentIndex = 0;
    const totalImages = images.length;


    const updateSlider = () => {
        const imagesToShow = 3; 
        const maxIndex = totalImages - imagesToShow;


        const offset = -currentIndex * 120;
        slides.style.transform = `translateX(${offset}%)`;


        if (currentIndex === 0) {
            prevBtn.classList.add('hidden'); 
        } else {
            prevBtn.classList.remove('hidden'); 
        }

        if (currentIndex === maxIndex) {
            nextBtn.classList.add('hidden'); 
        } else {
            nextBtn.classList.remove('hidden');
        }

    };

    const showSlide = (index) => {
        const imagesToShow = 3;
        const maxIndex = totalImages - imagesToShow;

        if (index > maxIndex) index = maxIndex;
        if (index < 0) index = 0;
        currentIndex = index;

        updateSlider();
    };

    nextBtn.addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    prevBtn.addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });


    updateSlider(); 


    Array.from(images).forEach((image) => {

        image.addEventListener('click', () => {

            const modal = document.getElementById('modal');

            const modalImg = document.getElementById('modalImg');

            modal.style.display = "flex";

            modalImg.src = image.src;

            document.documentElement.classList.add('no-scroll');
            document.body.classList.add('no-scroll');
        });

    });

});


const closeModal = document.getElementById('closeModal');

closeModal.addEventListener('click', () => {

    const modal = document.getElementById('modal');

    modal.style.display = "none";

    document.documentElement.classList.remove('no-scroll');
    document.body.classList.remove('no-scroll');

});


let lastScrollY = window.scrollY; 
const header = document.querySelector('.head_flex'); 

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {

        header.classList.add('shrink'); 
    } else {

        header.classList.remove('shrink'); 
    }

    const isBottom = (window.innerHeight + window.scrollY + 100) >= document.body.offsetHeight;


    if (isBottom) { // Если мы внизу

        if (window.scrollY > lastScrollY) {

            // Прокрутка вниз

            header.classList.add('hidden'); // Убираем шапку

        } else {

            // Прокрутка вверх

            header.classList.remove('hidden'); // Показываем шапку

        }

    }

    else{
        header.classList.remove('hidden'); // Показываем шапку
    }

    lastScrollY = window.scrollY; 
});

header.addEventListener('mouseenter', () => {

    header.classList.remove('shrink'); // Показываем шапку при наведении

});




const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', () => {

        button.classList.add('no-sway');
        

        setTimeout(() => {
            button.classList.remove('no-sway'); 
        }, 300);
    });
});

function scrollToElement(elementId, offset = 0) {
    const element = document.getElementById(elementId);
    const elementPosition = element.getBoundingClientRect().top + window.scrollY; // Получаем позицию элемента
    const offsetPosition = elementPosition - offset; // Вычисляем позицию с учетом смещения

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth' // Плавная прокрутка
    });
}

const about_self = document.querySelector('.a1');
const product = document.querySelector('.a2');
const chat = document.querySelector('.a3');
const about_self_1 = document.querySelector('.a4');
const product_1 = document.querySelector('.a5');


about_self.addEventListener('click', () => scrollToElement('about_self', 20)); 
product.addEventListener('click', () => scrollToElement('product', 20));
chat.addEventListener('click', () => scrollToElement('chat', 20)); 
about_self_1.addEventListener('click', () => scrollToElement('about_self', 20)); 
product_1.addEventListener('click', () => scrollToElement('product', 20));