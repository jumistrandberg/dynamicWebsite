// Script written with the help of mdn web docs and chatGPT

// // For click: 
// // Get all the links
const navLinks = document.querySelectorAll('.nav-li a');

// navLinks.forEach(function(link) {
//     link.addEventListener('click', function(event) {

//         // First remove the active class
//         navLinks.forEach(function(link) {
//             link.classList.remove('active-nav');
//         });

//         // Then add the active class to the clicked a element
//         link.classList.add('active-nav');
        
//     })
// })

// For scroll:
// Found info about intersection observer API from mdn web docs. Used the examples and templates for this part of the script.

// Get all the sections 
const navSections = document.querySelectorAll('section');

// Create an object with the options for the IntersectionObservers
const options = {
    // Default browser viewport
    root: null,
    // Don't need I think
    rootMargin: '0px',
    // How many percent the user can see when the observer's callback should be called
    threshold: 0.2
}; 

// The callback function that is called when a section enters or leaves view
function handleIntersect(entries) {

    // Add when intersecting otherwise remove
    entries.forEach(function(entry) {
        const sectionId = entry.target.getAttribute('id');
        // WHY EERRROORRPROJR
        // const navLink = document.querySelector('.nav-li a[href="#' + sectionId + '"]');

        if(entry.isIntersecting) {
            navLinks.forEach(function(links) {
                links.classList.remove('active-nav');
                document.querySelector('.nav-li a[href="#' + sectionId + '"]').classList.add('active-nav');
            })
        } else {
            // navLink.classList.remove('active-nav');
        }
    });
}

// Create a new IntersectionObserver instance with 'new' keyword that takes the callback function and the options from the object
const observer = new IntersectionObserver(handleIntersect, options);

// Observe every section 
navSections.forEach(function(section) {
    observer.observe(section);
});




