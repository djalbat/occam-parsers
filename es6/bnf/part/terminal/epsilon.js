"use strict";

import { specialSymbols } from "occam-lexers";

import EpsilonNode from "../../../common/node/terminal/epsilon";
import TerminalPart from "../../part/terminal";

const { epsilon } = specialSymbols;

export default class EpsilonPart extends TerminalPart {
  parse(nodes, context, callback) {
    const epsilonNode = EpsilonNode.fromNothing();

    nodes = [ ...nodes, epsilonNode ];

    if (callback) {
      const parsed = callback();

      if (!parsed) {
        nodes = null;
      }
    }

    return nodes;
  }

  isEpsilonPart() {
    const epsilonPart = true;

    return epsilonPart;
  }

  asString() {
    const string = epsilon; ///

    return string;
  }

  clone() { return super.clone(EpsilonPart); }
}
