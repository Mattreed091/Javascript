// ID's: localStorageSetItem & localStorageSetItemHead
localStorage.setItem('name','John Doe');
let localStorageSetItemOutput = localStorage.getItem("name");
const localStorageSetItem = document.getElementById("localStorageSetItem");
const localStorageSetItemHead = document.getElementById("localStorageSetItemHead");
const sessionStorageSetItem = document.getElementById("sessionStorageSetItem");
const sessionStorageGetItem = document.getElementById("sessionStorageGetItem");
const sessionStorageGetItemHead = document.getElementById("sessionStorageGetItemHead");
const sessionStorageSetItemHead = document.getElementById("sessionStorageSetItemHead");
localStorageSetItem.innerHTML = localStorageSetItemOutput;
localStorageSetItemHead.innerHTML = 'Using <code class="w3-codespan">localStorage.setItem</code>& <code class="w3-codespan">localStorage.getItem</code> to display value:';
//sessionStorageSetItem & sessionStorageSetItemHead
//sessionStorageGetItem & sessionStorageGetItem
sessionStorage.setItem("name", "John Doe");
let sessionStorageSetItemOutput = sessionStorage.getItem("name");
sessionStorageSetItem.innerHTML = sessionStorageSetItemOutput;
sessionStorageSetItemHead.innerHTML = 'Using <code class="w3-codespan">sessionStorage.setItem</code>& <code class="w3-codespan">sessionStorage.getItem</code> to display value:';
//Struggling with fetch API
//maybe because it requires condentials
getText("file:///dollarbank.dom/dollardfs/Redirects/10004006/Documents/3.txt");

async function getText(file) {
  let x = await fetch(file);
  let y = await x.text();
  document.getElementById("fetchAPI").innerHTML = y;
}
//function getLocation() {
  //if (navigator.geolocation) {
    //navigator.geolocation.getCurrentPosition(showPosition, showError);
//  } else {
//    document.getElementById('displayInMapGeoLocationAPI').innerHTML = "Geolocation is not supported by this browser.";
//  }
//}
//getLocation();
//says coords from position object error
//function showPosition(position) {
 // let latlon = position.coords.latitude + "," + position.coords.longitude;
  //let img_url = 'https://maps.googleapis.com/maps/api/staticmap?center='
  //+latlon+'&zoom=14&size=400x300&sensor=false&key=AIzaSyCWZ0Q97Wj26JRiss9mBt24He4Ig61erDY';
  //document.getElementById("displayInMapGeoLocationAPI").innerHTML = "<img class='w3-center' src='"+img_url+"'>";
//}
//cannot read error.code
//function showError(error) {
//  switch(Error.code) {
 //   case Error.PERMISSION_DENIED:
 //     document.getElementById("displayInMapGeoLocationAPI").innerHTML = "User denied the request for Geolocation."
   //   break;
   // case Error.POSITION_UNAVAILABLE:
   //   document.getElementById("displayInMapGeoLocationAPI").innerHTML = "Location information is unavailable."
     // break;
    //case Error.TIMEOUT:
    //  document.getElementById("displayInMapGeoLocationAPI").innerHTML = "The request to get user location timed out."
     // break;
  //  case Error.UNKNOWN_ERROR:
     // document.getElementById("displayInMapGeoLocationAPI").innerHTML = "An unknown error occurred."
     // break;
 // }
//}
//showError();
//const displayInMapGeoLocationAPI = //document.getElementById('displayInMapGeoLocationAPI');
//const getLocation1 = document.getElementById('getLocation');
//getLocation1.addEventListener("click",  showPosition());
//AJAX Intro
const AJAXIntro = document.getElementById('AJAXIntro');
const AJAXIntroHead = document.getElementById('AJAXIntroHead');
const AJAXIntroBTN = document.getElementById('AJAXIntroBTN');
function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("AJAXIntro").innerHTML = this.responseText;
    }
  xhttp.open("GET", "file://dollarbank.dom/dollardfs/Redirects/10004006/Documents/3.txt", true);
  xhttp.send();
}
//JSON Example
const jsonOBJ = '{"name":"John", "age":30, "car":null}';
//If you parse the JSON string with a JavaScript program, you can access the data as an object:
let personName = jsonOBJ.name;
let personAge = jsonOBJ.age;
//JSON Object with an array of 3 objects.
//me creating JSON object
let jsonOBJArray = {"employees": [
  { "firstName":"John", "lastName":"Doe" },
  { "firstName":"Anna", "lastName":"Smith" },
  { "firstName":"Peter", "lastName":"Jones" }
 ]};
