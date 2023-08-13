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

  getParts() {
    const parts = this.partChoices.map((partChoice) => {
      const part = partChoice.getPart();

      return part;
    });

    return parts;
  }

  parse(nodes, state, callback, callAhead) {
    let parsed;

    const savedPrecedence = state.getSavedPrecedence();

    parsed = this.partChoices.some((partChoice) => {
      let parsed;

      const part = partChoice.getPart(),
            savedIndex = state.getSavedIndex(),
            precedence = partChoice.getPrecedence(),
            nodesLength = nodes.length;

      if (precedence !== null) {
        state.setPrecedence(precedence);
      }

      callback = (callAhead === null) ?
                    null :
                      () => {  ///
                        let parsed;

                        parsed = callAhead();

                        return parsed;
                      };

      parsed = parsePart(part, nodes, state, callback, callAhead);

      if (!parsed) {
        const start = nodesLength;  ///

        nodes.splice(start);

        state.backtrack(savedIndex);
      }

      return parsed;
    });

    if (!parsed) {
      state.resetPrecedence(savedPrecedence);
    }

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
