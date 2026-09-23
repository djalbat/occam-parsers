"use strict";

import Context from "../../context";

export default class RestrictedPartPartContext extends Context {
  static fromNothing(context) {
    const restrictedPartPartContext = Context.fromNothing(RestrictedPartPartContext, context);

    return restrictedPartPartContext;
  }
}
