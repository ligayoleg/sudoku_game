(function () {
  //Selectors
  const gameField = document.querySelectorAll("#gameTable tbody");
  const gameRows = document.querySelectorAll("#gameTable tbody tr");
  let gameColumns = [];
  let columnNums = [];
  let tempArr = [];
  const initArr = [
    [4, 2, 7, 1, 9, 6, 5, 3, 8],
    [3, 5, 9, 8, 2, 4, 1, 7, 6],
    [1, 6, 8, 3, 5, 7, 2, 9, 4],
    [9, 4, 2, 5, 8, 1, 7, 6, 3],
    [6, 8, 3, 9, 7, 2, 4, 5, 1],
    [5, 7, 1, 6, 4, 3, 9, 8, 2],
    [8, 1, 5, 4, 3, 9, 6, 2, 7],
    [7, 3, 6, 2, 1, 5, 8, 4, 9],
    [2, 9, 4, 7, 6, 8, 3, 1, 5],
  ];
  function setSudokuTemplate() {
    let length = gameRows.length;

    for (let i = 0; i < gameRows.length; i++) {
      for (let j = 0; j < gameRows.length; j++) {
        gameRows[i].children[j].innerHTML = initArr[i][j];
      }
    }
  }

  setSudokuTemplate();
})();
