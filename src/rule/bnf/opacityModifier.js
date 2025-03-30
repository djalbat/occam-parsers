"use strict";

import Rule from "../../rule";
import OpacityModifierBNFNode from "../../node/bnf/opacityModifier";
import OpacityModifierRuleDefinition from "../../definition/opacityModifierRule";

import { opacityModifierRuleName } from "../../ruleNames";

export default class OpacityModifierBNFRule extends Rule {
  static fromNothing() {
    const name = opacityModifierRuleName, ///
          opacityModifierRuleDefinition = OpacityModifierRuleDefinition.fromNothing(),
          opacity = null,
          definitions = [
            opacityModifierRuleDefinition
          ],
          NonTerminalNode = OpacityModifierBNFNode, ///
          opacityModifierRule = new OpacityModifierBNFRule(name, opacity, definitions, NonTerminalNode);

    return opacityModifierRule;
  }
}
