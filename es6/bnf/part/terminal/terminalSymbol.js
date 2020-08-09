"use strict";

import TerminalPart from "../../part/terminal";
import TerminalNode from "../../../common/node/terminal";

export default class TerminalSymbolPart extends TerminalPart {
  constructor(content) {
    super();
    
    this.content = content;
  }

  parse(nodes, context, callback) {
    let terminalNode = null;
    
    const savedIndex = context.getSavedIndex(),
		      nextSignificantToken = context.getNextSignificantToken(),
					significantToken = nextSignificantToken; ///

    if (significantToken !== null) {
      const content = significantToken.getContent();

      if (content === this.content) {
        terminalNode = TerminalNode.fromSignificantToken(significantToken);
      }
    }

    if (terminalNode === null) {
      nodes = null;
    } else {
      nodes = [ ...nodes, terminalNode ];

      if (callback) {
        const parsed = callback();

        if (!parsed) {
          nodes = null;
        }
      }
    }

    if (nodes === null) {
      context.backtrack(savedIndex);
    }

    return nodes;
  }
  
  asString() {
    const content = this.content.replace(/\\/, "\\\\"),
          string = `"${content}"`;
    
    return string;
  }

  clone() { return super.clone(TerminalSymbolPart, this.content); }
}
