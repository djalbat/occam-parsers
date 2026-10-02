"use strict";

import Frame from "../../frame";
import TerminalPart from "../../part/terminal";
import TerminalNode from "../../node/terminal";

import { isValid } from "../../utilities/frame";
import { partContext } from "../../utilities/context";

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

    context = partContext(part, context); ///

    let partFrame = null;

    const nextSignificantToken = context.getNextSignificantToken();

    if (nextSignificantToken !== null) {
      const significantToken = nextSignificantToken, ///
            content = significantToken.getContent();

      if (content === this.content) {
        const committed = context.getCommitted(),
              terminalNode = TerminalNode.fromSignificantTokenAndCommitted(significantToken, committed),
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
    const content = this.content.replace(/\\/g, "\\\\"),
          string = `"${content}"`;
    
    return string;
  }

  static fromContent(content) {
    const stringLiteralPart = new StringLiteralPart(content);

    return stringLiteralPart;
  }
}
