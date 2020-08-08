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

  parse(nodes, context, callback) {
    const part = this.getPart();

    if (callback) {
      const partNodes = callback(nodes);

      if (partNodes !== null) {
        nodes = partNodes;  ///
      } else {
        const partNodes = parsePart(nodes, callback);

        if (partNodes !== null) {
          nodes = partNodes;  ///
        }

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
      }
    } else {
      for (;;) {
        const partNodes = part.parse(nodes, context);

        if (partNodes === null) {
          break;
        }

        nodes = partNodes;  ///
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
}
