
const photo = document.getElementById("photo");
const header = document.getElementById("header");
const toggleButton = document.getElementById("toggleButton");

function toggleImage() {
  photo.classList.toggle("photo-visible");
  if (photo.classList.contains("photo-visible")) {
    header.innerText = "The image is visible";
  } else {
    header.innerText = "The image is hidden";
  }
}

toggleButton.addEventListener('click', toggleImage);

