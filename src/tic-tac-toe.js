class TicTacToe {
    constructor() {
      this.matrix = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ];

      this.step = 0;
      this.currentPlayer = 'x';
    }

    getCurrentPlayerSymbol() {
      return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
      if (this.matrix[rowIndex][columnIndex] === null) {
        this.matrix[rowIndex][columnIndex] = this.currentPlayer;
        this.step++;
        this.currentPlayer = (this.step % 2) ? 'o' : 'x';
      }
    }

    isFinished() {
      return !!(this.isDraw() || this.getWinner() != null);
    }

    getWinner() {
      let winner = '';
      // strings
      for (let i = 0; i < this.matrix.length; i++) {
        if (this.matrix[i].every(elem => elem === this.matrix[i][0]))
          winner = this.matrix[i][0];
      }

      // columns
      for (let j = 0; j < this.matrix.length; j++) {
        if (this.matrix[0][j] === this.matrix[1][j] && this.matrix[1][j] === this.matrix[2][j])
          winner = this.matrix[0][j];
      }

      // diagonals
      if (this.matrix[0][0] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[2][2])
        winner = this.matrix[0][0];
      if (this.matrix[0][2] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[2][0])
        winner = this.matrix[0][2];

      winner = winner ? winner : null;
      return winner;
    }

    noMoreTurns() {
      return this.step === 9;
    }

    isDraw() {
        return !!(this.noMoreTurns() && this.getWinner() == null);
    }

    getFieldValue(rowIndex, colIndex) {
      return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
