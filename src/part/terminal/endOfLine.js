"use strict";

import { specialSymbols } from "occam-lexers";

import Frame from "../../frame";
import TerminalPart from "../../part/terminal";
import EndOfLineNode from "../../node/terminal/endOfLine";

import { partContext } from "../../utilities/context";

const { endOfLine } = specialSymbols;

export default class EndOfLinePart extends TerminalPart {
  parse(context) {
    let frame;

    const part = this;  ///

    partContext((context) => {
      frame = null;

      const nextSignificantToken = context.getNextSignificantToken();

      if (nextSignificantToken !== null) {
        const significantToken = nextSignificantToken, ///
              significantTokenEndOfLineToken = significantToken.isEndOfLineToken();

        if (significantTokenEndOfLineToken) {
          const endOfLineNode = EndOfLineNode.fromSignificantToken(significantToken),
                childNode = endOfLineNode;  ///

          frame = Frame.fromChildNode(childNode);
        }
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
    const string = endOfLine; ///

    return string;
  }

  static fromNothing() {
    const endOfLinePart = new EndOfLinePart();

    return endOfLinePart;
  }
}
