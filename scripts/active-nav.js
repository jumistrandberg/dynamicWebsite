// Script by me

// For click: 
// Get all the links
const navLinks = document.querySelectorAll('.nav-li a');

navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {

        // First remove the active class
        navLinks.forEach(function(link) {
            link.classList.remove('active-nav');
        });

        // Then add the active class to the clicked a element
        link.classList.add('active-nav');
        
    })
})

// For scroll:
// Get all the sections 
const navSections = document.querySelectorAll('main > div');
console.log(navSections);