let slideIndex = 0; // Comencem amb la primera imatge visible

function moveSlide(n) {
    const slides = document.querySelectorAll('.carousel-item');
    slideIndex += n;

    if (slideIndex < 0) {
        slideIndex = slides.length - 1; // Tornar a la darrera imatge
    }
    if (slideIndex >= slides.length) {
        slideIndex = 0; // Tornar a la primera imatge
    }

    // Desplaçar el carrusel
    document.querySelector('.carousel').style.transform = `translateX(${-slideIndex * 100 / slides.length}%)`;
}
