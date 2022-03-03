"use strict";

import Rule from "../rule";
import RuleBNFNode from "../bnf/node/rule";
import RuleDefinition from "../definition/rule";

import { RuleRuleName } from "../ruleNames";

export default class RuleRule extends Rule {
  constructor() {
    const ruleDefinition = new RuleDefinition(),
          name = RuleRuleName,
          definitions = [
            ruleDefinition
          ],
          Node = RuleBNFNode;
    
    super(name, definitions, Node);
  }
}
