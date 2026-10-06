"use strict";

import { arrayUtilities } from "necessary";

import NonTerminalNode from "../../node/nonTerminal";

import { TRANSPARENT_PRECEDENCE } from "../../constants";

const { second } = arrayUtilities;

export default class PrecedenceBNFNode extends NonTerminalNode {
  getPrecedence() {
    let precedence = TRANSPARENT_PRECEDENCE;

    const multiplicity = this.getMultiplicity();

    if (multiplicity === 3) {
      const childNodes = this.getChildNodes(),
            secondChildNode = second(childNodes),
            terminalNode = secondChildNode,  ///
            content = terminalNode.getContent();

      precedence = Number(content); ///
    }

    return precedence;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(PrecedenceBNFNode, ruleName, childNodes, precedence, opacity); }
}
