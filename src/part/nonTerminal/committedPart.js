"use strict";

import { specialSymbols } from "occam-lexers";

import NonTerminalPart from "../../part/nonTerminal";

import { emptyFrame } from "../../frame";
import { CommittedPartPartType } from "../../partTypes";
import { committedPartPartContext } from "../../utilities/context";

const { backtick } = specialSymbols;

export default class CommittedPartPart extends NonTerminalPart {
  constructor(type, continuation, part) {
    super(type, continuation);

    this.part = part;
  }

  getPart() {
    return this.part;
  }

  parse(frame, context) {
    committedPartPartContext((context) => {
      const continuing = context.isContinuing();

      if (continuing) {
        frame = this.part.parse(frame, context);

        if (frame !== null) {
          frame = context.continue(frame);
        }
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
          string = `${backtick} ${partString}`;

    return string;
  }

  static fromPart(part) {
    const type = CommittedPartPartType,
          continuation = false,
          committedPartPart = new CommittedPartPart(type, continuation, part);

    return committedPartPart;
  }
}
