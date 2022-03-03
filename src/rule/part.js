"use strict";

import Rule from "../rule";
import PartBNFNode from "../node/bnf/part";
import RuleNameDefinition from "../definition/ruleName";
import TerminalPartRuleDefinition from "../definition/partRule/terminal";
import NonTerminalPartRuleDefinition from "../definition/partRule/nonTerminal";

import { PartRuleName, NoWhitespacePartRuleName } from "../ruleNames";

export default class PartRule extends Rule {
  constructor() {
    const name = PartRuleName,
          terminalPartRuleDefinition = new TerminalPartRuleDefinition(),
          nonTerminalPartRuleDefinition = new NonTerminalPartRuleDefinition(),
          noWhitespacePartRuleNameDefinition = new RuleNameDefinition(NoWhitespacePartRuleName),
          definitions = [
            nonTerminalPartRuleDefinition,
            terminalPartRuleDefinition,
            noWhitespacePartRuleNameDefinition
          ],
          Node = PartBNFNode;
    
    super(name, definitions, Node)
  }
}
