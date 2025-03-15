"use strict";

import Rule from "../rule";
import CallAheadModifierBNFNode from "../node/bnf/callAheadModifier";
import CallAheadModifierRuleDefinition from "../definition/callAheadModifierRule";

import { callAheadModifierRuleName } from "../ruleNames";

export default class CallAheadModifierRule extends Rule {
  static fromNothing() {
    const name = callAheadModifierRuleName, ///
          callAheadModifierRuleDefinition = CallAheadModifierRuleDefinition.fromNothing(),
          opacity = null,
          definitions = [
            callAheadModifierRuleDefinition
          ],
          NonTerminalNode = CallAheadModifierBNFNode,  ///
          callAheadModifierRule = new CallAheadModifierRule(name, opacity, definitions, NonTerminalNode);

    return callAheadModifierRule;
  }
}
