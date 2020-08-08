"use strict";

import TerminalPart from "../../part/terminal";
import TerminalNode from "../../../common/node/terminal";

export default class SignificantTokenTypePart extends TerminalPart {
  constructor(significantTokenType) {
    super();
    
    this.significantTokenType = significantTokenType;
  }

  parse(nodes, context, callback) {
    let terminalNode = null;
    
    const savedIndex = context.getSavedIndex(),
		      nextSignificantToken = context.getNextSignificantToken(),
					significantToken = nextSignificantToken; ///

    if (significantToken !== null) {
      const significantTokenType = significantToken.getType();

      if (significantTokenType === this.significantTokenType) {
        terminalNode = TerminalNode.fromSignificantToken(significantToken);
      }
    }

    nodes = (terminalNode === null) ?
              null :
                [ ...nodes, terminalNode ];

    if (nodes === null) {
      context.backtrack(savedIndex);
    }

    return nodes;
  }

  asString() {
    const string = `[${this.significantTokenType}]`;
    
    return string;
  }

  clone() { return super.clone(SignificantTokenTypePart, this.significantTokenType); }
}
