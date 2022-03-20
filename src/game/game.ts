import { Game } from '../types/Types';

const game: Game = {
    CONTROLS: {
        board: ['', '', '', '', '', '', '', '', ''],
        playerTurn: 0,
        flags: ['x', 'o'],
        isGameOver: false,
        score: [0, 0]
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
    handleMove: function(position) {
        this.CONTROLS.board[position] = this.CONTROLS.flags[this.CONTROLS.playerTurn];
        this.CONTROLS.playerTurn === 0 ? this.CONTROLS.playerTurn = 1 : this.CONTROLS.playerTurn = 0;
    },
    resetVariables: function() {
        this.CONTROLS.board = ['', '', '', '', '', '', '', '', ''];
        this.CONTROLS.playerTurn = 0;
        this.CONTROLS.isGameOver = false;
        this.CONTROLS.score = [0, 0];
    },
    clearBoard: function() {
        this.CONTROLS.board = ['', '', '', '', '', '', '', '', ''];
        this.CONTROLS.playerTurn = 0;
        this.CONTROLS.isGameOver = false;
    },
    isWinner: function() {

    for (let i = 0; i < this.winnerSequences.length; i++) {

        let seq = this.winnerSequences[i];

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if (this.CONTROLS.board[pos1] == this.CONTROLS.board[pos2] &&
            this.CONTROLS.board[pos1] == this.CONTROLS.board[pos3] &&
            this.CONTROLS.board[pos1] != '') {
            return true;
        }
    }

    return false;

    },
    isTiedGame: function() {
        if (this.CONTROLS.board.includes('')) {
            return false;
        } else {
        return true;
        }
    },
    getAvailablePositions: function() {
        let arr = this.CONTROLS.board.filter(p => p === '');
        return arr;
    },
    getRandomAvailablePosition: function() {

        let position: number;
        let number: number;
        const newArr: number[] = []; 

        this.CONTROLS.board.map((position, index) => {
            if (position === '') {
                newArr.push(index);
            };
        });

        position = Math.floor(Math.random() * newArr.length);
        number = newArr[position];

    return number;
    
    },
}

export default game;