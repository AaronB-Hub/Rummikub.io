/* Imports */
import Tile from "./tile";
import Player from "./player";
import Settings from "./settings";

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
    hand;  // array of Tiles
    score;  // Overall score (outside of current game)
    type;  // CPU/HMN

    /* Constructor: */
    constructor() {};

    /* Getters: */
    get points() {
        let points = 0;
        for (tile of hand) {
            points += tile.points;
        }
        return points;
    };
};

export default Player;