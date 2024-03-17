"use strict";

import Rule from "../rule";
import PartBNFNode from "../node/bnf/part";
import RuleNameDefinition from "../definition/ruleName";
import TerminalPartRuleDefinition from "../definition/partRule/terminal";
import NonTerminalPartRuleDefinition from "../definition/partRule/nonTerminal";

import { partRuleName, noWhitespacePartRuleName } from "../ruleNames";

export default class PartRule extends Rule {
  static fromNothing() {
    const name = partRuleName,  ///
          terminalPartRuleDefinition = TerminalPartRuleDefinition.fromNothing(),
          nonTerminalPartRuleDefinition = NonTerminalPartRuleDefinition.fromNothing(),
          noWhitespacePartRuleNameDefinition = RuleNameDefinition.fromRuleName(noWhitespacePartRuleName),
          opacity = null,
          definitions = [
            nonTerminalPartRuleDefinition,
            terminalPartRuleDefinition,
            noWhitespacePartRuleNameDefinition
          ],
          NonTerminalNode = PartBNFNode,  ///
          partRule = new PartRule(name, opacity, definitions, NonTerminalNode);

    return partRule;
  }
}
