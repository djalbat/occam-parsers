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
    const verticalBarTerminalSymbolContent = verticalBar, ///
          openBracketTerminalSymbolContent = openBracket, ///
          closeBracketTerminalSymbolContent = closeBracket, ///
          partRuleNamePart = new RuleNamePart(partRuleName),
          precedenceRuleNamePart = new RuleNamePart(precedenceRuleName),
          verticalBarTerminalSymbolPart = new TerminalSymbolPart(verticalBarTerminalSymbolContent),
          openBracketTerminalSymbolPart = new TerminalSymbolPart(openBracketTerminalSymbolContent),
          closeBracketTerminalSymbolPart = new TerminalSymbolPart(closeBracketTerminalSymbolContent),
          optionalPrecedenceRuleNamePartPart = new OptionalPartPart(precedenceRuleNamePart),
          verticalBarTerminalSymbolThenPartRuleNameParts = [
            verticalBarTerminalSymbolPart,
            partRuleNamePart,
            optionalPrecedenceRuleNamePartPart
          ],
          sequenceOfPartsPart = new SequenceOfPartsPart(verticalBarTerminalSymbolThenPartRuleNameParts),
          oneOrMoreSequenceOfPartsPart = new OneOrMorePartsPart(sequenceOfPartsPart),
          parts = [
            openBracketTerminalSymbolPart,
            partRuleNamePart,
            optionalPrecedenceRuleNamePartPart,
            oneOrMoreSequenceOfPartsPart,
            closeBracketTerminalSymbolPart
          ],
          precedence = null,
          choiceOfPartsDefinition = new ChoiceOfPartsDefinition(parts, precedence);

    return choiceOfPartsDefinition;
  }
}
