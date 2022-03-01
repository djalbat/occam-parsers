"use strict";

import { specialSymbols } from "occam-lexers";

import CollectionOfPartsPart from "./collectionOfParts";

import { ZeroOrMorePartsPartType } from "../../partTypes";

const { asterisk } = specialSymbols;

export default class ZeroOrMorePartsPart extends CollectionOfPartsPart {
  constructor(part) {
    const type = ZeroOrMorePartsPartType; ///

    super(type, part);
  }

  parse(nodes, state, callback) {
    let parsed;

    const part = this.getPart();

    parsePart(part, nodes, state, callback);

    parsed = true;

    return parsed;
  }

  asString() {
    const operatorString = asterisk,  ///
          string = super.asString(operatorString);

    return string;
  }

  clone() { return super.clone(ZeroOrMorePartsPart); }
}

function parsePart(part, nodes, state, callback) {
  let parsed;

  if (callback !== null) {
    parsed = callback();

    if (!parsed) {
      part.parse(nodes, state, () => parsePart(part, nodes, state, callback));
    }
  } else {
    parsed = part.parse(nodes, state, callback);

    if (parsed) {
      parsePart(part, nodes, state, callback);
    }
  }

  return parsed;
}
