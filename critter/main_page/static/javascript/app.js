//Selectors
const searchButton = document.querySelector('.search_button');
const checkMark = document.querySelector('#check_mark_box');

//Event Listeners
searchButton.addEventListener('click', checkInputtedLocation);

//Functions 
function checkInputtedLocation(event) {
  // Prevent form from submitting
  event.preventDefault();

  //make function for not using location
  window.navigator.geolocation.getCurrentPosition(useGeoLocate, noGeoLocate);

  // if checkMArk.checked == 1 
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
    console.log('Success:', data);
  }).catch((error) => {
    console.error("no ggod");
  });
  
  // .then(goodServerResponse).catch(errorServerResponse)
  
}

function noGeoLocate() {
  if (checkMark.checked == 1){
    alert("Please enable location in the browser");
  }
}

function goodServerResponse(response){
  console.log("winningrr")
}

function errorServerResponse(response){

}
