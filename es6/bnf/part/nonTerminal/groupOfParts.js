'use strict';

const NonTerminalPart = require('../../part/nonTerminal'),
      arrayUtilities = require('../../../utilities/array');

const { discardLastThenFirst } = arrayUtilities;

const type = 'GroupOfParts';

class GroupOfPartsPart extends NonTerminalPart {
  constructor(parts) {
    super(type);

    this.parts = parts;
  }

  getParts() {
    return this.parts;
  }

  parse(configuration, noWhitespace) {
    noWhitespace = false; ///
    
    let nodes = [];

    const savedIndex = configuration.getSavedIndex(),
          everyPartParsed = this.parts.every(function(part) {
            const partNodeOrNodes = part.parse(configuration, noWhitespace),
                  partParsed = (partNodeOrNodes !== null);

            if (partParsed) {
              nodes = nodes.concat(partNodeOrNodes);
            }

            return partParsed;
          });

    if (!everyPartParsed) {
      configuration.backtrack(savedIndex);

      nodes = null;
    }

    return nodes;
  }

  asString() {
    const partsString = this.parts.reduce(function(partsString, part) {
            const partString = part.asString();

            if (partsString === null) {
              partsString = partString;
            } else {
              partsString = `${partsString} ${partString}`;
            }

            return partsString;
          }, null),
          string = `( ${partsString} )`;

    return string;
  }

  static fromNodes(nodes) {
    nodes = discardLastThenFirst(nodes);

    const noWhitespace = false,
          parts = nodes.map(function(node) {
            const part = node.generatePart(noWhitespace);

            return part;
          }),
          groupOfPartsPart = new GroupOfPartsPart(parts);

    return groupOfPartsPart;
  }
}

Object.assign(GroupOfPartsPart, {
  type: type
});

module.exports = GroupOfPartsPart;
