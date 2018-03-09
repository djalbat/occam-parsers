'use strict';

const lexers = require('occam-lexers');

const Rule = require('../rule'),
      ruleNames = require('../ruleNames'),
      EpsilonDefinition = require('../definition/epsilon'),
      RightRecursivePartNode = require('../node/rightRecursivePart'),
      RightRecursivePartRuleDefinition = require('../definition/rightRecursivePartRule');

const { BNFLexer } = lexers,
      { specialSymbols } = BNFLexer,
      { RightRecursivePartRuleName } = ruleNames,
      { plus, asterisk, questionMark } = specialSymbols;

class RightRecursivePartRule extends Rule {
  constructor() {
    const plusTerminalSymbolContent = plus,
          asteriskTerminalSymbolContent = asterisk,
          questionMarkTerminalSymbolContent = questionMark,
          optionalRightRecursivePartRuleDefinition = new RightRecursivePartRuleDefinition(questionMarkTerminalSymbolContent), ///
          zeroOrMoreRightRecursivePartRuleDefinition = new RightRecursivePartRuleDefinition(asteriskTerminalSymbolContent), ///
          oneOrMoreRightRecursivePartRuleDefinition = new RightRecursivePartRuleDefinition(plusTerminalSymbolContent), ///
          epsilonDefinition = new EpsilonDefinition(),
          name = RightRecursivePartRuleName,
          definitions = [
            optionalRightRecursivePartRuleDefinition,
            zeroOrMoreRightRecursivePartRuleDefinition,
            oneOrMoreRightRecursivePartRuleDefinition,
            epsilonDefinition
          ],
          Node = RightRecursivePartNode;
    
    super(name, definitions, Node)
  }
}

module.exports = RightRecursivePartRule;
