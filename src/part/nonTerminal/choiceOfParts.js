"use strict";

import NonTerminalPart from "../../part/nonTerminal";

import { ChoiceOfPartsPartType } from "../../partTypes";

export default class ChoiceOfPartsPart extends NonTerminalPart {
  constructor(type, partChoices) {
    super(type);
    
    this.partChoices = partChoices;
  }
  
  getPartChoices() {
    return this.partChoices;
  }

  parse(nodes, state, callback, precedence) {
    let parsed;

    this.partChoices.some((partChoice) => {
      parsed = partChoice.parse(nodes, state, callback, precedence);

      if (parsed) {
        return true;
      }
    });

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
          choiceOfPartsPart = new ChoiceOfPartsPart(type, partChoices);

    return choiceOfPartsPart;
  }
}
