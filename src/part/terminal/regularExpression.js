"use strict";

import TerminalPart from "../../part/terminal";
import TerminalNode from "../../node/terminal";

import { first } from "../../utilities/array";

export default class RegularExpressionPart extends TerminalPart {
  constructor(regularExpression) {
    super();

    this.regularExpression = regularExpression;
  }

  parse(nodes, state, callback) {
    let parsed;

    let terminalNode = null;
    
    const savedIndex = state.getSavedIndex(),
		      nextSignificantToken = state.getNextSignificantToken(),
					significantToken = nextSignificantToken; ///

    if (significantToken !== null) {
      const content = significantToken.getContent(),
            matches = content.match(this.regularExpression);

      if (matches !== null) {
        const firstMatch = first(matches);

        if (firstMatch === content) {
          terminalNode = TerminalNode.fromSignificantToken(significantToken);
        }
      }
    }

    parsed = (terminalNode !== null);

    if (parsed) {
      nodes.push(terminalNode);

      if (callback !== null) {
        parsed = callback();

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
    const regularExpressionString = this.regularExpression.toString(),
		      string = regularExpressionString; ///

    return string;
  }
}
