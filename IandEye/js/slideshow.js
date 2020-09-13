
var slideIndex = 0;
var total = 1;

function changeSlide(n) {
  if (slideIndex == total && n > 1)
    slideIndex = 0;
  else
    slideIndex += n;
  showSlides(true);
}

function showSlides(userAction) {
  var slides = document.getElementsByClassName("slide");
  total = slides.length;

  if (slideIndex >= slides.length) { slideIndex = 0 }
  if (slideIndex < 0) { slideIndex = slides.length - 1 }

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  console.log(slideIndex);
  slides[slideIndex].style.display = "block";

  if (!userAction) {
    slideIndex++;
    setTimeout(showSlides, 4000); // Change image every N seconds
  }
}

showSlides(slideIndex);