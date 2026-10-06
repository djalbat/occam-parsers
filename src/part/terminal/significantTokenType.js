"use strict";

import Frame from "../../frame";
import TerminalPart from "../../part/terminal";
import TerminalNode from "../../node/terminal";

export default class SignificantTokenTypePart extends TerminalPart {
  constructor(significantTokenType) {
    super();
    
    this.significantTokenType = significantTokenType;
  }

  getSignificantTokenType() {
    return this.significantTokenType;
  }

  parse(frame, state, forward, back) {
    const stateEmpty = state.isEmpty();

    if (stateEmpty) {
      return back();
    }

    const nextSignificantToken = state.getNextSignificantToken(),
          significantToken = nextSignificantToken, ///
          significantTokenType = significantToken.getType();

    if (significantTokenType !== this.significantTokenType) {
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
    const string = `[${this.significantTokenType}]`;
    
    return string;
  }

  static fromSignificantTokenType(significantTokenType) {
    const significantTokenTypePart = new SignificantTokenTypePart(significantTokenType);

    return significantTokenTypePart;
  }
}
