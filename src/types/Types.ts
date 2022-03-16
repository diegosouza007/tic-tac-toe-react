export type Screen = {
    intro: boolean;
    menu: boolean;
    difficuty: boolean;  
    gameScreen: boolean;
}

export type Options = {
    mode: string | undefined;
    difficuty: string | undefined;
    score: number;
}