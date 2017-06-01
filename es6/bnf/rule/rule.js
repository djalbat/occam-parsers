'use strict';

const Rule = require('../rule'),
      OneOrMorePartsPart = require('../../common/part/oneOrMoreParts');

class RuleRule extends Rule {
  constructor() {
    const terminalPart = null,
          noWhitespace = false,
          partProductionName = 'part',
          oneOrMorePartProductionNamePartsPart = new OneOrMorePartsPart(terminalPart, partProductionName, noWhitespace),
          parts = [
            oneOrMorePartProductionNamePartsPart
          ];

    super(parts)
  }
}

module.exports = RuleRule;
