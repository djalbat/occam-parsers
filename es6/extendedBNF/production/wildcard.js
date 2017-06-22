'use strict';

const lexers = require('occam-lexers');

const Production = require('../production'),
      WildcardNode = require('../node/wildcard'),
      TerminalSymbolDefinition = require('../definition/terminalSymbol');

const { ExtendedBNFLexer } = lexers,
      { specialSymbols } = ExtendedBNFLexer,
      { wildcard } = specialSymbols;

class WildcardProduction extends Production {
  constructor() {
    const wildcardTerminalSymbolContent = wildcard,
          wildcardTerminalSymbolDefinition = new TerminalSymbolDefinition(wildcardTerminalSymbolContent),
          name = 'wildcard',
          definitions = [
            wildcardTerminalSymbolDefinition
          ],
          Node = WildcardNode;

    super(name, definitions, Node)
  }
}

module.exports = WildcardProduction;
