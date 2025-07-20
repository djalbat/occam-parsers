"use strict";

import { specialSymbols } from "occam-lexers";

import Definition from "../definition";
import RuleNamePart from "../part/nonTerminal/ruleName";
import OptionalPartPart from "../part/nonTerminal/optionalPart";
import TerminalSymbolPart from "../part/terminal/terminalSymbol";

import { NAME_RULE_NAME, DEFINITIONS_RULE_NAME, OPACITY_MODIFIER_RULE_NAME } from "../ruleNames";

const { separator, terminator } = specialSymbols;

export default class RuleDefinition extends Definition {
  static fromNothing() {
    let ruleName;

    const separatorTerminalSymbolContent = separator, ///
          terminatorTerminalSymbolContent = terminator; ///

    ruleName = OPACITY_MODIFIER_RULE_NAME;

    const opacityModifierRuleNamePart = RuleNamePart.fromRuleName(ruleName);

    ruleName = NAME_RULE_NAME;

    const nameRuleNamePart = RuleNamePart.fromRuleName(ruleName),
          optionalOpacityRuleNamePartPart = OptionalPartPart.fromPart(opacityModifierRuleNamePart),
          separatorTerminalSymbolPart = TerminalSymbolPart.fromContent(separatorTerminalSymbolContent);

    ruleName = DEFINITIONS_RULE_NAME;

    const definitionsRuleNamePart = RuleNamePart.fromRuleName(ruleName),
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