//me making JSON object a string. 
//must stringify Objects, Dates, Functions, and Arrays before being parsed by JSON.parse()
const jsonOBJArrayStr = JSON.stringify(jsonOBJArray);
// me pasing object too make it a javascript object
jsonOBJArray = JSON.parse(jsonOBJArrayStr);
// const jsonOBJArray = JSON.parse(jsonOBJArrayStr);
//assigning first object value to a varible
//let arrayOBJ0 = jsonOBJArray[0];
let OBJ0Output = '';
if (Symbol.iterator in Object(jsonOBJArray)) {
  console.log(true);
}
else {
  console.log(false);
  console.log(typeof jsonOBJArray);
}
//function arrayFunc(item, index, arr) {
  //return arr[index] + item;
//}
//issue with getting values of employee array
for(const[key, value]  of Object.entries(jsonOBJArray) ) {
  if (jsonOBJArray.hasOwnProperty(key)) {
  //OBJ0Output += jsonOBJArray.employees.forEach(arrayFunc);
      OBJ0Output += key +": " + value + "<br>";
  }
  }
const jsonOBJArrayID = document.getElementById('jsonOBJArrayID');
const jsonOBJArrayIDHead = document.getElementById('jsonOBJArrayIDHead');
// will get object name but will not get values of objects in array. work on fix 
jsonOBJArrayIDHead.innerHTML = 'Looping through employee JSON object literal that has an array of values bay the name of employees'
jsonOBJArrayID.innerHTML = OBJ0Output;
//JSON Strings
const jsonSTR = JSON.parse('{"name":"John"}');
//JSON Numbers
const jsonNUM = JSON.parse('{"age":30}');
//JSON Objects
// const jsonOBJ1 = JSON.parse({
// "employee":{"name":"John", "age":30, "city":"New York"}
// });
//JSON Arrays
// const jsonArray = JSON.parse({
//"employees":["John", "Anna", "Peter"]
//});
//JSON Booleans
const jsonBoolean = JSON.parse('{"sale":true}');
//JSON null
const jsonNull = JSON.parse('{"middlename":null}');

let jsonObj1Output = '';
//for (let key in jsonOBJ1) {
 // if (objName.hasOwnProperty(key)) {
   //jsonObj1Output += key + ': ' + jsonOBJ1[key] + "<br>";
  //}
//}
//jsonOBJArrayID.innerHTML = jsonOBJArrayStr;
//all JSON Values Variables
// JSON Object jsonOBJ
// JSON Object of arrays jsonOBJArrayStr
// JSON String jsonSTR
// JSON Number jsonNUM
// JSON Array jsonArray
// JSON Boolean jsonBoolean
// JSON Null  jsonNull
const JSONObj1 = {name: "John", dayOfWeek: new Date().getDay(), month:new Date().getMonth(), dayOfMonth: new Date().getDate(), year: new Date().getFullYear(), city : "New York",};
const myJSONObjStr1 = JSON.stringify(JSONObj1);
const myJSONObj1 = JSON.parse(myJSONObjStr1);
var myJSONObjDay;
var myJSONObjMonth;
var myJSONObjDate;
var myJSONObjYear;
switch (myJSONObj1.dayOfWeek) {
  case 0:
    myJSONObjDay = "Sunday";
    break;
  case 1:
    myJSONObjDay = "Monday";
    break;
  case 2:
     myJSONObjDay = "Tuesday";
    break;
  case 3:
    myJSONObjDay = "Wednesday";
    break;
  case 4:
    myJSONObjDay = "Thursday";
    break;
  case 5:
    myJSONObjDay = "Friday";
    break;
  case 6:
    myJSONObjDay = "Saturday";
}
switch (myJSONObj1.month) {
  case 0:
    myJSONObjMonth = "January";
    break;
  case 1:
    myJSONObjMonth = "February";
    break;
  case 2:
     myJSONObjMonth = "March";
    break;
  case 3:
    myJSONObjMonth = "April";
    break;
  case 4:
    myJSONObjMonth = "May";
    break;
  case 5:
    myJSONObjMonth = "June";
    break;
  case 6:
    myJSONObjMonth = "July";
    break;
  case 7 :
    myJSONObjMonth = "August";
    break;
  case 8: 
    myJSONObjMonth = "September";
    break;
  case 9:
    myJSONObjMonth = "October";
    break;
  case 10: 
    myJSONObjMonth = "November";
    break;
  case 11:
    myJSONObjMonth = "December";
}
const JSONObjDate = document.getElementById('JSONObjDate');
const JSONObjDateHead = document.getElementById('JSONObjDateHead');
JSONObjDate.innerHTML = 'Today Is: ' + myJSONObjDay + ' ' + myJSONObjMonth + ', ' + myJSONObj1.dayOfMonth + ' ' + myJSONObj1.year + '<br>' + 'Name: ' + myJSONObj1.name + ' City:' + myJSONObj1.city ;
JSONObjDateHead.innerHTML = '<b>JSON on an object: </b><br>'
for (const x in myJSONObj1) {
  jsonObj1Output += x + "<br>";
}
const JSONObjForInLoop = document.getElementById('JSONObjForInLoop');
const JSONObjForInLoopHead = document.getElementById('JSONObjForInLoopHead');
JSONObjForInLoop.innerHTML = jsonObj1Output;