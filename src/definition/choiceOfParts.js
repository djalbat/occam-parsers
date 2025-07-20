"use strict";

import { specialSymbols } from "occam-lexers";

import Definition from "../definition";
import RuleNamePart from "../part/nonTerminal/ruleName";
import TerminalSymbolPart from "../part/terminal/terminalSymbol";
import OneOrMorePartsPart from "../part/nonTerminal/oneOrMoreParts";
import SequenceOfPartsPart from "../part/nonTerminal/sequenceOfParts";

import { PART_CHOICE_RULE_NAME } from "../ruleNames";

const { verticalBar, openBracket, closeBracket } = specialSymbols;

export default class ChoiceOfPartsDefinition extends Definition {
  static fromNothing() {
    let parts;

    const ruleName = PART_CHOICE_RULE_NAME,
          verticalBarTerminalSymbolContent = verticalBar, ///
          openBracketTerminalSymbolContent = openBracket, ///
          closeBracketTerminalSymbolContent = closeBracket, ///
          partChoiceRuleNamePart = RuleNamePart.fromRuleName(ruleName),
          verticalBarTerminalSymbolPart = TerminalSymbolPart.fromContent(verticalBarTerminalSymbolContent),
          openBracketTerminalSymbolPart = TerminalSymbolPart.fromContent(openBracketTerminalSymbolContent),
          closeBracketTerminalSymbolPart = TerminalSymbolPart.fromContent(closeBracketTerminalSymbolContent);

    parts = [
      verticalBarTerminalSymbolPart,
      partChoiceRuleNamePart
    ];

    const sequenceOfPartsPart = SequenceOfPartsPart.fromParts(parts),
          oneOrMoreSequenceOfPartsPart = OneOrMorePartsPart.fromPart(sequenceOfPartsPart);

    parts = [
      openBracketTerminalSymbolPart,
      partChoiceRuleNamePart,
      oneOrMoreSequenceOfPartsPart,
      closeBracketTerminalSymbolPart
    ];

    const precedence = null,
          choiceOfPartsDefinition = new ChoiceOfPartsDefinition(parts, precedence);

    return choiceOfPartsDefinition;
  }
}
