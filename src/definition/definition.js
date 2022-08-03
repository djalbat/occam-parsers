"use strict";

import Definition from "../definition";
import RuleNamePart from "../part/nonTerminal/ruleName";
import OneOrMorePartsPart from "../part/nonTerminal/oneOrMoreParts";

import { partRuleName } from "../ruleNames";

export default class DefinitionDefinition extends Definition {
  constructor() {
    const partRuleNamePart = new RuleNamePart(partRuleName),
          oneOrMoreRuleNamePartsPart = new OneOrMorePartsPart(partRuleNamePart),
          parts = [
            oneOrMoreRuleNamePartsPart
          ];

    super(parts)
  }
}
