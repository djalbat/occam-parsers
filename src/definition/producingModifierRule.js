"use strict";

import { specialSymbols } from "occam-lexers";

import Definition from "../definition";
import NoWhitespacePart from "../part/terminal/noWhitespace";
import StringLiteralPart from "../part/terminal/stringLiteral";

const { backtick } = specialSymbols;

export default class ProducingModifierRuleDefinition extends Definition {
  static fromNothing() {
    let content;

    content = backtick; ///

    const backtickStringLiteralPart = StringLiteralPart.fromContent(content),
          noWhitespacePart = NoWhitespacePart.fromNothing(),
          parts = [
            noWhitespacePart,
            backtickStringLiteralPart
          ],
          precedence = null,
          producingModifierRuleDefinition = new ProducingModifierRuleDefinition(parts, precedence);

    return producingModifierRuleDefinition;
  }
}
