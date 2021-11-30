//Selectors
const searchButton = document.querySelector('.search_button');
const checkMark = document.querySelector('#check_mark_box');

//Event Listeners
searchButton.addEventListener('click', checkInputtedLocation);

//Functions 
function checkInputtedLocation(event) {
  // Prevent form from submitting
  event.preventDefault();

  //console.log(checkMark.checked);
  window.navigator.geolocation.getCurrentPosition(useGeoLocate, console.log);
  // console.log(coords.latitude)




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
  sendLocation(long, lat);
}

function sendLocation(sendLong, sendLat){
  console.log("funny shit")
  console.log(sendLong);
}
