"use strict";

import { specialSymbols } from "occam-lexers";

import Definition from "../definition";
import RuleNamePart from "../part/nonTerminal/ruleName";
import OptionalPartPart from "../part/nonTerminal/optionalPart";
import TerminalSymbolPart from "../part/terminal/terminalSymbol";

import { nameRuleName, definitionsRuleName, ambiguousModifierRuleName } from "../ruleNames";

const { separator, terminator } = specialSymbols;

export default class RuleDefinition extends Definition {
  static fromNothing() {
    const separatorTerminalSymbolContent = separator,
          terminatorTerminalSymbolContent = terminator,
          ambiguousModifierRuleNamePart = RuleNamePart.fromRuleName(ambiguousModifierRuleName),
          nameRuleNamePart = RuleNamePart.fromRuleName(nameRuleName),
          optionalAmbiguousRuleNamePartPart = OptionalPartPart.fromPart(ambiguousModifierRuleNamePart),
          separatorTerminalSymbolPart = TerminalSymbolPart.fromContent(separatorTerminalSymbolContent),
          definitionsRuleNamePart = RuleNamePart.fromRuleName(definitionsRuleName),
          terminatorTerminalSymbolPart = TerminalSymbolPart.fromContent(terminatorTerminalSymbolContent),
          parts = [
            nameRuleNamePart,
            optionalAmbiguousRuleNamePartPart,
            separatorTerminalSymbolPart,
            definitionsRuleNamePart,
            terminatorTerminalSymbolPart
          ],
          precedence = null,
          ruleDefinition = new RuleDefinition(parts, precedence);

    return ruleDefinition;
  }
}
