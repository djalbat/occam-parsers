"use strict";

import { arrayUtilities } from "necessary";

import NonTerminalPart from "../../part/nonTerminal";

import { parsePart } from "../../utilities/parse";
import { popPartNodes } from "../../utilities/nodes";
import { ChoiceOfPartsPartType } from "../../partTypes";

const { push } = arrayUtilities;

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
            partNodes = [],
            savedIndex = state.getSavedIndex(),
            precedence = partChoice.getPrecedence();

      if (precedence !== null) {
        state.setPrecedence(precedence);
      }

      if (callAhead === null) {
        callback = null;  ///

        parsed = parsePart(part, partNodes, state, callback, callAhead);

        if (parsed) {
          push(nodes, partNodes);
        }
      } else {
        callback = () => {  ///
          let parsed;

          push(nodes, partNodes);

          parsed = callAhead();

          if (!parsed) {
            popPartNodes(nodes, partNodes);
          }

          return parsed;
        };

        parsed = parsePart(part, partNodes, state, callback, callAhead);
      }

      if (!parsed) {
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
