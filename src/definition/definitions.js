"use strict";

import { specialSymbols } from "occam-lexers";

import Definition from "../definition";
import RuleNamePart from "../part/nonTerminal/ruleName";
import TerminalSymbolPart from "../part/terminal/terminalSymbol";
import ZeroOrMorePartsPart from "../part/nonTerminal/zeroOrMoreParts";
import SequenceOfPartsPart from "../part/nonTerminal/sequenceOfParts";

import { DEFINITION_RULE_NAME } from "../ruleNames";

const { verticalBar } = specialSymbols;

export default class DefinitionsDefinition extends Definition {
  static fromNothing() {
    let parts;

    const content = verticalBar,  ///
          ruleName = DEFINITION_RULE_NAME,
          definitionRuleNamePart = RuleNamePart.fromRuleName(ruleName),
          verticalBarTerminalSymbolPart = TerminalSymbolPart.fromContent(content);

    parts = [
      verticalBarTerminalSymbolPart,
      definitionRuleNamePart
    ];

    const sequenceOfPartsPart = SequenceOfPartsPart.fromParts(parts),
          zeroOrMoreSequenceOfPartsPart = ZeroOrMorePartsPart.fromPart(sequenceOfPartsPart);

    parts = [
      definitionRuleNamePart,
      zeroOrMoreSequenceOfPartsPart
    ];

    const precedence = null,
          definitionsDefinition = new DefinitionsDefinition(parts, precedence);

    return definitionsDefinition;
  }
}
