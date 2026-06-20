"use strict";

import { topmostContext } from "../utilities/context"

function parse(tokens, rule = this.startRule) {
  let node = null;

  const parser = this;  ///

  topmostContext((context) => {
    const frame = rule.parse(context);

    if (frame !== null) {
      node = frame.getNode();
    }
  }, parser, tokens);

  return node;
}

const parserMixins = {
  parse
};

export default parserMixins;
