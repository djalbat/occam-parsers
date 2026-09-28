"use strict";

import { specialSymbols } from "occam-lexers";

import Frame from "../../frame";
import TerminalPart from "../../part/terminal";
import EndOfLineNode from "../../node/terminal/endOfLine";

import { partContext } from "../../utilities/context";
import { nullifiedFrame } from "../../frame";

const { endOfLine } = specialSymbols;

export default class EndOfLinePart extends TerminalPart {
  parse(frame, context) {
    const part = this;  ///

    partContext((context) => {
      let partFrame = nullifiedFrame;

      const nextSignificantToken = context.getNextSignificantToken();

      if (nextSignificantToken !== null) {
        const significantToken = nextSignificantToken, ///
              significantTokenEndOfLineToken = significantToken.isEndOfLineToken();

        if (significantTokenEndOfLineToken) {
          const committed = context.isCommitted(),
                endOfLineNode = EndOfLineNode.fromSignificantTokenAndCommitted(significantToken, committed),
                childNode = endOfLineNode;  ///

          partFrame = Frame.fromChildNode(childNode);
        }
      }

      const partFrameValid = partFrame.isValid();

      frame = partFrameValid ?
                context.compose(frame, partFrame) :
                  nullifiedFrame;

      let frameValid;

      frameValid = frame.isValid();

      if (frameValid) {
        frame = context.continue(frame);
      }

      frameValid = frame.isValid();

      if (frameValid) {
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
