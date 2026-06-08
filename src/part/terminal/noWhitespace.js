"use strict";

import { specialSymbols } from "occam-lexers";

import TerminalPart from "../../part/terminal";
import NoWhitespaceNode from "../../node/terminal/noWhitespace";

import { partContext } from "../../utilities/context";

const { noWhitespace } = specialSymbols;

export default class NoWhitespacePart extends TerminalPart {
  isNoWhitespacePart() {
    const noWhitespacePart = true;

    return noWhitespacePart;
  }

  parse(context) {
    let parsed;

    const part = this;  ///

    partContext((context) => {
      parsed = false;

      const nextTokenWhitespaceToken = context.isNextTokenWhitespaceToken();

      if (!nextTokenWhitespaceToken) {
        const noWhitespaceNode = NoWhitespaceNode.fromNothing(),
              childNode = noWhitespaceNode; ///

        context.addChildNode(childNode);

        parsed = true;
      }

      if (parsed) {
        const callAhead = context.isCallAhead();

        if (callAhead) {
          parsed = context.callAhead();
        }
      }

      if (parsed) {
        context.commit();
      }
    }, part, context);

    return parsed;
  }

  asString() {
    const string = noWhitespace; ///

    return string;
  }

  static fromNothing() {
    const noWhitespacePart = new NoWhitespacePart();

    return noWhitespacePart;
  }
}
