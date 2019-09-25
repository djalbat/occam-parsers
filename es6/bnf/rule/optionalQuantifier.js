'use strict';

const lexers = require('occam-lexers');

const Rule = require('../rule'),
      ruleNames = require('../ruleNames'),
      DefinitionNode = require('../node/definition'),
      QuantifierRuleDefinition = require('../definition/quantifierRule');

const { specialSymbols } = lexers,
      { questionMark } = specialSymbols,
      { OptionalQuantifierRuleName } = ruleNames;

class OptionalQuantifierRule extends Rule {
  constructor() {
    const name = OptionalQuantifierRuleName,
          optionalQuantifierTerminalSymbolContent = questionMark, ///
          optionalQuantifierRuleDefinition = new QuantifierRuleDefinition(optionalQuantifierTerminalSymbolContent),
          definitions = [
            optionalQuantifierRuleDefinition
          ],
          Node = DefinitionNode;
    
    super(name, definitions, Node)
  }
}

module.exports = OptionalQuantifierRule;
