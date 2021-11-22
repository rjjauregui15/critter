//Selectors
const locationPicked = document.getElementById('locations');
const todoButton = document.querySelector('.todo-button');

//Event Listeners
todoButton.addEventListener('click', addCombo);


//Functions 
function addCombo(event) {
    // Prevent form from submitting
  event.preventDefault();
  // console.log('mom')
  //   console.log('dad')
    // console.log('hi mom')
    // console.log(locationPicked.value);

    let request = new XMLHttpRequest();
    const url = 'http://127.0.0.1:8000/test/'
    request.open('GET', url);
    request.responseType = 'text';
    request.onload = function() {

      console.log(request.responseText);
    
      };
    request.send();

    // const Http = new XMLHttpRequest();
    // Http.open("GET", url);
    // Http.send();

    // Http.onreadystatechange = (e) => {
    // console.log(Http.responseText)
    // }


}

