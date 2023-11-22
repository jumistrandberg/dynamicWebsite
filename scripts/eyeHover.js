// Get and define the eyeContainer div
const eyeContainer = document.getElementById("eyeContainer");

// Show open eyes img on mouse hover
function mouseEnter() {
  const images = eyeContainer.querySelectorAll("img");
  images[0].style.opacity = 0;
  images[1].style.opacity = 1;
}

// Hide open eyes img on mouse leave
function mouseLeave() {
  const images = eyeContainer.querySelectorAll("img");
  images[0].style.opacity = 1;
  images[1].style.opacity = 0;
}


// Listen for correct mouse position and call functions 
function activateHover() {

  function mouseMove(event) {
    const mouseY = event.clientY;
    const mouseX = event.clientX;

    if (mouseY <= 250) {
      mouseEnter();
    } else {
      mouseLeave();
    }
  }

  // Match the media query in the CSS
  const desktopQuery = window.matchMedia("(min-width: 1024px)");

  // only do if window size is right
  function viewportChange() {
    if (desktopQuery.matches) {
      eyeContainer.addEventListener("mousemove", mouseMove);
    } else {
      eyeContainer.removeEventListener("mousemove", mouseMove);
      mouseLeave(); 
    }
  }

viewportChange(); 

window.addEventListener('resize', viewportChange);
}

activateHover();
