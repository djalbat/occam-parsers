"use strict";

import withStyle from "easy-with-style";  ///

import { Input } from "easy";

class RuleNameInput extends Input {
  getRuleName() {
    const value = this.getValue(),
          ruleName = value; ///

    return ruleName;
  }

  parentContext() {
    const getRuleName = this.getRuleName.bind(this);

    return ({
      getRuleName
    });
  }

  static defaultProperties = {
    className: "rule-name",
    spellCheck: "false"
  };
}

export default withStyle(RuleNameInput)`

  border: 1px solid darkgrey;
  padding: 0.25rem;
  font-size: 1.2rem;
  font-family: monospace;
  
`;
