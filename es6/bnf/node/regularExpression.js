'use strict';

const arrayUtil = require('../../util/array'),
      RegularExpressionPart = require('../part/regularExpression'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class RegularExpressionNode extends NonTerminalNode {
  generatePart(noWhitespace) {
    const regularExpression = this.getRegularExpression(),
          regularExpressionPart = new RegularExpressionPart(regularExpression, noWhitespace);

    return regularExpressionPart;
  }

  getRegularExpression() {
    const childNodes = this.getChildNodes(),
          firstChildNode = arrayUtil.first(childNodes),
          terminalNode = firstChildNode,  ///
          terminalNodeContent = terminalNode.getContent(),
          matches = terminalNodeContent.match(RegularExpressionNode.regularExpression),
          secondMatch = arrayUtil.second(matches),
          pattern = secondMatch, ///
          regularExpression = new RegExp(pattern);  ///

    return regularExpression;
  }

  static fromNodesAndRuleName(nodes, ruleName) { return NonTerminalNode.fromNodesAndRuleName(nodes, ruleName, RegularExpressionNode); }
}

module.exports = RegularExpressionNode;

RegularExpressionNode.regularExpression = /^\/((?:\\.|[^\/])*)\/$/;
