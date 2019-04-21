'use strict';

const lexers = require('occam-lexers');

const Rule = require('../rule'),
      ruleNames = require('../ruleNames'),
      EndOfLineNode = require('../node/epsilon'),
      TerminalSymbolDefinition = require('../definition/terminalSymbol');

const { specialSymbols } = lexers,
      { epsilon } = specialSymbols,
      { EpsilonRuleName } = ruleNames;

class EpsilonRule extends Rule {
  constructor() {
    const epsilonTerminalSymbolContent = epsilon,
          epsilonTerminalSymbolDefinition = new TerminalSymbolDefinition(epsilonTerminalSymbolContent),
          name = EpsilonRuleName,
          definitions = [
            epsilonTerminalSymbolDefinition
          ],
          Node = EndOfLineNode;

    super(name, definitions, Node)
  }
}

module.exports = EpsilonRule;
