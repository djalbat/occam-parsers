"use strict";

import Rule from "../rule";
import PartBNFNode from "../node/bnf/part";
import RuleNameDefinition from "../definition/ruleName";

import { quantifierRuleName, optionalQuantifierRuleName, oneOrMoreQuantifierRuleName, zeroOrMoreQuantifierRuleName } from "../ruleNames";

export default class QuantifierRule extends Rule {
  constructor() {
    const name = quantifierRuleName,  ///
          optionalQuantifierRuleNameDefinition = new RuleNameDefinition(optionalQuantifierRuleName),
          oneOrMoreQuantifierRuleNameDefinition = new RuleNameDefinition(oneOrMoreQuantifierRuleName),
          zeroOrMoreQuantifierRuleNameDefinition = new RuleNameDefinition(zeroOrMoreQuantifierRuleName),
          ambiguous = false,
          definitions = [
            optionalQuantifierRuleNameDefinition,
            oneOrMoreQuantifierRuleNameDefinition,
            zeroOrMoreQuantifierRuleNameDefinition
          ],
          Node = PartBNFNode;
    
    super(name, ambiguous, definitions, Node)
  }
}
