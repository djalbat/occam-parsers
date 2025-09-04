"use strict";

import TerminalPart from "../../part/terminal";
import TerminalNode from "../../node/terminal";

export default class StringLiteralPart extends TerminalPart {
  constructor(content) {
    super();
    
    this.content = content;
  }

  parse(nodes, state, callback, callAhead) {
    let parsed;

    let terminalNode = null;
    
    const savedIndex = state.getSavedIndex(),
          nextSignificantToken = state.getNextSignificantToken(),
					significantToken = nextSignificantToken; ///

    if (significantToken !== null) {
      const content = significantToken.getContent();

      if (content === this.content) {
        terminalNode = TerminalNode.fromSignificantToken(significantToken);
      }
    }

    parsed = (terminalNode !== null);

    if (parsed) {
      nodes.push(terminalNode);

      if (parsed) {
        if (callAhead !== null) {
          parsed = callAhead();
        }
      }
    }

    if (!parsed) {
      state.backtrack(savedIndex);
    }

    return parsed;
  }
  
  asString() {
    const content = this.content.replace(/\\/, "\\\\"),
          string = `"${content}"`;
    
    return string;
  }

  static fromContent(content) {
    const stringLiteralPart = new StringLiteralPart(content);

    return stringLiteralPart;
  }
}
