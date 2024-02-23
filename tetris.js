import { PLAYFIELD_COLUMNS, PLAYFIELD_ROWS } from "./utilities.js";

export class Tetris {
    constructor() {
        this.playfield;
        this.tetromino;
        this.init();
    }

    init() {
        this.generatePlayfield();
        this.generateTetromino();
    }

    generatePlayfield() {
        this.playfield = new Array(PLAYFIELD_ROWS).fill()
            .map(() => new Array(PLAYFIELD_COLUMNS).fill(0)); 
    }

    generateTetromino() {
        const name = getRandomElement(TETROMINO_NAMES);
        const matrix = TETROMINOES[name];
    }
}