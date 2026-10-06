"use strict";

import { specialSymbols } from "occam-lexers";

import Frame from "../../frame";
import TerminalPart from "../../part/terminal";
import TerminalNode from "../../node/terminal";

const { wildcard } = specialSymbols;

export default class WildcardPart extends TerminalPart {
  parse(frame, state, forward, back) {
    const stateEmpty = state.isEmpty();

    if (stateEmpty) {
      return back();
    }

    const nextSignificantToken = state.getNextSignificantToken(),
          significantToken = nextSignificantToken, ///
          terminalNode = TerminalNode.fromSignificantToken(significantToken),
          childNode = terminalNode,
          partFrame = Frame.fromChildNode(childNode);

    state = state.advance();

    frame = this.compose(frame, partFrame);

    return forward(frame, state, back);
  }

  asString() {
    const string = `${wildcard}`;

    return string;
  }

  static fromNothing() {
    const wildcardPart = new WildcardPart();

    return wildcardPart;
  }
}
