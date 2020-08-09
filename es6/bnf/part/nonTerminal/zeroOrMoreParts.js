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
      const parsed = callback();

      if (!parsed) {
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
            nodes = [ ...partNodes, ...nodes ];
          }

          return parsed;
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
