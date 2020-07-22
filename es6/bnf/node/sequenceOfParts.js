"use strict";

import NonTerminalNode from "../../common/node/nonTerminal";
import SequenceOfPartsPart from "../part/nonTerminal/sequenceOfParts";

export default class SequenceOfPartsNode extends NonTerminalNode {
  generatePart(lookAhead) {
    const childNodes = this.getChildNodes(),
          nodes = childNodes.slice(),
          part = SequenceOfPartsPart.fromNodes(nodes);

    return part;
  }

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(SequenceOfPartsNode, ruleName, childNodes); }
}
