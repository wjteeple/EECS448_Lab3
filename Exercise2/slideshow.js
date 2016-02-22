var imageIndex = 0;
var currentImage = "";
var images = [];
images[0] = "kusoe.jpg";
images[1] = "leep2.jpg";
images[2] = "oldsoe.jpg";
images[3] = "work.jpg";
images[4] = "jms.jpg";

function next() {
  var image = document.getElementById("curImg");
  if (imageIndex < 4) {
    imageIndex += 1;
  }
  else {
    imageIndex = 0;
  }
  image.src = images[imageIndex];
}

  function previous() {
    var image = document.getElementById("curImg");
    if (imageIndex > 0) {
      imageIndex -= 1;
    }
    else {
      imageIndex = 4;
    }
    image.src = images[imageIndex];
}
