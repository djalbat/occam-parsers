"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isNodeChoiceNode = isNodeChoiceNode;
exports.isNodeRuleNameNode = isNodeRuleNameNode;
exports.isNodeQuantifierNode = isNodeQuantifierNode;
exports.isNodeLookAheadModifierNode = isNodeLookAheadModifierNode;
exports.ruleNameFromQuantifierNode = ruleNameFromQuantifierNode;
var _array = require("../utilities/array");
var _ruleNames = require("../bnf/ruleNames");
function isNodeChoiceNode(node) {
    var nodeNoChoiceNode = false;
    var nodeTerminalNode = node.isTerminalNode();
    if (nodeTerminalNode) {
        var terminalNode = node, terminalNodeContent = terminalNode.getContent();
        nodeNoChoiceNode = terminalNodeContent === "|";
    }
    return nodeNoChoiceNode;
}
function isNodeRuleNameNode(node) {
    var nodeRuleNameNode = false;
    var nodeTerminalNode = node.isTerminalNode(), nodeNonTerminalNode = !nodeTerminalNode;
    if (nodeNonTerminalNode) {
        var nonTerminalNode = node, nonTerminalNodeRuleName = nonTerminalNode.getRuleName();
        nodeRuleNameNode = nonTerminalNodeRuleName === _ruleNames.RuleNameRuleName;
    }
    return nodeRuleNameNode;
}
function isNodeQuantifierNode(node) {
    var nodeQuantifierNode = false;
    var nodeNonTerminalNode = node.isNonTerminalNode();
    if (nodeNonTerminalNode) {
        var nonTerminalNode = node, ruleName = nonTerminalNode.getRuleName(), ruleNameQuantifierRuleName = ruleName === _ruleNames.QuantifierRuleName;
        nodeQuantifierNode = ruleNameQuantifierRuleName; ///
    }
    return nodeQuantifierNode;
}
function isNodeLookAheadModifierNode(node) {
    var nodeLookAheadModifierNode = false;
    var nodeNonTerminalNode = node.isNonTerminalNode();
    if (nodeNonTerminalNode) {
        var nonTerminalNode = node, ruleName = nonTerminalNode.getRuleName(), ruleNameLookAheadModifierRuleName = ruleName === _ruleNames.LookAheadModifierRuleName;
        nodeLookAheadModifierNode = ruleNameLookAheadModifierRuleName; ///
    }
    return nodeLookAheadModifierNode;
}
function ruleNameFromQuantifierNode(quantifierNode) {
    var nonTerminalNode;
    nonTerminalNode = quantifierNode; ///
    var childNodes = nonTerminalNode.getChildNodes(), firstChildNode = (0, _array).first(childNodes);
    nonTerminalNode = firstChildNode; ///
    var ruleName = nonTerminalNode.getRuleName();
    return ruleName;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYm5mLmpzIl0sIm5hbWVzIjpbImZpcnN0IiwiTG9va0FoZWFkTW9kaWZpZXJSdWxlTmFtZSIsIlF1YW50aWZpZXJSdWxlTmFtZSIsIlJ1bGVOYW1lUnVsZU5hbWUiLCJpc05vZGVDaG9pY2VOb2RlIiwibm9kZSIsIm5vZGVOb0Nob2ljZU5vZGUiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsImlzTm9kZVJ1bGVOYW1lTm9kZSIsIm5vZGVSdWxlTmFtZU5vZGUiLCJub2RlTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlUnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsImlzTm9kZVF1YW50aWZpZXJOb2RlIiwibm9kZVF1YW50aWZpZXJOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJydWxlTmFtZSIsInJ1bGVOYW1lUXVhbnRpZmllclJ1bGVOYW1lIiwiaXNOb2RlTG9va0FoZWFkTW9kaWZpZXJOb2RlIiwibm9kZUxvb2tBaGVhZE1vZGlmaWVyTm9kZSIsInJ1bGVOYW1lTG9va0FoZWFkTW9kaWZpZXJSdWxlTmFtZSIsInJ1bGVOYW1lRnJvbVF1YW50aWZpZXJOb2RlIiwicXVhbnRpZmllck5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImZpcnN0Q2hpbGROb2RlIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7O1FBS0ksZ0JBQWdCLEdBQWhCLGdCQUFnQjtRQWVoQixrQkFBa0IsR0FBbEIsa0JBQWtCO1FBZ0JsQixvQkFBb0IsR0FBcEIsb0JBQW9CO1FBZ0JwQiwyQkFBMkIsR0FBM0IsMkJBQTJCO1FBaUIzQiwwQkFBMEIsR0FBMUIsMEJBQTBCO0FBbkVwQixHQUFvQixDQUFwQixNQUFvQjtBQUNzQyxHQUFrQixDQUFsQixVQUFrQjtTQUVsRixnQkFBZ0Is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