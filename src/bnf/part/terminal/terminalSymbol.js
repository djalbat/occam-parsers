"use strict";

import TerminalPart from "../../part/terminal";
import TerminalNode from "../../../common/node/terminal";

export default class TerminalSymbolPart extends TerminalPart {
  constructor(content) {
    super();
    
    this.content = content;
  }

  parse(nodes, context, callback) {
    let parsed;

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

    parsed = (terminalNode !== null);

    if (parsed) {
      nodes.push(terminalNode);

      if (callback) {
        parsed = callback();

        if (!parsed) {
          nodes.pop();
        }
      }
    }

    if (!parsed) {
      context.backtrack(savedIndex);
    }

    return parsed;
  }
  
  asString() {
    const content = this.content.replace(/\\/, "\\\\"),
          string = `"${content}"`;
    
    return string;
  }

  clone() { return super.clone(TerminalSymbolPart, this.content); }
}
