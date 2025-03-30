"use strict";

import Rule from "../../rule";
import RuleBNFNode from "../../node/bnf/rule";
import RuleDefinition from "../../definition/rule";

import { ruleRuleName } from "../../ruleNames";

export default class RuleBNFRule extends Rule {
  static fromNothing() {
    const ruleDefinition = RuleDefinition.fromNothing(),
          name = ruleRuleName,  ///
          opacity = null,
          definitions = [
            ruleDefinition
          ],
          NonTerminalNode = RuleBNFNode,  ///
          ruleRule = new RuleBNFRule(name, opacity, definitions, NonTerminalNode);

    return ruleRule;
  }
}
