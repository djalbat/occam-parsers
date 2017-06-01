'use strict';

const Production = require('../production'),
      NonTerminalNode = require('../../common/node/nonTerminal'),
      SignificantTokenTypeRule = require('../rule/significantTokenType');

class ProductionNameProduction extends Production {
  constructor() {
    const nameSignificantTokenType = 'name',
          nameSignificantTokenTypeRule = new SignificantTokenTypeRule(nameSignificantTokenType),
          name = 'productionName',
          rules = [
            nameSignificantTokenTypeRule
          ],
          Node = NonTerminalNode;
    
    super(name, rules, Node)
  }
}

module.exports = ProductionNameProduction;
