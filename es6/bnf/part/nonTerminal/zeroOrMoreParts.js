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
    let parsed;

    const part = this.getPart();

    if (callback) {
      parsed = callback();

      if (!parsed) {
        parsePart();

        function parsePart() {
          const parsed = part.parse(nodes, context, () => {
            let parsed = callback();

            if (!parsed) {
              parsed = parsePart();
            }

            return parsed;
          });

          return parsed;
        }
      }
    } else {
      for (;;) {
        parsed = part.parse(nodes, context);

        if (!parsed) {
          break;
        }
      }
    }

    parsed = true;

    return parsed;
  }

  asString() {
    const operatorString = asterisk,  ///
          string = super.asString(operatorString);

    return string;
  }

  clone() { return super.clone(ZeroOrMorePartsPart); }
}
