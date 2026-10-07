"use strict";

import { arrayUtilities } from "necessary";
import { specialSymbols } from "occam-lexers";

import NonTerminalPart from "../../part/nonTerminal";

import { emptyFrame } from "../../frame";
import { BranchingPartsPartType } from "../../partTypes";
import { every as branchingEvery  } from "../../utilities/branching";

const { first, last } = arrayUtilities,
      { openBracket, closeBracket, ellipsis } = specialSymbols;

export default class BranchingPartsPart extends NonTerminalPart {
  constructor(type, parts) {
    super(type);

    this.parts = parts;
  }

  getParts() {
    return this.parts;
  }

  parse(frame, state, forward, back) {
    const savedFrame = frame; ///

    state = state.branch(); ///

    return branchingEvery(this.parts, (part, frame, state, forward, back) => {
      return part.parse(frame, state, forward, back);
    }, emptyFrame, state, (partsFrame, state, back) => {
      frame = savedFrame; ///

      frame = this.compose(frame, partsFrame);

      state = state.prune();  ///

      return forward(frame, state, back);
    }, back);
  }

  asString() {
    const firstPart = first(this.parts),
          lastPart = last(this.parts),
          firstPartString = firstPart.asString(),
          lastPartString = lastPart.asString(),
          string = `${openBracket} ${firstPartString} ${ellipsis} ${lastPartString} ${closeBracket}`;

    return string;
  }

  static fromParts(parts) {
    const type = BranchingPartsPartType,
          branchingPartsPart = new BranchingPartsPart(type, parts);

    return branchingPartsPart;
  }
}
