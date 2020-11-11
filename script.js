// const currentHour = moment().format("H");
const currentHour = 14;
let userTextArr = ["", "", "", "", "", "", "", "", ""];


$("#currentDay").text(moment().format("MMM Do, YYYY"));

timeColor();

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
  console.log($(event.target).siblings().eq(1).val());
}

$(".saveBtn").on("click", saveInput);
