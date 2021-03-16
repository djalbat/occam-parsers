"use strict";

import Rule from "../rule";
import RuleNameNode from "../node/ruleName";
import NameDefinition from "../definition/name";

import { RuleNameRuleName } from "../ruleNames";

export default class RuleNameRule extends Rule {
  constructor() {
    const nameDefinition = new NameDefinition(),
          name = RuleNameRuleName,
          definitions = [
            nameDefinition  ///
          ],
          Node = RuleNameNode;
    
    super(name, definitions, Node)
  }
}
