// Task 1

const changeHeadingButton = document.querySelector('#changeHeadingButton');

const heading = document.querySelector('#taskOneHeading');

changeHeadingButton.addEventListener('click', function () {
    taskOneHeading.textContent = 'Updated heading!';
});

const changeStyleButton = document.querySelector('#changeStyleButton');

changeStyleButton.addEventListener('click', function () {
    taskOneHeading.classList.toggle('highlight');
});


const animalText = document.querySelector('#animalText');

const changeTextButton = document.querySelector('#changeTextButton');

changeTextButton.addEventListener('click', function () {
    animalText.textContent = 'Updated animal text!';
});


// Task 2:

const animalContent = document.querySelector('#animalContent');

const headingThree = document.createElement('h3');
headingThree.textContent = 'Animal of the Day';
animalContent.append(headingThree);

const animalParagraph = document.createElement('p');
animalParagraph.textContent = 'The animal of the day is the cheetah. The cheetah is the fastest land animal in the World. It is known for its beautiful spotted coat.';
animalContent.append(animalParagraph);

const animalImage1 = document.createElement('img');
animalImage1.src = 'pictures/pic_of_cheetah.png';
animalImage1.alt = 'Cheetah';
animalContent.append(animalImage1);

const hideAnimalButton = document.querySelector('#hideAnimalButton');

hideAnimalButton.addEventListener('click', function () {
    animalContent.style.display = 'none';
});

const showAnimalButton = document.querySelector('#showAnimalButton');

showAnimalButton.addEventListener('click', function () {
    animalContent.style.display = 'block';
});

// Task 3:

const animalSelect = document.querySelector('#animalSelect');
const animalName = document.querySelector('#animalName');
const animalImage = document.querySelector('#animalImage');
const animalDescription = document.querySelector('#animalDescription');

animalSelect.addEventListener('change', function () {
    const selectedAnimal = animalSelect.value;

    console.log('Selected animal:', selectedAnimal);

    if (selectedAnimal === 'elephant') {
        animalName.textContent = 'Elephant';
        animalImage.src = 'pictures/unsplash_elephant.jpg';
        animalImage.alt = 'Elephant';
        animalDescription.textContent = 
        "Elephants are the world's largest land animals.";
    }
    else if (selectedAnimal === 'tiger') {
        animalName.textContent = 'Tiger';
        animalImage.src = 'pictures/unsplash_tiger.jpg';
        animalImage.alt = 'Tiger';
        animalDescription.textContent = 
        'Tigers are the largest cats in the world.';
    }
    else if (selectedAnimal === 'penguin') {
        animalName.textContent = 'Penguin';
        animalImage.src = 'pictures/unsplash_penguin.jpg';
        animalImage.alt = 'Penguin';
        animalDescription.textContent = 
        'Penguins are flightless birds that live in the Southern Hemisphere.';
    }
    else if (selectedAnimal === 'panda') {
        animalName.textContent = 'Panda';
        animalImage.src = 'pictures/unsplash_panda.jpg';
        animalImage.alt = 'Panda';
        animalDescription.textContent = 
        'Pandas are native to China and are known for their distinctive black and white fur.';
    }
});

animalImage.addEventListener("mouseenter", function () {
    animalImage.classList.add("highlight");
});

animalImage.addEventListener("mouseleave", function () {
    animalImage.classList.remove("highlight");
});

// Task 4:

const animalForm = document.querySelector('#animalForm');
const animalTableBody = document.querySelector('#observationTableBody');

animalForm.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!animalForm.checkValidity()) {
        console.log('Form is not valid');
        return;
    }
    
    const observationAnimal = document.querySelector('#observationAnimal').value;
    const observationLocation = document.querySelector('#observationLocation').value;
    const observationDate = document.querySelector('#observationDate').value;

    const newRow = document.createElement('tr');

    const animalCell = document.createElement('td');
    animalCell.textContent = observationAnimal;

    const locationCell = document.createElement('td');
    locationCell.textContent = observationLocation;

    const dateCell = document.createElement('td');
    dateCell.textContent = observationDate;

    newRow.appendChild(animalCell);
    newRow.appendChild(locationCell);
    newRow.appendChild(dateCell);

    animalTableBody.appendChild(newRow);

    console.log("Form submitted");
});
