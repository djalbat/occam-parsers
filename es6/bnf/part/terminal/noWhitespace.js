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

  parse(context) {
    let noWhitespaceNode = null;

    const savedIndex = context.getSavedIndex(),
          nextToken = context.getNextToken(),
          token = nextToken; ///

    if (token !== null) {
      const tokenWhitespaceToken = token.isWhitespaceToken();

      if (!tokenWhitespaceToken) {
        noWhitespaceNode = NoWhitespaceNode.fromNothing();
      }
    }

    context.backtrack(savedIndex);

    return noWhitespaceNode;
  }

  asString() {
    const string = NO_WHITESPACE; ///

    return string;
  }

  clone() { return super.clone(NoWhitespacePart); }
}
