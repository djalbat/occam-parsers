"use strict";

import { specialSymbols } from "occam-lexers";

import Frame from "../../frame";
import TerminalPart from "../../part/terminal";
import EndOfLineNode from "../../node/terminal/endOfLine";

import { partContext } from "../../utilities/context";

const { endOfLine } = specialSymbols;

export default class EndOfLinePart extends TerminalPart {
  parse(frame, context) {
    const part = this;  ///

    partContext((context) => {
      let partFrame = null;

      const nextSignificantToken = context.getNextSignificantToken();

      if (nextSignificantToken !== null) {
        const significantToken = nextSignificantToken, ///
              significantTokenEndOfLineToken = significantToken.isEndOfLineToken();

        if (significantTokenEndOfLineToken) {
          const endOfLineNode = EndOfLineNode.fromSignificantToken(significantToken),
                childNode = endOfLineNode;  ///

          partFrame = Frame.fromChildNode(childNode);
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
    const string = endOfLine; ///

    return string;
  }

  static fromNothing() {
    const endOfLinePart = new EndOfLinePart();

    return endOfLinePart;
  }
}
