"use strict";

import Rule from "../rule";
import RuleNode from "../node/rule";
import RuleDefinition from "../definition/rule";

import { RuleRuleName } from "../ruleNames";

export default class RuleRule extends Rule {
  constructor() {
    const ruleDefinition = new RuleDefinition(),
          name = RuleRuleName,
          definitions = [
            ruleDefinition
          ],
          Node = RuleNode;
    
    super(name, definitions, Node);
  }
}
