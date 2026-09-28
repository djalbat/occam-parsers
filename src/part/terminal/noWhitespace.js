"use strict";

import { specialSymbols } from "occam-lexers";

import Frame from "../../frame";
import TerminalPart from "../../part/terminal";
import NoWhitespaceNode from "../../node/terminal/noWhitespace";

import { partContext } from "../../utilities/context";
import { nullifiedFrame } from "../../frame";

const { noWhitespace } = specialSymbols;

export default class NoWhitespacePart extends TerminalPart {
  isNoWhitespacePart() {
    const noWhitespacePart = true;

    return noWhitespacePart;
  }

  parse(frame, context) {
    const part = this;  ///

    partContext((context) => {
      let partFrame = nullifiedFrame;

      const nextTokenWhitespaceToken = context.isNextTokenWhitespaceToken();

      if (!nextTokenWhitespaceToken) {
        const noWhitespaceNode = NoWhitespaceNode.fromNothing(),
              childNode = noWhitespaceNode; ///

        partFrame = Frame.fromChildNode(childNode);
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
    const string = noWhitespace; ///

    return string;
  }

  static fromNothing() {
    const noWhitespacePart = new NoWhitespacePart();

    return noWhitespacePart;
  }
}
