'use strict';

const Production = require('../production'),
      NonTerminalNode = require('../../common/node/nonTerminal'),
      NameSignificantTokenTypeRule = require('../rule/significantTokenType/name');

class ProductionNameProduction extends Production {
  constructor() {
    const nameSignificantTokenTypeRule = new NameSignificantTokenTypeRule(),
          name = 'productionName',
          rules = [
            nameSignificantTokenTypeRule
          ],
          Node = NonTerminalNode;
    
    super(name, rules, Node)
  }
}

module.exports = ProductionNameProduction;
