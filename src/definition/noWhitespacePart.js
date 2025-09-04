"use strict";

import { specialSymbols } from "occam-lexers";

import Definition from "../definition";
import StringLiteralPart from "../part/terminal/stringLiteral";

const { noWhitespace } = specialSymbols;

export default class NoWhitespacePartDefinition extends Definition {
  static fromNothing() {
    const content = noWhitespace,  ///
          stringLiteralPart = StringLiteralPart.fromContent(content),
          parts = [
            stringLiteralPart
          ],
          precedence = null,
          noWhitespacePartDefinition = new NoWhitespacePartDefinition(parts, precedence);

    return noWhitespacePartDefinition;
  }
}
