"use strict";

import NonTerminalPart from "../../part/nonTerminal";

import { ChoiceOfPartsPartType } from "../../partTypes";
import { choiceOfPartsPartContext } from "../../utilities/context";
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
    const choiceOfPartsPart = this;  ///

    choiceOfPartsPartContext((context) => {
      const continuing = context.isContinuing(),
            savedFrame = frame; ///

      this.partChoices.some((partChoice) => {
        frame = savedFrame; ///

        if (continuing) {
          frame = partChoice.parse(frame, context);
        } else {
          const partFrame = partChoice.parse(emptyFrame, context),
                partFrameValid = partFrame.isValid();

          frame = partFrameValid ?
                    context.compose(frame, partFrame) :
                      nullifiedFrame;
        }

        const frameValid = frame.isValid();

        if (frameValid) {
          return true;
        }
      });

      const frameValid = frame.isValid();

      if (frameValid) {
        context.commit();
      }
    }, choiceOfPartsPart, context);

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
