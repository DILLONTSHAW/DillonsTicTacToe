document.addEventListener("DOMContentLoaded", () => {
    // Player X always starts the game
    let currentPlayer = "X";
    let gameOver = false;
  
    const cells = Array.from(document.querySelectorAll(".cell"));
  
    // Add click event listener to each cell
    cells.forEach(cell => cell.addEventListener("click", handleCellClick));
  
    function handleCellClick(e) {
      const cell = e.target;
  
      // If the cell is already marked or the game is over, ignore the click
      if (cell.textContent || gameOver) {
        return;
      }
  
      // Mark the cell with the current player's symbol (X or O)
      cell.textContent = currentPlayer;
  
      // Check if the current player wins
      if (checkWin()) {
        gameOver = true;
        alert(`Player ${currentPlayer} wins!`);
        return;
      }
  
      // Check if it's a tie (all cells are marked)
      if (checkTie()) {
        gameOver = true;
        alert("It's a tie!");
        return;
      }
  
      // Switch to the next player
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  
    function checkWin() {
      const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6] // diagonals
      ];
  
      return winningCombinations.some(combination => {
        const [a, b, c] = combination;
        return (
          cells[a].textContent &&
          cells[a].textContent === cells[b].textContent &&
          cells[a].textContent === cells[c].textContent
        );
      });
    }
  
    function checkTie() {
      return cells.every(cell => cell.textContent);
    }
  });
  