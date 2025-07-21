"use strict";

import { arrayUtilities } from "necessary";

import NonTerminalNode from "../../node/nonTerminal";
import SignificantTokenTypePart from "../../part/terminal/significantTokenType";

const { first, second } = arrayUtilities;

export default class SignificantTokenTypeBNFNode extends NonTerminalNode {
  regularExpression = /^\[([^\]]+)]$/;

  generatePart(callAhead) {
    const significantTokenType = this.getSignificantTokenType(),
          significantTokenTypePart = SignificantTokenTypePart.fromSignificantTokenType(significantTokenType);

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

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(SignificantTokenTypeBNFNode, ruleName, childNodes, opacity, precedence); }
}

module.exports = SignificantTokenTypeBNFNode;


