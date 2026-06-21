"use strict";

import Frame from "../../frame";
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
    let frame;

    const part = this;  ///

    partContext((context) => {
      frame = null;

      const nextSignificantToken = context.getNextSignificantToken();

      if (nextSignificantToken !== null) {
        const significantToken = nextSignificantToken, ///
              content = significantToken.getContent();

        if (content === this.content) {
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
    const content = this.content.replace(/\\/g, "\\\\"),
          string = `"${content}"`;
    
    return string;
  }

  static fromContent(content) {
    const stringLiteralPart = new StringLiteralPart(content);

    return stringLiteralPart;
  }
}
