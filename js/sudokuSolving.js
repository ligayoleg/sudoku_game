(function () {
  const gameField = document.querySelectorAll("#gameTable tbody");
  const gameRows = document.querySelectorAll("#gameTable tbody tr");
  let checkArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const gameCells = document.querySelectorAll("#gameTable tbody tr td");

  function checkRow() {
    console.log(gameRows[0].children);
  }

  function giveResult() {
    let win = false;
    checkRow();
    return win;
  }

  giveResult();
})();
