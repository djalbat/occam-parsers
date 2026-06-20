"use strict";

import { specialSymbols } from "occam-lexers";

import Frame from "../../frame";
import EpsilonNode from "../../node/terminal/epsilon";
import TerminalPart from "../../part/terminal";

import { partContext } from "../../utilities/context";

const { epsilon } = specialSymbols;

export default class EpsilonPart extends TerminalPart {
  parse(context) {
    let frame;

    const part = this;  ///

    partContext((context) => {
      frame = null;

      const epsilonNode = EpsilonNode.fromNothing(),
            childNode = epsilonNode;  ///

      frame = Frame.fromChildNode(childNode);

      if (frame !== null) {
        frame = context.continue(frame);
      }

      if (frame !== null) {
        frame = context.commit(frame);
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
