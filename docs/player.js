/* Imports */
import Tile from "./tile";
import Player from "./player";
import Settings from "./settings";
import * as UTILS from "./utils";

/* Constants */
    // Player Type options
    const TYPE_HMN = 0;
    const TYPE_CPU = 1;
    const TYPE_OPTIONS = [TYPE_HMN, TYPE_CPU];

    // Export Player constants
    export const PLAYER = {
        TYPE_HMN: TYPE_HMN,
        TYPE_CPU: TYPE_CPU,
        TYPE_OPTIONS: TYPE_OPTIONS,
    };

// Player class for participants in the game
class Player {

    /* Attributes: */
    name;
    type;  // CPU/HMN
    score;  // Overall score (outside of current game)
    hand = [];  // array of Tiles

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
    draw(tilePool) {
        this.hand.push(UTILS.popRandom(tilePool));  // Move tile from deck to player's hand
    };

    play() {

    };

};

export default Player;