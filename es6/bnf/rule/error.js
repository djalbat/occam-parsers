'use strict';

const Rule = require('../rule'),
      ruleNames = require('../ruleNames'),
      ErrorNode = require('../node/error'),
      ErrorDefinition = require('../definition/error');

const { ErrorRuleName } = ruleNames;

class ErrorRule extends Rule {
  constructor() {
    const errorDefinition = new ErrorDefinition(),
          name = ErrorRuleName,
          definitions = [
            errorDefinition
          ],
          Node = ErrorNode;
    
    super(name, definitions, Node);
  }
}

module.exports = ErrorRule;
