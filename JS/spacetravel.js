// THIS FILE WAS CREATED WITH CODING HELP FROM:  w3schools.com


// To open the modal:
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// To close the modal:
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}


// Start the index of tours at 1:
var tourIndex = 1;

// Start the fullsizeImage function loops with n being equal to 1:
fullsizeImage(tourIndex);

// Let the modal know which number in the array of full-sized images to open.
// The value of number is passed in within the HTML image tag's onclick instructions "currentSlide(1)", "currentSlide(2)", etc.
function currentSlide(number) {
  fullsizeImage(tourIndex = number);
}



// Create an array to hold all the possible tours:
var tours = document.getElementsByClassName("ourTours");

var dots = document.getElementsByClassName("scrollbarImage");


// This shouldn't be needed but just in case...
function plusSlides(n) {
  fullsizeImage(tourIndex += n);
}






function fullsizeImage(n) {
  var i;
  tours = document.getElementsByClassName("ourTours");
  dots = document.getElementsByClassName("scrollbarImage");
  // var captionText = document.getElementByClassName("caption");
  if (n > tours.length) { tourIndex = 1 }
  if (n < 1) { tourIndex = tours.length }
  for (i = 0; i < tours.length; i++) {
   tours[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  tours[tourIndex - 1].style.display = "block";
  dots[tourIndex - 1].className += " active";
  // captionText.innerHTML = dots[tourIndex - 1].alt;
}




// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the image and insert it inside the modal
// var img = document.getElementById("IronWolf");
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() { 
//   modal.style.display = "none";
// }