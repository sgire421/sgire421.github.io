window.onload = init;
function init() {
  var sliderImages = document.getElementsByClassName('slider-image');
  sliderImages[0].style.display = 'block';
  for (var i = 1; i < sliderImages.length; i++) {
    sliderImages[i].style.display = 'none';
  }

  var sliderButton = document.getElementsByClassName('sliderBtns');
  for (var i = 0; i < sliderButton.length; i++) {
    sliderButton[i].onclick = function () { showNextImage(this.id, sliderImages); };
  }

function showNextImage(objectId, sliderImages) {
  var currentImageIndex = findCurrentImage(sliderImages);
  var nextImageIndex;

  if (objectId == 'nextButton') {
    nextImageIndex = (currentImageIndex + 1) % sliderImages.length;

  }
  else {
    nextImageIndex = ((currentImageIndex - 1) + sliderImages.length) % sliderImages.length;
  }
  sliderImages[currentImageIndex].style.display = 'none';
  sliderImages[nextImageIndex].style.display = 'block';
}

function findCurrentImage(sliderImages) {
  for (var i = 0; i< sliderImages.length; i++) {
    if (sliderImages[i].style.display == 'block') {
      return i;
    }
  }
}
/*******************************************************
i++ means 'i=i+1'
*******************************************************/
  //var button1 = document.getElementById('musicButton')
  //button1.onclick =
}
