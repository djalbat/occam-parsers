'use strict';

const lexers = require('occam-lexers');

const Rule = require('../rule'),
      EndOfLineNode = require('../node/endOfLine'),
      TerminalSymbolDefinition = require('../definition/terminalSymbol');

const { ExtendedBNFLexer } = lexers,
      { specialSymbols } = ExtendedBNFLexer,
      { END_OF_LINE } = specialSymbols;

class EndOfLineRule extends Rule {
  constructor() {
    const endOfLineTerminalSymbolContent = END_OF_LINE,
          endOfLineTerminalSymbolDefinition = new TerminalSymbolDefinition(endOfLineTerminalSymbolContent),
          name = 'endOfLine',
          definitions = [
            endOfLineTerminalSymbolDefinition
          ],
          Node = EndOfLineNode;

    super(name, definitions, Node)
  }
}

module.exports = EndOfLineRule;
