import { Game } from '../types/Types';

const game: Game = {
    controls: {
        board: ['', '', '', '', '', '', '', '', ''],
        flags: ['x', 'o'],
        isGameOver: false,
        lockMode: false,
    },
    winnerSequences: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ],
    handleMove: function (position, playerTurn) {
        if (this.controls.board[position] === '') {
            this.controls.board[position] = this.controls.flags[playerTurn];
        }
    },
    isWinner: function () {
        for (let i = 0; i < this.winnerSequences.length; i++) {

            let seq: number[] = this.winnerSequences[i];

            let pos1: number = seq[0];
            let pos2: number = seq[1];
            let pos3: number = seq[2];

            if (this.controls.board[pos1] == this.controls.board[pos2] &&
                this.controls.board[pos1] == this.controls.board[pos3] &&
                this.controls.board[pos1] != '') {
                return true;
            }
        }
        return false;
    },
    isTiedGame: function () {
        if (this.controls.board.includes('')) {
            return false;
        } else {
            return true;
        }
    },
    isPositionAvailable: function (position) {
        return this.controls.board[position] === '';
    },
    getRandomAvailablePosition: function () {
        const newArr: number[] = [];
        const minimum: number = 0;
        let position: number;
        let number: number;

        this.controls.board.map((position, index) => {
            if (position === '') {
                newArr.push(index);
            };
        });
        position = Math.floor(Math.random() * newArr.length);
        number = newArr[position];

        return number;
    },
    clearBoard: function () {
        this.controls.board = ['', '', '', '', '', '', '', '', ''];
    }
}

export default game;