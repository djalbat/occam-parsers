"use strict";

import { specialSymbols } from "occam-lexers";

import Frame from "../../frame";
import EpsilonNode from "../../node/terminal/epsilon";
import TerminalPart from "../../part/terminal";

import { partContext } from "../../utilities/context";
import { nullifiedFrame } from "../../frame";

const { epsilon } = specialSymbols;

export default class EpsilonPart extends TerminalPart {
  isEpsilonPart() {
    const epsilonPart = true;

    return epsilonPart;
  }

  parse(frame, context) {
    const part = this;  ///

    partContext((context) => {
      let partFrame;

      const epsilonNode = EpsilonNode.fromNothing(),
            childNode = epsilonNode;  ///

      partFrame = Frame.fromChildNode(childNode);

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
    const string = epsilon; ///

    return string;
  }

  static fromNothing() {
    const epsilonPart = new EpsilonPart();

    return epsilonPart;
  }
}
