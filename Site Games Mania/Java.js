var carrossel = 1;
showSlides (carrossel);

function plusSlides (n) {
    showSlides (carrossel += n);
}

function currentSlide(n) {
    showSlides (slideIndex = n);
}

function showSlides (n) {
    var i;
    var slides = document.getElementsByClassName("carrossel");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slidesindex = slides.length};
    for (i = 0; i < slides.length; 1++) {
    slides [i].getElementsByClassName("carrossel").display = "none";
}
slides [slidesindex-1].getElementsByClassName("carrossel").display = "block";
}



