'use strict';

const Rule = require('../../rule'),
      ProductionNamePart = require('../../../common/part/productionName');

class RegularExpressionProductionNameRule extends Rule {
  constructor() {
    const noWhitespace = false,
          regularExpressionProductionName = 'regularExpression',
          regularExpressionProductionNamePart = new ProductionNamePart(regularExpressionProductionName, noWhitespace),
          parts = [
            regularExpressionProductionNamePart
          ];
    
    super(parts)
  }
}

module.exports = RegularExpressionProductionNameRule;
