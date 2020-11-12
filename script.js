// const currentHour = moment().format("H");
const currentHour = 14;
let userTextArr;

$("#currentDay").text(moment().format("MMM Do, YYYY"));

checkStorage();

timeColor();

function checkStorage() {
  let previously = localStorage.getItem("usersInput");
  if (previously === null) {
    userTextArr = ["", "", "", "", "", "", "", "", ""];
  }
  else {
    userTextArr = previously;
    saveInput();
  }
}

function timeColor() {
  for (let i = 0; i < userTextArr.length; i++) {

    let inputLocation = $(`#${i + 9}`);

    if ((i + 9) < parseInt(currentHour)) {
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

function saveInput(event) {
  for (let i = 0; i < userTextArr.length; i++) {
    const listPosition = userTextArr[i];

    currentHour[i] = $(event.target).siblings().eq(1).val();

    $(`#${i + 9}`).html(listPosition);

    localStorage.setItem("usersInput", userTextArr);
  }
}

$(".saveBtn").on("click", saveInput);
