"use strict";

import Frame from "../../frame";
import TerminalPart from "../../part/terminal";
import TerminalNode from "../../node/terminal";

import { isValid } from "../../utilities/frame";
import { partContext } from "../../utilities/context";

export default class SignificantTokenTypePart extends TerminalPart {
  constructor(significantTokenType) {
    super();
    
    this.significantTokenType = significantTokenType;
  }

  getSignificantTokenType() {
    return this.significantTokenType;
  }

  parse(frame, context) {
    const part = this;  ///

    context = partContext(part, context); ///

    let partFrame = null;

    const nextSignificantToken = context.getNextSignificantToken();

    if (nextSignificantToken !== null) {
      const significantToken = nextSignificantToken, ///
            significantTokenType = significantToken.getType();

      if (significantTokenType === this.significantTokenType) {
        const terminalNode = TerminalNode.fromSignificantToken(significantToken),
              childNode = terminalNode;  ///

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
    const string = `[${this.significantTokenType}]`;
    
    return string;
  }

  static fromSignificantTokenType(significantTokenType) {
    const significantTokenTypePart = new SignificantTokenTypePart(significantTokenType);

    return significantTokenTypePart;
  }
}
