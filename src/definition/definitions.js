"use strict";

import { specialSymbols } from "occam-lexers";

import Definition from "../definition";
import RuleNamePart from "../part/nonTerminal/ruleName";
import TerminalSymbolPart from "../part/terminal/terminalSymbol";
import ZeroOrMorePartsPart from "../part/nonTerminal/zeroOrMoreParts";
import SequenceOfPartsPart from "../part/nonTerminal/sequenceOfParts";

import { definitionRuleName } from "../ruleNames";

const { verticalBar } = specialSymbols;

export default class DefinitionsDefinition extends Definition {
  static fromNothing() {
    let parts;

    const content = verticalBar,  ///
          definitionRuleNamePart = RuleNamePart.fromRuleName(definitionRuleName),
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
