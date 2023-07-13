"use strict";

import NonTerminalPart from "../../part/nonTerminal";

import { parsePart } from "../../utilities/parse";
import { ChoiceOfPartsPartType } from "../../partTypes";

export default class ChoiceOfPartsPart extends NonTerminalPart {
  constructor(type, lookAhead, partChoices) {
    super(type, lookAhead);
    
    this.partChoices = partChoices;
  }
  
  getPartChoices() {
    return this.partChoices;
  }

  parse(nodes, state, callback, callAhead) {
    let parsed;

    parsed = this.partChoices.some((partChoice) => {
      let parsed;

      const part = partChoice.getPart(),
            savedIndex = state.getSavedIndex(),
            precedence = partChoice.getPrecedence(),
            nodesLength = nodes.length;

      if (precedence !== null) {
        state.setPrecedence(precedence);
      }

      callback = null;  ///

      parsed = parsePart(part, nodes, state, callback, callAhead);

      if (!parsed) {
        const start = nodesLength;  ///

        nodes.splice(start);

        state.backtrack(savedIndex);
      }

      return parsed;
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
