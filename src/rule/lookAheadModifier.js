"use strict";

import Rule from "../rule";
import ModifierBNFNode from "../node/bnf/modifier";
import LookAheadModifierRuleDefinition from "../definition/lookAheadModifierRule";

import { lookAheadModifierRuleName } from "../ruleNames";

export default class LookAheadModifierRule extends Rule {
  constructor() {
    const name = lookAheadModifierRuleName, ///
          lookAheadModifierRuleDefinition = new LookAheadModifierRuleDefinition(),
          ambiguous = false,
          definitions = [
            lookAheadModifierRuleDefinition
          ],
          Node = ModifierBNFNode;
    
    super(name, ambiguous, definitions, Node)
  }
}
