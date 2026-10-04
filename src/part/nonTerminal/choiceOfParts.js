"use strict";

import NonTerminalPart from "../../part/nonTerminal";

import { isValid } from "../../utilities/frame";
import { cutFrame } from "../../frame";
import { partContext } from "../../utilities/context";
import { ChoiceOfPartsPartType } from "../../partTypes";

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

    context = partContext(part, context); ///

    const length = this.partChoices.length,
          lastIndex = length - 1,
          savedFrame = frame; ///

    this.partChoices.some((partChoice, index) => {
      frame = partChoice.parse(savedFrame, context);

      if (frame === cutFrame) {
        if (index !== lastIndex) {
          frame = null;
        }

        return true;
      }

      const frameValid = isValid(frame);

      if (frameValid) {
        return true;
      }
    });

    const frameValid = isValid(frame);

    if (frameValid) {
      context.commit();
    }

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
