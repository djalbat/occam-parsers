"use strict";

import { specialSymbols } from "occam-lexers";

import Frame from "../../frame";
import TerminalPart from "../../part/terminal";
import EndOfLineNode from "../../node/terminal/endOfLine";

const { endOfLine } = specialSymbols;

export default class EndOfLinePart extends TerminalPart {
  parse(frame, state, forward, back) {
    const stateEmpty = state.isEmpty();

    if (stateEmpty) {
      return back();
    }

    const nextSignificantToken = state.getNextSignificantToken(),
          significantToken = nextSignificantToken, ///
          significantTokenEndOfLineToken = significantToken.isEndOfLineToken();

    if (!significantTokenEndOfLineToken) {
      return back();
    }

    const endOfLineNode = EndOfLineNode.fromSignificantToken(significantToken),
          childNode = endOfLineNode,
          partFrame = Frame.fromChildNode(childNode);

    state = state.advance();

    frame = this.compose(frame, partFrame);

    return forward(frame, state, back);
  }

  asString() {
    const string = `${endOfLine}`;

    return string;
  }

  static fromNothing() {
    const endOfLinePart = new EndOfLinePart();

    return endOfLinePart;
  }
}
