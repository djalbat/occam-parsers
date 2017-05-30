'use strict';

const Production = require('../production'),
      PartsRule = require('../rule/parts');

class PartsProduction extends Production {
  constructor() {
    const partsRule = new PartsRule(),
          name = 'parts',
          rules = [
            partsRule
          ],
          Node = null;
    
    super(name, rules, Node)
  }
}

module.exports = PartsProduction;
