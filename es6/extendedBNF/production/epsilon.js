'use strict';

const lexers = require('occam-lexers');

const Production = require('../production'),
      EndOfLineNode = require('../node/epsilon'),
      TerminalSymbolDefinition = require('../definition/terminalSymbol');

const { ExtendedBNFLexer } = lexers,
      { specialSymbols } = ExtendedBNFLexer,
      { epsilon } = specialSymbols;

class EpsilonProduction extends Production {
  constructor() {
    const epsilonTerminalSymbolContent = epsilon,
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
