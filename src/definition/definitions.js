"use strict";

import { specialSymbols } from "occam-lexers";

import Definition from "../definition";
import RuleNamePart from "../part/nonTerminal/ruleName";
import OptionalPartPart from "../part/nonTerminal/optionalPart";
import TerminalSymbolPart from "../part/terminal/terminalSymbol";
import ZeroOrMorePartsPart from "../part/nonTerminal/zeroOrMoreParts";
import SequenceOfPartsPart from "../part/nonTerminal/sequenceOfParts";

import { definitionRuleName, precedenceRuleName } from "../ruleNames";

const { verticalBar } = specialSymbols;

export default class DefinitionsDefinition extends Definition {
  constructor() {
    const verticalBarTerminalSymbolContent = verticalBar,
          definitionRuleNamePart = new RuleNamePart(definitionRuleName),
          precedenceRuleNamePart = new RuleNamePart(precedenceRuleName),
          verticalBarTerminalSymbolPart = new TerminalSymbolPart(verticalBarTerminalSymbolContent),
          optionalPrecedenceRuleNamePartPart = new OptionalPartPart(precedenceRuleNamePart),
          verticalBarTerminalSymbolThenDefinitionRuleNameParts = [
            verticalBarTerminalSymbolPart,
            definitionRuleNamePart,
            optionalPrecedenceRuleNamePartPart
          ],
          sequenceOfPartsPart = new SequenceOfPartsPart(verticalBarTerminalSymbolThenDefinitionRuleNameParts),
          zeroOrMoreSequenceOfPartsPart = new ZeroOrMorePartsPart(sequenceOfPartsPart),
          parts = [
            definitionRuleNamePart,
            optionalPrecedenceRuleNamePartPart,
            zeroOrMoreSequenceOfPartsPart
          ];
    
    super(parts)
  }
}
