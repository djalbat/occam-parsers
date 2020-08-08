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
    let noWhitespaceNode = null;

    const savedIndex = context.getSavedIndex(),
          nextTokenWhitespaceToken = context.isNextTokenWhitespaceToken();

    if (!nextTokenWhitespaceToken) {
      noWhitespaceNode = NoWhitespaceNode.fromNothing();
    }

    nodes = (noWhitespaceNode === null) ?
              null :
                [ ...nodes, noWhitespaceNode ];

    if (nodes === null) {
      context.backtrack(savedIndex);
    }

    return nodes;
  }

  asString() {
    const string = NO_WHITESPACE; ///

    return string;
  }

  clone() { return super.clone(NoWhitespacePart); }
}
