"use strict";

import { isValid } from "../utilities/frame";
import { topmostContext } from "../utilities/context";

function parse(tokens, rule = this.startRule) {
  let node = null;

  const parser = this,
        context = topmostContext(parser, tokens), ///
        ruleFrame = rule.parse(context),
        ruleFrameValid = isValid(ruleFrame);

  if (ruleFrameValid) {
    node = ruleFrame.getNode();
  }

  return node;
}

const parserMixins = {
  parse
};

export default parserMixins;
