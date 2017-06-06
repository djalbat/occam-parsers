'use strict';

const Context = require('./context'),
      RightRecursiveProduction = require('./production/rightRecursive'),
      NonLeftRecursiveProduction = require('./production/nonLeftRecursive');

class CommonParser {
  constructor(productions) {
    productions = eliminateLeftRecursiveProductions(productions); ///

    this.productions = productions;
  }

  getProductions() {
    return this.productions;
  }
  
  nodeFromLines(lines, production = null) {
    const tokens = tokensFromLines(lines),
          node = this.parse(tokens, production);
    
    return node;
  }

  parse(tokens, production) {
    let node = null;

    if (production === null) {
      const productionsLength = this.productions.length;

      if (productionsLength > 0) {
        const firstProduction = first(this.productions);

        production = firstProduction; ///
      }
    }

    if (production !== null) {
      const context = new Context(tokens, this.productions),
            noWhitespace = false,
            nodeOrNodes = production.parse(context, noWhitespace);

      if (nodeOrNodes !== null) {
        node = (nodeOrNodes instanceof Array) ?
                 first(nodeOrNodes) :
                   nodeOrNodes;
      }
    }

    return node;
  }

  findProduction(productionName) {
    const name = productionName,  ///
          index = this.indexOfProductionByName(name),
          production = (index !== null) ?
                         this.productions[index] :
                           null;

    return production;
  }

  indexOfProductionByName(name) {
    let index,
        foundIndex = null;

    this.productions.some(function(production, index) {
      const productionName = production.getName();

      if (productionName === name) {
        foundIndex = index;

        return true;
      } else {
        return false;
      }
    });

    index = foundIndex; ///

    return index;
  }
}

module.exports = CommonParser;

function eliminateLeftRecursiveProductions(productions) {
  productions = productions.reduce(function(productions, production) {
    const productionLeftRecursive = production.isLeftRecursive();

    if (productionLeftRecursive) {
      const nonLeftRecursiveProduction = NonLeftRecursiveProduction.fromProduction(production),
            rightRecursiveProduction = RightRecursiveProduction.fromProduction(production);

      productions.push(nonLeftRecursiveProduction);      
      productions.push(rightRecursiveProduction);
    } else {
      productions.push(production);
    }

    return productions;
  }, []);

  return productions;
}

function tokensFromLines(lines) {
  const tokens = lines.reduce(function(tokens, line) {
   const lineTokens = line.getTokens();

    tokens = tokens.concat(lineTokens);

    return tokens;
  }, []);

  return tokens;
}

function first(array) { return array[0]; }
