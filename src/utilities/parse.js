"use strict";

import { arrayUtilities } from "necessary";

const { push } = arrayUtilities;

export function parsePart(part, nodes, state, callback, callAhead) {
  let parsed;

  const index = 0,
        parts = [
          part
        ];

  parsed = parsePartOfParts(index, parts, nodes, state, callback, callAhead);

  return parsed;
}

export function parseParts(parts, nodes, state, callback, callAhead) {
  let parsed;

  const index = 0;

  parsed = parsePartOfParts(index, parts, nodes, state, callback, callAhead);

  return parsed;
}

function parsePartOfParts(index, parts, nodes, state, callback, callAhead) {
  let parsed;

  const partsLength = parts.length;

  if (index === partsLength) {
    parsed = (callback !== null) ?
               callback() :
                 true;
  } else {
    const part = parts[index];

    index++;

    if (callAhead === null) {
      const partLookAhead = part.isLookAhead();

      if (partLookAhead) {
        let partNodes;

        parsed = part.parse(nodes, state, callback, () => {
          partNodes = [];

          const nodes = partNodes,  ///
                parsed = parsePartOfParts(index, parts, nodes, state, callback, callAhead);

          return parsed;
        });

        if (parsed) {
          push(nodes, partNodes);
        }
      } else {
        parsed = part.parse(nodes, state, callback, callAhead);

        if (parsed) {
          parsed = parsePartOfParts(index, parts, nodes, state, callback, callAhead);
        }
      }
    } else {
      parsed = part.parse(nodes, state, callback, () => {
        let parsed;

        parsed = parsePartOfParts(index, parts, nodes, state, callback, callAhead);

        return parsed;
      });
    }
  }

  return parsed;
}
