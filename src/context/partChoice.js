"use strict";

import Context from "../context";

export default class PartChoiceContext extends Context {
  static fromPartChoice(partChoice, context) {
    const partChoiceContext = Context.fromNothing(PartChoiceContext, context);

    return partChoiceContext;
  }
}
