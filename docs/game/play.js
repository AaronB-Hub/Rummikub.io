/* Imports */
import Tile, { buildDeck } from "./tile";
import Player from "./player";
import Board, { Group } from "./board";

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
    type;

    /* Constructor: */
    constructor(timerOption) {
        this.timer = timerOption;
        // this.type = typeOption;
    };

    /* Methods: */
    go() {
        // Count down the timer once every second
        let tick = setInterval(this.secondTick, 1000);

        while (this.timer > 0) {
            // Do stuff
        }

        // Timer runs out
        clearInterval(tick);
        return TurnType.Draw;
    };

    secondTick() {
        this.timer --;
    };
};


// Take in game (current player, the board, )
// Let player manipulate board and build Turn object
// Enforce time limit
// Player draws or submits end of turn if they have played at least one tile
// Submit Turn object to Game to enforce changes



// Scratchpad where you can freely manipulate without rule enforcement
// - indicate tiles that came from the board vs 

// Manipulate group (take in group, output new group(s)) - pop the group from the board