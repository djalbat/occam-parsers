"use strict";

import TerminalPart from "../../part/terminal";
import TerminalNode from "../../node/terminal";

export default class TerminalSymbolPart extends TerminalPart {
  constructor(content) {
    super();
    
    this.content = content;
  }

  parse(nodes, state, callback, precedence) {
    let parsed;

    let terminalNode = null;
    
    const savedIndex = state.getSavedIndex(),
		      nextSignificantToken = state.getNextSignificantToken(),
					significantToken = nextSignificantToken; ///

    if (significantToken !== null) {
      const content = significantToken.getContent();

      if (content === this.content) {
        terminalNode = TerminalNode.fromPrecedenceAndSignificantToken(precedence, significantToken);
      }
    }

    parsed = (terminalNode !== null);

    if (parsed) {
      nodes.push(terminalNode);

      if (callback !== null) {
        parsed = callback(precedence);

        if (!parsed) {
          nodes.pop();
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
    const terminalSymbolPart = new TerminalSymbolPart(content);

    return terminalSymbolPart;
  }
}
