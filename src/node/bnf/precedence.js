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

  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return NonTerminalNode.fromRuleNameChildNodesAndAmbiguous(PrecedenceBNFNode, ruleName, childNodes, ambiguous); }
}
