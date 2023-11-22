// Create variable for the container div declared in the index.html
const cvContainer = document.getElementById('cv-container');

// Fetch the JSON file
async function getCv() {
    const response = await fetch('../data/cv.json')

    if(response.ok) {
        const cvData = await response.json();
        displayCvItems(cvData);
    } else {
        cvContainer.innerText = 'Error loading content'
    }
}

function displayCvItems(cvData) {

    // Show my name
    const nameTitle = document.createElement('h2');
    nameTitle.textContent = cvData.name;
    cvContainer.appendChild(nameTitle);

    // Show the about text 
    const aboutText = document.createElement('p');
    aboutText.textContent = cvData.about;
    cvContainer.appendChild(aboutText);

    // Add edu title
    const eduTitle =document.createElement('h3');
    eduTitle.textContent = 'Education';
    cvContainer.appendChild(eduTitle);

    // Create list to contain education items 
    const eduList = document.createElement('ul');
    // Loop through all edu data items and make them li elements
    cvData.education.forEach(function(eduItem) {
        const liItem = document.createElement('li');
        liItem.textContent = `${eduItem.eduName}, ${eduItem.year}, ${eduItem.school}`;
        eduList.appendChild(liItem);
    });
    // Append to container div
    cvContainer.appendChild(eduList);

    // Add work title 
    const workTitle = document.createElement('h3');
    workTitle.textContent = 'Work Experience';
    cvContainer.appendChild(workTitle);

    // Create list to contain work items 
    const workList = document.createElement('ul');
    // Loop through all work data items and make them li elements
    cvData.work.forEach(function(workItem) {
        const liItem = document.createElement('li'); 
        liItem.textContent = `${workItem.title}, ${workItem.date}. ${workItem.company}`;
        workList.appendChild(liItem);
    });
    // Append to container div
    cvContainer.appendChild(workList);
}

// Call function 
getCv();
