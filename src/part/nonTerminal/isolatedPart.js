"use strict";

import NonTerminalPart from "../../part/nonTerminal";

import { emptyFrame } from "../../frame";
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
      const continuing = context.isContinuing();

      if (continuing) {
        frame = this.part.parse(frame, context);
      } else {
        const partFrame = this.part.parse(emptyFrame, context);

        frame = (partFrame !== null) ?
                  context.compose(frame, partFrame) :
                    null;
      }

      if (frame !== null) {
        context.commit();
      }
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
