'use strict';

const Rule = require('../../rule'),
      ProductionNamePart = require('../../../common/part/productionName');

class NoWhitespaceProductionNameRule extends Rule {
  constructor() {
    const noWhitespace = false,
          noWhitespaceProductionName = 'noWhitespace',
          noWhitespaceProductionNamePart = new ProductionNamePart(noWhitespaceProductionName, noWhitespace),
          parts = [
            noWhitespaceProductionNamePart
          ];
    
    super(parts)
  }
}

module.exports = NoWhitespaceProductionNameRule;
