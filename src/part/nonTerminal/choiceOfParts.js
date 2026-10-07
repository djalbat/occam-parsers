"use strict";

import NonTerminalPart from "../../part/nonTerminal";

import { some as linearSome } from "../../utilities/linear";
import { some as branchingSome } from "../../utilities/branching";
import { ChoiceOfPartsPartType } from "../../partTypes";

export default class ChoiceOfPartsPart extends NonTerminalPart {
  constructor(type, partChoices) {
    super(type);
    
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
    const branching = state.isBranching(),
          some = branching ?
                   branchingSome :
                     linearSome;

    return some(this.partChoices, (partChoice, frame, state, forward, back) => {
      return partChoice.parse(frame, state, forward, back);
    }, frame, state, forward, back);
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
