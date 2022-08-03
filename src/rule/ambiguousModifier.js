"use strict";

import Rule from "../rule";
import ModifierBNFNode from "../node/bnf/modifier";
import AmbiguousModifierRuleDefinition from "../definition/ambiguousModifierRule";

import { ambiguousModifierRuleName } from "../ruleNames";

export default class AmbiguousModifierRule extends Rule {
  constructor() {
    const name = ambiguousModifierRuleName, ///
          ambiguousModifierRuleDefinition = new AmbiguousModifierRuleDefinition(),
          ambiguous = false,
          definitions = [
            ambiguousModifierRuleDefinition
          ],
          Node = ModifierBNFNode;
    
    super(name, ambiguous, definitions, Node)
  }
}
