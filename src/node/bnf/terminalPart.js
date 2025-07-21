"use strict";

import { arrayUtilities } from "necessary";

import NonTerminalNode from "../../node/nonTerminal";

const { first } = arrayUtilities;

export default class TerminalPartBNFNode extends NonTerminalNode {
  generatePart(callAhead) {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          node = firstChildNode,  ///
          part = node.generatePart(callAhead);

    return part;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(TerminalPartBNFNode, ruleName, childNodes, opacity, precedence); }
}
