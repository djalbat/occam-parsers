"use strict";

import { arrayUtilities } from "necessary";

import Frame from "../../frame";
import TerminalPart from "../../part/terminal";
import TerminalNode from "../../node/terminal";

import { isValid } from "../../utilities/frame";
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

    context = partContext(part, context); ///

    let partFrame = null;

    const nextSignificantToken = context.getNextSignificantToken();

    if (nextSignificantToken !== null) {
      const significantToken = nextSignificantToken, ///
            content = significantToken.getContent(),
            matches = content.match(this.regularExpression);

      if (matches !== null) {
        const firstMatch = first(matches);

        if (firstMatch === content) {
          const committed = context.getCommitted(),
                terminalNode = TerminalNode.fromSignificantTokenAndCommitted(significantToken, committed),
                childNode = terminalNode;  ///

          partFrame = Frame.fromChildNode(childNode);
        }
      }
    }

    const partFrameValid = isValid(partFrame);

    frame = partFrameValid ?
              context.compose(frame, partFrame) :
                null;

    let frameValid;

    frameValid = isValid(frame);

    if (frameValid) {
      frame = context.continue(frame);
    }

    frameValid = isValid(frame);

    if (frameValid) {
      context.commit();
    }

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
