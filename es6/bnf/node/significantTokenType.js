'use strict';

const necessary = require('necessary');

const SignificantTokenTypePart = require('../part/significantTokenType'),
      NonTerminalNode = require('../../common/node/nonTerminal');

const { array } = necessary,
      { first, second } = array;

class SignificantTokenTypeNode extends NonTerminalNode {
  generatePart(noWhitespace) {
    const significantTokenType = this.getSignificantTokenType(),
          significantTokenTypePart = new SignificantTokenTypePart(significantTokenType, noWhitespace);

    return significantTokenTypePart;
  }

  getSignificantTokenType() {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          terminalNode = firstChildNode,  ///
          terminalNodeContent = terminalNode.getContent(),
          matches = terminalNodeContent.match(SignificantTokenTypeNode.regularExpression),
          secondMatch = second(matches),
          significantTokenType = secondMatch; ///

    return significantTokenType;
  }

  static fromNodesAndRuleName(nodes, ruleName) { return NonTerminalNode.fromNodesAndRuleName(SignificantTokenTypeNode, nodes, ruleName); }
}

module.exports = SignificantTokenTypeNode;

SignificantTokenTypeNode.regularExpression = /^\[([^\]]+)\]$/;
