"use strict";

import { specialSymbols } from "occam-lexers";

import Frame from "../../frame";
import TerminalPart from "../../part/terminal";
import TerminalNode from "../../node/terminal";

import { isValid } from "../../utilities/frame";
import { partContext } from "../../utilities/context";

const { wildcard } = specialSymbols;

export default class WildcardPart extends TerminalPart {
  parse(frame, context) {
    const part = this;  ///

    context = partContext(part, context); ///

    let partFrame = null;

    const nextSignificantToken = context.getNextSignificantToken();

    if (nextSignificantToken !== null) {
      const committed = context.getCommitted(),
            significantToken = nextSignificantToken,  ///
            terminalNode = TerminalNode.fromSignificantTokenAndCommitted(significantToken, committed),
            childNode = terminalNode;  ///

      partFrame = Frame.fromChildNode(childNode);
    }

    const partFrameValid = isValid(partFrame);

    frame = partFrameValid ?
              context.compose(frame, partFrame) :
                null;

    let frameValid;

    frameValid = isValid(frame);

    if (frameValid) {
      frame = context.continue(frame);
    }

    frameValid = isValid(frame);

    if (frameValid) {
      context.commit();
    }

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
