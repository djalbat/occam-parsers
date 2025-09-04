"use strict";

import { specialSymbols } from "occam-lexers";

import Definition from "../definition";
import RuleNamePart from "../part/nonTerminal/ruleName";
import StringLiteralPart from "../part/terminal/stringLiteral";
import OneOrMorePartsPart from "../part/nonTerminal/oneOrMoreParts";
import SequenceOfPartsPart from "../part/nonTerminal/sequenceOfParts";

import { PART_CHOICE_RULE_NAME } from "../ruleNames";

const { verticalBar, openBracket, closeBracket } = specialSymbols;

export default class ChoiceOfPartsDefinition extends Definition {
  static fromNothing() {
    let parts;

    const ruleName = PART_CHOICE_RULE_NAME,
          verticalBarStringLiteralContent = verticalBar, ///
          openBracketStringLiteralContent = openBracket, ///
          closeBracketStringLiteralContent = closeBracket, ///
          partChoiceRuleNamePart = RuleNamePart.fromRuleName(ruleName),
          verticalBarStringLiteralPart = StringLiteralPart.fromContent(verticalBarStringLiteralContent),
          openBracketStringLiteralPart = StringLiteralPart.fromContent(openBracketStringLiteralContent),
          closeBracketStringLiteralPart = StringLiteralPart.fromContent(closeBracketStringLiteralContent);

    parts = [
      verticalBarStringLiteralPart,
      partChoiceRuleNamePart
    ];

    const sequenceOfPartsPart = SequenceOfPartsPart.fromParts(parts),
          oneOrMoreSequenceOfPartsPart = OneOrMorePartsPart.fromPart(sequenceOfPartsPart);

    parts = [
      openBracketStringLiteralPart,
      partChoiceRuleNamePart,
      oneOrMoreSequenceOfPartsPart,
      closeBracketStringLiteralPart
    ];

    const precedence = null,
          choiceOfPartsDefinition = new ChoiceOfPartsDefinition(parts, precedence);

    return choiceOfPartsDefinition;
  }
}
