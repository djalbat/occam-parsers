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
          opacity = null,
          definitions = [
            optionalQuantifierRuleNameDefinition,
            oneOrMoreQuantifierRuleNameDefinition,
            zeroOrMoreQuantifierRuleNameDefinition
          ],
          NonTerminalNode = PartBNFNode,  ///
          quantifierRule = new QuantifierRule(name, opacity, definitions, NonTerminalNode);

    return quantifierRule;
  }
}
