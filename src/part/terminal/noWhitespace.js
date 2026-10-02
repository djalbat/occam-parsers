"use strict";

import { specialSymbols } from "occam-lexers";

import Frame from "../../frame";
import TerminalPart from "../../part/terminal";
import NoWhitespaceNode from "../../node/terminal/noWhitespace";

import { isValid } from "../../utilities/frame";
import { partContext } from "../../utilities/context";

const { noWhitespace } = specialSymbols;

export default class NoWhitespacePart extends TerminalPart {
  isNoWhitespacePart() {
    const noWhitespacePart = true;

    return noWhitespacePart;
  }

  parse(frame, context) {
    const part = this;  ///

    context = partContext(part, context); ///

    let partFrame = null;

    const nextTokenWhitespaceToken = context.isNextTokenWhitespaceToken();

    if (!nextTokenWhitespaceToken) {
      const noWhitespaceNode = NoWhitespaceNode.fromNothing(),
            childNode = noWhitespaceNode; ///

      partFrame = Frame.fromChildNode(childNode);
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
    const string = noWhitespace; ///

    return string;
  }

  static fromNothing() {
    const noWhitespacePart = new NoWhitespacePart();

    return noWhitespacePart;
  }
}
