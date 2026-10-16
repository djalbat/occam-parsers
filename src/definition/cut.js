"use strict";

import { specialSymbols } from "occam-lexers";

import Definition from "../definition";
import StringLiteralPart from "../part/terminal/stringLiteral";

const { backtick } = specialSymbols;

export default class CutDefinition extends Definition {
  static fromNothing() {
    const content = backtick, ///
          backtickStringLiteralPart = StringLiteralPart.fromContent(content);

    const parts = [
            backtickStringLiteralPart
          ],
          precedence = null,
          ruleDefinition = new CutDefinition(parts, precedence);

    return ruleDefinition;
  }
}
