"use strict";

import { arrayUtilities } from "necessary";

import TerminalPart from "../../part/terminal";
import TerminalNode from "../../node/terminal";

import { partContext } from "../../utilities/context";

const { first } = arrayUtilities;

export default class RegularExpressionPart extends TerminalPart {
  constructor(regularExpression) {
    super();

    this.regularExpression = regularExpression;
  }

  getRegularExpression() {
    return this.regularExpression;
  }

  parse(context) {
    let parsed;

    const part = this;  ///

    partContext((context) => {
      parsed = false;

      const nextSignificantToken = context.getNextSignificantToken();

      if (nextSignificantToken !== null) {
        const significantToken = nextSignificantToken, ///
              content = significantToken.getContent(),
              matches = content.match(this.regularExpression);

        if (matches !== null) {
          const firstMatch = first(matches);

          if (firstMatch === content) {
            const terminalNode = TerminalNode.fromSignificantToken(significantToken),
                  childNode = terminalNode;  ///

            context.addChildNode(childNode);

            parsed = true;
          }
        }
      }

      if (parsed) {
        parsed = context.continue();
      }

      if (parsed) {
        parsed = context.commit();
      }
    }, part, context);

    return parsed;
  }

  asString() {
    const regularExpressionString = this.regularExpression.toString(),
		      string = regularExpressionString; ///

    return string;
  }

  static fromRegularExpression(regularExpression) {
    const regularExpressionPart = new RegularExpressionPart(regularExpression);

    return regularExpressionPart;
  }
}
