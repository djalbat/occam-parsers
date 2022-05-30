"use strict";

import Rule from "../rule";
import NameDefinition from "../definition/name";
import RuleNameBNFNode from "../node/bnf/ruleName";

import { RuleNameRuleName } from "../ruleNames";

export default class RuleNameRule extends Rule {
  constructor() {
    const nameDefinition = new NameDefinition(),
          name = RuleNameRuleName,
          ambiguous = false,
          definitions = [
            nameDefinition  ///
          ],
          Node = RuleNameBNFNode;
    
    super(name, ambiguous, definitions, Node)
  }
}