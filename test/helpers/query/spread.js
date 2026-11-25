"use strict";

const { characters } = require("necessary");

const { clear, trim, second, third, fourth } = require("./utilities/array"),
      { indexFromSpreadNode,
         uniqueFromSpreadNode,
         endIndexFromSpreadNode,
         startIndexFromSpreadNode } = require("./utilities/node");

const { EXCLAMATION_MARK_CHARACTER } = characters;

class Spread {
  constructor(startIndex, endIndex, unique) {
    this.startIndex = startIndex;
    this.endIndex = endIndex;
    this.unique = unique;
  }

  adjustNodes(nodes) {
    if (this.unique) {
      const nodesLength = nodes.length;

      if (nodesLength > 1) {
        clear(nodes);
      }
    } else {
      trim(nodes, this.startIndex, this.endIndex);
    }
  }

  static fromNothing() {
    const startIndex = 0,
          endIndex = Infinity,
          unique = false,
          spread = new Spread(startIndex, endIndex, unique);

    return spread;
  }

  static fromSpreadNode(spreadNode) {
    let startIndex = 0,
        endIndex = Infinity,
        unique = false;

    if (spreadNode !== null) {
      const index = indexFromSpreadNode(spreadNode);

      if (index !== null) {
        startIndex = index; ///

        endIndex = index; ///
      } else {
        startIndex = startIndexFromSpreadNode(spreadNode);

        endIndex = endIndexFromSpreadNode(spreadNode);
      }

      unique = uniqueFromSpreadNode(spreadNode);
    }

    const spread = new Spread(startIndex, endIndex, unique);

    return spread;
  }

  static fromSpreadExpression(spreadExpression) {
    let startIndex = 0,
        endIndex = Infinity,
        unique = false;

    if (spreadExpression !== null) {
      if (spreadExpression === EXCLAMATION_MARK_CHARACTER) {
        unique = true;
      } else {
        const regExp = /\[(-?\d+)?(\.\.\.)?(-?\d+)?]/,
              matches = spreadExpression.match(regExp),
              secondMatch = second(matches) || null,
              thirdMatch = third(matches) || null,
              fourthMatch = fourth(matches) || null;

        if (secondMatch !== null) {
          startIndex = parseInt(secondMatch);

          if (thirdMatch === null) {
            endIndex = startIndex;  ///
          }
        }

        if (fourthMatch !== null) {
          endIndex = parseInt(fourthMatch);

          if (thirdMatch === null) {
            startIndex = endIndex;  ///
          }
        }
      }
    }

    const spread = new Spread(startIndex, endIndex, unique);

    return spread;
  }
}

module.exports = Spread;
