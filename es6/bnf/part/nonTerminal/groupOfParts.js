'use strict';

const NonTerminalPart = require('../../part/nonTerminal'),
      arrayUtilities = require('../../../utilities/array');

const { allButFirstAndLast } = arrayUtilities;

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
          parsed = this.parts.every(function(part) {
            const partNodeOrNodes = part.parse(configuration, noWhitespace);

            if (partNodeOrNodes !== null) {
              nodes = nodes.concat(partNodeOrNodes);

              return true;
            }
          });

    if (!parsed) {
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
    const allButFirstAndLastNodes = allButFirstAndLast(nodes);

    nodes = allButFirstAndLastNodes;  ///

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
  type
});

module.exports = GroupOfPartsPart;
