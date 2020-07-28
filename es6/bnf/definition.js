"use strict";

import { isPartRuleNamePart } from "../utilities/part";
import { first, concat, allButFirst } from "../utilities/array";

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

  parse(context, callback) {
    let parsed;

    let nodes = [];

    const index = 0;

    parsed = parseParts(this.parts, nodes, index, context, callback);

    if (!parsed) {
      nodes = null;
    }

    return nodes;
  }

  asString() {
    const partsString = this.parts.reduce((partsString, part) => {
          const partString = part.asString();

          if (partsString === "") {
            partsString = partString; ///
          } else {
            partsString = `${partsString} ${partString}`;
          }

          return partsString;
        }, ""),
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
  let parsed = false;

  if (callback) {
    const remainingNodes = [],
          partNodeOrNodes = part.parse(context, () => parseParts(parts, remainingNodes, index, context, callback));

    if (partNodeOrNodes !== null) {
      concat(nodes, partNodeOrNodes, remainingNodes);

      parsed = true;
    }
  } else {
    const partRuleNamePart = isPartRuleNamePart(part);

    if (partRuleNamePart) {
      const ruleNamePart = part,  ///
            lookAhead = ruleNamePart.isLookAhead();  ///

      if (lookAhead) {
        const remainingNodes = [],
              partNodeOrNodes = ruleNamePart.parse(context, () => parseParts(parts, remainingNodes, index, context));

        if (partNodeOrNodes !== null) {
          concat(nodes, partNodeOrNodes, remainingNodes);

          parsed = true;
        }
      } else {
        const partNodeOrNodes = ruleNamePart.parse(context);

        if (partNodeOrNodes !== null) {
          concat(nodes, partNodeOrNodes);

          parsed = parseParts(parts, nodes, index, context);
        }
      }
    } else {
      const partNodeOrNodes = part.parse(context);

      if (partNodeOrNodes !== null) {
        concat(nodes, partNodeOrNodes);

        parsed = parseParts(parts, nodes, index, context);
      }
    }
  }

  return parsed;
}
