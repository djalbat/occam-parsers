'use strict';

const lexers = require('occam-lexers');

const Rule = require('../rule'),
      EndOfLineNode = require('../node/epsilon'),
      TerminalSymbolDefinition = require('../definition/terminalSymbol');

const { BNFLexer } = lexers,
      { specialSymbols } = BNFLexer,
      { epsilon } = specialSymbols;

class EpsilonRule extends Rule {
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

module.exports = EpsilonRule;
