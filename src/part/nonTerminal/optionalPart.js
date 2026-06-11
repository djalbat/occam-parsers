"use strict";

import { specialSymbols } from "occam-lexers";

import NonTerminalPart from "../../part/nonTerminal";

import { partContext } from "../../utilities/context";
import { OptionalPartPartType } from "../../partTypes";

const { questionMark } = specialSymbols;

export default class OptionalPartPart extends NonTerminalPart {
  constructor(type, callAhead, part) {
    super(type, callAhead);

    this.part = part;
  }

  getPart() {
    return this.part;
  }

  parse(context) {
    let parsed;

    const part = this;  ///

    partContext((context) => {
      const callAhead = context.isCallAhead();

      if (callAhead) {
        parsed = this.part.parse(context);

        if (!parsed) {
          parsed = context.callAhead();
        }
      } else {
        this.part.parse(context);

        parsed = true;
      }

      if (parsed) {
        context.commit();
      }
    }, part, context);

    return parsed;
  }

  asString() {
    const partString = this.part.asString(),
          string = `${partString}${questionMark}`;

    return string;
  }

  static fromPart(part) {
    const type = OptionalPartPartType,
          callAhead = false,
          optionalPartPart = new OptionalPartPart(type, callAhead, part);

    return optionalPartPart;
  }
}
