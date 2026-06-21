"use strict";

import { specialSymbols } from "occam-lexers";

import Frame from "../../frame";
import TerminalPart from "../../part/terminal";
import TerminalNode from "../../node/terminal";

import { partContext } from "../../utilities/context";

const { wildcard } = specialSymbols;

export default class WildcardPart extends TerminalPart {
  parse(context) {
    let frame;

    const part = this;  ///

    partContext((context) => {
      frame = null;

      const nextSignificantToken = context.getNextSignificantToken();

      if (nextSignificantToken !== null) {
        const significantToken = nextSignificantToken,
              terminalNode = TerminalNode.fromSignificantToken(significantToken),
              childNode = terminalNode;  ///

        frame = Frame.fromChildNode(childNode);
      }

      if (frame !== null) {
        const success = context.continue();

        frame = success ?
                  context.commit(frame) :
                    null;
      }
    }, part, context);

    return frame;
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
