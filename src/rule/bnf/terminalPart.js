"use strict";

import Rule from "../../rule";
import RuleNameDefinition from "../../definition/ruleName";

import { EPSILON_RULE_NAME,
         WILDCARD_RULE_NAME,
         BACKTICK_RULE_NAME,
         END_OF_LINE_RULE_NAME,
         TERMINAL_PART_RULE_NAME,
         STRING_LITERAL_RULE_NAME,
         NO_WHITESPACE_PART_RULE_NAME,
         REGULAR_EXPRESSION_RULE_NAME,
         SIGNIFICANT_TOKEN_TYPE_RULE_NAME } from "../../ruleNames";

export default class TerminalPartBNFRule extends Rule {
  static fromNothing() {
    let ruleName;

    const name = TERMINAL_PART_RULE_NAME;

    ruleName = EPSILON_RULE_NAME;

    const epsilonRuleNameDefinition = RuleNameDefinition.fromRuleName(ruleName);

    ruleName = WILDCARD_RULE_NAME;

    const wildcardRuleNameDefinition = RuleNameDefinition.fromRuleName(ruleName);

    ruleName = BACKTICK_RULE_NAME;

    const backtickRuleNameDefinition = RuleNameDefinition.fromRuleName(ruleName);

    ruleName = END_OF_LINE_RULE_NAME;

    const endOfLineRuleNameDefinition = RuleNameDefinition.fromRuleName(ruleName);

    ruleName = STRING_LITERAL_RULE_NAME;

    const stringLiteralRuleNameDefinition = RuleNameDefinition.fromRuleName(ruleName);

    ruleName = NO_WHITESPACE_PART_RULE_NAME;

    const noWhitespacePartRuleNameDefinition = RuleNameDefinition.fromRuleName(ruleName);

    ruleName = REGULAR_EXPRESSION_RULE_NAME;

    const regularExpressionRuleNameDefinition = RuleNameDefinition.fromRuleName(ruleName);

    ruleName = SIGNIFICANT_TOKEN_TYPE_RULE_NAME;

    const significantTokenTypeRuleNameDefinition = RuleNameDefinition.fromRuleName(ruleName),
          opacity = null,
          definitions = [
            significantTokenTypeRuleNameDefinition,
            regularExpressionRuleNameDefinition,
            stringLiteralRuleNameDefinition,
            endOfLineRuleNameDefinition,
            wildcardRuleNameDefinition,
            backtickRuleNameDefinition,
            epsilonRuleNameDefinition,
            noWhitespacePartRuleNameDefinition
          ],
          terminalPartRule = new TerminalPartBNFRule(name, opacity, definitions);

    return terminalPartRule;
  }
}
