'use strict';

const NonTerminalNode = require('../../common/node/nonTerminal');

class EndOfLineNode extends NonTerminalNode {
  generatePart(Parts, noWhitespace) {
    const EndOfLinePart = Parts['EndOfLinePart'],
          endOfLinePart = new EndOfLinePart(noWhitespace);

    return endOfLinePart;
  }

  static fromNodesAndProductionName(nodes, productionName) { return NonTerminalNode.fromNodesAndProductionName(nodes, productionName, EndOfLineNode); }
}

module.exports = EndOfLineNode;
