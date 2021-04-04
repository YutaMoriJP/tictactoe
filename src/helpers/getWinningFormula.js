const getWinningFormula = square => {
  const w = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 5],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < w.length; i++) {
    const [a, b, c] = w[i];
    if (square[a] && square[a] === square[b] && square[a] === square[c]) {
      return [a, b, c];
    }
  }
};

export default getWinningFormula;
