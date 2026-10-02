"use strict";

import { specialSymbols } from "occam-lexers";

import Frame from "../../frame";
import EpsilonNode from "../../node/terminal/epsilon";
import TerminalPart from "../../part/terminal";

import { isValid } from "../../utilities/frame";
import { partContext } from "../../utilities/context";

const { epsilon } = specialSymbols;

export default class EpsilonPart extends TerminalPart {
  isEpsilonPart() {
    const epsilonPart = true;

    return epsilonPart;
  }

  parse(frame, context) {
    const part = this;  ///

    context = partContext(part, context); ///

    let partFrame;

    const epsilonNode = EpsilonNode.fromNothing(),
          childNode = epsilonNode;  ///

    partFrame = Frame.fromChildNode(childNode);

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
    const string = epsilon; ///

    return string;
  }

  static fromNothing() {
    const epsilonPart = new EpsilonPart();

    return epsilonPart;
  }
}
