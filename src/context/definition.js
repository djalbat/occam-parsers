"use strict";

import Frame from "../frame";
import Context from "../context";

export default class DefinitionContext extends Context {
  constructor(context, state, committed, precedence, childNodes, continuations, frame) {
    super(context, state, committed, precedence, childNodes, continuations);

    this.frame = frame;
  }

  getFrame() {
    return this.frame;
  }

  getRule() {
    const context = this.getContext(),
          ruleContext = context,  ///
          rule = ruleContext.getRule();

    return rule;
  }

  setPrecedence(precedence) {
    if (precedence === null) {
      return;
    }

    this.frame.setPrecedence(precedence);
  }

  getNonTerminalNode() {
    let nonTerminalNode;

    const context = this, ///
          rule = this.getRule(),
          opacity = rule.getOpacity(),
          ruleName = rule.getName(),
          childNodes = this.frame.getChildNodes(),
          precedence = this.frame.getPrecedence(),
          NonTerminalNode = rule.NonTerminalNodeFromRuleName(ruleName, context);

    nonTerminalNode = NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence);

    nonTerminalNode = nonTerminalNode.rewrite(context);  ///

    return nonTerminalNode;
  }

  commit() {
    let parsed;

    const committed = this.isCommitted();

    if (committed) {
      parsed  = true;
    } else {
      parsed = false;

      const nonTerminalNode = this.getNonTerminalNode(),
            palatable = nonTerminalNode.isPalatable();

      if (palatable) {
        const state = this.frame.getState(),
              context = this.getContext(),  ///
              childNode = nonTerminalNode,  ///
              precedence = null,
              childNodes = [
                childNode
              ];

        this.frame = null;

        context.update(state, precedence, childNodes);

        const continuing = this.isContinuing();

        parsed = continuing ?
                   context.commit() :
                     true;

        const committed = true;

        this.setCommitted(committed);
      }
    }

    return parsed;
  }

  update(state, precedence, childNodes) {
    this.frame = Frame.fromStatePrecedenceAndChildNodes(state, precedence, childNodes);
  }

  static fromDefinition(definition, context) {
    const frame = null,
          precedence = definition.getPrecedence(),
          definitionContext = Context.fromPrecedence(DefinitionContext, precedence, frame, context);

    return definitionContext;
  }
}
