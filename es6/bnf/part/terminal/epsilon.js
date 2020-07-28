"use strict";

import { specialSymbols } from "occam-lexers";

import EpsilonNode from "../../../common/node/terminal/epsilon";
import TerminalPart from "../../part/terminal";

const { epsilon } = specialSymbols;

export default class EpsilonPart extends TerminalPart {
  parse(context, callback) {
    let parsed;

    let epsilonNode = EpsilonNode.fromNothing();

    parsed = (epsilonNode !== null);

    if (parsed) {
      if (callback) {
        parsed = callback();
      }
    }

    if (!parsed) {
      epsilonNode = null;
    }

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
