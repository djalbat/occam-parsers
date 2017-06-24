'use strict';

const Definition = require('../../extendedBNF/definition'),
      RuleNamePart = require('../../extendedBNF/part/ruleName');

class UnitDefinition extends Definition {
  getRuleName() {
    const firstPart = this.getFirstPart(),
          ruleNamePart = firstPart, ///
          ruleName = ruleNamePart.getRuleName();
    
    return ruleName;
  }

  isIncludedInRuleNames(ruleNames) {
    const ruleName = this.getRuleName(),
          includedInRuleNames = ruleNames.includes(ruleName);

    return includedInRuleNames;
  }

  static fromRuleName(ruleName) {
    const noWhitespace = false, ///
          ruleNamePart = new RuleNamePart(ruleName, noWhitespace),
          parts = [
            ruleNamePart
          ],
          unitDefinition = new UnitDefinition(parts);

    return unitDefinition;
  }

  static fromDefinition(definition) {
    let unitDefinition = null;

    const partsLength = definition.getPartsLength();

    if (partsLength === 1) {
      const firstPartRuleNamePart = definition.isFirstPartRuleNamePart();
      
      if (firstPartRuleNamePart) {
        const parts = definition.getParts();

        unitDefinition = new UnitDefinition(parts);
      }
    }

    return unitDefinition;
  }
}

module.exports = UnitDefinition;
