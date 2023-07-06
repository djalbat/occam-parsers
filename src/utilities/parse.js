"use strict";

import { arrayUtilities } from "necessary";

const { push } = arrayUtilities;

export function parsePart(part, nodes, state, callback) {
  let parsed;

  const index = 0,
        parts = [
          part
        ];

  parsed = parsePartOfParts(index, parts, nodes, state, callback);

  return parsed;
}

export function parseParts(parts, nodes, state, callback) {
  let parsed;

  const index = 0;

  parsed = parsePartOfParts(index, parts, nodes, state, callback);

  return parsed;
}

function parsePartOfParts(index, parts, nodes, state, callback) {
  let parsed;

  const partsLength = parts.length;

  if (index === partsLength) {
    parsed = (callback !== null) ?
               callback() :
                 true;
  } else {
    const part = parts[index];

    index++;

    if (callback === null) {
      const partLookAhead = part.isLookAhead();

      if (partLookAhead) {
        let remainingNodes;

        parsed = part.parse(nodes, state, () => {
          remainingNodes = [];

          const parsed = parsePartOfParts(index, parts, remainingNodes, state, callback);

          return parsed;
        });

        if (parsed) {
          push(nodes, remainingNodes);
        }
      } else {
        parsed = part.parse(nodes, state, callback);

        if (parsed) {
          parsed = parsePartOfParts(index, parts, nodes, state, callback);
        }
      }
    } else {
      parsed = part.parse(nodes, state, () => {
        const parsed = parsePartOfParts(index, parts, nodes, state, callback);

        return parsed;
      });
    }
  }

  return parsed;
}