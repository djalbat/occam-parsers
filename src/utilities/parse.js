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
    parsed = callback();

    if (parsed) {
      parsed = (callAhead !== null) ?
                  callAhead() :
                    true;
    }
  } else {
    const part = parts[index],
          partLookAhead = part.isLookAhead(),
          partCallAhead = (callAhead === null);

    index++;

    if (partLookAhead && partCallAhead) {
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
      parsed = part.parse(nodes, state, () => {
        const parsed = parsePartOfParts(index, parts, nodes, state, callback, callAhead);

        return parsed;
      }, callAhead);
    }
  }

  return parsed;
}
