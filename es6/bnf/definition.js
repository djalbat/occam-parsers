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
    let nodes = [];

    const index = 0,
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
  let parsed = false;

  const partsLength = parts.length;

  if (index === partsLength) {
    parsed = callback ?
               callback() :
                 true;
  } else {
    const part = parts[index++];

    parsed = parsePart(part, parts, nodes, index, context, callback);
  }

  return parsed;
}

function parsePart(part, parts, nodes, index, context, callback) {
  let parsed = false;

  const partRuleNamePart = isPartRuleNamePart(part);

  if (partRuleNamePart) {
    const ruleNamePart = part;  ///

    if (callback) {
      const partsNodeOrNodes = [],
            partNodeOrNodes = ruleNamePart.parse(context, () => parseParts(parts, partsNodeOrNodes, index, context) && callback());

      if (partNodeOrNodes !== null) {
        concat(nodes, partNodeOrNodes, partsNodeOrNodes);

        parsed = true;
      }
    } else {
      const lookAhead = ruleNamePart.isLookAhead();  ///

      if (lookAhead) {
        const partsNodeOrNodes = [],
              partNodeOrNodes = ruleNamePart.parse(context, () => parseParts(parts, partsNodeOrNodes, index, context));

        if (partNodeOrNodes !== null) {
          concat(nodes, partNodeOrNodes, partsNodeOrNodes);

          parsed = true;
        }
      } else {
        const partNodeOrNodes = ruleNamePart.parse(context);

        if (partNodeOrNodes !== null) {
          concat(nodes, partNodeOrNodes);

          parsed = parseParts(parts, nodes, index, context);
        }
      }
    }
    // if (!callback) {
    //   const lookAhead = ruleNamePart.isLookAhead();  ///
    //
    //   if (lookAhead) {
    //     callback = () => true;  ///
    //   }
    // }
    //
    // if (callback) {
    //   const partsNodeOrNodes = [],
    //         partNodeOrNodes = ruleNamePart.parse(context, () => parseParts(parts, partsNodeOrNodes, index, context) && callback());
    //
    //   if (partNodeOrNodes !== null) {
    //     concat(nodes, partNodeOrNodes, partsNodeOrNodes);
    //
    //     parsed = true;
    //   }
    // } else {
    //   const partNodeOrNodes = ruleNamePart.parse(context);
    //
    //   if (partNodeOrNodes !== null) {
    //     concat(nodes, partNodeOrNodes);
    //
    //     parsed = parseParts(parts, nodes, index, context);
    //   }
    // }
  } else {
    const partNodeOrNodes = part.parse(context, callback);

    if (partNodeOrNodes !== null) {
      concat(nodes, partNodeOrNodes);

      parsed = parseParts(parts, nodes, index, context, callback);
    }
  }

  return parsed;
}
