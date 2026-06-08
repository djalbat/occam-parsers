"use strict";

import TerminalPart from "../../part/terminal";
import TerminalNode from "../../node/terminal";

import { partContext } from "../../utilities/context";

export default class StringLiteralPart extends TerminalPart {
  constructor(content) {
    super();
    
    this.content = content;
  }

  getContent() {
    return this.content;
  }

  parse(context) {
    let parsed;

    const part = this;  ///

    partContext((context) => {
      parsed = false;

      const nextSignificantToken = context.getNextSignificantToken();

      if (nextSignificantToken !== null) {
        const significantToken = nextSignificantToken, ///
              content = significantToken.getContent();

        if (content === this.content) {
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
    }, part, context);

    return parsed;
  }

  asString() {
    const content = this.content.replace(/\\/g, "\\\\"),
          string = `"${content}"`;
    
    return string;
  }

  static fromContent(content) {
    const stringLiteralPart = new StringLiteralPart(content);

    return stringLiteralPart;
  }
}
