"use strict";

import NonTerminalPart from "../../part/nonTerminal";

import { IsolatedPartPartType } from "../../partTypes";
import { isolatedPartPartContext } from "../../utilities/context";

export default class IsolatedPartPart extends NonTerminalPart {
  constructor(type, continuation, part) {
    super(type, continuation);

    this.part = part;
  }

  getPart() {
    return this.part;
  }

  parse(frame, context) {
    isolatedPartPartContext((context) => {
      frame = this.part.parse(frame, context);
    }, context);

    return frame;
  }

  asString() {
    const partString = this.part.asString(),
          string = `( ${partString} )`;

    return string;
  }

  static fromPart(part) {
    const type = IsolatedPartPartType,
          continuation = false,
          isolatedPartPart = new IsolatedPartPart(type, continuation, part);

    return isolatedPartPart;
  }
}
