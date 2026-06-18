"use strict";

import { specialSymbols } from "occam-lexers";

import EpsilonNode from "../../node/terminal/epsilon";
import TerminalPart from "../../part/terminal";

import { partContext } from "../../utilities/context";

const { epsilon } = specialSymbols;

export default class EpsilonPart extends TerminalPart {
  parse(context) {
    let parsed;

    const part = this;  ///

    partContext((context) => {
      parsed = false;

      const epsilonNode = EpsilonNode.fromNothing(),
            childNode = epsilonNode;  ///

      context.addChildNode(childNode);

      parsed = true;

      if (parsed) {
        parsed = context.continue();
      }

      if (parsed) {
        parsed = context.commit();
      }
    }, part, context);

    return parsed;
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
