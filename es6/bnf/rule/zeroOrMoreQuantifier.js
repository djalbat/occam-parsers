'use strict';

const lexers = require('occam-lexers');

const Rule = require('../rule'),
      ruleNames = require('../ruleNames'),
      DefinitionNode = require('../node/definition'),
      QuantifierRuleDefinition = require('../definition/quantifierRule');

const { specialSymbols } = lexers,
      { ZeroOrMoreQuantifierRuleName } = ruleNames,
      { asterisk } = specialSymbols;

class ZeroOrMoreQuantifierRule extends Rule {
  constructor() {
    const name = ZeroOrMoreQuantifierRuleName,
          zeroOrMoreQuantifierTerminalSymbolContent = asterisk, ///
          zeroOrMoreQuantifierRuleDefinition = new QuantifierRuleDefinition(zeroOrMoreQuantifierTerminalSymbolContent),
          definitions = [
            zeroOrMoreQuantifierRuleDefinition
          ],
          Node = DefinitionNode;
    
    super(name, definitions, Node)
  }
}

module.exports = ZeroOrMoreQuantifierRule;
