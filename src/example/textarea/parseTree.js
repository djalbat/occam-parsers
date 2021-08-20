"use strict";

import Textarea from "../textarea";

import { EMPTY_STRING } from "../../constants";

export default class ParseTreeTextarea extends Textarea {
  setParseTree(parseTree) {
    if (parseTree !== null) {
      parseTree.shiftLine();  //

      const parseTreeString = parseTree.asString(),
            value = parseTreeString;  ///

      this.setValue(value);
    } else {
      this.clearParseTree();
    }
  }

  clearParseTree() {
    const value = EMPTY_STRING;

    this.setValue(value);
  }

  parentContext() {
    const setParseTree = this.setParseTree.bind(this),
          clearParseTree = this.clearParseTree.bind(this);

    return ({
      setParseTree,
      clearParseTree
    });
  }

  static defaultProperties = {
    className: "tokens",
    spellCheck: "false",
    readOnly: true
  };
}
