"use strict";

import { arrayUtilities } from "necessary";

import Frame from "../../frame";
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
    let frame;

    const part = this;  ///

    partContext((context) => {
      frame = null;

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

            frame = Frame.fromChildNode(childNode);
          }
        }
      }

      if (frame !== null) {
        const success = context.continue();

        frame = success ?
                  context.commit(frame) :
                    null;
      }
    }, part, context);

    return frame;
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
