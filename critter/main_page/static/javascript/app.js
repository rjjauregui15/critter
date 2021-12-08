//Selectors
const searchButton = document.querySelector('.search_button');
const checkMark = document.querySelector('#check_mark_box');

//Event Listeners
searchButton.addEventListener('click', checkInputtedLocation);

//Functions 
function checkInputtedLocation(event) {
  // Prevent form from submitting
  event.preventDefault();

  

  if (checkMark.checked == 1) {
    window.navigator.geolocation.getCurrentPosition(useGeoLocate, noGeoLocate);
  }

  // call function to get cordinites 
  // get cordinates  and call other fintion to ship out and ship them out
  // have function to recives message then another to print out to screen

  // if check if long anf lat have valid inputs
  // get cordinates and call other funtion to ship them out 
  // have function to recives message then another to print out to screen

  // else, ask user for input 


  // function list
  // - get user Input
  // - faction to send the information Over
  // - function to recive information
  // - funtion to put ont he screen 


    // let request = new XMLHttpRequest();
    // const url = 'http://127.0.0.1:8000/test/'
    // request.open('GET', url);
    // request.responseType = 'text';
    // request.onload = function() {

    //   console.log(request.responseText);
    
    //   };
    // request.send();

}

function useGeoLocate(pos){
  const position = pos.coords;
  let long = position.longitude
  let lat = position.latitude;
  sendLocationToServer(long, lat);
}

function sendLocationToServer(sendLong, sendLat){
  const url = `http://127.0.0.1:8000/test/${sendLong}/${sendLat}`
  fetch(url, {
    method: 'GET',
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(response => response.json())
  .then(data => {
    displayWeather(data)
  }).catch((error) => {
    console.log('errossssr ', error);
    // funtionn to loog error in if problem occured
  });
  
  
}

function noGeoLocate() {
  if (checkMark.checked == 1){
    alert("Please enable location in the browser");
  }
}

function displayWeather(weather_data){
  const answer_box = document.createElement('div');
  answer_box.classList.add('response_box');
  var newContent = document.createTextNode('description: ' + weather_data.weather[0].description);
  answer_box.appendChild(newContent);
  var linebreak = document.createElement('br');
  answer_box.appendChild(linebreak);
  var newContent = document.createTextNode('temperature: ' + weather_data.main.temp);
  answer_box.appendChild(newContent);
  var linebreak = document.createElement('br');
  answer_box.appendChild(linebreak);



  
  const newContent2 = document.createTextNode(weather_data.weather[0].icon);
  
  // answer_box.appendChild(newContent2);
  document.body.appendChild(answer_box);
  // const element = document.getElementsByClassName('location_container');
  // element.appendChild(answer_box);

  // white box: display temperature/description/
  // 



}

function errorServerResponse(response){

}

