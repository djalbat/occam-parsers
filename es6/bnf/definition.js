'use strict';

const SequenceOfPartsPart = require('./part/sequenceOfParts');

class Definition {
  constructor(parts) {
    this.parts = parts;
  }

  getParts() {
    return this.parts;
  }

  getFirstPart() {
    const firstPart = first(this.parts);

    return firstPart;
  }

  getPartsLength() {
    const partsLength = this.parts.length;

    return partsLength;
  }

  getAllButFirstParts() {
    const allButFirstParts = this.parts.slice(1);

    return allButFirstParts;
  }

  parse(context, noWhitespace) {
    let nodes = [];

    const savedIndex = context.savedIndex(),
          everyPartParsed = this.parts.every(function(part) {
            const partNodeOrNodes = part.parse(context, noWhitespace),
                  partParsed = (partNodeOrNodes !== null);

            if (partParsed) {
              nodes = nodes.concat(partNodeOrNodes);

              noWhitespace = false;
            }

            return partParsed;
          });

    if (!everyPartParsed) {
      context.backtrack(savedIndex);

      nodes = null;
    }

    return nodes;
  }
}

module.exports = Definition;

function first(array) { return array[0]; }
