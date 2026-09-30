"use strict";

import { arrayUtilities } from "necessary";

import NonTerminalNode from "../../node/nonTerminal";

const { second } = arrayUtilities;

export default class OpacityModifierBNFNode extends NonTerminalNode {
  getOpacity() {
    const childNodes = this.getChildNodes(),
          secondChildNode = second(childNodes),
          terminalNode = secondChildNode, ///
          terminalNodeContent = terminalNode.getContent(),
          opacity = terminalNodeContent;  ///

    return opacity;
  }

  static fromRuleNameChildNodesPrecedenceCommittedAndOpacity(ruleName, childNodes, precedence, committed, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceCommittedAndOpacity(OpacityModifierBNFNode, ruleName, childNodes, precedence, committed, opacity); }
}
