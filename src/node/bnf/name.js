"use strict";

import { arrayUtilities } from "necessary";

import NonTerminalNode from "../../node/nonTerminal";

const { first } = arrayUtilities;

export default class NameBNFNode extends NonTerminalNode {
  getName() {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          terminalNode = firstChildNode,  ///
          terminalNodeContent = terminalNode.getContent(),
          name = terminalNodeContent; ///
    
    return name;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNode, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(NameBNFNode, ruleName, childNode, opacity, precedence); }
}
