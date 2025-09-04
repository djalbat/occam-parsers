"use strict";

import { specialSymbols } from "occam-lexers";

import Definition from "../definition";
import PartChoice from "../partChoice";
import NoWhitespacePart from "../part/terminal/noWhitespace";
import ChoiceOfPartsPart from "../part/nonTerminal/choiceOfParts";
import StringLiteralPart from "../part/terminal/stringLiteral";

const { opaque, semiOpaque } = specialSymbols;

export default class OpacityModifierRuleDefinition extends Definition {
  static fromNothing() {
    let content;

    content = opaque; ///

    const opaqueStringLiteralPart = StringLiteralPart.fromContent(content);

    content = semiOpaque; ///

    const semiOpaqueStringLiteralPart = StringLiteralPart.fromContent(content);

    const opaqueStringLiteralPartChoice = PartChoice.fromPart(opaqueStringLiteralPart),
          semiOpaqueStringLiteralPartChoice = PartChoice.fromPart(semiOpaqueStringLiteralPart),
          partChoices = [
            opaqueStringLiteralPartChoice,
            semiOpaqueStringLiteralPartChoice
          ],
          choiceOfOpaqueStringLiteralAndSemiOpaqueStringLiteralPartsPart = ChoiceOfPartsPart.fromPartChoices(partChoices),
          noWhitespacePart = NoWhitespacePart.fromNothing(),
          parts = [
            noWhitespacePart,
            choiceOfOpaqueStringLiteralAndSemiOpaqueStringLiteralPartsPart
          ],
          precedence = null,
          opacityModifierRuleDefinition = new OpacityModifierRuleDefinition(parts, precedence);

    return opacityModifierRuleDefinition;
  }
}
