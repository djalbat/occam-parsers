"use strict";

import NonTerminalNode from "../../../common/node/nonTerminal";

import { first } from "../../../utilities/array";

export default class TerminalPartNode extends NonTerminalNode {
  generatePart(lookAhead) {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          node = firstChildNode,  ///
          part = node.generatePart(lookAhead);

    return part;
  }

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(TerminalPartNode, ruleName, childNodes); }
}
