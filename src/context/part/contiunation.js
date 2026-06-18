"use strict";

import PartContext from "../../context/part";

import { continuationContext } from "../../utilities/context";

export default class ContiunationPartContext extends PartContext {
  constructor(context, state, childNodes, precedence, continuationParts, continuedPart, part, count, parsePart) {
    super(context, state, childNodes, precedence, continuationParts, continuedPart, part);

    this.count = count;
    this.parsePart = parsePart;
  }

  getCount() {
    return this.count;
  }

  getParsePart() {
    return this.parsePart;
  }

  continued(state, continuationParts) {
    let parsed;

    const part = this.getPart(),
          count = this.count + 1,
          context = this.getContext();

    continuationContext((context) => {
      parsed = this.parsePart(part, count, context);

      if (parsed) {
        context.commit(state);
      }
    }, state, continuationParts, context);

    return parsed;
  }

  static fromPartCountAndParsePart(part, count, parsePart, context) {
    const contiunationPartContext = PartContext.fromPart(ContiunationPartContext, part, count, parsePart, context);

    return contiunationPartContext;
  }
}
