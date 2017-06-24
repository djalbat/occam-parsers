'use strict';

const arrayUtil = require('../../util/array'),
      SignificantTokenTypePart = require('../part/significantTokenType'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class SignificantTokenTypeNode extends NonTerminalNode {
  generatePart(noWhitespace) {
    const significantTokenType = this.getSignificantTokenType(),
          significantTokenTypePart = new SignificantTokenTypePart(significantTokenType, noWhitespace);

    return significantTokenTypePart;
  }

  getSignificantTokenType() {
    const regExp = /^\[([^\]]+)\]$/,
          childNodes = this.getChildNodes(),
          firstChildNode = arrayUtil.first(childNodes),
          terminalNode = firstChildNode,  ///
          terminalNodeContent = terminalNode.getContent(),
          matches = terminalNodeContent.match(regExp),
          secondMatch = arrayUtil.second(matches),
          significantTokenType = secondMatch; ///

    return significantTokenType;
  }

  static fromNodesAndProductionName(nodes, productionName) { return NonTerminalNode.fromNodesAndProductionName(nodes, productionName, SignificantTokenTypeNode); }
}

module.exports = SignificantTokenTypeNode;
