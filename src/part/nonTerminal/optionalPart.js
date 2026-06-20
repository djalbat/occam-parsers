"use strict";

import { specialSymbols } from "occam-lexers";

import Frame from "../../frame";
import NonTerminalPart from "../../part/nonTerminal";

import { partContext } from "../../utilities/context";
import { OptionalPartPartType } from "../../partTypes";
import {ninthLast} from "necessary/lib/utilities/array";

const { questionMark } = specialSymbols;

export default class OptionalPartPart extends NonTerminalPart {
  constructor(type, continuation, part) {
    super(type, continuation);

    this.part = part;
  }

  getPart() {
    return this.part;
  }

  parse(context) {
    let frame;

    const part = this;  ///

    partContext((context) => {
      const continuing = context.isContinuing();

      if (continuing) {
        frame = this.part.parse(context);

        if (frame === null) {
          frame = Frame.fromNothing();

          frame = context.continue(frame);
        }
      } else {
        frame = this.part.parse(context);

        if (frame === null) {
          frame = Frame.fromNothing();
        }
      }

      if (frame !== null) {
        frame = context.commit(frame);
      }
    }, part, context);

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
