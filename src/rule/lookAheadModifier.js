"use strict";

import Rule from "../rule";
import DefinitionBNFNode from "../node/bnf/definition";
import LookAheadModifierRuleDefinition from "../definition/lookAheadModifierRule";

import { LookAheadModifierRuleName } from "../ruleNames";

export default class LookAheadModifierRule extends Rule {
  constructor() {
    const name = LookAheadModifierRuleName,
          lookAheadModifierRuleDefinition = new LookAheadModifierRuleDefinition(),
          definitions = [
            lookAheadModifierRuleDefinition
          ],
          Node = DefinitionBNFNode;
    
    super(name, definitions, Node)
  }
}
