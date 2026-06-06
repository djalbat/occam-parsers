"use strict";

import { arrayUtilities } from "necessary";

import Context from "../context";

const { push } = arrayUtilities;

export default class DefinitionContext extends Context {
  constructor(context, offset, index, precedence, childNodes) {
    super(context, offset, index);

    this.precedence = precedence;
    this.childNodes = childNodes;
  }

  getPrecedence() {
    return this.precedence;
  }

  getChildNodes() {
    return this.childNodes;
  }

  setPrecedence(precedence) {
    this.precedence = precedence;
  }

  addChildNode(childNode) {
    this.childNodes.push(childNode)
  }

  addChildNodes(childNodes) {
    push(this.childNodes, childNodes);
  }

  commit() {
    const context = this.getContext();

    context.setPrecedence(this.precedence);

    context.setChildNodes(this.childNodes);

    super.commit();
  }

  static fromDefinition(definition, context) {
    const precedence = definition.getPrecedence(),
          childNodes = [],
          definitionContext = Context.fromNothing(DefinitionContext, precedence, childNodes, context);

    return definitionContext;
  }
}
