"use strict";

import { arrayUtilities } from "necessary";

import NonTerminalNode from "../../node/nonTerminal";

const { second } = arrayUtilities;

export default class PrecedenceBNFNode extends NonTerminalNode {
  getPrecedence() {
    let precedence = Infinity;

    const childNodes = this.getChildNodes(),
          childNodesLength = childNodes.length;

    if (childNodesLength === 3) {
      const secondChildNode = second(childNodes),
            terminalNode = secondChildNode,  ///
            content = terminalNode.getContent();

      precedence = Number(content); ///
    }

    return precedence;
  }

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(PrecedenceBNFNode, ruleName, childNodes); }

  static fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence) { return NonTerminalNode.fromRuleNameChildNodesAndPrecedence(PrecedenceBNFNode, ruleName, childNodes, precedence); }
}
