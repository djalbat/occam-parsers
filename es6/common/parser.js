"use strict";

import Configuration from "./configuration";

import { first } from "../utilities/array";

class CommonParser {
  constructor(rules) {
    this.rules = rules;
  }

  getRules() {
    return this.rules;
  }

  parse(tokens, rule = null) {
    let node = null;

    if (rule === null) {
      const rulesLength = this.rules.length;

      if (rulesLength > 0) {
        const firstRule = first(this.rules);

        rule = firstRule; ///
      }
    }

    if (rule !== null) {
      const configuration = Configuration.fromTokensAndRules(tokens, this.rules);

      node = rule.parse(configuration);
    }

    return node;
  }
}

module.exports = CommonParser;
