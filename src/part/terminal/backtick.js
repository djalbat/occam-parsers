"use strict";

import { specialSymbols } from "occam-lexers";

import Frame from "../../frame";
import TerminalPart from "../../part/terminal";
import BacktickNode from "../../node/terminal/backtick";

import { backtickCPartontext } from "../../utilities/context";

const { backtick } = specialSymbols;

export default class BacktickPart extends TerminalPart {
  parse(frame, context) {
    backtickCPartontext((context) => {
      let partFrame;

      const backtickNode = BacktickNode.fromNothing(),
            childNode = backtickNode;  ///

      partFrame = Frame.fromChildNode(childNode);

      frame = (partFrame !== null) ?
                context.compose(frame, partFrame) :
                  null;

      if (frame !== null) {
        frame = context.continue(frame);
      }

      if (frame !== null) {
        context.commit();
      }
    }, context);

    return frame;
  }

  asString() {
    const string = backtick; ///

    return string;
  }

  static fromNothing() {
    const backtickPart = new BacktickPart();

    return backtickPart;
  }
}
