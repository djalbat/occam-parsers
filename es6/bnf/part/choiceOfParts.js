'use strict';

const necessary = require('necessary');

const bnfUtilities = require('../../utilities/bnf'),
      arrayUtilities = require('../../utilities/array');

const { array } = necessary;

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

  static fromNodes(nodes) {
    let choiceOfPartsPart = null;
    
    nodes = arrayUtilities.discardLastThenFirst(nodes);
    
    const secondNode = array.second(nodes),
          secondNodeChoiceNode = bnfUtilities.isNodeChoiceNode(secondNode);
    
    if (secondNodeChoiceNode) {
      nodes = arrayUtilities.discardOdd(nodes);

      const noWhitespace = false,
            parts = nodes.map(function(node) {
              const part = node.generatePart(noWhitespace);
  
              return part;
            });
      
      choiceOfPartsPart = new ChoiceOfPartsPart(parts);
    }    
    
    return choiceOfPartsPart;
  }
}

module.exports = ChoiceOfPartsPart;
