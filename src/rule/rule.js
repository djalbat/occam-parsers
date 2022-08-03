"use strict";

import Rule from "../rule";
import RuleBNFNode from "../node/bnf/rule";
import RuleDefinition from "../definition/rule";

import { ruleRuleName } from "../ruleNames";

export default class RuleRule extends Rule {
  constructor() {
    const ruleDefinition = new RuleDefinition(),
          name = ruleRuleName,  ///
          ambiguous = false,
          definitions = [
            ruleDefinition
          ],
          Node = RuleBNFNode;
    
    super(name, ambiguous, definitions, Node);
  }
}
