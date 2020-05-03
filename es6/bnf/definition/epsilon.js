"use strict";

import Definition from "../definition";
import EpsilonPart from "../part/terminal/epsilon";

export default class EpsilonDefinition extends Definition {
  constructor() {
    const epsilonPart = new EpsilonPart(),
          parts = [
            epsilonPart
          ];

    super(parts)
  }
}
