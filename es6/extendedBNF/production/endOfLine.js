'use strict';

const lexers = require('occam-lexers');

const Production = require('../production'),
      EndOfLineNode = require('../node/endOfLine'),
      TerminalSymbolDefinition = require('../definition/terminalSymbol');

const { BNFLexer } = lexers,
      { specialSymbols } = BNFLexer,
      { END_OF_LINE } = specialSymbols;

class EndOfLineProduction extends Production {
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

module.exports = EndOfLineProduction;
