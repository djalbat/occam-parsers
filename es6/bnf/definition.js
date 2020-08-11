"use strict";

import { first, allButFirst } from "../utilities/array";
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

  parse(context, callback) {
    let nodes = [];

    const index = 0;

    nodes = parseParts(this.parts, nodes, index, context, callback);

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
  const partsLength = parts.length;

  if (index === partsLength) {
    if (callback) {
      const parsed = callback();

      if (!parsed) {
        nodes = null;
      }
    }
  } else {
    const part = parts[index++];

    nodes = parsePart(part, parts, nodes, index, context, callback);
  }

  return nodes;
}

function parsePart(part, parts, nodes, index, context, callback) {
  if (callback) {
    let partsNodes = null;

    nodes = part.parse(nodes, context, () => {
      partsNodes = [];

      partsNodes = parseParts(parts, partsNodes, index, context, callback);

      const parsed = (partsNodes !== null);

      return parsed;
    });

    nodes = (partsNodes !== null) ?
              [ ...nodes, ...partsNodes ] :
                null;
  } else {
    const partRuleNamePartWithLookAhead = isPartRuleNamePartWithLookAhead(part);

    if (partRuleNamePartWithLookAhead) {
      const ruleNamePart = part; ///

      let partsNodes = null;

      nodes = ruleNamePart.parse(nodes, context, () => {
        partsNodes = [];

        partsNodes = parseParts(parts, partsNodes, index, context);

        const parsed = (partsNodes !== null);

        return parsed;
      });

      nodes = (partsNodes !== null) ?
                [ ...nodes, ...partsNodes ] :
                  null;
    } else {
      nodes = part.parse(nodes, context);

      if (nodes !== null) {
        nodes = parseParts(parts, nodes, index, context);
      }
    }
  }

  return nodes;
}
