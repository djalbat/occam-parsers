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
      getRuleName,
      setRuleName
    });
  }

  static tagName = "textarea";

  static defaultProperties = {
    className: "ruleName",
    spellCheck: "false"
  };
}

export default withStyle(RuleNameInput)`

  margin-bottom: 0;
  
`;
