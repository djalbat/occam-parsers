"use strict";

import { startRuleFromRules, ruleMapFromRules } from "../utilities/rules";

export function parserFromRules(Class, rules) {
  const startRule = startRuleFromRules(rules),
        ruleMap = ruleMapFromRules(rules),
        parser = new Class(startRule, ruleMap);

  return parser;
}
