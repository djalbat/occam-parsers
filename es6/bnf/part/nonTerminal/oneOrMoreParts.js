"use strict";

import { specialSymbols } from "occam-lexers";

import SequenceOfPartsPart from "./sequenceOfParts";
import ZeroOrMorePartsPart from "./zeroOrMoreParts";

import { OneOrMorePartsPartType } from "../../partTypes";

const { plus } = specialSymbols;

export default class OneOrMorePartsPart extends SequenceOfPartsPart {
  constructor(part) {
    const type = OneOrMorePartsPartType; ///

    super(type, part);
  }
  
  parse(context) {
    let nodes = null;
    
    const part = this.getPart(),
          partNodeOrNodes = part.parse(context),
          parsed = (partNodeOrNodes !== null);

    if (parsed) {
      nodes = (partNodeOrNodes instanceof Array) ?
                partNodeOrNodes :
                  [partNodeOrNodes];

      const oneOrMorePartsPart = this,  ///
            zeroOrMorePartsPart = ZeroOrMorePartsPart.fromOneOrMorePartsPart(oneOrMorePartsPart),
            zeroOrMorePartsPartNodeOrNodes = zeroOrMorePartsPart.parse(context);

      nodes = nodes.concat(zeroOrMorePartsPartNodeOrNodes);
    }

    return nodes;
  }

  clone() { return super.clone(OneOrMorePartsPart); }

  asString() {
    const operatorString = plus,  ///
          string = super.asString(operatorString);

    return string;
  }
}
