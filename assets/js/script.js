const currentHour = moment().format("H");
let userTextObj = {
  9: "",
  10: "",
  11: "",
  12: "",
  13: "",
  14: "",
  15: "",
  16: "",
  17: ""
}; // temporary textarea storage

$("#currentDay").text(moment().format("MMM Do, YYYY")); // moment date caller

checkStorage(); // if previous information exists, add it to object

timeColor(); // change color based on time of day

function checkStorage() {
  let previously = JSON.parse(localStorage.getItem("usersInput")); // get previous storage if it exhists
  if (previously) { // if it does, 
    userTextObj = previously; // fill it into the object

    loadTextAreas(); // load onto screen
  }
}

function loadTextAreas() {
  for (let i = 9; i < 18; i++) { 
    const objKey = userTextObj[i]; // run through each thing on the list

    console.log("objKey = " + objKey)

    $(`#${i}`).html(objKey); // add that list item to the document

  }
}

function timeColor() {
  for (let i = 0; i < 9; i++) {

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

  btnTarget = $(event.target).siblings().eq(1).attr("id"); // get text id

  userStStyle = $(event.target).siblings().eq(1);

  $(event.target).css("color", "black");

  userTextObj[btnTarget] = userSt;

  localStorage.setItem("usersInput", JSON.stringify(userTextObj)); // save changes

  loadTextAreas(); // load changes to the screen

}

$(".btn").on("click", saveInput);
