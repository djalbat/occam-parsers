"use strict";

import { specialSymbols } from "occam-lexers";

import CollectionOfPartsPart from "./collectionOfParts";

import { whilst } from "../../../utilities/synchronous";
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

    const part = this.getPart(),
          partsNodes = [];

    let terminate = false;

    if (callback) {
      parsePart(context, callback);

      function parsePart(context, callback) {
        let parsed;

        if (terminate) {
          parsed = true;
        } else {
          parsed = callback();

          if (parsed) {
            terminate = true;
          } else {
            const partNodeOrNodes = part.parse(context, () => parsePart(context, callback));

            parsed = (partNodeOrNodes !== null);

            if (parsed) {
              unshift(partsNodes, partNodeOrNodes);
            } else {
              terminate = true;
            }
          }
        }

        return parsed;
      }
    } else {
      whilst(() => {
        if (!terminate) {
          const partNodeOrNodes = part.parse(context);

          if (partNodeOrNodes === null) {
            terminate = true;
          } else {
            push(partsNodes, partNodeOrNodes);
          }
        }

        return terminate;
      });
    }

    nodes = partsNodes; ///

    return nodes;
  }

  asString() {
    const operatorString = asterisk,  ///
          string = super.asString(operatorString);

    return string;
  }

  clone() { return super.clone(ZeroOrMorePartsPart); }
}
