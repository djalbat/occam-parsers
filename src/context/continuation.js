"use strict";

import Context from "../context";

export default class ContinuationContext extends Context {
  static fromNothing(context) { return Context.fromNothing(ContinuationContext, context); }
}
