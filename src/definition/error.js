"use strict";

import Definition from "../definition";
import WildcardPart from "../part/terminal/wildcard";

export default class ErrorDefinition extends Definition {
  static fromNothing() {
    const wildcardPart = WildcardPart.fromNothing(),
          parts = [
            wildcardPart
          ],
          precedence = null,
          errorDefinition = new ErrorDefinition(parts, precedence);

    return errorDefinition;
  }
}
