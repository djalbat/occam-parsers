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

  parse(context) {
    let nodes = [];

    const parsed = parseParts(this.parts, nodes, context);

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

function parseParts(parts, nodes, context, index = 0) {
  let parsed = false;

  const partsLength = parts.length;

  if (index === partsLength) {
    parsed = true;

    return parsed;
  }

  const part = parts[index],
        savedIndex = context.getSavedIndex(),
        partRuleNamePart = isPartRuleNamePart(part);

  index++;

  if (partRuleNamePart) {
    const ruleNamePart = part,  ///
          lookAhead = ruleNamePart.isLookAhead();

    if (lookAhead) {
      const rule = ruleNamePart.findRule(context);

      ruleNamePart.parseRuleWithLookAhead(rule, context, (node) => {
        const partNodeOrNodes = [];

        if (node !== null) {
          parsed = parseParts(parts, partNodeOrNodes, context, index);
        }

        if (parsed) {
          nodes.push(node);

          concat(nodes, partNodeOrNodes);
        }

        if (!parsed) {
          context.backtrack(savedIndex);
        }

        return parsed;
      });

      return parsed;
    }
  }

  const partNodeOrNodes = part.parse(context);

  if (partNodeOrNodes !== null) {
    concat(nodes, partNodeOrNodes);

    parsed = parseParts(parts, nodes, context, index);

    if (!parsed) {
      context.backtrack(savedIndex);
    }
  }

  return parsed;
}
