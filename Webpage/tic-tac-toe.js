const statusEl = document.getElementById('status');
const boardEl = document.getElementById('board');
const resetBtn = document.getElementById('resetBtn');
const cells = Array.from(document.querySelectorAll('.cell'));

let boardState = Array(9).fill('');
let currentPlayer = 'X';
let gameActive = true;

const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function updateStatus(message) {
  statusEl.textContent = message;
}

function handleCellClick(event) {
  const cell = event.target;
  const index = Number(cell.dataset.index);

  if (!gameActive || boardState[index]) return;

  boardState[index] = currentPlayer;
  cell.textContent = currentPlayer;
  cell.classList.add('taken');

  if (checkWinner()) {
    updateStatus(`Player ${currentPlayer} wins!`);
    gameActive = false;
    return;
  }

  if (!boardState.includes('')) {
    updateStatus('Draw! Try again.');
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  updateStatus(`Current turn: ${currentPlayer}`);
}

function checkWinner() {
  return winningPatterns.some(pattern => {
    const [a, b, c] = pattern;
    return (
      boardState[a] &&
      boardState[a] === boardState[b] &&
      boardState[a] === boardState[c]
    );
  });
}

function resetGame() {
  boardState = Array(9).fill('');
  currentPlayer = 'X';
  gameActive = true;
  cells.forEach(cell => {
    cell.textContent = '';
    cell.classList.remove('taken');
  });
  updateStatus('Current turn: X');
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetBtn.addEventListener('click', resetGame);