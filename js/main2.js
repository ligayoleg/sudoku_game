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

  //create rows
  function rows() {
    console.log(gameRows);
  }
  //create columns
  function columns() {
    gameCells.forEach((e) => {
      let attrValue = e.attributes[0].value;
      console.log(gameColumns);
    });
  }
  //create 9 fields

  // create unique numbers from 1 - 9
  function numGenerator() {}

  console.log({ gameField, gameCells, gameRows });
  let testBtn = document.querySelector(".testBtn");
  testBtn.addEventListener("click", function () {
    rows();
    columns();
  });
})();
