// Sudoku Checker
// Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.

// A sudoku board is solved if each column, row, and 3 x 3 subgrid contains all of the digits from 1 to 9.
// More information here.

// (!!!) NOTICE: Newline characters in the inputs have been replaced
// with <br /> tags to make the value easier to read. In other words, when you see a break, it's actually a

// \n
// character. Check your console when submitting to see the input for yourself.

function sudokuCheck(boardStr) {
  let boardArr = boardStr.split("\n");
  boardArr.forEach((row, index) => {
    boardArr[index] = row.split("");
  });
  for (let i = 0; i < 9; i++) {
    if (
      !isValidRow(boardArr, i) ||
      !isValidCol(boardArr, i) ||
      !isValidBox(boardArr, i)
    ) {
      return "invalid";
    }
  }
  return "solved";
}

const isValidRow = (boardArr, i) => {
  return boardArr[i]
    .slice(0)
    .sort()
    .every((num, i, row) => {
      return i === 0 || num > row[i - 1];
    });
};

const isValidCol = (boardArr, i) => {
  let currCol = [];
  for (let row = 0; row < 9; row++) {
    currCol.push(boardArr[row][i]);
  }
  return currCol.sort().every((num, idx, row) => {
    return idx === 0 || num > row[idx - 1];
  });
};

const isValidBox = (boardArr, i) => {
  let currBox = [];
  let startRow = Math.floor(i / 3) * 3;
  let startCol = (i % 3) * 3;
  for (let row = startRow; row < startRow + 3; row++) {
    for (let col = startCol; col < startCol + 3; col++) {
      currBox.push(boardArr[row][col]);
    }
  }
  return currBox.sort().every((num, idx, boxArr) => {
    return idx === 0 || num > boxArr[idx - 1];
  });
};
