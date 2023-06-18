"use strict";

import NonTerminalNode from "../../node/nonTerminal";
import SequenceOfPartsPart from "../../part/nonTerminal/sequenceOfParts";

export default class SequenceOfPartsBNFNode extends NonTerminalNode {
  generatePart(lookAhead) {
    const childNodes = this.getChildNodes(),
          bnfNodes = childNodes.slice(),
          part = SequenceOfPartsPart.fromBNFNodes(bnfNodes);

    return part;
  }

  static fromRuleNamePrecedenceAndChildNodes(ruleName, precedence, childNodes) { return NonTerminalNode.fromRuleNamePrecedenceAndChildNodes(SequenceOfPartsBNFNode, ruleName, precedence, childNodes); }
}
