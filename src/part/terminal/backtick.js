"use strict";

import { specialSymbols } from "occam-lexers";

import Frame from "../../frame";
import TerminalPart from "../../part/terminal";
import TerminalNode from "../../node/terminal";

import { partContext } from "../../utilities/context";

const { backtick } = specialSymbols;

export default class BacktickPart extends TerminalPart {
  parse(frame, context) {
    const part = this;  ///

    partContext((context) => {
      let partFrame = null;

      const nextSignificantToken = context.getNextSignificantToken();

      if (nextSignificantToken !== null) {
        const significantToken = nextSignificantToken, ///
              content = significantToken.getContent();

        if (content === backtick) {
          const terminalNode = TerminalNode.fromSignificantToken(significantToken),
                childNode = terminalNode;  ///

          partFrame = Frame.fromChildNode(childNode);
        }
      }

      frame = (partFrame !== null) ?
                context.compose(frame, partFrame) :
                  null;

      if (frame !== null) {
        frame = context.continue(frame);
      }

      if (frame !== null) {
        context.commit();
      }
    }, part, context);

    return frame;
  }

  asString() {
    const string = backtick;  ///

    return string;
  }

  static fromNothing() {
    const backtickPart = new BacktickPart();

    return backtickPart;
  }
}
