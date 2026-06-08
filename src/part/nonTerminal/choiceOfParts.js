"use strict";

import NonTerminalPart from "../../part/nonTerminal";

import { partContext } from "../../utilities/context";
import { ChoiceOfPartsPartType } from "../../partTypes";

export default class ChoiceOfPartsPart extends NonTerminalPart {
  constructor(type, callAhead, partChoices) {
    super(type, callAhead);
    
    this.partChoices = partChoices;
  }
  
  getPartChoices() {
    return this.partChoices;
  }

  parse(context) {
    let parsed;

    const part = this;  ///

    partContext((context) => {
      const callAhead = context.isCallAhead();

      if (callAhead) {
        debugger
      } else {
        parsed = this.partChoices.some((partChoice) => {
          parsed = partChoice.parse(context);

          if (parsed) {
            return true;
          }
        });
      }

      if (parsed) {
        context.commit();
      }
    }, part, context);

    return parsed;
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
          callAhead = false,
          choiceOfPartsPart = new ChoiceOfPartsPart(type, callAhead, partChoices);

    return choiceOfPartsPart;
  }
}
