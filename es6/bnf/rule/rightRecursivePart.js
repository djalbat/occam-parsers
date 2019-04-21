'use strict';

const lexers = require('occam-lexers');

const Rule = require('../rule'),
      ruleNames = require('../ruleNames'),
      EpsilonDefinition = require('../definition/epsilon'),
      RightRecursivePartNode = require('../node/rightRecursivePart'),
      RightRecursivePartDefinition = require('../definition/rightRecursivePart');

const { BNFLexer } = lexers,
      { specialSymbols } = BNFLexer,
      { RightRecursivePartRuleName } = ruleNames,
      { plus, asterisk, questionMark, exclamationMark } = specialSymbols;

class RightRecursivePartRule extends Rule {
  constructor() {
    const plusTerminalSymbolContent = plus,
          asteriskTerminalSymbolContent = asterisk,
          questionMarkTerminalSymbolContent = questionMark,
          exclamationMarkTerminalSymbolContent = exclamationMark,
          optionalRightRecursivePartDefinition = new RightRecursivePartDefinition(questionMarkTerminalSymbolContent), ///
          zeroOrMoreRightRecursivePartDefinition = new RightRecursivePartDefinition(asteriskTerminalSymbolContent), ///
          oneOrMoreRightRecursivePartDefinition = new RightRecursivePartDefinition(plusTerminalSymbolContent), ///
          lookAheadRightRecursivePartDefinition = new RightRecursivePartDefinition(exclamationMarkTerminalSymbolContent), ///
          epsilonDefinition = new EpsilonDefinition(),
          name = RightRecursivePartRuleName,
          definitions = [
            optionalRightRecursivePartDefinition,
            zeroOrMoreRightRecursivePartDefinition,
            oneOrMoreRightRecursivePartDefinition,
            lookAheadRightRecursivePartDefinition,
            epsilonDefinition
          ],
          Node = RightRecursivePartNode;
    
    super(name, definitions, Node)
  }
}

module.exports = RightRecursivePartRule;
