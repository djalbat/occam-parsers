"use strict";

import Rule from "../../rule";
import TerminalPartRuleDefinition from "../../definition/partRule/terminal";
import NonTerminalPartRuleDefinition from "../../definition/partRule/nonTerminal";

import { PART_RULE_NAME } from "../../ruleNames";

export default class PartBNFRule extends Rule {
  static fromNothing() {
    const name = PART_RULE_NAME,  ///
          terminalPartRuleDefinition = TerminalPartRuleDefinition.fromNothing(),
          nonTerminalPartRuleDefinition = NonTerminalPartRuleDefinition.fromNothing(),
          opacity = null,
          definitions = [
            nonTerminalPartRuleDefinition,
            terminalPartRuleDefinition
          ],
          partRule = new PartBNFRule(name, opacity, definitions);

    return partRule;
  }
}
