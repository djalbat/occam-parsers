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

  parse(nodes, state, callback) {
    let parsed;

    const part = this.getPart();

    if (callback !== null) {
      parsed = callback();

      if (!parsed) {
        const parsePart = () => {
          const parsed = part.parse(nodes, state, () => {
            let parsed = callback();

            if (!parsed) {
              parsed = parsePart();
            }

            return parsed;
          });

          return parsed;
        }

        parsed = parsePart();
      }
    } else {
      const callback = null;

      for (;;) {
        parsed = part.parse(nodes, state, callback);

        if (!parsed) {
          break;
        }
      }

      parsed = true;
    }

    return parsed;
  }

  asString() {
    const operatorString = asterisk,  ///
          string = super.asString(operatorString);

    return string;
  }

  clone() { return super.clone(ZeroOrMorePartsPart); }
}
