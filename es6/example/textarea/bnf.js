"use strict";

import withStyle from "easy-with-style";  ///

import Textarea from "../textarea";

class BNFTextarea extends Textarea {
  getBNF() {
    const value = this.getValue(),
          bnf = value; ///

    return bnf;
  }

  setBNF(bnf) {
    const value = bnf;

    this.setValue(value);
  }

  parentContext() {
    const getBNF = this.getBNF.bind(this),
          setBNF = this.setBNF.bind(this);

    return ({
      getBNF,
      setBNF
    });
  }

  static tagName = "textarea";

  static defaultProperties = {
    className: "bnf",
    spellCheck: "false"
  };
}

export default withStyle(BNFTextarea)`

  margin-bottom: 0;
  
`;
