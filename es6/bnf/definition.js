'use strict';

const partUtilities = require('../utilities/part'),
      arrayUtilities = require('../utilities/array');

const { isPartRuleNamePart } = partUtilities,
      { first, concat, allButFirst } = arrayUtilities;

class Definition {
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

  parse(configuration, noWhitespace) {
    let nodes = [];

    const parsed = parseParts(this.parts, nodes, configuration, noWhitespace);

    if (!parsed) {
      nodes = null;
    }

    return nodes;
  }
  
  asString() {
    const partsString = this.parts.reduce(function(partsString, part) {
          const partString = part.asString();

          if (partsString === null) {
            partsString = partString; ///
          } else {
            partsString = `${partsString} ${partString}`;
          }

          return partsString;
        }, null),
        string = partsString; ///

    return string;
  }
}

module.exports = Definition;

function parseParts(parts, nodes, configuration, noWhitespace) {
  let parsed = false;

  const partsLength = parts.length;

  if (partsLength === 0) {
    parsed = true;

    return parsed;
  }

  const firstPart = first(parts),
        allButFirstParts = allButFirst(parts),
        savedIndex = configuration.getSavedIndex();

  parts = allButFirstParts; ///

  const part = firstPart, ///
        partRuleNamePart = isPartRuleNamePart(part);

  if (partRuleNamePart) {
    const ruleNamePart = part,  ///
          lookAhead = ruleNamePart.isLookAhead();

    if (lookAhead) {
      const rule = ruleNamePart.findRule(configuration);

      ruleNamePart.parseRuleWithLookAhead(rule, configuration, noWhitespace, function(node) {
        const partNodeOrNodes = [];

        if (node !== null) {
          noWhitespace = false; ///

          parsed = parseParts(parts, partNodeOrNodes, configuration, noWhitespace);
        }

        if (parsed) {
          concat(nodes, node);

          concat(nodes, partNodeOrNodes);
        }

        if (!parsed) {
          configuration.backtrack(savedIndex);
        }

        return parsed;
      });

      return parsed;
    }
  }

  const partNodeOrNodes = part.parse(configuration, noWhitespace);

  if (partNodeOrNodes !== null) {
    concat(nodes, partNodeOrNodes);

    noWhitespace = false; ///

    parsed = parseParts(parts, nodes, configuration, noWhitespace);

    if (!parsed) {
      configuration.backtrack(savedIndex);
    }
  }

  return parsed;
}
