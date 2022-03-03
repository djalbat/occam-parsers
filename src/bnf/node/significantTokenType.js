"use strict";

import NonTerminalNode from "../../node/nonTerminal";
import SignificantTokenTypePart from "../../part/terminal/significantTokenType";

import { first, second } from "../../utilities/array";

export default class SignificantTokenTypeBNFNode extends NonTerminalNode {
  regularExpression = /^\[([^\]]+)]$/;

  generatePart(lookAhead) {
    const significantTokenType = this.getSignificantTokenType(),
          significantTokenTypePart = new SignificantTokenTypePart(significantTokenType);

    return significantTokenTypePart;
  }

  getSignificantTokenType() {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          terminalNode = firstChildNode,  ///
          terminalNodeContent = terminalNode.getContent(),
          matches = terminalNodeContent.match(this.regularExpression),
          secondMatch = second(matches),
          significantTokenType = secondMatch; ///

    return significantTokenType;
  }

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(SignificantTokenTypeBNFNode, ruleName, childNodes); }
}

module.exports = SignificantTokenTypeBNFNode;


