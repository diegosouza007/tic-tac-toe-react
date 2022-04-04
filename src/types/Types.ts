export type Options = {
    mode: string;
    difficuty?: string;
}

export interface Game {
    controls: {
        board:  string[],
        flags: string[],
        isGameOver: boolean,
        lockMode: boolean,
        playerTurn: number,
    },
    winnerSequences: number[][],
    handleMove(position: number): void,
    isWinner(): boolean,
    isTiedGame(): boolean,
    getAvailablePositions(): string[],
    getRandomAvailablePosition(): number,
    clearBoard(): void,
    newRound(): void,
}