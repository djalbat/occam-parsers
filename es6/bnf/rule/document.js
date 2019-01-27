'use strict';

const Rule = require('../rule'),
      ruleNames = require('../ruleNames'),
      DocumentNode = require('../node/document'),
      DocumentDefinition = require('../definition/document');

const { DocumentRuleName } = ruleNames;

class DocumentRule extends Rule {
  constructor() {
    const documentDefinition = new DocumentDefinition(),
          name = DocumentRuleName,
          definitions = [
            documentDefinition
          ],
          Node = DocumentNode;
    
    super(name, definitions, Node)
  }
}

module.exports = DocumentRule;
