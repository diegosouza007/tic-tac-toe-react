export type Options = {
    mode: string;
    difficuty: string;
}

export interface Game {
    CONTROLS: {
        board:  string[],
        playerTurn: number,
        flags: string[],
        isGameOver: boolean,
        score: number[],
    },
    winnerSequences: number[][],
    handleMove(position: number): void,
    resetVariables(): void,
    clearBoard(): void,
    isWinner(): boolean,
    isTiedGame(): boolean,
    getAvailablePositions(): string[],
    getRandomAvailablePosition(): number,
}