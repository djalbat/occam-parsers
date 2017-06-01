'use strict';

const Rule = require('../../rule'),
      ProductionNamePart = require('../../../common/part/productionName');

class EndOfLineProductionNameRule extends Rule {
  constructor() {
    const noWhitespace = false,
          endOfLineProductionName = 'endOfLine',
          endOfLineProductionNamePart = new ProductionNamePart(endOfLineProductionName, noWhitespace),
          parts = [
            endOfLineProductionNamePart
          ];
    
    super(parts)
  }
}

module.exports = EndOfLineProductionNameRule;
