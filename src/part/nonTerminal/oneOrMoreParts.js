"use strict";

import { specialSymbols } from "occam-lexers";

import CollectionOfPartsPart from "./collectionOfParts";

import { push } from "../../utilities/array";
import { OneOrMorePartsPartType } from "../../partTypes";

const { plus } = specialSymbols;

export default class OneOrMorePartsPart extends CollectionOfPartsPart {
  constructor(part) {
    const type = OneOrMorePartsPartType; ///

    super(type, part);
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

  asString() {
    const operatorString = plus,  ///
          string = super.asString(operatorString);

    return string;
  }

  clone() { return super.clone(OneOrMorePartsPart); }
}

function parsePart(part, nodes, state, callback) {
  let parsed;

  if (callback !== null) {
    parsed = part.parse(nodes, state, () => {
      let parsed = callback();

      if (!parsed) {
        parsed = parsePart(part, nodes, state, callback);
      }

      return parsed;
    })
  } else {
    parsed = part.parse(nodes, state, callback);

    if (parsed) {
      parsePart(part, nodes, state, callback)
    }
  }

  return parsed;
}
