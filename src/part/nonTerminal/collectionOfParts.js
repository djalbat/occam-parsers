"use strict";

import NonTerminalPart from "../../part/nonTerminal";

export default class CollectionOfPartsPart extends NonTerminalPart {
  constructor(type, part) {
    super(type);

    this.part = part;
  }

  getPart() {
    return this.part;
  }
  
  asString(operatorString) {
    const partString = this.part.asString(),
          string = `${partString}${operatorString}`;

    return string;
  }
}
