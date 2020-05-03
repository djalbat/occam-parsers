"use strict";

import Definition from "../definition";
import EpsilonPart from "../part/terminal/epsilon";

class EpsilonDefinition extends Definition {
  constructor() {
    const epsilonPart = new EpsilonPart(),
          parts = [
            epsilonPart
          ];

    super(parts)
  }
}

module.exports = EpsilonDefinition;
