'use strict';

const arrayUtil = require('../../util/array'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class SignificantTokenTypeNode extends NonTerminalNode {
  generatePart(Parts, noWhitespace) {
    const significantTokenType = this.getSignificantTokenType(),
          SignificantTokenTypePart = Parts['SignificantTokenTypePart'],
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
