"use strict";

import { topmostContext } from "../utilities/context"

function parse(tokens, rule = this.startRule) {
  let node;

  const parser = this;  ///

  topmostContext((context) => {
    rule.parse(context);

    node = context.getNode();
  }, parser, tokens);

  return node;
}

const parserMixins = {
  parse
};

export default parserMixins;
