const currentHour = moment().format("H");
let userTextArr = ["", "", "", "", "", "", "", "", ""];


$("#currentDay").text(moment().format("MMM Do, YYYY"));

timeColor();

function timeColor() {
  for (let i = 0; i < userTextArr.length; i++) {

    let inputLocation = "$('#" + (i + 9) + "')";

    console.log(inputLocation);

    if ((i + 9) < parseInt(currentHour)) {
      inputLocation.setAttribute("class", "past");
    }

    else if ((i + 9) === parseInt(currentHour)) {
      inputLocation.setAttribute("class", "present");
    }

    else if ((i + 9) > parseInt(currentHour)) {
      inputLocation.setAttribute("class", "future");
    }

  }
}