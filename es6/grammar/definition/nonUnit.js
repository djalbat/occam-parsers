'use strict';

const Definition = require('../../extendedBNF/definition'),
      UnitDefinition = require('../definition/unit');

class NonUnitDefinition extends Definition {
  static fromDefinition(definition) {
    let nonUnitDefinition = null;

    const unitDefinition = UnitDefinition.fromDefinition(definition);
    
    if (unitDefinition === null) {
      const parts = definition.getParts();
      
      nonUnitDefinition = new NonUnitDefinition(parts);
    }

    return nonUnitDefinition;
  }
}

module.exports = NonUnitDefinition;
