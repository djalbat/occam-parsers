"use strict";

import { specialSymbols } from "occam-lexers";

import Frame from "../../frame";
import TerminalPart from "../../part/terminal";
import NoWhitespaceNode from "../../node/terminal/noWhitespace";

import { partContext } from "../../utilities/context";

const { noWhitespace } = specialSymbols;

export default class NoWhitespacePart extends TerminalPart {
  isNoWhitespacePart() {
    const noWhitespacePart = true;

    return noWhitespacePart;
  }

  parse(context) {
    let frame;

    const part = this;  ///

    partContext((context) => {
      frame = null;

      const nextTokenWhitespaceToken = context.isNextTokenWhitespaceToken();

      if (!nextTokenWhitespaceToken) {
        const noWhitespaceNode = NoWhitespaceNode.fromNothing(),
              childNode = noWhitespaceNode; ///

        frame = Frame.fromChildNode(childNode);
      }

      if (frame !== null) {
        frame = context.continue(frame);
      }

      if (frame !== null) {
        frame = context.commit(frame);
      }
    }, part, context);

    return frame;
  }

  asString() {
    const string = noWhitespace; ///

    return string;
  }

  static fromNothing() {
    const noWhitespacePart = new NoWhitespacePart();

    return noWhitespacePart;
  }
}
