"use strict";

import Rule from "../../rule";
import RuleNameDefinition from "../../definition/ruleName";

import { QUANTIFIER_RULE_NAME, OPTIONAL_QUANTIFIER_RULE_NAME, ONE_OR_MORE_QUANTIFIER_RULE_NAME, ZERO_OR_MORE_QUANTIFIER_RULE_NAME } from "../../ruleNames";

export default class QuantifierBNFRule extends Rule {
  static fromNothing() {
    let ruleName;
    const name = QUANTIFIER_RULE_NAME;  ///

    ruleName = OPTIONAL_QUANTIFIER_RULE_NAME

    const optionalQuantifierRuleNameDefinition = RuleNameDefinition.fromRuleName(ruleName);

    ruleName = ONE_OR_MORE_QUANTIFIER_RULE_NAME;

    const oneOrMoreQuantifierRuleNameDefinition = RuleNameDefinition.fromRuleName(ruleName);

    ruleName = ZERO_OR_MORE_QUANTIFIER_RULE_NAME;

    const zeroOrMoreQuantifierRuleNameDefinition = RuleNameDefinition.fromRuleName(ruleName),
          opacity = null,
          definitions = [
            optionalQuantifierRuleNameDefinition,
            oneOrMoreQuantifierRuleNameDefinition,
            zeroOrMoreQuantifierRuleNameDefinition
          ],
          quantifierRule = new QuantifierBNFRule(name, opacity, definitions);

    return quantifierRule;
  }
}
