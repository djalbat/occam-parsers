"use strict";

import { specialSymbols } from "occam-lexers";

import TerminalPart from "../../part/terminal";
import TerminalNode from "../../node/terminal";

import { partContext } from "../../utilities/context";

const { wildcard } = specialSymbols;

export default class WildcardPart extends TerminalPart {
  parse(context) {
    let parsed;

    const part = this;  ///

    partContext((context) => {
      parsed = false;

      const nextSignificantToken = context.getNextSignificantToken();

      if (nextSignificantToken !== null) {
        const significantToken = nextSignificantToken,
              terminalNode = TerminalNode.fromSignificantToken(significantToken),
              childNode = terminalNode;  ///

        context.addChildNode(childNode);

        parsed = true;
      }

      if (parsed) {
        const callingAhead = context.isCallingAhead();

        if (callingAhead) {
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
    const string = wildcard;  ///

    return string;
  }

  static fromNothing() {
    const wildcardPart = new WildcardPart();

    return wildcardPart;
  }
}
