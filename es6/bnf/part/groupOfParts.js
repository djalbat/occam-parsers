'use strict';

class GroupOfPartsPart {
  constructor(parts, noWhitespace = false) {
    this.parts = parts;
    this.noWhitespace = noWhitespace;
  }

  parse(context, noWhitespace) {
    noWhitespace = this.noWhitespace; ///

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
    const string = this.parts.reduce(function(string, part) {
      const partString = part.toString();

      if (string === null) {
        string = partString;
      } else {
        string = `${string} ${partString}`;
      }

      return string;
    }, null);

    return string;
  }
}

module.exports = GroupOfPartsPart;
