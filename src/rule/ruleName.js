"use strict";

import Rule from "../rule";
import NameDefinition from "../definition/name";
import RuleNameBNFNode from "../node/bnf/ruleName";

import { ruleNameRuleName } from "../ruleNames";

export default class RuleNameRule extends Rule {
  static fromNothing() {
    const nameDefinition = NameDefinition.fromNothing(),
          name = ruleNameRuleName,  ///
          opacity = null,
          definitions = [
            nameDefinition  ///
          ],
          NonTerminalNode = RuleNameBNFNode,  ///
          ruleNameRule = new RuleNameRule(name, opacity, definitions, NonTerminalNode);

    return ruleNameRule;
  }
}
