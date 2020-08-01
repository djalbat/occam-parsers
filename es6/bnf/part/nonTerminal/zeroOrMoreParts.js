"use strict";

import { specialSymbols } from "occam-lexers";

import CollectionOfPartsPart from "./collectionOfParts";

import { push, unshift } from "../../../utilities/array";
import { ZeroOrMorePartsPartType } from "../../partTypes";

const { asterisk } = specialSymbols;

export default class ZeroOrMorePartsPart extends CollectionOfPartsPart {
  constructor(part) {
    const type = ZeroOrMorePartsPartType; ///

    super(type, part);
  }

  parse(context, callback) {
    let nodes;

    const part = this.getPart();

    if (callback) {
      const parsed = callback();

      if (parsed) {
        nodes = [];
      } else {
        const partsNodes = [],
              parsed = parseParts(callback);

        nodes = parsed ?
                  partsNodes :
                    null;

        function parseParts(callback) {
          const partNodeOrNodes = part.parse(context, () => callback() || parseParts(callback)), ///
                parsed = (partNodeOrNodes !== null);

          if (parsed) {
            unshift(partsNodes, partNodeOrNodes);
          }

          return parsed;
        }
      }
    } else {
      const partsNodes = [];

      for (;;) {
        const partNodeOrNodes = part.parse(context);

        if (partNodeOrNodes === null) {
          break;
        }

        push(partsNodes, partNodeOrNodes);
      }

      nodes = partsNodes; ///
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
