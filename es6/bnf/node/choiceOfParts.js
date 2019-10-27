'use strict';

const NonTerminalNode = require('../../common/node/nonTerminal'),
      ChoiceOfPartsPart = require('../part/nonTerminal/choiceOfParts');

class ChoiceOfPartsNode extends NonTerminalNode {
  generatePart(nonWhitespace, lookAhead) {
    const childNodes = this.getChildNodes(),
          nodes = childNodes.slice(),
          part = ChoiceOfPartsPart.fromNodes(nodes);

    return part;
  }

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(ChoiceOfPartsNode, ruleName, childNodes); }
}

module.exports = ChoiceOfPartsNode;
