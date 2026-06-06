"use strict";

import { specialSymbols } from "occam-lexers";

import TerminalPart from "../../part/terminal";
import EndOfLineNode from "../../node/terminal/endOfLine";

import { partContext } from "../../utilities/context";

const { endOfLine } = specialSymbols;

export default class EndOfLinePart extends TerminalPart {
  parse(context) {
    let parsed;

    const part = this;

    partContext((context) => {
      parsed = false;

      const nextSignificantToken = context.getNextSignificantToken();

      if (nextSignificantToken !== null) {
        const significantToken = nextSignificantToken, ///
              significantTokenEndOfLineToken = significantToken.isEndOfLineToken();

        if (significantTokenEndOfLineToken) {
          const endOfLineNode = EndOfLineNode.fromSignificantToken(significantToken),
                childNode = endOfLineNode;  ///

          context.addChildNode(childNode);

          parsed = true;
        }
      }

      if (parsed) {
        context.commit();
      }
    }, part, context)

    return parsed;
  }

  asString() {
    const string = endOfLine; ///

    return string;
  }

  static fromNothing() {
    const endOfLinePart = new EndOfLinePart();

    return endOfLinePart;
  }
}
