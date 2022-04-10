export type Options = {
    mode: string;
    difficuty: string;
}

export interface Game {
    controls: {
        board: string[],
        flags: string[],
        isGameOver: boolean,
        lockMode: boolean,
    },
    winnerSequences: number[][],
    handleMove(position: number, playerTurn: number): void,
    isWinner(): boolean,
    isTiedGame(): boolean,
    isPositionAvailable(position: number): boolean,
    getRandomAvailablePosition(): number,
    clearBoard(): void,
}