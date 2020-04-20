(function () {
  const gameField = document.querySelectorAll("#gameTable tbody");
  const gameRows = document.querySelectorAll("#gameTable tbody tr");
  let gameColumns = [],
    section1,
    section2,
    section3,
    section4,
    section5,
    section6,
    section7,
    section8,
    section9;
  const gameCells = document.querySelectorAll("#gameTable tbody tr td");

  createColumns();
  //create rows
  function rows() {
    //console.log(gameRows);
  }
  //create columns
  function createColumns() {
    //use loop to create columns and push them to array gameColums
    let tempArr = [];
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        //console.log({ i, j });
        tempArr.push(gameRows[j].cells[i]);
      }
      gameColumns.push(tempArr);
      tempArr = [];
    }
  }
  //create 9 fields

  // create unique numbers from 1 - 9
  function numGenerator() {}

  //console.log({ gameField, gameCells, gameRows });
  let testBtn = document.querySelector(".testBtn");
  testBtn.addEventListener("click", function () {
    rows();
  });
})();
