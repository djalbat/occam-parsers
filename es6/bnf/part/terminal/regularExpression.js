"use strict";

import TerminalPart from "../../part/terminal";
import TerminalNode from "../../../common/node/terminal";

import { first } from "../../../utilities/array";

class RegularExpressionPart extends TerminalPart {
  constructor(regularExpression) {
    super();

    this.regularExpression = regularExpression;
  }

  parse(configuration) {
    let terminalNode = null;
    
    const savedIndex = configuration.getSavedIndex(),
		      nextSignificantToken = configuration.getNextSignificantToken(),
					significantToken = nextSignificantToken; ///

    if (significantToken !== null) {
      const content = significantToken.getContent(),
            matches = content.match(this.regularExpression);

      if (matches !== null) {
        const firstMatch = first(matches),
              parsed = (firstMatch === content);  ///

        if (parsed) {
          terminalNode = TerminalNode.fromSignificantToken(significantToken);
        }
      }
    }

    if (terminalNode === null) {
      configuration.backtrack(savedIndex);
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

module.exports = RegularExpressionPart;
