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

  parse(frame, context) {
    const part = this;  ///

    partContext((context) => {
      let partFrame = null;

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

            partFrame = Frame.fromChildNode(childNode);
          }
        }
      }

      frame = (partFrame !== null) ?
                context.compose(frame, partFrame) :
                  null;

      if (frame !== null) {
        frame = context.continue(frame);
      }

      if (frame !== null) {
        context.commit();
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
