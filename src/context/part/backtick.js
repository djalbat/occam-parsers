"use strict";

import Context from "../../context";

export default class BacktickPartContext extends Context {
  isRestrained() {
    const restrained = true;

    return restrained;
  }

  static fromNothing(context) {
    const backtickPartContext = Context.fromNothing(BacktickPartContext, context);

    return backtickPartContext;
  }
}
