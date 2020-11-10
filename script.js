// const currentHour = moment().format("H");
const currentHour = 13;
let userTextArr = ["", "", "", "", "", "", "", "", ""];


$("#currentDay").text(moment().format("MMM Do, YYYY"));

timeColor();

function timeColor() {
  for (let i = 0; i < userTextArr.length; i++) {

    // let inputLocation = "$('#" + (i + 9) + "')";

    let inputLocation = $(`#${i + 9}`)

    console.log(inputLocation);

    if ((i + 9) < parseInt(currentHour)) {
      inputLocation.attr("class", "past");
    }

    else if ((i + 9) === parseInt(currentHour)) {
      inputLocation.attr("class", "present");
    }

    else if ((i + 9) > parseInt(currentHour)) {
      inputLocation.attr("class", "future");
    }

  }
}