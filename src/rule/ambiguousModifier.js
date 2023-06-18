"use strict";

import Rule from "../rule";
import ModifierBNFNode from "../node/bnf/modifier";
import AmbiguousModifierRuleDefinition from "../definition/ambiguousModifierRule";

import { ambiguousModifierRuleName } from "../ruleNames";

export default class AmbiguousModifierRule extends Rule {
  static fromNothing() {
    const name = ambiguousModifierRuleName, ///
          ambiguousModifierRuleDefinition = AmbiguousModifierRuleDefinition.fromNothing(),
          ambiguous = false,
          definitions = [
            ambiguousModifierRuleDefinition
          ],
          NonTerminalNode = ModifierBNFNode,
          ambiguousModifierRule = new AmbiguousModifierRule(name, ambiguous, definitions, NonTerminalNode);

    return ambiguousModifierRule;
  }
}
