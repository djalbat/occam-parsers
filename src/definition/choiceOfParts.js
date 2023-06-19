"use strict";

import { specialSymbols } from "occam-lexers";

import Definition from "../definition";
import RuleNamePart from "../part/nonTerminal/ruleName";
import OptionalPartPart from "../part/nonTerminal/optionalPart";
import TerminalSymbolPart from "../part/terminal/terminalSymbol";
import OneOrMorePartsPart from "../part/nonTerminal/oneOrMoreParts";
import SequenceOfPartsPart from "../part/nonTerminal/sequenceOfParts";

import { partRuleName, precedenceRuleName } from "../ruleNames";

const { verticalBar, openBracket, closeBracket } = specialSymbols;

export default class ChoiceOfPartsDefinition extends Definition {
  static fromNothing() {
    let parts;

    const verticalBarTerminalSymbolContent = verticalBar, ///
          openBracketTerminalSymbolContent = openBracket, ///
          closeBracketTerminalSymbolContent = closeBracket, ///
          partRuleNamePart = RuleNamePart.fromRuleName(partRuleName),
          precedenceRuleNamePart = RuleNamePart.fromRuleName(precedenceRuleName),
          verticalBarTerminalSymbolPart = TerminalSymbolPart.fromContent(verticalBarTerminalSymbolContent),
          openBracketTerminalSymbolPart = TerminalSymbolPart.fromContent(openBracketTerminalSymbolContent),
          closeBracketTerminalSymbolPart = TerminalSymbolPart.fromContent(closeBracketTerminalSymbolContent),
          optionalPrecedenceRuleNamePartPart = OptionalPartPart.fromPart(precedenceRuleNamePart);

    parts = [
      verticalBarTerminalSymbolPart,
      partRuleNamePart,
      optionalPrecedenceRuleNamePartPart
    ];

    const sequenceOfPartsPart = SequenceOfPartsPart.fromParts(parts),
          oneOrMoreSequenceOfPartsPart = OneOrMorePartsPart.fromPart(sequenceOfPartsPart);

    parts = [
      openBracketTerminalSymbolPart,
      partRuleNamePart,
      optionalPrecedenceRuleNamePartPart,
      oneOrMoreSequenceOfPartsPart,
      closeBracketTerminalSymbolPart
    ];

    const precedence = null,
          choiceOfPartsDefinition = new ChoiceOfPartsDefinition(parts, precedence);

    return choiceOfPartsDefinition;
  }
}
