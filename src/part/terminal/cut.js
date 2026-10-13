"use strict";

import { specialSymbols } from "occam-lexers";

import Cut from "../../cut";
import Frame from "../../frame";
import CutNode from "../../node/terminal/cut";
import TerminalPart from "../../part/terminal";

const { backtick } = specialSymbols;

export default class CutPart extends TerminalPart {
  constructor(producing) {
    super();

    this.producing = producing;
  }

  isProducing() {
    return this.producing;
  }

  isCutPart() {
    const cutPart = true;

    return cutPart;
  }

  isConsuming(ruleMap, visitedRules = []) {
    const consuming = false;

    return consuming;
  }

  setProducing(producing) {
    this.producing = producing;
  }

  parse(frame, state, forward, back) {
    if (this.producing) {
      const cutNode = CutNode.fromNothing(),
            childNode = cutNode,
            partFrame = Frame.fromChildNode(childNode);

      frame = this.compose(frame, partFrame);
    }

    const cut = Cut.fromFrameStateAndForward(frame, state, forward);

    return back(cut);
  }

  asString() {
    const string = this.producing ?
                    `${backtick}${backtick}` :
                      `${backtick}`;

    return string;
  }

  static fromProducing(producing) {
    const cutPart = new CutPart(producing);

    return cutPart;
  }
}
