"use strict";

import { specialSymbols } from "occam-lexers";

import NonTerminalPart from "../../part/nonTerminal";

import { isValid } from "../../utilities/frame";
import { partContext } from "../../utilities/context";
import { OptionalPartPartType } from "../../partTypes";
import { parsePartContinually, parsePartRepeatedly } from "../../utilities/part";

const { questionMark } = specialSymbols;

export default class OptionalPartPart extends NonTerminalPart {
  constructor(type, continuation, part) {
    super(type, continuation);

    this.part = part;
  }

  getPart() {
    return this.part;
  }

  parse(frame, context) {
    const part = this;  ///

    context = partContext(part, context); ///

    const count = 0,
          limit = 1,
          strict = false,
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
          string = `${partString}${questionMark}`;

    return string;
  }

  static fromPart(part) {
    const type = OptionalPartPartType,
          continuation = false,
          optionalPartPart = new OptionalPartPart(type, continuation, part);

    return optionalPartPart;
  }
}