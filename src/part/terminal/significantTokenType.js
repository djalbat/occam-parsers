"use strict";

import Frame from "../../frame";
import TerminalPart from "../../part/terminal";
import TerminalNode from "../../node/terminal";

import { partContext } from "../../utilities/context";
import { nullifiedFrame } from "../../frame";

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

    partContext((context) => {
      let partFrame = nullifiedFrame;

      const nextSignificantToken = context.getNextSignificantToken();

      if (nextSignificantToken !== null) {
        const significantToken = nextSignificantToken, ///
              significantTokenType = significantToken.getType();

        if (significantTokenType === this.significantTokenType) {
          const committed = context.isCommitted(),
                terminalNode = TerminalNode.fromSignificantTokenAndCommitted(significantToken, committed),
                childNode = terminalNode;  ///

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
    const string = `[${this.significantTokenType}]`;
    
    return string;
  }

  static fromSignificantTokenType(significantTokenType) {
    const significantTokenTypePart = new SignificantTokenTypePart(significantTokenType);

    return significantTokenTypePart;
  }
}
