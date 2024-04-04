"use strict";

import { specialSymbols } from "occam-lexers";

import TerminalPart from "../../part/terminal";
import StartOfContentNode from "../../node/terminal/startOfContent";

const { startOfContent } = specialSymbols;

export default class StartOfContentPart extends TerminalPart {
  isStartOfContentPart() {
    const startOfContentPart = true;

    return startOfContentPart;
  }

  parse(nodes, state, callback, callAhead) {
    let parsed;

    let startOfContentNode = null;

    const savedIndex = state.getSavedIndex(),
          atStartOfContent = state.isAtStartOfContent();

    if (atStartOfContent) {
      startOfContentNode = StartOfContentNode.fromNothing();
    }

    parsed = (startOfContentNode !== null)

    if (parsed) {
      nodes.push(startOfContentNode);

      if (parsed) {
        if (callAhead !== null) {
          parsed = callAhead();
        }
      }
    }

    if (!parsed) {
      state.backtrack(savedIndex);
    }

    return parsed;
  }

  asString() {
    const string = startOfContent; ///

    return string;
  }

  static fromNothing() {
    const startOfContentPart = new StartOfContentPart();

    return startOfContentPart;
  }
}
