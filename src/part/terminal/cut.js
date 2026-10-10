"use strict";

import { specialSymbols } from "occam-lexers";

import Cut from "../../cut";
import TerminalPart from "../../part/terminal";

const { backtick } = specialSymbols;

export default class CutPart extends TerminalPart {
  isCutPart() {
    const cutPart = true;

    return cutPart;
  }

  parse(frame, state, forward, back) {
    const cut = Cut.fromFrameStateAndForward(frame, state, forward);

    return back(cut);
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
