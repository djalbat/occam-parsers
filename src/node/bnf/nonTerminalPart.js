"use strict";

import { arrayUtilities } from "necessary";

import NonTerminalNode from "../../node/nonTerminal";

const { first } = arrayUtilities;

export default class NonTerminalPartBNFNode extends NonTerminalNode {
  generatePart() {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          node = firstChildNode,  ///
          part = node.generatePart();

    return part;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(NonTerminalPartBNFNode, ruleName, childNodes, precedence, opacity); }
}
