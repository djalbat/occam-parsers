"use strict";

import Frame from "../frame";
import Context from "../context";

export default class DefinitionContext extends Context {
  getRule() {
    const context = this.getContext(),
          ruleContext = context,  ///
          rule = ruleContext.getRule();

    return rule;
  }

  create(frame) {
    const rule = this.getRule(),
          context = this,  ///
          nonTerminalNode = nonTerminalNodeFromRuleAndFrame(rule, frame, context),
          palatable = nonTerminalNode.isPalatable();

    if (palatable) {
      const childNode = nonTerminalNode; ///

      frame = Frame.fromChildNode(childNode);
    } else {
      frame = null;
    }

    return frame;
  }

  commit(frame) {
    const committed = this.isCommitted();

    if (!committed) {
      frame = this.create(frame);

      if (frame !== null) {
        const state = this.getState(),
              context = this.getContext();

        context.updateState(state);

        const continuing = this.isContinuing();

        if (continuing) {
          frame = context.commit(frame);
        }
      }

      const committed = true;

      this.setCommitted(committed);
    }

    return frame;
  }

  static fromDefinition(definition, context) {
    const definitionContext = Context.fromNothing(DefinitionContext, context);

    return definitionContext;
  }
}

function nonTerminalNodeFromRuleAndFrame(rule, frame, context) {
  let nonTerminalNode;

  const opacity = rule.getOpacity(),
        ruleName = rule.getName(),
        precedence = frame.getPrecedence(),
        childNodes = frame.getChildNodes(),
        NonTerminalNode = rule.NonTerminalNodeFromRuleName(ruleName, context);

  nonTerminalNode = NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence);

  nonTerminalNode = nonTerminalNode.rewrite(context);  ///

  return nonTerminalNode;
}

