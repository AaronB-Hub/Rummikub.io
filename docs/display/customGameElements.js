/* Imports */
import TileElement from "./tileElement";
import HandElement from "./handElement";
import BoardElement from "./boardElement";
import OpponentElement from "./opponentElement";

// customElements.define("tile-element", tileElement, { extends: "div" });
customElements.define("tile-element", TileElement);
customElements.define("hand-element", HandElement);
customElements.define("board-element", BoardElement);
customElements.define("opponent-element", OpponentElement);
// customElements.define("-element", Element);

export default customElements;