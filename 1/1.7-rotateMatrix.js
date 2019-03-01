const rotateMatrix = matrix => {
  let n = matrix.length;
  if (n < 2) return matrix;
  let maxIdx = Math.ceil(n / 2);
  for (let row = 0; row < maxIdx; row++) {
    for (let col = row; col < maxIdx; col++) {
      [
        matrix[row][col],
        matrix[col][n - row - 1],
        matrix[n - row - 1][n - col - 1],
        matrix[n - col - 1][row]
      ] = [
        matrix[n - col - 1][row],
        matrix[row][col],
        matrix[col][n - row - 1],
        matrix[n - row - 1][n - col - 1]
      ];
    }
  }
  return matrix;
};

console.log(rotateMatrix([[0, 1], [2, 3]]));
console.log(rotateMatrix([[0, 1, 2], [3, 4, 5], [6, 7, 8]]));
