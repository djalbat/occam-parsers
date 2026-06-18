"use strict";

import { specialSymbols } from "occam-lexers";

import NonTerminalPart from "../../part/nonTerminal";

import { partContext } from "../../utilities/context";
import { OptionalPartPartType } from "../../partTypes";

const { questionMark } = specialSymbols;

export default class OptionalPartPart extends NonTerminalPart {
  constructor(type, contiunation, part) {
    super(type, contiunation);

    this.part = part;
  }

  getPart() {
    return this.part;
  }

  parse(context) {
    let parsed;

    const part = this;  ///

    partContext((context) => {
      const contiuning = context.isContinuing();

      if (contiuning) {
        parsed = this.part.parse(context);

        if (!parsed) {
          parsed = context.continue();
        }
      } else {
        this.part.parse(context);

        parsed = true;
      }

      if (parsed) {
        parsed = context.commit();
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
          contiunation = false,
          optionalPartPart = new OptionalPartPart(type, contiunation, part);

    return optionalPartPart;
  }
}
