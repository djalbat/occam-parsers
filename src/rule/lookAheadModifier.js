"use strict";

import Rule from "../rule";
import LookAheadModifierBNFNode from "../node/bnf/lookAheadModifier";
import LookAheadModifierRuleDefinition from "../definition/lookAheadModifierRule";

import { lookAheadModifierRuleName } from "../ruleNames";

export default class LookAheadModifierRule extends Rule {
  static fromNothing() {
    const name = lookAheadModifierRuleName, ///
          lookAheadModifierRuleDefinition = LookAheadModifierRuleDefinition.fromNothing(),
          opacity = null,
          definitions = [
            lookAheadModifierRuleDefinition
          ],
          NonTerminalNode = LookAheadModifierBNFNode,  ///
          lookAheadModifierRule = new LookAheadModifierRule(name, opacity, definitions, NonTerminalNode);

    return lookAheadModifierRule;
  }
}
