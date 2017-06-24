'use strict';

const arrayUtil = require('../../util/array'),
      RegularExpressionPart = require('../part/regularExpression'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class RegularExpressionNode extends NonTerminalNode {
  generatePart(noWhitespace) {
    const regExp = this.getRegExp(),
          regularExpressionPart = new RegularExpressionPart(regExp, noWhitespace);

    return regularExpressionPart;
  }

  getRegExp() {
    let regExp = /^\/([^\/]+)\/$/; ///

    const childNodes = this.getChildNodes(),
          firstChildNode = arrayUtil.first(childNodes),
          terminalNode = firstChildNode,  ///
          terminalNodeContent = terminalNode.getContent(),
          matches = terminalNodeContent.match(regExp),
          secondMatch = arrayUtil.second(matches),
          pattern = secondMatch; ///

    regExp = new RegExp(pattern);

    return regExp;
  }

  static fromNodesAndRuleName(nodes, ruleName) { return NonTerminalNode.fromNodesAndRuleName(nodes, ruleName, RegularExpressionNode); }
}

module.exports = RegularExpressionNode;
