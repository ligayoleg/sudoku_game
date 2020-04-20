window.onload = (function () {
  //Selectors
  const numbers = document.querySelectorAll(".numbers td");
  const gameCell = document.querySelectorAll("#gameTable tbody tr td");
  let chosenNumber;
  initialState();
  //function to get the values 1 - 9 from number column
  function getValofNumbers(element) {
    let numberChosen = document.querySelectorAll(".numbers td");
    //numberChosen.forEach((e) => console.log(e.children[0].value));
    let lowerEl = element.tagName.toLowerCase();
    chosenNumber = element.attributes[1].value;
    //console.log(element.attributes[1].value);
    //console.log(chosenNumber);
  }
  //call the function getValofNumbers
  numbers.forEach((e) => {
    e.addEventListener("click", function (e) {
      getValofNumbers(e.srcElement);
    });
  });

  //
  function chooseNum() {
    if (
      chosenNumber < 1 ||
      chosenNumber > 9 ||
      chosenNumber == undefined ||
      chosenNumber == null
    ) {
      console.log("Choose a number from number row!");
    } else {
      console.log({ chosenNumber });
      //   NOTE: choose specific cell
      //let rows = Array.from(gameCell[0].rows);
    }
  }

  //initial state of sudoku field
  function initialState() {
    let counter = 1;

    for (let i = 0; i < gameCell.length; i++) {
      let cellVal = document.createAttribute("cell-number");
      cellVal.nodeValue = counter;
      gameCell[i].setAttributeNode(cellVal);
      gameCell[i].innerHTML = "";
      //console.log(gameCell[i]);
      counter++;
    }
    counter = 1;
  }

  gameCell.forEach((e) => {
    e.addEventListener(
      "click",
      function (e) {
        e = e || window.event;
        let target = e.target || e.srcElement,
          text = target.textContent || target.innerText;
        if (chosenNumber !== 0 || chosenNumber !== undefined) {
          target.innerHTML = chosenNumber.toString();
        } else {
          target.innerHTML = "";
        }
      },
      false
    );
  });

  //TEST Button
  let testBtn = document.querySelector(".testBtn");
  testBtn.addEventListener("click", function () {
    //chooseNum();
  });
})();
