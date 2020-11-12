// const currentHour = moment().format("H");
const currentHour = 14; // for debugging an arbitrary time
let userTextArr = ["", "", "", "", "", "", "", "", ""]; // temporary textarea storage

$("#currentDay").text(moment().format("MMM Do, YYYY")); // moment date caller

checkStorage(); // if previous information exhists, add it to array

timeColor(); // change color based on time of day

function checkStorage() {
  let previously = localStorage.getItem("usersInput"); // get previous storage if it exhists
  if (previously) { // if it does, 
    userTextArr = previously; // fill it into the array

    loadTextAreas(); // load onto screen
  }
}

function loadTextAreas() {
  for (let i = 0; i < userTextArr.length; i++) { 
    const listPosition = userTextArr[i]; // un through each thing on the list

    $(`#${i + 9}`).html(listPosition); // add that list item to the document

  }
}

function timeColor() {
  for (let i = 0; i < userTextArr.length; i++) {

    let inputLocation = $(`#${i + 9}`); // run through each location id

    if ((i + 9) < parseInt(currentHour)) { //these just change the color class
      inputLocation.attr("class", "past");
    }
    else if ((i + 9) === parseInt(currentHour)) {
      inputLocation.attr("class", "present");
    }
    else {
      inputLocation.attr("class", "future");
    }
  }
}

function saveInput(event) { // save input to the array and then local

  userSt = $(event.target).siblings().eq(1).val(); // get users text

  console.log(userSt);

  btnTarget = $(event.target).siblings().eq(1).attr("id"); // get text id

  console.log(btnTarget);

  replaceMe =  userTextArr[btnTarget - 9]; // where in array should the text go

  console.log(replaceMe);

  userSt.replace(replaceMe, userSt); // replace whatever was in the array

  localStorage.setItem("usersInput", userTextArr); // save changes

  loadTextAreas(); // load changes to the screen

}

$(".saveBtn").on("click", saveInput);
