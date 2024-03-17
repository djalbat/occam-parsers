"use strict";

import { specialSymbols } from "occam-lexers";

import Definition from "../definition";
import RuleNamePart from "../part/nonTerminal/ruleName";
import OptionalPartPart from "../part/nonTerminal/optionalPart";
import TerminalSymbolPart from "../part/terminal/terminalSymbol";

import { nameRuleName, definitionsRuleName, opacityModifierRuleName } from "../ruleNames";

const { separator, terminator } = specialSymbols;

export default class RuleDefinition extends Definition {
  static fromNothing() {
    const separatorTerminalSymbolContent = separator,
          terminatorTerminalSymbolContent = terminator,
          opacityModifierRuleNamePart = RuleNamePart.fromRuleName(opacityModifierRuleName),
          nameRuleNamePart = RuleNamePart.fromRuleName(nameRuleName),
          optionalOpacityRuleNamePartPart = OptionalPartPart.fromPart(opacityModifierRuleNamePart),
          separatorTerminalSymbolPart = TerminalSymbolPart.fromContent(separatorTerminalSymbolContent),
          definitionsRuleNamePart = RuleNamePart.fromRuleName(definitionsRuleName),
          terminatorTerminalSymbolPart = TerminalSymbolPart.fromContent(terminatorTerminalSymbolContent),
          parts = [
            nameRuleNamePart,
            optionalOpacityRuleNamePartPart,
            separatorTerminalSymbolPart,
            definitionsRuleNamePart,
            terminatorTerminalSymbolPart
          ],
          precedence = null,
          ruleDefinition = new RuleDefinition(parts, precedence);

    return ruleDefinition;
  }
}
