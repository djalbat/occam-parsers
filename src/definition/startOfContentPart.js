"use strict";

import { specialSymbols } from "occam-lexers";

import Definition from "../definition";
import StringLiteralPart from "../part/terminal/stringLiteral";

const { startOfContent } = specialSymbols;

export default class StartOfContentPartDefinition extends Definition {
  static fromNothing() {
    const content = startOfContent,  ///
          stringLiteralPart = StringLiteralPart.fromContent(content),
          parts = [
            stringLiteralPart
          ],
          precedence = null,
          startOfContentPartDefinition = new StartOfContentPartDefinition(parts, precedence);

    return startOfContentPartDefinition;
  }
}
