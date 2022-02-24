"use strict";

import { EMPTY_STRING } from "../constants";
import { push, first, allButFirst } from "../utilities/array";
import { isPartRuleNamePartWithLookAhead } from "../utilities/part";

export default class Definition {
  constructor(parts) {
    this.parts = parts;
  }

  getParts() {
    return this.parts;
  }

  getFirstPart() {
    const firstPart = first(this.parts);

    return firstPart;
  }

  getPartsLength() {
    const partsLength = this.parts.length;

    return partsLength;
  }

  getAllButFirstParts() {
    const allButFirstParts = allButFirst(this.parts);

    return allButFirstParts;
  }

  addPart(part) {
    this.parts.push(part);
  }

  parse(nodes, state, callback) {
    let parsed;

    const index = 0;

    parsed = parseParts(this.parts, nodes, index, state, callback);

    return parsed;
  }

  asString() {
    const partsString = this.parts.reduce((partsString, part) => {
          const partString = part.asString();

          if (partsString === EMPTY_STRING) {
            partsString = partString; ///
          } else {
            partsString = `${partsString} ${partString}`;
          }

          return partsString;
        }, EMPTY_STRING),
        string = partsString; ///

    return string;
  }
}

function parseParts(parts, nodes, index, state, callback) {
  let parsed;

  const partsLength = parts.length;

  if (index === partsLength) {
    parsed = true;

    if (callback !== null) {
       parsed = callback();
    }
  } else {
    const part = parts[index];

    parsed = parsePart(part, parts, nodes, index, state, callback);
  }

  return parsed;
}

function parsePart(part, parts, nodes, index, state, callback) {
  let parsed;

  if (callback !== null) {
    const partsNodes = [];

    parsed = part.parse(nodes, state, () => {
      index++;

      parseParts(parts, partsNodes, index, state, callback);
    });

    if (parsed) {
      push(nodes, partsNodes);
    }
  } else {
    const partRuleNamePartWithLookAhead = isPartRuleNamePartWithLookAhead(part);

    if (partRuleNamePartWithLookAhead) {
      const ruleNamePart = part, ///
            partsNodes = [];

      parsed = ruleNamePart.parse(nodes, state, () => {
        const callback = null;

        index++;

        parseParts(parts, partsNodes, index, state, callback);
      });

      if (parsed) {
        push(nodes, partsNodes);
      }
    } else {
      const callback = null;

      parsed = part.parse(nodes, state, callback);

      if (parsed) {
        index++;

        parsed = parseParts(parts, nodes, index, state, callback);
      }
    }
  }

  return parsed;
}
