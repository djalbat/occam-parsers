"use strict";

import { specialSymbols } from "occam-lexers";

import EpsilonNode from "../../../common/node/terminal/epsilon";
import TerminalPart from "../../part/terminal";

const { epsilon } = specialSymbols;

class EpsilonPart extends TerminalPart {
  parse(configuration) {
    const epsilonNode = EpsilonNode.fromNothing();

    return epsilonNode;
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

module.exports = EpsilonPart;
