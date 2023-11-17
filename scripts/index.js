// Get the eyeContainer from HTML

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



function onlyDesktop() {
  const desktopSize = window.matchMedia('(min-width: 1024px)').matches; 
  
  if (desktopSize) {
    const eyeContainer = document.getElementById('eyeContainer');

    eyeContainer.addEventListener('mousemove', function(event) {
      const mouseY = event.clientY;
      const mouseX = event.clientX
    
      if (mouseY <= 250 && mouseX <= 250) {
        handleMouseEnter();
      } else {
        handleMouseLeave();
      }
    });
  }
}

onlyDesktop();
