"use strict";

import NonTerminalPart from "../../part/nonTerminal";

import { emptyFrame } from "../../frame";
import { ChoiceOfPartsPartType } from "../../partTypes";
import { choiceOfPartsPartContext } from "../../utilities/context";

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
      const continuing = context.isContinuing();

      let partFrame;

      const savedFrame = frame; ///

      this.partChoices.some((partChoice) => {
        frame = savedFrame; ///

        if (continuing) {
          frame = partChoice.parse(frame, context);
        } else {
          partFrame = partChoice.parse(emptyFrame, context);
        }

        if (partFrame !== null) {
          return true;
        }
      });

      if (!continuing) {
        frame = (partFrame !== null) ?
                  context.compose(frame, partFrame) :
                    null;
      }

      if (frame !== null) {
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
