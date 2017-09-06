'use strict';

const arrayUtilities = require('../../utilities/array'),
      NonTerminalNode = require('../../common/node/nonTerminal'),
      RegularExpressionPart = require('../part/terminal/regularExpression');

const { first, second } = arrayUtilities;

class RegularExpressionNode extends NonTerminalNode {
  generatePart(noWhitespace) {
    const regularExpression = this.getRegularExpression(),
          regularExpressionPart = new RegularExpressionPart(regularExpression, noWhitespace);

    return regularExpressionPart;
  }

  getRegularExpression() {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          terminalNode = firstChildNode,  ///
          terminalNodeContent = terminalNode.getContent(),
          matches = terminalNodeContent.match(RegularExpressionNode.regularExpression),
          secondMatch = second(matches),
          pattern = secondMatch, ///
          regularExpression = new RegExp(pattern);  ///

    return regularExpression;
  }

  static fromNodesAndRuleName(nodes, ruleName) { return NonTerminalNode.fromNodesAndRuleName(RegularExpressionNode, nodes, ruleName); }
}

module.exports = RegularExpressionNode;

RegularExpressionNode.regularExpression = /^\/((?:\\.|[^\/])*)\/$/;
