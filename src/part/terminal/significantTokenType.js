"use strict";

import Frame from "../../frame";
import TerminalPart from "../../part/terminal";
import TerminalNode from "../../node/terminal";

import { partContext } from "../../utilities/context";

export default class SignificantTokenTypePart extends TerminalPart {
  constructor(significantTokenType) {
    super();
    
    this.significantTokenType = significantTokenType;
  }

  getSignificantTokenType() {
    return this.significantTokenType;
  }

  parse(context) {
    let frame;

    const part = this;  ///

    partContext((context) => {
      frame = null;

      const nextSignificantToken = context.getNextSignificantToken();

      if (nextSignificantToken !== null) {
        const significantToken = nextSignificantToken, ///
              significantTokenType = significantToken.getType();

        if (significantTokenType === this.significantTokenType) {
          const terminalNode = TerminalNode.fromSignificantToken(significantToken),
                childNode = terminalNode;  ///

          frame = Frame.fromChildNode(childNode);
        }
      }

      if (frame !== null) {
        const success = context.continue();

        frame = success ?
                  context.commit(frame) :
                    null;
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
