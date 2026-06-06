"use strict";

import { arrayUtilities } from "necessary";

import Context from "../context";

const { push } = arrayUtilities;

export default class PartContext extends Context {
  constructor(context, offset, index, childNodes) {
    super(context, offset, index);

    this.childNodes = childNodes;
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

  static fromPart(part, context) {
    const childNodes = [],
          partContext = Context.fromNothing(PartContext, childNodes, context);

    return partContext;
  }
}
