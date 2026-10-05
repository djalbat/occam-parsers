"use strict";

import { specialSymbols } from "occam-lexers";

import TerminalPart from "../../part/terminal";

import { isValid } from "../../utilities/frame";
import { cutContext } from "../../utilities/context";

const { backtick } = specialSymbols;

export default class CutPart extends TerminalPart {
  isCutPart() {
    const cutPart = true;

    return cutPart;
  }

  getContinuingContext(context) {
    const cuttingContext = context.getCuttingContext(),
          continuingContext = cuttingContext; ///

    return continuingContext;
  }

  parse(frame, context) {
    const continuingContext = this.getContinuingContext(context);

    context = cutContext(continuingContext, context); ///

    frame = context.continue(frame);

    const frameValid = isValid(frame);

    if (frameValid) {
      context.commit();
    }

    return frame;
  }

  asString() {
    const string = backtick; ///

    return string;
  }

  static fromNothing() {
    const cutPart = new CutPart();

    return cutPart;
  }
}
