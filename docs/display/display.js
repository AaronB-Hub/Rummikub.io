/* Imports */
import TileElement from "./tileElement";
import HandElement from "./handElement";
import BoardElement from "./boardElement";
import OpponentElement from "./opponentElement";

import Game, { GameStatus } from "../game/game";
// import Tile from "./tile";
import Player from "./player";


/* Define custom elements */
customElements.define("tile-element", TileElement);
customElements.define("hand-element", HandElement);
customElements.define("board-element", BoardElement);
customElements.define("opponent-element", OpponentElement);
// customElements.define("-element", Element);

// Define the class for the tile html element
export default class Display extends HTMLElement {

    /* Attributes: */
    game;  // Current game to display
    id;  // The current player that is viewing this display
    scoreElem;
    handElem;
    oppElems = [];
    boardElem;
    deckElem;

    /* Constructor: */
    constructor(gameObject, idString) {
        // Always call super first in constructor
        super();

        // Custom element functionality here
        this.game = gameObject;
        this.id = idString;
        for (player of this.game.players) {  // for each player
            if (player.name == this.id) {
                this.handElem = new HandElement();
            } else {
                this.oppElems.push(new OpponentElement());
            }
        }
        this.scoreElem = new ScoreElement(this.game);
        this.boardElem = new BoardElement(this.game);
        this.deckElem = new DeckElement(this.game);
    }

    /* Methods: */

};