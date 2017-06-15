'use strict';

const NonTerminalNode = require('../../common/node/nonTerminal');

class RegularExpressionNode extends NonTerminalNode {
  generatePart(Parts, noWhitespace) {
    const regExp = this.getRegExp(),
          RegularExpressionPart = Parts['RegularExpressionPart'],
          regularExpressionPart = new RegularExpressionPart(regExp, noWhitespace);

    return regularExpressionPart;
  }

  getRegExp() {
    let regExp = /^\/([^/]+)\/$/; ///

    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          terminalNode = firstChildNode,  ///
          terminalNodeContent = terminalNode.getContent(),
          matches = terminalNodeContent.match(regExp),
          secondMatch = second(matches),
          pattern = secondMatch; ///

    regExp = new RegExp(pattern);

    return regExp;
  }

  static fromNodesAndProductionName(nodes, productionName) { return NonTerminalNode.fromNodesAndProductionName(nodes, productionName, RegularExpressionNode); }
}

module.exports = RegularExpressionNode;

function first(array) { return array[0]; }
function second(array) { return array[1]; }
