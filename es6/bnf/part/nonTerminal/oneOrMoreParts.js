"use strict";

import { specialSymbols } from "occam-lexers";

import CollectionOfPartsPart from "./collectionOfParts";

import { push } from "../../../utilities/array";
import { OneOrMorePartsPartType } from "../../partTypes";

const { plus } = specialSymbols;

export default class OneOrMorePartsPart extends CollectionOfPartsPart {
  constructor(part) {
    const type = OneOrMorePartsPartType; ///

    super(type, part);
  }

  parse(nodes, context, callback) {
    let parsed;

    const part = this.getPart(),
          savedIndex = context.getSavedIndex(),
          partsNodes = [];

    let count = 0;

    if (callback) {
      const parsePart = () => {
        const parsed = part.parse(partsNodes, context, () => {
          let parsed = callback();

          if (!parsed) {
            parsed = parsePart();
          }

          return parsed;
        });

        if (parsed) {
          count++;
        }

        return parsed;
      }

      parsePart();
    } else {
      for (;;) {
        const parsed = part.parse(partsNodes, context);

        if (!parsed) {
          break;
        }

        count++;
      }
    }

    parsed = (count !== 0);

    if (parsed) {
      push(nodes, partsNodes);
    }

    if (!parsed) {
      context.backtrack(savedIndex);
    }

    return parsed;
  }

  asString() {
    const operatorString = plus,  ///
          string = super.asString(operatorString);

    return string;
  }

  clone() { return super.clone(OneOrMorePartsPart); }
}
