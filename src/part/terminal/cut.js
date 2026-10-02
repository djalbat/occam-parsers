"use strict";

import { specialSymbols } from "occam-lexers";

import TerminalPart from "../../part/terminal";

import { isValid } from "../../utilities/frame";
import { cutFrame } from "../../frame";
import { partContext } from "../../utilities/context";

const { backtick } = specialSymbols;

export default class CutPart extends TerminalPart {
  isCutPart() {
    const cutPart = true;

    return cutPart;
  }

  parse(frame, context) {
    const part = this;  ///

    context = partContext(part, context); ///

    frame = context.continue(frame);

    if (frame === null) {
      frame = cutFrame;  //
    }

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
