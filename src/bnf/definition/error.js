"use strict";

import Definition from "../definition";
import WildcardPart from "../part/terminal/wildcard";

export default class ErrorDefinition extends Definition {
  constructor() {
    const wildcardPart = new WildcardPart(),
          parts = [
            wildcardPart
          ];

    super(parts)
  }
}
