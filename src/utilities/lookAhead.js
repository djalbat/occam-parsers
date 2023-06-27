"use strict";

import { arrayUtilities } from "necessary";

import { isPartLookAhead } from "./part";

const { push } = arrayUtilities;

export function parsePart(part, nodes, state, callback) {
  let parsed;

  const parts = [
    part
  ];

  parsed = parseParts(parts, nodes, state, callback);

  return parsed;
}

export function parseParts(parts, nodes, state, callback) {
  const index = 0,
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

    if (callback !== null) {
      index++;

      const intermediatePartCallback = () => {
        const parsed = parsePartOfParts(index, parts, nodes, state, callback);

        return parsed;
      };

      Object.assign(intermediatePartCallback, {
        callback,
        part
      });

      state.callbacks.push(intermediatePartCallback);

      parsed = part.parse(nodes, state, intermediatePartCallback);

      state.callbacks.pop();

    } else {
      const partLookAhead = isPartLookAhead(part);

      if (partLookAhead) {
        let remainingNodes;

        index++;

        const initialPartCallback = () => {
          remainingNodes = [];

          const parsed = parsePartOfParts(index, parts, remainingNodes, state, callback);

          return parsed;
        };

        Object.assign(initialPartCallback, {
          callback,
          part
        });

        state.callbacks.push(initialPartCallback);

        parsed = part.parse(nodes, state, initialPartCallback);

        state.callbacks.pop();

        if (parsed) {
          push(nodes, remainingNodes);
        }

      } else {
        parsed = part.parse(nodes, state, callback);

        if (parsed) {
          index++;

          parsed = parsePartOfParts(index, parts, nodes, state, callback);
        }
      }
    }
  }

  return parsed;
}
