// Script by me
// Create variable for the container div declared in the index.html
const cvContainer = document.getElementById("cv-container");

// Fetch the JSON file
async function getCv() {
  const response = await fetch("../data/cv.json");

  if (response.ok) {
    const cvData = await response.json();
    displayCvItems(cvData);
  } else {
    cvContainer.innerText = "Error loading content";
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
  cvContainer.appendChild(eduTitle);

  // Create list to contain education items
  const eduList = document.createElement("ul");

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
  // Append to container div
  cvContainer.appendChild(eduList);

  // Add work title
  const workTitle = document.createElement("h3");
  workTitle.textContent = "Work Experience";
  cvContainer.appendChild(workTitle);

  // Create list to contain work items
  const workList = document.createElement("ul");
  // Loop through all work data items and make them li elements
  cvData.work.forEach(function (workItem) {
    const liItem = document.createElement("li");
    const titleP = document.createElement('p');
    titleP.textContent = workItem.title;

    const dateP = document.createElement('p');
    dateP.textContent = workItem.date;

    const companyP = document.createElement('p');
    companyP.textContent = workItem.company;

    liItem.appendChild(titleP);
    liItem.appendChild(dateP);
    liItem.appendChild(companyP);

    workList.appendChild(liItem);
  });
  // Append to container div
  cvContainer.appendChild(workList);
}

// Call function
getCv();
