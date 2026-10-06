"use strict";

import { arrayUtilities } from "necessary";

import Frame from "../../frame";
import TerminalPart from "../../part/terminal";
import TerminalNode from "../../node/terminal";

const { first } = arrayUtilities;

export default class RegularExpressionPart extends TerminalPart {
  constructor(regularExpression) {
    super();

    this.regularExpression = regularExpression;
  }

  getRegularExpression() {
    return this.regularExpression;
  }

  parse(frame, state, forward, back) {
    const stateEmpty = state.isEmpty();

    if (stateEmpty) {
      return back();
    }

    const nextSignificantToken = state.getNextSignificantToken(),
          significantToken = nextSignificantToken, ///
          content = significantToken.getContent(),
          matches = content.match(this.regularExpression);

    if (matches === null) {
      return back();
    }

    const firstMatch = first(matches);

    if (firstMatch !== content) {
      return back();
    }

    const terminalNode = TerminalNode.fromSignificantToken(significantToken),
          childNode = terminalNode,
          partFrame = Frame.fromChildNode(childNode);

    state = state.advance();

    frame = this.compose(frame, partFrame);

    return forward(frame, state, back);
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
