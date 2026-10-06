"use strict";

import { specialSymbols } from "occam-lexers";

import Frame from "../../frame";
import TerminalPart from "../../part/terminal";
import NoWhitespaceNode from "../../node/terminal/noWhitespace";

const { noWhitespace } = specialSymbols;

export default class NoWhitespacePart extends TerminalPart {
  isNoWhitespacePart() {
    const noWhitespacePart = true;

    return noWhitespacePart;
  }

  parse(frame, state, forward, back) {
    const stateEmpty = state.isEmpty();

    if (stateEmpty) {
      return back();
    }

    const nextTokenWhitespaceToken = state.isNextTokenWhitespaceToken();

    if (nextTokenWhitespaceToken) {
      return back();
    }

    const noWhitespaceNode = NoWhitespaceNode.fromNothing(),
          childNode = noWhitespaceNode, ///
          partFrame = Frame.fromChildNode(childNode);

    frame = this.compose(frame, partFrame);

    return forward(frame, state, back);
  }

  asString() {
    const string = `${noWhitespace}`;

    return string;
  }

  static fromNothing() {
    const noWhitespacePart = new NoWhitespacePart();

    return noWhitespacePart;
  }
}
