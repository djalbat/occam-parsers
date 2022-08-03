"use strict";

import Rule from "../rule";
import PartBNFNode from "../node/bnf/part";
import RuleNameDefinition from "../definition/ruleName";
import TerminalPartRuleDefinition from "../definition/partRule/terminal";
import NonTerminalPartRuleDefinition from "../definition/partRule/nonTerminal";

import { partRuleName, noWhitespacePartRuleName } from "../ruleNames";

export default class PartRule extends Rule {
  constructor() {
    const name = partRuleName,  ///
          terminalPartRuleDefinition = new TerminalPartRuleDefinition(),
          nonTerminalPartRuleDefinition = new NonTerminalPartRuleDefinition(),
          noWhitespacePartRuleNameDefinition = new RuleNameDefinition(noWhitespacePartRuleName),
          ambiguous = false,
          definitions = [
            nonTerminalPartRuleDefinition,
            terminalPartRuleDefinition,
            noWhitespacePartRuleNameDefinition
          ],
          Node = PartBNFNode;
    
    super(name, ambiguous, definitions, Node)
  }
}
