/* Imports */
import Tile, { buildDeck } from "./tile";
import Player from "./player";
import Settings, { SETTINGS } from "./settings";
import * as UTILS from "./utils";

class Game {

    /* Attributes: */
    name;
    players = [];  // Order of set is turn order
    rounds;  // Number of rounds played
    turns;  // Array of turn numbers in the current round
    currentTurn;  // Index for turns array
    settings;  // Object with various setting attributes
    deck;  // Array of Tiles in the available pool to draw from
    board;  // Object

    /* Constructor: */
    constructor(nameString, [playersString]) {
        this.name = nameString;
        // Build this.players and randomize the order
        this.rounds = 0;
    };

    /* Methods: */
    startRound() {
        this.turns = new Array(this.players.length).fill(0);  // Set all turn numbers to zero for each player
        this.deck = buildDeck();
        this.deal();

        this.currentTurn = this.players[(this.rounds % this.players.length)];
        this.takeTurn(this.players[this.currentTurn]);  // Rotate starting player every round
    };

    deal() {
        for (player of this.players) {  // for each player
            for (let i = 0; i < SETTINGS.STARTING_NUM_TILES; i++) {  // fill whole starting hand size
                player.hand.push(UTILS.popRandom(this.deck));  // Move tile from deck to player's hand
            }
        }
    };

    takeTurn(player) {
        
        this.endTurn(player);
    };

    endTurn(player) {
        // Make all Tiles played
        // - remove tiles from hand
        // - change their state

        // Check if game over
        if (this.isGameOver(player)) { return this.results(); }

        

        this.currentTurn = (this.currentTurn + 1) % this.players.length;
        this.takeTurn(this.players[this.currentTurn]);  // Progress to the next player in the order
    };

    isGameOver(player) {
        // Game is over when one player gets rid of all tiles from their hand
        // This can only happen on the current player's turn, so no need to check all hands
        if (player.hand.length == 0) {
            return true;
        } else {
            return false;
        }
    };

    results() {

    };

};

export default Game;