"use strict";

import { specialSymbols } from "occam-lexers";

import NonTerminalPart from "../../part/nonTerminal";

import { whilst } from "../../../utilities/synchronous";
import { push, unshift, concat } from "../../../utilities/array";
import { OptionalPartPartType } from "../../partTypes";

const { questionMark } = specialSymbols;

export default class OptionalPartPart extends NonTerminalPart {
  constructor(part) {
    const type = OptionalPartPartType; ///

    super(type);

    this.part = part;
  }

  getPart() {
    return this.part;
  }

  parse(context, callback) {
    let nodes = [];

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
            } else {
              terminate = true;
            }
          }
        }

        count++;

        return parsed;
      }
    } else {
      whilst(() => {
        if (count === 1) {
          terminate = true;
        }

        if (!terminate) {
          const partNodeOrNodes = part.parse(context);

          if (partNodeOrNodes === null) {
            terminate = true;
          } else {
            push(partsNodes, partNodeOrNodes);
          }
        }

        count++;

        return terminate;
      });
    }

    concat(nodes, partsNodes);

    return nodes;
  }

  asString() {
    const operatorString = questionMark,  ///
          partString = this.part.asString(),
          string = `${partString}${operatorString}`;

    return string;
  }

  clone() { return super.clone(OptionalPartPart, this.part); }
}
