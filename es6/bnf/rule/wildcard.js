'use strict';

const lexers = require('occam-lexers');

const Rule = require('../rule'),
      ruleNames = require('../ruleNames'),
      WildcardNode = require('../node/wildcard'),
      TerminalSymbolDefinition = require('../definition/terminalSymbol');

const { BNFLexer } = lexers,
      { specialSymbols } = BNFLexer,
      { wildcard } = specialSymbols,
      { WildcardRuleName } = ruleNames;

class WildcardRule extends Rule {
  constructor() {
    const wildcardTerminalSymbolContent = wildcard,
          wildcardTerminalSymbolDefinition = new TerminalSymbolDefinition(wildcardTerminalSymbolContent),
          name = WildcardRuleName,
          definitions = [
            wildcardTerminalSymbolDefinition
          ],
          Node = WildcardNode;

    super(name, definitions, Node)
  }
}

module.exports = WildcardRule;
