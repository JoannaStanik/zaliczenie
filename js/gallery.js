let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.querySelectorAll('.slides img');
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

    // Obsługa strzałek klawiatury
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            plusSlides(-1); // Poprzednie zdjęcie po naciśnięciu strzałki w lewo
        } else if (event.key === 'ArrowRight') {
            plusSlides(1); // Następne zdjęcie po naciśnięciu strzałki w prawo
        }
    });