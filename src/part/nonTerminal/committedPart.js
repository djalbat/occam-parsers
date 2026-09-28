"use strict";

import { specialSymbols } from "occam-lexers";

import NonTerminalPart from "../../part/nonTerminal";

import { CommittedPartPartType } from "../../partTypes";
import { committedPartPartContext } from "../../utilities/context";
import { emptyFrame, nullifiedFrame } from "../../frame";

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

        const frameValid = frame.isValid();

        if (frameValid) {
          frame = context.continue(frame);
        }
      } else {
        const partFrame = this.part.parse(emptyFrame, context),
              partFrameValid = partFrame.isValid();

        frame = partFrameValid ?
                  context.compose(frame, partFrame) :
                    nullifiedFrame;
      }

      const frameValid = frame.isValid();

      if (frameValid) {
        context.commit();
      }
    }, context);

    return frame;
  }

  asString() {
    const partString = this.part.asString(),
          string = `${backtick}${partString}`;

    return string;
  }

  static fromPart(part) {
    const type = CommittedPartPartType,
          continuation = false,
          committedPartPart = new CommittedPartPart(type, continuation, part);

    return committedPartPart;
  }
}
