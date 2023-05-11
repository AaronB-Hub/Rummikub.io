/* Imports */
import Tile, { TILES } from "../game/tile";

// Define the class for the tile html element
export default class TileElement extends HTMLElement {

  /* Attributes: */
  static tile;

  /* Constructor: */
  constructor(tileObject) {
    // Always call super first in constructor
    super();

    // Custom element functionality here
    this.tile = tileObject;
  }
};