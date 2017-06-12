'use strict';

class Definition {
  constructor(parts) {
    this.parts = parts;
  }

  getParts() {
    return this.parts;
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
