//Disply slides.
let slideIndex = 1;
showSlides(slideIndex);

//Show next slide.
function plusSlides(n) {
  showSlides((slideIndex += n));
}

//Show target sldie.
function currentSlide(n) {
  showSlides((slideIndex = n));
}

//Show slide.
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  //Go back to the first slide when click the right cursor on the last slide.
  if (n > slides.length) {
    slideIndex = 1;
  }
  //Go back to the last page when click the left cursor on the firsr slide.
  if (n < 1) {
    slideIndex = slides.length;
  }
  //Clear all slides.
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  //Show target slide.
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
