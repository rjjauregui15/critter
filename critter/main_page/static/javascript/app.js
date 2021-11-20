//Selectors
const locationPicked = document.getElementById('locations')
const todoButton = document.querySelector('.todo-button');

//Event Listeners
todoButton.addEventListener('click', addCombo);


//Functions 
function addCombo(event) {
    // Prevent form from submitting
    event.preventDefault();
    console.log(locationPicked.value);
}
