// Rock Paper Permutation
// Given a number of rounds n, return all the possible
// rock-paper-scissors play possibilities for that number of rounds.

function rockPaperPermutation(roundCount) {
  if (roundCount === 0) return [];
  let solution = [];
  let moves = ["r", "p", "s"];
  const innerRecursive = (currMoves = "") => {
    if (currMoves.length === roundCount) {
      solution.push(currMoves);
    } else {
      for (let move of moves) {
        let nextMove = currMoves + move;
        innerRecursive(nextMove);
      }
    }
  };
  innerRecursive();
  return solution;
}
