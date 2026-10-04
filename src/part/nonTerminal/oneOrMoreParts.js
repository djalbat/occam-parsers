"use strict";

import { specialSymbols } from "occam-lexers";

import NonTerminalPart from "../../part/nonTerminal";

import { isValid } from "../../utilities/frame";
import { partContext } from "../../utilities/context";
import { OneOrMorePartsPartType } from "../../partTypes";
import { parsePartContinually, parsePartRepeatedly } from "../../utilities/part";

const { plus } = specialSymbols;

export default class OneOrMorePartsPart extends NonTerminalPart {
  constructor(type, continuation, part) {
    super(type, continuation);

    this.part = part;
  }

  getPart() {
    return this.part;
  }

  parse(frame, context) {
    const part = this;  ///

    context = partContext(part, context);  ///

    const count = 0,
          limit = Infinity,
          strict = true,
          continuing = context.isContinuing();

    frame = continuing ?
              parsePartContinually(this.part, count, limit, strict, frame, context) :
                parsePartRepeatedly(this.part, limit, strict, frame, context);

    const frameValid = isValid(frame);

    if (frameValid) {
      context.commit();
    }

    return frame;
  }

  asString() {
    const partString = this.part.asString(),
          string = `${partString}${plus}`;

    return string;
  }

  static fromPart(part) {
    const type = OneOrMorePartsPartType,
          continuation = false,
          oneOrMorePartsPart = new OneOrMorePartsPart(type, continuation, part);

    return oneOrMorePartsPart;
  }
}