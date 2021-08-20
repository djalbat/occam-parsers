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

  parse(nodes, context, callback) {
    let parsed;

    const index = 0;

    parsed = parseParts(this.parts, nodes, index, context, callback);

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

function parseParts(parts, nodes, index, context, callback) {
  let parsed;

  const partsLength = parts.length;

  if (index === partsLength) {
    parsed = true;

    if (callback) {
       parsed = callback();
    }
  } else {
    const part = parts[index++];

    parsed = parsePart(part, parts, nodes, index, context, callback);
  }

  return parsed;
}

function parsePart(part, parts, nodes, index, context, callback) {
  let parsed;

  if (callback) {
    const partsNodes = [];

    parsed = part.parse(nodes, context, () => parseParts(parts, partsNodes, index, context, callback));

    if (parsed) {
      push(nodes, partsNodes);
    }
  } else {
    const partRuleNamePartWithLookAhead = isPartRuleNamePartWithLookAhead(part);

    if (partRuleNamePartWithLookAhead) {
      const ruleNamePart = part, ///
            partsNodes = [];

      parsed = ruleNamePart.parse(nodes, context, () => parseParts(parts, partsNodes, index, context));

      if (parsed) {
        push(nodes, partsNodes);
      }
    } else {
      parsed = part.parse(nodes, context);

      if (parsed) {
        parsed = parseParts(parts, nodes, index, context);
      }
    }
  }

  return parsed;
}
