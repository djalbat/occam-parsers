"use strict";

import TerminalPart from "../../part/terminal";
import TerminalNode from "../../../common/node/terminal";

export default class TerminalSymbolPart extends TerminalPart {
  constructor(content) {
    super();
    
    this.content = content;
  }

  parse(context, callback) {
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
      if (callback) {
        parsed = callback();
      }
    }

    if (!parsed) {
      context.backtrack(savedIndex);

      terminalNode = null;
    }

    return terminalNode;
  }
  
  asString() {
    const content = this.content.replace(/\\/, "\\\\"),
          string = `"${content}"`;
    
    return string;
  }

  clone() { return super.clone(TerminalSymbolPart, this.content); }
}
