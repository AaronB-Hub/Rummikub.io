// Take in game (current player, the board, )
// Let player manipulate board and build Turn object
// Enforce time limit
// Player draws or submits end of turn if they have played at least one tile
// Submit Turn object to Game to enforce changes

/* Imports */
import Board, { Group } from "./board";

class PlayBoard extends Board {

    /* Attributes: */
    gameBoard;  // Initial board from the start of the turn
    hand;  // Hand of the current player

    /* Constructor: */
    constructor(currentBoard, currentPlayer) {
        this.gameBoard = currentBoard;
        this.hand = currentPlayer.hand;
    };
};

// Scratchpad where you can freely manipulate without rule enforcement
// - indicate tiles that came from the board vs 

// Manipulate group (take in group, output new group(s)) - pop the group from the board