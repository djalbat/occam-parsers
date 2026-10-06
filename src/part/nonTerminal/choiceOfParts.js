"use strict";

import NonTerminalPart from "../../part/nonTerminal";

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

  parse(frame, state, forward, back) {
    const length = this.partChoices.length;

    let success = false;

    for (let index = 0; index < length; index++) {
      const partChoice = this.partChoices[index];

      partChoice.parse(frame, state, (partChoiceFrame, partChoiceState) => {
        frame = partChoiceFrame;  ///

        state = partChoiceState;  ///

        success = true;
      }, () => {
        ///
      });

      if (success) {
        break;
      }
    }

    if (!success) {
      return back();
    }

    return forward(frame, state, back);
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
