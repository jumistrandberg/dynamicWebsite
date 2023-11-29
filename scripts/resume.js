// Script by me
// Create variable for the container div declared in the index.html
const cvContainer = document.getElementById("cv-container");

// Trying to only fetch and call after everything is loaded into the DOM to address fail to load on Github pages
document.addEventListener('DOMContentLoaded', function() {
// Fetch the JSON file
async function getCv() {
  const response = await fetch("../data/cv.json");

  if (response.ok) {
    let cvData;
    try {
      const response = await fetch('../data/cv.json');
      if(!response.ok) {
        throw new Error('Failed to fetch CV data');
      }
      cvData = await response.json();
    } catch (error) {
      console.error(error);
      try {
        const fallbackResponse = await fetch(URL('https://jumistrandberg.github.io/cv.json/cv.json'));
        if(!fallbackResponse.ok) {
          throw new Error('Unable to fetch fallback CV data');
        }
        cvData = await fallbackResponse.json();
      } catch(fallbackError) {
        console.log(fallbackError);
        cvContainer.innerText = 'Error loading content';
        return;
      }
    }
    displayCvItems(cvData);
  } else {
  }
}

function displayCvItems(cvData) {
  // Show my name
  const nameTitle = document.createElement("h2");
  nameTitle.textContent = cvData.name;
  cvContainer.appendChild(nameTitle);

  // Show the about text
  const aboutText = document.createElement("p");
  aboutText.textContent = cvData.about;
  cvContainer.appendChild(aboutText);

  // Add edu title
  const eduTitle = document.createElement("h3");
  eduTitle.textContent = "Education";

  // Create list to contain education items
  const eduList = document.createElement("ul");

  // Create edu div to place for desktop
  const eduDiv = document.createElement("div");

  // Create work div to place for desktop
  const workDiv = document.createElement("div");

  // Create container div for both edu and work divs
  const divContainer = document.createElement("div");

  // Add class to container 
  divContainer.classList.add('bigger-container');

  cvData.education.forEach(function (eduItem) {
    const liItem = document.createElement("li");

    const eduNameP = document.createElement("p");
    eduNameP.textContent = eduItem.eduName;

    const yearP = document.createElement("p");
    yearP.textContent = eduItem.year;

    const schoolP = document.createElement("p");
    schoolP.textContent = eduItem.school;

    liItem.appendChild(eduNameP);
    liItem.appendChild(yearP);
    liItem.appendChild(schoolP);

    eduList.appendChild(liItem);
  });

  // Append the title
  eduDiv.appendChild(eduTitle);

  // Place in the div
  eduDiv.appendChild(eduList);

  // Place in container div
  divContainer.appendChild(eduDiv);

  // Append to container div
  cvContainer.appendChild(divContainer);

  // Add work title
  const workTitle = document.createElement("h3");
  workTitle.textContent = "Work Experience";

  // Create list to contain work items
  const workList = document.createElement("ul");
  // Loop through all work data items and make them li elements
  cvData.work.forEach(function (workItem) {
    const liItem = document.createElement("li");
    const titleP = document.createElement("p");
    titleP.textContent = workItem.title;

    const dateP = document.createElement("p");
    dateP.textContent = workItem.date;

    const companyP = document.createElement("p");
    companyP.textContent = workItem.company;

    liItem.appendChild(titleP);
    liItem.appendChild(dateP);
    liItem.appendChild(companyP);

    workList.appendChild(liItem);
  });

  // Append the title
  workDiv.appendChild(workTitle);

  // Place in the div
  workDiv.appendChild(workList);

  // Place in container div
  divContainer.appendChild(workDiv);

  // Append to container div
  cvContainer.appendChild(divContainer);
}

// Call function
getCv();

})

