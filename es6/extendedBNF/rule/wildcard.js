'use strict';

const lexers = require('occam-lexers');

const Rule = require('../rule'),
      WildcardNode = require('../node/wildcard'),
      TerminalSymbolDefinition = require('../definition/terminalSymbol');

const { ExtendedBNFLexer } = lexers,
      { specialSymbols } = ExtendedBNFLexer,
      { wildcard } = specialSymbols;

class WildcardRule extends Rule {
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

module.exports = WildcardRule;
