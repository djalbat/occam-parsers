"use strict";

import { arrayUtilities } from "necessary";

import Context from "../context";

const { push } = arrayUtilities;

export default class DefinitionContext extends Context {
  constructor(context, offset, index, definition, precedence, childNodes) {
    super(context, offset, index);

    this.definition = definition;
    this.precedence = precedence;
    this.childNodes = childNodes;
  }

  getDefinition() {
    return this.definition;
  }

  getPrecedence() {
    return this.precedence;
  }

  getChildNodes() {
    return this.childNodes;
  }

  callAhead(part) {
    let parsed;

    const context = this.getContext();

    let parts;

    parts = this.definition.getParts();

    const index = parts.indexOf(part),
          start = index + 1;

    parts = parts.slice(start);

    parsed = this.definition.parse(parts, context);

    return parsed;
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
          definitionContext = Context.fromNothing(DefinitionContext, definition, precedence, childNodes, context);

    return definitionContext;
  }
}
