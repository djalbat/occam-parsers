"use strict";

import TerminalPart from "../../part/terminal";
import TerminalNode from "../../../common/node/terminal";

import { first } from "../../../utilities/array";

export default class RegularExpressionPart extends TerminalPart {
  constructor(regularExpression) {
    super();

    this.regularExpression = regularExpression;
  }

  parse(context, callback) {
    let parsed;

    let terminalNode = null;
    
    const savedIndex = context.getSavedIndex(),
		      nextSignificantToken = context.getNextSignificantToken(),
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
    const regularExpressionString = this.regularExpression.toString(),
		      string = regularExpressionString; ///

    return string;
  }

  clone() { return super.clone(RegularExpressionPart, this.regularExpression); }
}
