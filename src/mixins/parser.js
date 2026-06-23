"use strict";

import { emptyFrame } from "../frame";
import { topmostContext } from "../utilities/context"

function parse(tokens, rule = this.startRule) {
  let node = null;

  const parser = this;  ///

  topmostContext((context) => {
    const ruleFrame = rule.parse(emptyFrame, context);

    if (ruleFrame !== null) {
      node = ruleFrame.getNode();
    }
  }, parser, tokens);

  return node;
}

const parserMixins = {
  parse
};

export default parserMixins;
