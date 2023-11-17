// Get the eyeContainer from HTML
const eyeContainer = document.getElementById('eyeContainer');

// Show open eyes img on mouse hover
function handleMouseEnter() {
  const images = eyeContainer.querySelectorAll('img');
  images[0].style.opacity = 0;
  images[1].style.opacity = 1;
}

// Hide open eyes img on mouse leave.
function handleMouseLeave() {
  const images = eyeContainer.querySelectorAll('img');
  images[0].style.opacity = 1;
  images[1].style.opacity = 0;
}

// Attach event listeners to the eyeContainer
eyeContainer.addEventListener('mousemove', function(event) {
  const mouseY = event.clientY;
  const mouseX = event.clientX

  if (mouseY <= 50 || mouseX <= 50) {
    handleMouseEnter();
  } else {
    handleMouseLeave();
  }
});
