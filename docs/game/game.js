/* Imports */
import Tile, { buildDeck } from "./tile";
import Player, { PLAYER } from "./player";
import { TURN, Turn } from "./play";
import Settings, { SETTINGS } from "./settings";
import * as UTILS from "../utils";
import { BoardView } from "./board";

export const GameStatus = {
	Dealing: 0,
	Playing: 1,
	Scoring: 2,
};

export default class Game {

    /* Attributes: */
    name;
    status;  // Status of the game: dealing, playing, 
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
        this.settings = this.getSettings();
    };

    /* Methods: */
    getSettings() {
        // Add logic to set game settings/rules via GUI
        return SETTINGS.PRESETS.CLASSIC;
    };

    startRound() {
        this.status = GameStatus.Dealing;
        this.turns = new Array(this.players.length).fill(0);  // Set all turn numbers to zero for each player
        this.deck = buildDeck();
        this.deal();
        this.createBoardViews();

        this.status = GameStatus.Playing;
        this.currentTurn = this.players[(this.rounds % this.players.length)];  // Rotate starting player every round
    };

    draw(player) {
        if (this.deck.length > 0) {
            let drawnTile = UTILS.popRandom(this.deck);  // Grab a random tile from the deck
            player.draw(drawnTile);  // Move tile to player's hand
        } else {
            // Deck out of tiles [Insert this logic later]
        }
    };

    deal() {
        for (player of this.players) {  // for each player
            for (let i = 0; i < this.settings.startingNumTiles; i++) {  // fill whole starting hand size
                this.draw(player);  // draw one tile
            }
        }
    };

    createBoardViews() {
        for (player of this.players) {  // for each player
            player.boardview = new BoardView(this.board);
        }
    };

    updateBoardViews(currplayer, turn) {
        // Copy current player's boardview to all other players?

        // Only if current player has manipulated the board
        
        for (player of this.players) {
            if (player.name != currplayer.name) {
                if (turn.type == TURN.TYPE.PLAY) {
                    player.boardview = currplayer.boardview;
                } else if(turn.type == TURN.TYPE.PLACE) {
                    player.boardview.addGroup(player.boardview.checkDiff(this.board));
                }
            }
        }
    };

    gameplay() {
        while (this.status == GameStatus.Playing) {
            this.takeTurn(this.players[this.currentTurn]);
        }
    };

    takeTurn(player) {

        // let currTurn = null;
        // while (!currTurn) {
        //     currTurn = player.play();  // loop will continue until the turn is finished
        // }
        // this.endTurn(player, currTurn);

        this.endTurn(player, player.play());
    };

    endTurn(player, turn) {

        // Implement turn:
        if (turn.type == TURN.TYPE.DRAW) {
            this.draw(player);  // draw one tile
        } else {  // turn.type == TURN.TYPE.PLAY
            // - Make all Tiles played (remove tiles from hand and place on board, change their state)
            this.board = player.boardview.updateBoard();
            this.updateBoardViews(player, turn);
        }

        // Check if game over
        if (this.isGameOver(player)) { return this.results(); }

        this.currentTurn = (this.currentTurn + 1) % this.players.length;  // Progress to the next player in the order
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
        this.status = GameStatus.Scoring;
    };

};