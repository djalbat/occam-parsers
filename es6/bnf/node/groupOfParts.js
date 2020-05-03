"use strict";

const NonTerminalNode = require("../../common/node/nonTerminal"),
      GroupOfPartsPart = require("../part/nonTerminal/groupOfParts");

class GroupOfPartsNode extends NonTerminalNode {
  generatePart(lookAhead) {
    const childNodes = this.getChildNodes(),
          nodes = childNodes.slice(),
          part = GroupOfPartsPart.fromNodes(nodes);

    return part;
  }

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(GroupOfPartsNode, ruleName, childNodes); }
}

module.exports = GroupOfPartsNode;
