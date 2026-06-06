"use strict";

import { arrayUtilities } from "necessary";

import Context from "../context";

const { push } = arrayUtilities;

export default class RuleNamePartContext extends Context {
  constructor(context, offset, index, ruleNamePart, childNodes) {
    super(context, offset, index);

    this.ruleNamePart = ruleNamePart;
    this.childNodes = childNodes;
  }

  isCallAhead() {
    let callAhead;

    callAhead = this.ruleNamePart.isCallAhead();

    if (!callAhead) {
      const context = this.getContext();

      callAhead = context.isCallAhead();
    }

    return callAhead;
  }

  getContinuation() {
    let continuation;

    continuation = this.continuation;

    if (continuation === null) {
      const context = this.getContext();

      continuation = context.getContinuation();
    }

    return continuation;
  }

  getChildNodes() {
    return this.childNodes;
  }

  addChildNode(childNode) {
    this.childNodes.push(childNode)
  }

  addChildNodes(childNodes) {
    push(this.childNodes, childNodes);
  }

  commit() {
    const context = this.getContext();

    context.addChildNodes(this.childNodes);

    super.commit();
  }

  static fromRuleNamePart(ruleNamePart, context) {
    const childNodes = [],
          ruleNamePartContext = Context.fromNothing(RuleNamePartContext, ruleNamePart, childNodes, context);

    return ruleNamePartContext;
  }
}
