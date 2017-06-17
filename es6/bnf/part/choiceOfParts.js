'use strict';

const nodeUtil = require('../../util/node'),
      arrayUtil = require('../../util/array');

class ChoiceOfPartsPart {
  constructor(parts) {
    this.parts = parts;
  }

  parse(context, noWhitespace) {
    noWhitespace = false; ///
    
    let nodes = null;
    
    this.parts.some(function(part) {
      const partNodeOrNodes = part.parse(context, noWhitespace),
            partParsed = (partNodeOrNodes !== null);

      if (partParsed) {
        nodes = partNodeOrNodes;
      }

      return partParsed;
    });
    
    return nodes;
  }

  toString() {
    const partsString = this.parts.reduce(function(partsString, part) {
            const partString = part.toString();
    
            if (partsString === null) {
              partsString = partString;
            } else {
              partsString = `${partsString} | ${partString}`;
            }
    
            return partsString;
          }, null),
          string = `( ${partsString} )`;
    
    return string;
  }

  static fromNodes(nodes, Parts) {
    let choiceOfPartsPart = null;
    
    nodes = arrayUtil.discardFirstAndLast(nodes);
    
    const secondNode = arrayUtil.second(nodes),
          secondNodeChoiceNode = nodeUtil.isNodeChoiceNode(secondNode);
    
    if (secondNodeChoiceNode) {
      nodes = arrayUtil.discardOdd(nodes);

      const noWhitespace = false,
            parts = nodes.map(function(node) {
              const part = node.generatePart(Parts, noWhitespace);
  
              return part;
            });
      
      choiceOfPartsPart = new ChoiceOfPartsPart(parts);
    }    
    
    return choiceOfPartsPart;
  }
}

module.exports = ChoiceOfPartsPart;
