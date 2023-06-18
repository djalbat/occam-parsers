"use strict";

import NonTerminalNode from "../../../node/nonTerminal";

import { first } from "../../../utilities/array";

export default class TerminalPartBNFNode extends NonTerminalNode {
  generatePart(lookAhead) {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          node = firstChildNode,  ///
          part = node.generatePart(lookAhead);

    return part;
  }

  static fromRuleNamePrecedenceAndChildNodes(ruleName, precedence, childNodes) { return NonTerminalNode.fromRuleNamePrecedenceAndChildNodes(TerminalPartBNFNode, ruleName, precedence, childNodes); }
}
