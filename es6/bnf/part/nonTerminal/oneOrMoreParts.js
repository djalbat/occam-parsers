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
      let count = 0;

      parsePart();

      function parsePart() {
        let partNodes = [];

        partNodes = part.parse(partNodes, context, () => {
          let parsed = callback();

          if (!parsed) {
            parsed = parsePart();
          }

          return parsed;
        });

        const parsed = (partNodes !== null);

        if (parsed) {
          count++;

          nodes = [ ...partNodes, ...nodes ];
        }

        return parsed;
      }

      if (count === 0) {
        nodes = null;
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
