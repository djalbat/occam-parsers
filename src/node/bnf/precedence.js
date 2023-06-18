"use strict";

import { arrayUtilities } from "necessary";

import NonTerminalNode from "../../node/nonTerminal";

const { third } = arrayUtilities;

export default class PrecedenceBNFNode extends NonTerminalNode {
  getPrecedence() {
    const childNodes = this.getChildNodes(),
          thirdChildNode = third(childNodes),
          terminalNode = thirdChildNode,  ///
          content = terminalNode.getContent(),
          precedence = Number(content); ///

    return precedence;
  }

  static fromRuleNamePrecedenceAndChildNodes(ruleName, precedence, childNodes) { return NonTerminalNode.fromRuleNamePrecedenceAndChildNodes(PrecedenceBNFNode, ruleName, precedence, childNodes); }
}
