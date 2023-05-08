// Possible Symbols
const SYMBOL_MOON = ":)";
const symbol_Options = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", SYMBOL_MOON];

// Possible Colors
const COLOR_BLACK = "Black";
const COLOR_BLUE = "Blue";
const COLOR_RED = "Red";
const COLOR_YELLOW = "Yellow";
const color_Options = [COLOR_BLACK, COLOR_BLUE, COLOR_RED, COLOR_YELLOW];

// Possible Points
const POINTS_MOON = 30;
const points_Options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, POINTS_MOON];

// Possible States
const STATE_POOL = "Pool";
const STATE_HAND = "Hand";
const STATE_PLAYING = "Playing";
const STATE_PLAYED = "Played";
const state_Options = [STATE_POOL, STATE_HAND, STATE_PLAYING, STATE_PLAYED];

// Possible Visibilities
const VISIBILITY_HIDDEN = "Hidden";
const VISIBILITY_OWNER = "Owner";
const VISIBILITY_ALL = "All";
const visibility_Options = [VISIBILITY_HIDDEN, VISIBILITY_OWNER, VISIBILITY_ALL];

export const TILES = {
    "SYMBOL_MOON": SYMBOL_MOON,
    "symbol_Options": symbol_Options,

    "COLOR_BLACK": COLOR_BLACK,
    "COLOR_BLUE": COLOR_BLUE,
    "COLOR_RED": COLOR_BLACK,
    "COLOR_YELLOW": COLOR_BLACK,

    const COLOR_BLUE = "Blue";
    const COLOR_RED = "Red";
    const COLOR_YELLOW = "Yellow";
    const color_Options = [COLOR_BLACK, COLOR_BLUE, COLOR_RED, COLOR_YELLOW];
};

// Basic tile class used in the game
class Tile {

    /* Attributes: */
    static symbol;
    static color;
    state;
    visibility;
    moonTile = null;

    constructor(symbolOption, colorOption) {
        this.symbol = symbolOption;
        this.color = colorOption;
        this.state = STATE_POOL;
        this.visibility = VISIBILITY_HIDDEN;
        // if (this.symbol != SYMBOL_MOON) { this.moonTile = null; }
    };

    /* Getters: */
    get points() {
        if (this.symbol == SYMBOL_MOON) {
            if (this.state == )
            return POINTS_MOON;
        }
        return +this.symbol;
    };

    /* Methods: */
    pickUp() {
        this.state = STATE_HAND;
        this.visibility = VISIBILITY_OWNER;
    };

    play() {
        this.state = STATE_PLAYING;
    };

    played() {
        this.state = STATE_PLAYED;
        this.visibility = VISIBILITY_ALL;
    };

    // Add moon functionality
    // - return to hand when displaced by equivalent tile
    // - choose moonTile when played

};

// Deck of tiles
const DECK_REDUNDANCY_SIZE = 2;  // How many copies of each tile are in the deck
const Deck = buildDeck();

function buildDeck() {
    let deck = [];

    for (let i = 0; i < DECK_REDUNDANCY_SIZE; i++) {
        for (color of color_Options) {
            for (symbol of symbol_Options) {

                // Limit number of moons
                if (symbol == SYMBOL_MOON) {
                    if (i == 1) { continue; }  // Only 1 set
                    if (color == COLOR_BLUE || color == COLOR_YELLOW) { continue; }  // Only black and red moons
                }

                // Build a tile and add it to the deck
                deck.push(new Tile(symbol, color));
            }
        }
    }

    return deck;
};

export default Tile;