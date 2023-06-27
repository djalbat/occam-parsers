"use strict";

import { arrayUtilities } from "necessary";
import { specialSymbols } from "occam-lexers";

import NonTerminalPart from "../../part/nonTerminal";

import { OneOrMorePartsPartType } from "../../partTypes";

const { push } = arrayUtilities,
      { plus } = specialSymbols;

export default class OneOrMorePartsPart extends NonTerminalPart {
  constructor(type, part) {
    super(type);

    this.part = part;
  }

  getPart() {
    return this.part;
  }

  asString() {
    const partString = this.part.asString(),
          string = `${partString}${plus}`;

    return string;
  }

  parse(nodes, state, callback) {
    let parsed;

    const part = this.getPart(),
          partNodes = [],
          savedIndex = state.getSavedIndex();

    parsed = parsePart(part, partNodes, state, callback);

    if (parsed) {
      push(nodes, partNodes);
    }

    if (!parsed) {
      state.backtrack(savedIndex);
    }

    return parsed;
  }

  static fromPart(part) {
    const type = OneOrMorePartsPartType,
          oneOrMorePartsPart = new OneOrMorePartsPart(type, part);

    return oneOrMorePartsPart;
  }
}

function parsePart(part, nodes, state, callback) {
  let parsed;

  if (callback !== null) {
    const oneOrMorePartsPartCallback = () => {
      let parsed = callback();

      if (!parsed) {
        parsed = parsePart(part, nodes, state, callback);
      }

      return parsed;
    };

    Object.assign(oneOrMorePartsPartCallback, {
      callback,
      part
    });

    state.callbacks.push(oneOrMorePartsPartCallback);

    parsed = part.parse(nodes, state, oneOrMorePartsPartCallback);

    state.callbacks.pop();

  } else {
    parsed = part.parse(nodes, state, callback);

    if (parsed) {
      parsePart(part, nodes, state, callback)
    }
  }

  return parsed;
}
