"use strict";

import { specialSymbols } from "occam-lexers";

import Frame from "../../frame";
import EpsilonNode from "../../node/terminal/epsilon";
import TerminalPart from "../../part/terminal";

import { partContext } from "../../utilities/context";

const { epsilon } = specialSymbols;

export default class EpsilonPart extends TerminalPart {
  parse(frame, context) {
    const part = this;  ///

    partContext((context) => {
      let partFrame = null;

      const epsilonNode = EpsilonNode.fromNothing(),
            childNode = epsilonNode;  ///

      partFrame = Frame.fromChildNode(childNode);

      frame = context.commit(frame, partFrame);

      if (frame !== null) {
        frame = context.continue(frame);
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
