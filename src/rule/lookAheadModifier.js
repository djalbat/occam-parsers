"use strict";

import Rule from "../rule";
import ModifierBNFNode from "../node/bnf/modifier";
import LookAheadModifierRuleDefinition from "../definition/lookAheadModifierRule";

import { lookAheadModifierRuleName } from "../ruleNames";

export default class LookAheadModifierRule extends Rule {
  static fromNothing() {
    const name = lookAheadModifierRuleName, ///
          lookAheadModifierRuleDefinition = LookAheadModifierRuleDefinition.fromNothing(),
          ambiguous = false,
          definitions = [
            lookAheadModifierRuleDefinition
          ],
          NonTerminalNode = ModifierBNFNode,  ///
          lookAheadModifierRule = new LookAheadModifierRule(name, ambiguous, definitions, NonTerminalNode);

    return lookAheadModifierRule;
  }
}
