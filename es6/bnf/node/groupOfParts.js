"use strict";

import NonTerminalNode from "../../common/node/nonTerminal";
import GroupOfPartsPart from "../part/nonTerminal/groupOfParts";

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
