"use strict";

import { specialSymbols } from "occam-lexers";

import Definition from "../definition";
import RuleNamePart from "../part/nonTerminal/ruleName";
import OneOrMorePartsPart from "../part/nonTerminal/oneOrMoreParts";
import TerminalSymbolPart from "../part/terminal/terminalSymbol";
import SequenceOfPartsPart from "../part/nonTerminal/sequenceOfParts";

import { partRuleName } from "../ruleNames";

const { verticalBar, openBracket, closeBracket } = specialSymbols;

export default class ChoiceOfPartsDefinition extends Definition {
  constructor() {
    const verticalBarTerminalSymbolContent = verticalBar, ///
          openBracketTerminalSymbolContent = openBracket, ///
          closeBracketTerminalSymbolContent = closeBracket, ///
          partRuleNamePart = new RuleNamePart(partRuleName),
          verticalBarTerminalSymbolPart = new TerminalSymbolPart(verticalBarTerminalSymbolContent),
          openBracketTerminalSymbolPart = new TerminalSymbolPart(openBracketTerminalSymbolContent),
          closeBracketTerminalSymbolPart = new TerminalSymbolPart(closeBracketTerminalSymbolContent),
          verticalBarTerminalSymbolThenPartRuleNameParts = [
            verticalBarTerminalSymbolPart,
            partRuleNamePart
          ],
          sequenceOfPartsPart = new SequenceOfPartsPart(verticalBarTerminalSymbolThenPartRuleNameParts),
          oneOrMoreSequenceOfPartsPart = new OneOrMorePartsPart(sequenceOfPartsPart),
          parts = [
            openBracketTerminalSymbolPart,
            partRuleNamePart,
            oneOrMoreSequenceOfPartsPart,
            closeBracketTerminalSymbolPart
          ];

    super(parts)
  }
}
