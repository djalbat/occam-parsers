"use strict";

import Rule from "../rule";
import PartNode from "../node/part";
import RuleNameDefinition from "../definition/ruleName";

import { QuantifierRuleName, OptionalQuantifierRuleName, OneOrMoreQuantifierRuleName, ZeroOrMoreQuantifierRuleName } from "../ruleNames";

export default class QuantifierRule extends Rule {
  constructor() {
    const name = QuantifierRuleName,
          optionalQuantifierRuleName = OptionalQuantifierRuleName,
          oneOrMoreQuantifierRuleName = OneOrMoreQuantifierRuleName,
          zeroOrMoreQuantifierRuleName = ZeroOrMoreQuantifierRuleName,
          optionalQuantifierRuleNameDefinition = new RuleNameDefinition(optionalQuantifierRuleName),
          oneOrMoreQuantifierRuleNameDefinition = new RuleNameDefinition(oneOrMoreQuantifierRuleName),
          zeroOrMoreQuantifierRuleNameDefinition = new RuleNameDefinition(zeroOrMoreQuantifierRuleName),
          definitions = [
            optionalQuantifierRuleNameDefinition,
            oneOrMoreQuantifierRuleNameDefinition,
            zeroOrMoreQuantifierRuleNameDefinition
          ],
          Node = PartNode;
    
    super(name, definitions, Node)
  }
}
