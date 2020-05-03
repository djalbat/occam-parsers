"use strict";

const EpsilonPart = require("../part/terminal/epsilon"),
      NonTerminalNode = require("../../common/node/nonTerminal");

class EpsilonNode extends NonTerminalNode {
  generatePart(lookAhead) {
    const epsilonPart = new EpsilonPart();

    return epsilonPart;
  }

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(EpsilonNode, ruleName, childNodes); }
}

module.exports = EpsilonNode;
