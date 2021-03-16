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

  parse(nodes, context, callback) {
    let parsed;

    let noWhitespaceNode = null;

    const savedIndex = context.getSavedIndex(),
          nextTokenWhitespaceToken = context.isNextTokenWhitespaceToken();

    if (!nextTokenWhitespaceToken) {
      noWhitespaceNode = NoWhitespaceNode.fromNothing();
    }

    parsed = (noWhitespaceNode !== null)

    if (parsed) {
      nodes.push(noWhitespaceNode);

      if (callback) {
        parsed = callback();

        if (!parsed) {
          nodes.pop();
        }
      }
    }

    if (!parsed) {
      context.backtrack(savedIndex);
    }

    return parsed;
  }

  asString() {
    const string = NO_WHITESPACE; ///

    return string;
  }

  clone() { return super.clone(NoWhitespacePart); }
}
