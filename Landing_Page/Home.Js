//wait 5 seconds for new render.
var images = document.getElementsByTagName("img");
var paragraphs = document.getElementsByTagName("p");
var currentImage = 0;
var currentParagraph = 0;

function showNext() {
  images[currentImage].style.display = "none";
  currentImage = (currentImage + 1) % images.length;
  images[currentImage].style.display = "block";
  paragraphs[currentParagraph].style.display = "none";
  //currentImage = (currentImage + 1) % images.length;
  currentParagraph = (currentParagraph + 1) % paragraphs.length;
 // images[currentImage].style.display = "block";
  paragraphs[currentParagraph].style.display = "block";
}

setInterval(showNext, 5000);








