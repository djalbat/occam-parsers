'use strict';

const NonTerminalPart = require('../../part/nonTerminal'),
      bnfUtilities = require('../../../utilities/bnf'),
      arrayUtilities = require('../../../utilities/array');

const { isNodeChoiceNode } = bnfUtilities,
      { second, discardOdd, discardLastThenFirst } = arrayUtilities;

const type = 'ChoiceOfParts';

class ChoiceOfPartsPart extends NonTerminalPart {
  constructor(parts) {
    super(type);
    
    this.parts = parts;
  }
  
  getParts() {
    return this.parts;
  }

  parse(configuration, noWhitespace) {
    noWhitespace = false; ///
    
    let nodes = null;
    
    this.parts.some(function(part) {
      const partNodeOrNodes = part.parse(configuration, noWhitespace);

      if (partNodeOrNodes !== null) {
        nodes = partNodeOrNodes;  ///

        return true;
      }
    });
    
    return nodes;
  }

  asString() {
    const partsString = this.parts.reduce(function(partsString, part) {
            const partString = part.asString();
    
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
    
    nodes = discardLastThenFirst(nodes);
    
    const secondNode = second(nodes),
          secondNodeChoiceNode = isNodeChoiceNode(secondNode);
    
    if (secondNodeChoiceNode) {
      nodes = discardOdd(nodes);

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

Object.assign(ChoiceOfPartsPart, {
  type
});

module.exports = ChoiceOfPartsPart;
