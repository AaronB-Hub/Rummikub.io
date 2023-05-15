/* Imports */
import Tile from "./tile";
import Board, { Group, BoardView } from "./board";
import { Turn } from "./play";
import Settings from "./settings";
import * as UTILS from "./utils";

/* Constants */
    // Player Type options
    const TYPE_OPTIONS = {
        HMN: 0,
        CPU: 1,
    };

    // Export Player constants
    export const PLAYER = {
        TYPE: TYPE_OPTIONS,
    };

// Player class for participants in the game
export default class Player {

    /* Attributes: */
    name;
    type;  // CPU/HMN
    score;  // Overall score (outside of current game)
    hand = [];  // array of Tiles
    boardview;
    turn;

    /* Constructor: */
    constructor(nameString, typeOption) {
        this.name = nameString;
        this.type = typeOption;
        this.score = 0;
    };

    /* Getters: */
    get points() {
        let points = 0;
        for (tile of this.hand) {
            points += tile.points;
        }
        return points;
    };

    /* Methods: */
    draw(tile) {
        tile.pickUp();  // Update its status
        this.hand.push(UTILS.popRandom(tile));  // Move tile from deck to player's hand
    };

    play() {
        // Starts turn (and timer)
        this.turn = new Turn(this.settings.turnLength);

        // Do turn logic
        // this.turn.go();  

        while (!this.turn.update) {
        // while (!this.turn.timer > 0) {

        }

        return this.turn;
    };

    makeMove() {
        this.turn.update = "TEST";
    };

};


export const TURN = {
    TYPE: {
        DRAW: "draw",
        PLACE: "place",
        PLAY: "play",
    },
};

export class Turn {

    /* Attributes: */
    timer;
    tick;
    type;
    update;

    /* Constructor: */
    constructor(timerOption) {
        this.timer = timerOption;
        this.tick = setInterval(this.secondTick, 1000);
        this.update = null;
    };

    /* Methods: */
    go() {
        // while (this.timer > 0) {
        //     // Do stuff
        // }
    };

    stop() {
        clearInterval(tick);
    };

    secondTick() {
        this.timer --;

        // If timer runs out
        if (this.timer == 0) {
            this.type = TURN.TYPE.DRAW;
            this.stop();
        }
    };
};