// Show open eyes img on mouse hover
function handleMouseEnter() {
  const images = eyeContainer.querySelectorAll("img");
  images[0].style.opacity = 0;
  images[1].style.opacity = 1;
}

// Hide open eyes img on mouse leave
function handleMouseLeave() {
  const images = eyeContainer.querySelectorAll("img");
  images[0].style.opacity = 1;
  images[1].style.opacity = 0;
}


// Listen for correct mouse position and call functions 
function activateHover() {
  const eyeContainer = document.getElementById("eyeContainer");

  function handleMouseMove(event) {
    const mouseY = event.clientY;
    const mouseX = event.clientX;

    if (mouseY <= 250 && mouseX <= 250) {
      handleMouseEnter();
    } else {
      handleMouseLeave();
    }
  }

  // Match the media query in the CSS
  const desktopQuery = window.matchMedia("(min-width: 1024px)");

  // only do if window size is right
  function handleViewportChange() {
    if (desktopQuery.matches) {
      eyeContainer.addEventListener("mousemove", handleMouseMove);
    } else {
      eyeContainer.removeEventListener("mousemove", handleMouseMove);
      handleMouseLeave(); 
    }
  }

  handleViewportChange(); 

  desktopQuery.addListener(activateHover); 
}

activateHover();
