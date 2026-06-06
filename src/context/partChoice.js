"use strict";

import { arrayUtilities } from "necessary";

import Context from "../context";

const { push } = arrayUtilities;

export default class PartChoiceContext extends Context {
  constructor(context, offset, index, precedence, childNodes) {
    super(context, offset, index);

    this.precedence = precedence;
    this.childNodes = childNodes;
  }

  getPrecedence() {
    return this.precedence;
  }

  addChildNode(childNode)  {
    this.childNodes.push(childNode);
  }

  addChildNodes(childNodes) {
    push(this.childNodes, childNodes);
  }

  commit() {
    const context = this.getContext();

    // context.setPrecedence(this.precedence);

    context.addChildNodes(this.childNodes);

    super.commit();
  }

  static fromPartChoice(partChoice, context) {
    const precedence = partChoice.getPrecedence(),
          childNodes = [],
          partChoiceContext = Context.fromNothing(PartChoiceContext, precedence, childNodes, context);

    return partChoiceContext;
  }
}
