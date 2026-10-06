"use strict";

import Frame from "../../frame";
import TerminalPart from "../../part/terminal";
import TerminalNode from "../../node/terminal";

export default class StringLiteralPart extends TerminalPart {
  constructor(content) {
    super();
    
    this.content = content;
  }

  getContent() {
    return this.content;
  }

  parse(frame, state, forward, back) {
    const stateEmpty = state.isEmpty();

    if (stateEmpty) {
      return back();
    }

    const nextSignificantToken = state.getNextSignificantToken(),
          significantToken = nextSignificantToken, ///
          content = significantToken.getContent();

    if (content !== this.content) {
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
    const content = this.content.replace(/\\/g, "\\\\"),
          string = `"${content}"`;
    
    return string;
  }

  static fromContent(content) {
    const stringLiteralPart = new StringLiteralPart(content);

    return stringLiteralPart;
  }
}
