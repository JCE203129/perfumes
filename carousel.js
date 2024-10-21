let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function moveSlide(n) {
    slideIndex += n;

    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }

    if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }

    updateCarousel();
}

function updateCarousel() {
    const offset = -slideIndex * 100; // Desplazar el carrusel en porcentaje
    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.style.transform = `translateX(${offset}%)`;
}

// Para que las imágenes se muevan automáticamente cada 3 segundos
setInterval(() => {
    moveSlide(1);
}, 3000);
