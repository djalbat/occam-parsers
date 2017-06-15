'use strict';

class GroupOfPartsPart {
  constructor(parts) {
    this.parts = parts;
  }

  parse(context, noWhitespace) {
    noWhitespace = false; ///

    let nodes = [];

    const everyPartParsed = this.parts.every(function(part) {
      const partNodeOrNodes = part.parse(context, noWhitespace),
            partParsed = (partNodeOrNodes !== null);

      if (partParsed) {
        nodes = nodes.concat(partNodeOrNodes);

        return true;
      }
    });
    
    if (!everyPartParsed) {
      nodes = null;
    }

    return nodes;
  }

  toString() {
    const partsString = this.parts.reduce(function(partsString, part) {
            const partString = part.toString();

            if (partsString === null) {
              partsString = partString;
            } else {
              partsString = `${partsString} ${partString}`;
            }

            return partsString;
          }, null),
          string = `( ${partsString} )`;

    return string;
  }
}

module.exports = GroupOfPartsPart;
