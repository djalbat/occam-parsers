"use strict";

import Rule from "../rule";
import NameDefinition from "../definition/name";
import RuleNameBNFNode from "../node/bnf/ruleName";

import { ruleNameRuleName } from "../ruleNames";

export default class RuleNameRule extends Rule {
  constructor() {
    const nameDefinition = new NameDefinition(),
          name = ruleNameRuleName,  ///
          ambiguous = false,
          definitions = [
            nameDefinition  ///
          ],
          Node = RuleNameBNFNode;
    
    super(name, ambiguous, definitions, Node)
  }
}
