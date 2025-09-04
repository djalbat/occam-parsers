"use strict";

import { specialSymbols } from "occam-lexers";

import Definition from "../definition";
import NoWhitespacePart from "../part/terminal/noWhitespace";
import StringLiteralPart from "../part/terminal/stringLiteral";

const { ellipsis } = specialSymbols;

export default class CallAheadModifierRuleDefinition extends Definition {
  static fromNothing() {
    const content = ellipsis,  ///
          noWhitespacePart = NoWhitespacePart.fromNothing(),
          stringLiteralPart = StringLiteralPart.fromContent(content),
          parts = [
            noWhitespacePart,
            stringLiteralPart
          ],
          precedence = null,
          callAheadModifierRuleDefinition = new CallAheadModifierRuleDefinition(parts, precedence);

    return callAheadModifierRuleDefinition;
  }
}
