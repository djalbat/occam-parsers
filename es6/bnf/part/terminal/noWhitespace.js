"use strict";

import { specialSymbols } from "occam-lexers";

import TerminalPart from "../../part/terminal";
import NoWhitespaceNode from "../../../common/node/terminal/noWhitespace";

const { NO_WHITESPACE } = specialSymbols;

export default class NoWhitespacePart extends TerminalPart {
  isNoWhitespacePart() {
    const noWhitespacePart = true;

    return noWhitespacePart;
  }

  parse(context, callback) {
    let parsed;

    let noWhitespaceNode = null;

    const savedIndex = context.getSavedIndex(),
          nextTokenWhitespaceToken = context.isNextTokenWhitespaceToken();

    if (!nextTokenWhitespaceToken) {
      noWhitespaceNode = NoWhitespaceNode.fromNothing();
    }

    parsed = (noWhitespaceNode !== null);

    if (parsed) {
      if (callback) {
        parsed = callback();
      }
    }

    if (!parsed) {
      context.backtrack(savedIndex);

      noWhitespaceNode = null;
    }

    return noWhitespaceNode;
  }

  asString() {
    const string = NO_WHITESPACE; ///

    return string;
  }

  clone() { return super.clone(NoWhitespacePart); }
}
