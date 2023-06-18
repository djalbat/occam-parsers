"use strict";

import Rule from "../rule";
import PartBNFNode from "../node/bnf/part";
import RuleNameDefinition from "../definition/ruleName";

import { quantifierRuleName, optionalQuantifierRuleName, oneOrMoreQuantifierRuleName, zeroOrMoreQuantifierRuleName } from "../ruleNames";

export default class QuantifierRule extends Rule {
  static fromNothing() {
    const name = quantifierRuleName,  ///
          optionalQuantifierRuleNameDefinition = RuleNameDefinition.fromRuleName(optionalQuantifierRuleName),
          oneOrMoreQuantifierRuleNameDefinition = RuleNameDefinition.fromRuleName(oneOrMoreQuantifierRuleName),
          zeroOrMoreQuantifierRuleNameDefinition = RuleNameDefinition.fromRuleName(zeroOrMoreQuantifierRuleName),
          ambiguous = false,
          definitions = [
            optionalQuantifierRuleNameDefinition,
            oneOrMoreQuantifierRuleNameDefinition,
            zeroOrMoreQuantifierRuleNameDefinition
          ],
          NonTerminalNode = PartBNFNode,  ///
          quantifierRule = new QuantifierRule(name, ambiguous, definitions, NonTerminalNode);

    return quantifierRule;
  }
}
