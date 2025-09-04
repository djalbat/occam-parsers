"use strict";

import Definition from "../definition";
import StringLiteralPart from "../part/terminal/stringLiteral";

export default class StringLiteralDefinition extends Definition {
  static fromContent(content) {
    const stringLiteralPart = StringLiteralPart.fromContent(content),
          parts = [
            stringLiteralPart
          ],
          precedence = null,
          stringLiteralDefinition = new StringLiteralDefinition(parts, precedence);

    return stringLiteralDefinition;
  }
}
