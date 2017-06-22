'use strict';

const Production = require('../production'),
      EndOfLineNode = require('../node/epsilon'),
      TerminalSymbolDefinition = require('../definition/terminalSymbol');

class EpsilonProduction extends Production {
  constructor() {
    const epsilonTerminalSymbolContent = 'ε',
          epsilonTerminalSymbolDefinition = new TerminalSymbolDefinition(epsilonTerminalSymbolContent),
          name = 'epsilon',
          definitions = [
            epsilonTerminalSymbolDefinition
          ],
          Node = EndOfLineNode;

    super(name, definitions, Node)
  }
}

module.exports = EpsilonProduction;
