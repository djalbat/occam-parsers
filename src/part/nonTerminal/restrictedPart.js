"use strict";

import NonTerminalPart from "../../part/nonTerminal";

import { emptyFrame } from "../../frame";
import { RestrictedPartPartType } from "../../partTypes";
import { restrictedPartPartContext } from "../../utilities/context";

export default class RestrictedPartPart extends NonTerminalPart {
  constructor(type, continuation, part) {
    super(type, continuation);

    this.part = part;
  }

  getPart() {
    return this.part;
  }

  parse(frame, context) {
    restrictedPartPartContext((context) => {
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
    const type = RestrictedPartPartType,
          continuation = false,
          restrictedPartPart = new RestrictedPartPart(type, continuation, part);

    return restrictedPartPart;
  }
}
