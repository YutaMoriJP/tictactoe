export const helper = square => {
  const formula = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const { length } = formula;
  for (let i = 0; i < length; i++) {
    const [a, b, c] = formula[i];
    const [x, y, z] = [square[a], square[b], square[c]];
    if (x && x === y && x === z)
      return { gameOver: true, winningFormula: formula[i] };
  }
  return { gameOver: false, winningFormula: [] };
};

export const generateBoard = () => Array.from({ length: 9 }, () => null);
