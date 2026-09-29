"use strict";

import NonTerminalPart from "../../part/nonTerminal";

import { partContext } from "../../utilities/context";
import { ChoiceOfPartsPartType } from "../../partTypes";
import { emptyFrame, nullifiedFrame } from "../../frame";

export default class ChoiceOfPartsPart extends NonTerminalPart {
  constructor(type, continuation, partChoices) {
    super(type, continuation);
    
    this.partChoices = partChoices;
  }
  
  getPartChoices() {
    return this.partChoices;
  }

  getParts() {
    const parts = this.partChoices.map((partChoice) => {
      const part = partChoice.getPart();

      return part;
    });

    return parts;
  }

  parse(frame, context) {
    const part = this;  ///

    partContext((context) => {
      const continuing = context.isContinuing(),
            savedFrame = frame; ///

      this.partChoices.some((partChoice) => {
        frame = savedFrame; ///

        if (continuing) {
          frame = partChoice.parse(frame, context);
        } else {
          const partFrame = partChoice.parse(emptyFrame, context),
                partFrameValid = partFrame.isValid(),
                partFrameAborted = partFrame.isAborted();

          if (partFrameValid) {
            frame = context.compose(frame, partFrame);
          } else if (partFrameAborted) {
            frame = partFrame; ///
          } else {
            frame = nullifiedFrame;
          }
        }

        const frameValid = frame.isValid(),
              frameAborted = frame.isAborted();

        if (frameValid || frameAborted) {
          return true;
        }
      });

      const frameValid = frame.isValid();

      if (frameValid) {
        context.commit();
      }
    }, part, context);

    return frame;
  }

  asString() {
    const partChoicesString = this.partChoices.reduce((partChoicesString, partChoice) => {
            const partChoiceString = partChoice.asString();
    
            if (partChoicesString === null) {
              partChoicesString = partChoiceString;
            } else {
              partChoicesString = `${partChoicesString} | ${partChoiceString}`;
            }
    
            return partChoicesString;
          }, null),
          string = `( ${partChoicesString} )`;
    
    return string;
  }

  static fromPartChoices(partChoices) {
    const type = ChoiceOfPartsPartType,
          continuation = false,
          choiceOfPartsPart = new ChoiceOfPartsPart(type, continuation, partChoices);

    return choiceOfPartsPart;
  }
}
