"use strict";

import { arrayUtilities } from "necessary";

import NonTerminalNode from "../../node/nonTerminal";
import SignificantTokenTypePart from "../../part/terminal/significantTokenType";

const { first, second } = arrayUtilities;

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

  static fromRuleNamePrecedenceAndChildNodes(ruleName, precedence, childNodes) { return NonTerminalNode.fromRuleNamePrecedenceAndChildNodes(SignificantTokenTypeBNFNode, ruleName, precedence, childNodes); }
}

module.exports = SignificantTokenTypeBNFNode;


