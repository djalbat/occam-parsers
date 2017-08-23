'use strict';

const QualificationRule = require('../rule/qualification'),
      RuleNamePart = require('../../../bnf/part/nonTerminal/ruleName');

class QualificationRuleNamePart extends RuleNamePart {
  constructor() {
    const ruleName = QualificationRule.ruleName;
    
    super(ruleName);
  }
}

module.exports = QualificationRuleNamePart;
