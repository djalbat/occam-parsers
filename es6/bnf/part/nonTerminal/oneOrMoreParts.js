"use strict";

import { specialSymbols } from "occam-lexers";

import CollectionOfPartsPart from "./collectionOfParts";

import { whilst } from "../../../utilities/synchronous";
import { push, unshift } from "../../../utilities/array";
import { OneOrMorePartsPartType } from "../../partTypes";

const { plus } = specialSymbols;

export default class OneOrMorePartsPart extends CollectionOfPartsPart {
  constructor(part) {
    const type = OneOrMorePartsPartType; ///

    super(type, part);
  }

  parse(context, callback) {
    let nodes = null;

    const part = this.getPart(),
          partsNodes = [];

    let terminate = false,
        count = 0;

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

              count++;
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

            count++;
          }
        }

        return terminate;
      });
    }

    if (count >= 1) {
      nodes = partsNodes; ///
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
