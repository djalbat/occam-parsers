'use strict';

const Context = require('./context'),
      parserUtil = require('../util/parser');

class CommonParser {
  constructor(productions) {
    this.productions = productions;
  }

  getProductions() {
    return this.productions;
  }
  
  nodeFromLines(lines, production = null) {
    const tokens = parserUtil.tokensFromLines(lines),
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

  findProduction(productionName) { return parserUtil.findProduction(productionName, this.productions); }
}

module.exports = CommonParser;

function first(array) { return array[0]; }
