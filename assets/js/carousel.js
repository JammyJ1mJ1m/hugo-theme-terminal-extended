window.plusSlides = function (n) {
    console.log('plusSlides called with', n);
    showSlides(slideIndex += n);
};

var slideIndex = 1;

window.showSlides = function (n) {
    var slides = document.getElementsByClassName("carousel-item");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
};

window.currentSlide = function(n) {
    showSlides(slideIndex = n);
  }

window.onload = function () {
    console.log('Carousel JS Loaded');
    showSlides(slideIndex);
};
