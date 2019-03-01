const zeroMatrix = matrix => {
  if (matrix.length === 0) return matrix;
  if (matrix[0].length === 0) return matrix;
  let zeroRows = new Set();
  let zeroCols = new Set();
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === 0) {
        zeroRows.add(row);
        zeroCols.add(col);
      }
    }
  }
  for (let row of zeroRows) {
    setRowToZero(matrix, row);
  }
  for (let col of zeroCols) {
    setColToZero(matrix, col);
  }
  return matrix;
};

const setRowToZero = (matrix, row) => {
  for (let col = 0; col < matrix[row].length; col++) {
    matrix[row][col] = 0;
  }
};

const setColToZero = (matrix, col) => {
  for (let row = 0; row < matrix.length; row++) {
    matrix[row][col] = 0;
  }
};

console.log(zeroMatrix([[0, 1, 2], [3, 4, 5]]));
