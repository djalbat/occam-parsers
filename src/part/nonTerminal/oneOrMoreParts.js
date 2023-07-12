"use strict";

import { arrayUtilities } from "necessary";
import { specialSymbols } from "occam-lexers";

import NonTerminalPart from "../../part/nonTerminal";

import { popPartNodes } from "../../utilities/nodes";
import { OneOrMorePartsPartType } from "../../partTypes";

const { push } = arrayUtilities,
      { plus } = specialSymbols;

export default class OneOrMorePartsPart extends NonTerminalPart {
  constructor(type, lookAhead, part) {
    super(type, lookAhead);

    this.part = part;
  }

  getPart() {
    return this.part;
  }

  parse(nodes, state, callback, callAhead) {
    let parsed;

    const partNodes = [],
          savedIndex = state.getSavedIndex();

    if (callAhead === null) {
      parsed = parseOneOrMorePartsPart(this.part, partNodes, state, callback, callAhead);

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

      parsed = parseOneOrMorePartsPart(this.part, partNodes, state, callback, callAhead);
    }

    if (!parsed) {
      state.backtrack(savedIndex);
    }

    return parsed;
  }

  asString() {
    const partString = this.part.asString(),
          string = `${partString}${plus}`;

    return string;
  }

  static fromPart(part) {
    const type = OneOrMorePartsPartType,
          lookAhead = false,
          oneOrMorePartsPart = new OneOrMorePartsPart(type, lookAhead, part);

    return oneOrMorePartsPart;
  }
}

export function parseOneOrMorePartsPart(part, partNodes, state, callback, callAhead) {
  let parsed;

  const nodes = partNodes;  ///

  if (callAhead === null) {
    parsed = part.parse(nodes, state, callback, callAhead);

    if (parsed) {
      parseOneOrMorePartsPart(part, nodes, state, callback, callAhead);
    }


  } else {




      parsed = part.parse(nodes, state, callback, () => {
        let parsed;

        parsed = callAhead();

        if (!parsed) {
          parsed = parseOneOrMorePartsPart(part, nodes, state, callback, callAhead);
        }

        return parsed;
      });

  }

  return parsed;
}
