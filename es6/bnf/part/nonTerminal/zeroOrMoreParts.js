"use strict";

import { specialSymbols } from "occam-lexers";

import CollectionOfPartsPart from "./collectionOfParts";

import { ZeroOrMorePartsPartType } from "../../partTypes";

const { asterisk } = specialSymbols;

export default class ZeroOrMorePartsPart extends CollectionOfPartsPart {
  constructor(part) {
    const type = ZeroOrMorePartsPartType; ///

    super(type, part);
  }

  parse(context) {
    let nodes = [];
    
    const part = this.getPart();

    for(;;) {
      const partNodeOrNodes = part.parse(context),
            parsed = (partNodeOrNodes !== null);

      if (parsed) {
        nodes = nodes.concat(partNodeOrNodes);
      } else {
        break;
      }
    }

    return nodes;
  }

  asString() {
    const operatorString = asterisk,  ///
          string = super.asString(operatorString);

    return string;
  }

  clone() { return super.clone(ZeroOrMorePartsPart); }

  static fromOneOrMorePartsPart(oneOrMorePartsPart) {
    const part = oneOrMorePartsPart.getPart(),
          zeroOrMorePartsPart = new ZeroOrMorePartsPart(part);

    return zeroOrMorePartsPart;
  }
}
