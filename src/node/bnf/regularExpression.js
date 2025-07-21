"use strict";

import { arrayUtilities } from "necessary";

import NonTerminalNode from "../../node/nonTerminal";
import RegularExpressionPart from "../../part/terminal/regularExpression";

const { first, second } = arrayUtilities;

export default class RegularExpressionBNFNode extends NonTerminalNode {
  regularExpression = /^\/((?:\\.|[^\/])*)\/$/;

  generatePart(callAhead) {
    const regularExpression = this.getRegularExpression(),
          regularExpressionPart = RegularExpressionPart.fromRegularExpression(regularExpression);

    return regularExpressionPart;
  }

  getRegularExpression() {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          terminalNode = firstChildNode,  ///
          terminalNodeContent = terminalNode.getContent(),
          matches = terminalNodeContent.match(this.regularExpression),
          secondMatch = second(matches),
          pattern = secondMatch, ///
          regularExpression = new RegExp(pattern);  ///

    return regularExpression;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(RegularExpressionBNFNode, ruleName, childNodes, opacity, precedence); }
}

