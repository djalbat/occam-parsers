"use strict";

import NonTerminalNode from "../../../node/nonTerminal";

import { first } from "../../../utilities/array";

export default class TerminalPartBNFNode extends NonTerminalNode {
  generatePart(lookAhead) {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          node = firstChildNode,  ///
          part = node.generatePart(lookAhead);

    return part;
  }

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(TerminalPartBNFNode, ruleName, childNodes); }
}
