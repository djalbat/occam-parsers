'use strict';

const necessary = require('necessary');

const SignificantTokenTypePart = require('../part/significantTokenType'),
      NonTerminalNode = require('../../common/node/nonTerminal');

const { array } = necessary;

class SignificantTokenTypeNode extends NonTerminalNode {
  generatePart(noWhitespace) {
    const significantTokenType = this.getSignificantTokenType(),
          significantTokenTypePart = new SignificantTokenTypePart(significantTokenType, noWhitespace);

    return significantTokenTypePart;
  }

  getSignificantTokenType() {
    const childNodes = this.getChildNodes(),
          firstChildNode = array.first(childNodes),
          terminalNode = firstChildNode,  ///
          terminalNodeContent = terminalNode.getContent(),
          matches = terminalNodeContent.match(SignificantTokenTypeNode.regularExpression),
          secondMatch = array.second(matches),
          significantTokenType = secondMatch; ///

    return significantTokenType;
  }

  static fromNodesAndRuleName(nodes, ruleName) { return NonTerminalNode.fromNodesAndRuleName(SignificantTokenTypeNode, nodes, ruleName); }
}

module.exports = SignificantTokenTypeNode;

SignificantTokenTypeNode.regularExpression = /^\[([^\]]+)\]$/;
