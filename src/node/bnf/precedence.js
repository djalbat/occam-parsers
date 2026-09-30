"use strict";

import { arrayUtilities } from "necessary";

import NonTerminalNode from "../../node/nonTerminal";

const { second } = arrayUtilities;

export default class PrecedenceBNFNode extends NonTerminalNode {
  getPrecedence() {
    let precedence = Infinity;

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

  static fromRuleNameChildNodesPrecedenceCommittedAndOpacity(ruleName, childNodes, precedence, committed, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceCommittedAndOpacity(PrecedenceBNFNode, ruleName, childNodes, precedence, committed, opacity); }
}
