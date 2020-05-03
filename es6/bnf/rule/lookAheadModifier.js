"use strict";

import Rule from "../rule";
import DefinitionNode from "../node/definition";
import LookAheadModifierRuleDefinition from "../definition/lookAheadModifierRule";

import { LookAheadModifierRuleName } from "../ruleNames";

export default class LookAheadModifierRule extends Rule {
  constructor() {
    const name = LookAheadModifierRuleName,
          lookAheadModifierRuleDefinition = new LookAheadModifierRuleDefinition(),
          definitions = [
            lookAheadModifierRuleDefinition
          ],
          Node = DefinitionNode;
    
    super(name, definitions, Node)
  }
}
