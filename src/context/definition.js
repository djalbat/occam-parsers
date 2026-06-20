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

  nonTerminalNodeFromFrame(frame) {
    let nonTerminalNode;

    const context = this, ///
          rule = this.getRule(),
          opacity = rule.getOpacity(),
          ruleName = rule.getName(),
          precedence = frame.getPrecedence(),
          childNodes = frame.getChildNodes(),
          NonTerminalNode = rule.NonTerminalNodeFromRuleName(ruleName, context);

    nonTerminalNode = NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence);

    nonTerminalNode = nonTerminalNode.rewrite(context);  ///

    return nonTerminalNode;
  }

  commit(frame) {
    const committed = this.isCommitted();

    if (!committed) {
      const nonTerminalNode = this.nonTerminalNodeFromFrame(frame),
            palatable = nonTerminalNode.isPalatable();

      if (palatable) {
        const state = this.getState(),
              context = this.getContext();

        context.updateState(state);

        const childNode = nonTerminalNode; ///

        frame = Frame.fromChildNode(childNode);

        const continuing = this.isContinuing();

        if (continuing) {
          frame = context.commit(frame);
        }
      } else {
        frame = null;
      }

      const committed = true;

      this.setCommitted(committed);
    }

    return frame;
  }

  static fromDefinition(definition, context) {
    const precedence = definition.getPrecedence(),
          definitionContext = Context.fromPrecedence(DefinitionContext, precedence, context);

    return definitionContext;
  }
}
