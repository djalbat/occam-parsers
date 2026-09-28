"use strict";

import Frame from "../../frame";
import TerminalPart from "../../part/terminal";
import TerminalNode from "../../node/terminal";

import { partContext } from "../../utilities/context";
import { nullifiedFrame } from "../../frame";

export default class StringLiteralPart extends TerminalPart {
  constructor(content) {
    super();
    
    this.content = content;
  }

  getContent() {
    return this.content;
  }

  parse(frame, context) {
    const part = this;  ///

    partContext((context) => {
      let partFrame = nullifiedFrame;

      const nextSignificantToken = context.getNextSignificantToken();

      if (nextSignificantToken !== null) {
        const significantToken = nextSignificantToken, ///
              content = significantToken.getContent();

        if (content === this.content) {
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
    const content = this.content.replace(/\\/g, "\\\\"),
          string = `"${content}"`;
    
    return string;
  }

  static fromContent(content) {
    const stringLiteralPart = new StringLiteralPart(content);

    return stringLiteralPart;
  }
}
