"use strict";

import { specialSymbols } from "occam-lexers";

import Frame from "../../frame";
import TerminalPart from "../../part/terminal";
import EndOfLineNode from "../../node/terminal/endOfLine";

import { isValid } from "../../utilities/frame";
import { partContext } from "../../utilities/context";

const { endOfLine } = specialSymbols;

export default class EndOfLinePart extends TerminalPart {
  parse(frame, context) {
    const part = this;  ///

    context = partContext(part, context); ///

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

    const partFrameValid = isValid(partFrame);

    frame = partFrameValid ?
              context.compose(frame, partFrame) :
                null;

    let frameValid;

    frameValid = isValid(frame);

    if (frameValid) {
      frame = context.continue(frame);
    }

    frameValid = isValid(frame);

    if (frameValid) {
      context.commit();
    }

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
