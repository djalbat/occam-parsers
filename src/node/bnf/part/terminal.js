"use strict";

import { arrayUtilities } from "necessary";

import NonTerminalNode from "../../../node/nonTerminal";

const { first } = arrayUtilities;

export default class TerminalPartBNFNode extends NonTerminalNode {
  generatePart(lookAhead) {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          node = firstChildNode,  ///
          part = node.generatePart(lookAhead);

    return part;
  }

  static fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence) { return NonTerminalNode.fromRuleNameChildNodesAndPrecedence(TerminalPartBNFNode, ruleName, childNodes, precedence); }
}
