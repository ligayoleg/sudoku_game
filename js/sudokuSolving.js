(function () {
  const gameField = document.querySelectorAll("#gameTable tbody");
  const gameRows = document.querySelectorAll("#gameTable tbody tr");
  let checkArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const gameCells = document.querySelectorAll("#gameTable tbody tr td");

  function checkRow() {
    let result = true;
    let resArr = [];
    for (let j = 0; j < gameRows.length; j++) {
      for (let i = 0; i < gameRows.length; i++) {
        resArr.push(parseInt(gameRows[0].children[i].innerHTML));
      }
      // console.log(resArr);
      console.log(arrMatch(checkArr, resArr.sort()));
      resArr = [];
    }
    return result;
  }

  function checkColumn() {
    let result = true;
    let resArr = [];
    let columnsArr = [];
    for (let i = 0; i < gameRows.length; i++) {
      let tempArr = [];
      for (j = 0; j < gameRows.length; j++) {}

      tempArr = [];
    }
    //
    for (let j = 0; j < gameRows.length; j++) {
      for (let i = 0; i < gameRows.length; i++) {
        resArr.push(parseInt(gameRows[0].children[i].innerHTML));
      }
      // console.log(resArr);
      // console.log(arrMatch(checkArr, resArr.sort()));
      resArr = [];
    }
    return result;
  }

  function arrMatch(arr1, arr2) {
    // Check if the arrays are the same length
    if (arr1.length !== arr2.length) return false;

    // Check if all items exist and are in the same order
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }

    // Otherwise, return true
    return true;
  }

  function giveResult() {
    let win = false;
    if (checkRow() == false && checkColumn() == false) {
      win = false;
    } else if (checkRow() == true && checkColumn() == true) {
      win = true;
    }
    checkRow();
    console.log(win);
    return win;
  }

  //giveResult();
  const testBtn = document.querySelector(".testBtn");
  testBtn.addEventListener("click", function () {
    giveResult();
  });
})();
