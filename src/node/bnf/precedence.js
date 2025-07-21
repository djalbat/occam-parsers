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

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(PrecedenceBNFNode, ruleName, childNodes, opacity, precedence); }
}
