"use strict";

import Definition from "../definition";
import RuleNamePart from "../part/nonTerminal/ruleName";
import OneOrMorePartsPart from "../part/nonTerminal/oneOrMoreParts";

import { PartRuleName } from "../ruleNames";

class DefinitionDefinition extends Definition {
  constructor() {
    const partRuleName = PartRuleName,
          partRuleNamePart = new RuleNamePart(partRuleName),
          oneOrMoreRuleNamePartsPart = new OneOrMorePartsPart(partRuleNamePart),
          parts = [
            oneOrMoreRuleNamePartsPart
          ];

    super(parts)
  }
}

module.exports = DefinitionDefinition;
