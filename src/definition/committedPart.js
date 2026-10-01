"use strict";

import { specialSymbols } from "occam-lexers";

import Definition from "../definition";
import RuleNamePart from "../part/nonTerminal/ruleName";
import NoWhitespacePart from "../part/terminal/noWhitespace";
import OptionalPartPart from "../part/nonTerminal/optionalPart";
import StringLiteralPart from "../part/terminal/stringLiteral";
import SequenceOfPartsPart from "../part/nonTerminal/sequenceOfParts";

import { PART_RULE_NAME } from "../ruleNames";

const { backtick } = specialSymbols;

export default class CommittedPartDefinition extends Definition {
  static fromNothing() {
    const ruleName = PART_RULE_NAME,  ///
          backtickStringLiteralContent = backtick, ///
          partRuleNamePart = RuleNamePart.fromRuleName(ruleName);

    let parts,
          backtickStringLiteralPart;

    const noWiteapcePart = NoWhitespacePart.fromNothing();

    backtickStringLiteralPart = StringLiteralPart.fromContent(backtickStringLiteralContent);

    parts = [
      noWiteapcePart,
      backtickStringLiteralPart
    ];

    const backtckSequenceOfPartsPart = SequenceOfPartsPart.fromParts(parts),
          optionalBacktckSequenceOfPartsPartPart = OptionalPartPart.fromPart(backtckSequenceOfPartsPart);

    backtickStringLiteralPart = StringLiteralPart.fromContent(backtickStringLiteralContent);

    parts = [
      backtickStringLiteralPart,
      optionalBacktckSequenceOfPartsPartPart,
      partRuleNamePart
    ];

    const precedence = null,
          committedPartDefinition = new CommittedPartDefinition(parts, precedence);

    return committedPartDefinition;
  }
}
