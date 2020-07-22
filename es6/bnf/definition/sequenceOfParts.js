"use strict";

import { specialSymbols } from "occam-lexers";

import Definition from "../definition";
import RuleNamePart from "../part/nonTerminal/ruleName";
import TerminalSymbolPart from "../part/terminal/terminalSymbol";
import OneOrMorePartsPart from "../part/nonTerminal/oneOrMoreParts";

import { PartRuleName } from "../ruleNames";

const { openBracket, closeBracket } = specialSymbols;

export default class SequenceOfPartsDefinition extends Definition {
  constructor() {
    const partRuleName = PartRuleName,
          openBracketTerminalSymbolContent = openBracket, ///
          closeBracketTerminalSymbolContent = closeBracket, ///
          partRuleNamePart = new RuleNamePart(partRuleName),
          openBracketTerminalSymbolPart = new TerminalSymbolPart(openBracketTerminalSymbolContent),
          closeBracketTerminalSymbolPart = new TerminalSymbolPart(closeBracketTerminalSymbolContent),
          oneOrMorePartRuleNamePartsPart = new OneOrMorePartsPart(partRuleNamePart),
          parts = [
            openBracketTerminalSymbolPart,
            partRuleNamePart,
            oneOrMorePartRuleNamePartsPart,
            closeBracketTerminalSymbolPart
          ];

    super(parts)
  }
}
