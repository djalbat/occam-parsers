"use strict";

import { topmostContext } from "../utilities/context"

function parse(tokens, rule = this.startRule) {
  let node = null;

  const parser = this,
        context = topmostContext(parser, tokens), ///
        ruleFrame = rule.parse(context);

  if (ruleFrame !== null) {
    node = ruleFrame.getNode();
  }

  return node;
}

const parserMixins = {
  parse
};

export default parserMixins;
