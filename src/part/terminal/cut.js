"use strict";

import { specialSymbols } from "occam-lexers";

import TerminalPart from "../../part/terminal";

import { cut } from "../../utilities/branching";

const { backtick } = specialSymbols;

export default class CutPart extends TerminalPart {
  isCutPart() {
    const cutPart = true;

    return cutPart;
  }

  parse(frame, state, forward, back) {
    forward = cut(forward, back); ///

    return forward(frame, state, back);
  }

  asString() {
    const string = `${backtick}`;

    return string;
  }

  static fromNothing() {
    const cutPart = new CutPart();

    return cutPart;
  }
}
