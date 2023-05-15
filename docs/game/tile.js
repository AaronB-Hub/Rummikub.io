/* Constants */
    // Possible Symbols
    const SYMBOL_MOON = ":)";
    const SYMBOL_OPTIONS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", SYMBOL_MOON];

    // Possible Colors
    const COLOR_BLACK = "Black";
    const COLOR_BLUE = "Blue";
    const COLOR_RED = "Red";
    const COLOR_YELLOW = "Yellow";
    const COLOR_OPTIONS = [COLOR_BLACK, COLOR_BLUE, COLOR_RED, COLOR_YELLOW];

    // Possible Points
    const POINTS_MOON = 30;
    const POINTS_OPTIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, POINTS_MOON];

    // Possible States
    const STATE_DECK = "Deck";
    const STATE_HAND = "Hand";
    const STATE_PLAYING = "Playing";
    const STATE_PLAYED = "Played";
    const STATE_OPTIONS = [STATE_DECK, STATE_HAND, STATE_PLAYING, STATE_PLAYED];

    // Possible Visibilities
    const VISIBILITY_HIDDEN = "Hidden";
    const VISIBILITY_OWNER = "Owner";
    const VISIBILITY_ALL = "All";
    const VISIBILITY_OPTIONS = [VISIBILITY_HIDDEN, VISIBILITY_OWNER, VISIBILITY_ALL];

    // Deck
    const DECK_REDUNDANCY_SIZE = 2;  // Number of copies of each tile are in the deck

    // Export tile constants
    export const TILES = {
        SYMBOL_MOON: SYMBOL_MOON,
        SYMBOL_OPTIONS: SYMBOL_OPTIONS,

        COLOR_BLACK: COLOR_BLACK,
        COLOR_BLUE: COLOR_BLUE,
        COLOR_RED: COLOR_RED,
        COLOR_YELLOW: COLOR_YELLOW,
        COLOR_OPTIONS: COLOR_OPTIONS,

        POINTS_MOON: POINTS_MOON,
        POINTS_OPTIONS: POINTS_OPTIONS,

        STATE_POOL: STATE_POOL,
        STATE_HAND: STATE_HAND,
        STATE_PLAYING: STATE_PLAYING,
        STATE_PLAYED: STATE_PLAYED,
        STATE_OPTIONS: STATE_OPTIONS,

        VISIBILITY_HIDDEN: VISIBILITY_HIDDEN,
        VISIBILITY_OWNER: VISIBILITY_OWNER,
        VISIBILITY_ALL: VISIBILITY_ALL,
        VISIBILITY_OPTIONS: VISIBILITY_OPTIONS,

        DECK_REDUNDANCY_SIZE: DECK_REDUNDANCY_SIZE,
    };

// Basic tile class used in the game
export default class Tile {

    /* Attributes: */
    static symbol;
    static color;
    state;
    visibility;
    moonTile = null;
    selected;

    /* Constructor: */
    constructor(symbolOption, colorOption) {
        this.symbol = symbolOption;
        this.color = colorOption;
        this.state = STATE_DECK;
        this.visibility = VISIBILITY_HIDDEN;
        // if (this.symbol != SYMBOL_MOON) { this.moonTile = null; }
    };

    /* Getters: */
    get points() {
        if (this.symbol == SYMBOL_MOON) {
            // if (this.state == STATE_HAND) {
                return POINTS_MOON;
            // } else {
                // return this.moonTile.points;
            // }
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
export function buildDeck() {
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