"use strict";

import { specialSymbols } from "occam-lexers";

import CollectionOfPartsPart from "./collectionOfParts";

import { OneOrMorePartsPartType } from "../../partTypes";

const { plus } = specialSymbols;

export default class OneOrMorePartsPart extends CollectionOfPartsPart {
  constructor(part) {
    const type = OneOrMorePartsPartType; ///

    super(type, part);
  }

  parse(nodes, context, callback) {
    const part = this.getPart();

    if (callback) {
      nodes  = parsePart(nodes, callback);

      function parsePart(nodes, callback) {
        const partNodes = part.parse(nodes, context, (nodes) => {
          const partNodes = callback(nodes);

          if (partNodes !== null) {
            nodes = partNodes;  ///
          } else {
            nodes = parsePart(nodes, callback);
          }

          return nodes;
        });

        return partNodes;
      }
    } else {
      let count = 0;

      for (;;) {
        const partNodes = part.parse(nodes, context);

        if (partNodes === null) {
          break;
        }

        nodes = partNodes;  ///

        count++;
      }

      if (count === 0) {
        nodes = null;
      }
    }

    return nodes;
  }

  asString() {
    const operatorString = plus,  ///
          string = super.asString(operatorString);

    return string;
  }

  clone() { return super.clone(OneOrMorePartsPart); }
}
