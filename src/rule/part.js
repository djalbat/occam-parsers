"use strict";

import Rule from "../rule";
import PartBNFNode from "../node/bnf/part";
import TerminalPartRuleDefinition from "../definition/partRule/terminal";
import NonTerminalPartRuleDefinition from "../definition/partRule/nonTerminal";

import { partRuleName } from "../ruleNames";

export default class PartRule extends Rule {
  static fromNothing() {
    const name = partRuleName,  ///
          terminalPartRuleDefinition = TerminalPartRuleDefinition.fromNothing(),
          nonTerminalPartRuleDefinition = NonTerminalPartRuleDefinition.fromNothing(),
          opacity = null,
          definitions = [
            nonTerminalPartRuleDefinition,
            terminalPartRuleDefinition
          ],
          NonTerminalNode = PartBNFNode,  ///
          partRule = new PartRule(name, opacity, definitions, NonTerminalNode);

    return partRule;
  }
}
