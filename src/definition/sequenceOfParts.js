"use strict";

import { specialSymbols } from "occam-lexers";

import Definition from "../definition";
import RuleNamePart from "../part/nonTerminal/ruleName";
import TerminalSymbolPart from "../part/terminal/terminalSymbol";
import OneOrMorePartsPart from "../part/nonTerminal/oneOrMoreParts";

import { PART_RULE_NAME } from "../ruleNames";

const { openBracket, closeBracket } = specialSymbols;

export default class SequenceOfPartsDefinition extends Definition {
  static fromNothing() {
    const ruleName = PART_RULE_NAME,  ///
          openBracketTerminalSymbolContent = openBracket, ///
          closeBracketTerminalSymbolContent = closeBracket, ///
          partRuleNamePart = RuleNamePart.fromRuleName(ruleName),
          openBracketTerminalSymbolPart = TerminalSymbolPart.fromContent(openBracketTerminalSymbolContent),
          closeBracketTerminalSymbolPart = TerminalSymbolPart.fromContent(closeBracketTerminalSymbolContent),
          oneOrMorePartRuleNamePartsPart = OneOrMorePartsPart.fromPart(partRuleNamePart),
          parts = [
            openBracketTerminalSymbolPart,
            partRuleNamePart,
            oneOrMorePartRuleNamePartsPart,
            closeBracketTerminalSymbolPart
          ],
          precedence = null,
          sequenceOfPartsDefinition = new SequenceOfPartsDefinition(parts, precedence);

    return sequenceOfPartsDefinition;
  }
}
