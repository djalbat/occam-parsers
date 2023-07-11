"use strict";

import NonTerminalPart from "../../part/nonTerminal";

import { ChoiceOfPartsPartType } from "../../partTypes";

export default class ChoiceOfPartsPart extends NonTerminalPart {
  constructor(type, lookAhead, partChoices) {
    super(type, lookAhead);
    
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

  parse(nodes, state, callback, callAhead) {
    let parsed;

    parsed = this.partChoices.some((partChoice) => {
      const parsed = partChoice.parse(nodes, state, callback, callAhead);

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
          lookAhead = false,
          choiceOfPartsPart = new ChoiceOfPartsPart(type, lookAhead, partChoices);

    return choiceOfPartsPart;
  }
}
