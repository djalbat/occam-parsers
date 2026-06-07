"use strict";

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
    let parsed;

    const part = this;

    partContext((context) => {
      parsed = false;

      const nextSignificantToken = context.getNextSignificantToken();

      if (nextSignificantToken !== null) {
        const significantToken = nextSignificantToken, ///
              significantTokenType = significantToken.getType();

        if (significantTokenType === this.significantTokenType) {
          const terminalNode = TerminalNode.fromSignificantToken(significantToken),
                childNode = terminalNode;  ///

          context.addChildNode(childNode);

          parsed = true;
        }
      }

      if (parsed) {
        const callAhead = context.isCallAhead();

        if (callAhead) {
          parsed = context.callAhead();
        }
      }

      if (parsed) {
        context.commit();
      }
    }, part, context)

    return parsed;
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
