/* Imports */
import Tile, { TILES } from "./tile";

export class Group {  // Just a group of tiles

    /* Attributes: */
    tiles = [];
    isRun;
    isSet;
    runColor = null;
    hasMoon;

    /* Constructor: */
    constructor(tiles) {
        this.tiles = tiles;
        // this.isSet = false;
        // this.isRun = false;
        this.change();
    };

    /* Methods: */
    addTile(tile) {
        this.tiles.push(tile);
        this.change();
    };

    change() {  // call this method any time a change is made to the Group
        this.check();
        this.sort();
    };

    check() {
        this.hasMoon = this.checkMoon();
        this.isSet = this.checkSet();
        if (this.checkRun()) {
            this.isRun = true;
            this.runColor = this.tiles[0].color;
        } else {
            this.isRun = false;
            this.runColor = null;
        }
    };

    checkMoon() {
        let checkMoon = false;
        for (tile of this.tiles) {
            if (tile.symbol == TILES.SYMBOL_MOON) { checkMoon = true; }
        }
        return checkMoon;
    };

    checkRun() {
        let checkRun = true;
        return checkRun;
    };

    checkSet() {
        let checkSet = true;
        let num = this.tiles[0].symbol;
        for (tile of this.tiles) {
            if (tile.symbol != num) { checkSet = false; }
        }
        return checkSet;
    };

    sort() {
        this.tiles.sort(function(a, b){
            if (a.moonTile) { a = a.moonTile; }
            if (b.moonTile) { b = b.moonTile; }
            return a.points - b.points
        });
    };
};

export default class Board {

    /* Attributes: */
    groups = [];
    isValid;

    /* Constructor: */
    constructor(groupObjects) {
        this.groups = groupObjects;
        this.isValid = true;
    };

    /* Methods: */
    addGroup(group) {
        this.groups.push(group);
        this.change();
    };

    change() {  // call this method any time a change is made to the Board
        this.check();
        // this.sort();
    };

    check() {
        this.isValid = this.checkValid();
    };

    checkValid() {
        let checkValid = true;
        for (group of this.groups) {
            if ( !(group.isRun || group.isSet) ) { checkValid = false; }
        }
        return checkValid;
    };

    checkDiff(diffBoard) {
        // compare two arrays of Groups object
        // return the difference
    };

};

// Create manipulable view of the game board
export class BoardView extends Board {

    /* Attributes: */
    hand;  // Hand of the current player

    /* Constructor: */
    constructor(groupObjects) {
        // Always call super first in constructor
        super(groupObjects);  // Initial board from the game
    };

    /* Methods: */
    updateBoard() {
        // Implement changes in view
        return new Board(this.groups);
    };
};
