"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NonTerminalNode;
    }
});
var _necessary = require("necessary");
var _nonTerminalNode = /*#__PURE__*/ _interop_require_default(require("../parseTree/nonTerminalNode"));
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var first = _necessary.arrayUtilities.first, forwardsSome = _necessary.arrayUtilities.forwardsSome, backwardsSome = _necessary.arrayUtilities.backwardsSome;
var NonTerminalNode = /*#__PURE__*/ function() {
    function NonTerminalNode(ruleName, childNodes, precedence) {
        _class_call_check(this, NonTerminalNode);
        this.ruleName = ruleName;
        this.childNodes = childNodes;
        this.precedence = precedence;
    }
    _create_class(NonTerminalNode, [
        {
            key: "getRuleName",
            value: function getRuleName() {
                return this.ruleName;
            }
        },
        {
            key: "getChildNodes",
            value: function getChildNodes() {
                return this.childNodes;
            }
        },
        {
            key: "getPrecedence",
            value: function getPrecedence() {
                var recursively = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var precedence = this.precedence;
                if (recursively) {
                    if (precedence === Infinity) {
                        var firstChildNode = first(this.childNodes);
                        precedence = firstChildNode.getPrecedence();
                    }
                }
                return precedence;
            }
        },
        {
            key: "isTerminalNode",
            value: function isTerminalNode() {
                var terminalNode = false;
                return terminalNode;
            }
        },
        {
            key: "isNonTerminalNode",
            value: function isNonTerminalNode() {
                var nonTerminalNode = true;
                return nonTerminalNode;
            }
        },
        {
            key: "getFirstSignificantToken",
            value: function getFirstSignificantToken() {
                var firstSignificantToken = null;
                forwardsSome(this.childNodes, function(childNode) {
                    firstSignificantToken = childNode.getFirstSignificantToken();
                    if (firstSignificantToken !== null) {
                        return true;
                    }
                });
                return firstSignificantToken;
            }
        },
        {
            key: "getLastSignificantToken",
            value: function getLastSignificantToken() {
                var lastSignificantToken = null;
                backwardsSome(this.childNodes, function(childNode) {
                    lastSignificantToken = childNode.getLastSignificantToken();
                    if (lastSignificantToken !== null) {
                        return true;
                    }
                });
                return lastSignificantToken;
            }
        },
        {
            key: "isLowerPrecedence",
            value: function isLowerPrecedence(parentRuleName, parentPrecedence) {
                var lowerPrecedence = false;
                var precedence = this.getPrecedence();
                if (precedence !== null) {
                    var ruleName = this.getRuleName();
                    if (ruleName === parentRuleName && precedence < parentPrecedence) {
                        lowerPrecedence = true;
                    }
                }
                return lowerPrecedence;
            }
        },
        {
            key: "isUnprecedented",
            value: function isUnprecedented() {
                var unprecedented = false;
                if (this.precedence !== null) {
                    var parentRuleName = this.ruleName, parentPrecedence = this.precedence, childNodesLowerPrecedence = this.childNodes.some(function(childNode) {
                        var childNodeLowerPrecedence = childNode.isLowerPrecedence(parentRuleName, parentPrecedence);
                        if (childNodeLowerPrecedence) {
                            return true;
                        }
                    });
                    if (childNodesLowerPrecedence) {
                        unprecedented = true;
                    }
                }
                return unprecedented;
            }
        },
        {
            key: "isIncludedIn",
            value: function isIncludedIn(node) {
                var _this = this;
                var includedIn = false;
                if (this === node) {
                    includedIn = true;
                } else {
                    var nodeNonTerminalNode = node.isNonTerminalNode();
                    if (nodeNonTerminalNode) {
                        var nonTerminalNode = node, childNodes = nonTerminalNode.getChildNodes();
                        includedIn = childNodes.some(function(childNode) {
                            var includedInChildNode = _this.isIncludedIn(childNode);
                            if (includedInChildNode) {
                                return true;
                            }
                        });
                    }
                }
                return includedIn;
            }
        },
        {
            key: "isEmpty",
            value: function isEmpty() {
                var childNodesLength = this.childNodes.length, empty = childNodesLength === 0;
                return empty;
            }
        },
        {
            key: "match",
            value: function match(node) {
                var depth = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Infinity;
                var matches = false;
                if (depth === 0) {
                    matches = true;
                } else {
                    var nodeNonTerminalNode = node.isNonTerminalNode();
                    if (nodeNonTerminalNode) {
                        var nonTerminalNode = node, nonTerminalNodeRuleName = nonTerminalNode.getRuleName();
                        if (nonTerminalNodeRuleName === this.ruleName) {
                            var childNodesLength = this.childNodes.length, nonTerminalNodeChildNodes = nonTerminalNode.getChildNodes(), nonTerminalNodeChildNodesLength = nonTerminalNodeChildNodes.length;
                            if (childNodesLength === nonTerminalNodeChildNodesLength) {
                                depth--;
                                matches = this.childNodes.every(function(childNode, index) {
                                    var nonTerminalNodeChildNode = nonTerminalNodeChildNodes[index], childNodeMatchesNonTerminalNodeChildNode = childNode.match(nonTerminalNodeChildNode, depth);
                                    if (childNodeMatchesNonTerminalNodeChildNode) {
                                        return true;
                                    }
                                });
                            }
                        }
                    }
                }
                return matches;
            }
        },
        {
            key: "rewrite",
            value: function rewrite() {
                var rewrittenNonTerminalNode = null;
                return rewrittenNonTerminalNode;
            }
        },
        {
            key: "setRuleName",
            value: function setRuleName(ruleName) {
                this.ruleName = ruleName;
            }
        },
        {
            key: "setChildNodes",
            value: function setChildNodes(childNodes) {
                this.childNodes = childNodes;
            }
        },
        {
            key: "setPrecedence",
            value: function setPrecedence(precedence) {
                this.precedence = precedence;
            }
        },
        {
            key: "asParseTree",
            value: function asParseTree(tokens) {
                var nonTerminalNode = this, nonTerminalNodeParseTree = _nonTerminalNode.default.fromNonTerminalNodeAndTokens(nonTerminalNode, tokens), parseTree = nonTerminalNodeParseTree; ///
                return parseTree;
            }
        },
        {
            key: "clone",
            value: function clone() {
                var Class = this.constructor, ruleName = this.ruleName, childNodes = this.childNodes.map(function(childNode) {
                    childNode = childNode.clone(); ///
                    return childNode;
                }), precedence = this.precedence, nonTerminalNode = new Class(ruleName, childNodes, precedence);
                return nonTerminalNode;
            }
        }
    ], [
        {
            key: "fromRuleNameAndChildNodes",
            value: function fromRuleNameAndChildNodes(Class, ruleName, childNodes) {
                if (childNodes === undefined) {
                    childNodes = ruleName; ///
                    ruleName = Class; ///
                    Class = NonTerminalNode; ///
                }
                var precedence = null, nonTerminalNode = new Class(ruleName, childNodes, precedence);
                return nonTerminalNode;
            }
        },
        {
            key: "fromRuleNameChildNodesAndPrecedence",
            value: function fromRuleNameChildNodesAndPrecedence(Class, ruleName, childNodes, precedence) {
                if (precedence === undefined) {
                    precedence = childNodes; ///
                    childNodes = ruleName; ///
                    ruleName = Class; ///
                    Class = NonTerminalNode; ///
                }
                var nonTerminalNode = new Class(ruleName, childNodes, precedence);
                return nonTerminalNode;
            }
        }
    ]);
    return NonTerminalNode;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL25vblRlcm1pbmFsLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSBmcm9tIFwiLi4vcGFyc2VUcmVlL25vblRlcm1pbmFsTm9kZVwiO1xuXG5jb25zdCB7IGZpcnN0LCBmb3J3YXJkc1NvbWUsIGJhY2t3YXJkc1NvbWUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb25UZXJtaW5hbE5vZGUge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSkge1xuICAgIHRoaXMucnVsZU5hbWUgPSBydWxlTmFtZTtcbiAgICB0aGlzLmNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzO1xuICAgIHRoaXMucHJlY2VkZW5jZSA9IHByZWNlZGVuY2U7XG4gIH1cblxuICBnZXRSdWxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlTmFtZTtcbiAgfVxuXG4gIGdldENoaWxkTm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2RlcztcbiAgfVxuXG4gIGdldFByZWNlZGVuY2UocmVjdXJzaXZlbHkgPSB0cnVlKSB7XG4gICAgbGV0IHByZWNlZGVuY2UgPSB0aGlzLnByZWNlZGVuY2U7XG5cbiAgICBpZiAocmVjdXJzaXZlbHkpIHtcbiAgICAgIGlmIChwcmVjZWRlbmNlID09PSBJbmZpbml0eSkge1xuICAgICAgICBjb25zdCBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KHRoaXMuY2hpbGROb2Rlcyk7XG5cbiAgICAgICAgcHJlY2VkZW5jZSA9IGZpcnN0Q2hpbGROb2RlLmdldFByZWNlZGVuY2UoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcHJlY2VkZW5jZTtcbiAgfVxuXG4gIGlzVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGlzTm9uVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRydWU7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuKCkge1xuICAgIGxldCBmaXJzdFNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gICAgZm9yd2FyZHNTb21lKHRoaXMuY2hpbGROb2RlcywgKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuID0gY2hpbGROb2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbigpO1xuXG4gICAgICBpZiAoZmlyc3RTaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpcnN0U2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGdldExhc3RTaWduaWZpY2FudFRva2VuKCkge1xuICAgIGxldCBsYXN0U2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgICBiYWNrd2FyZHNTb21lKHRoaXMuY2hpbGROb2RlcywgKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgbGFzdFNpZ25pZmljYW50VG9rZW4gPSBjaGlsZE5vZGUuZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4oKTtcblxuICAgICAgaWYgKGxhc3RTaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxhc3RTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgaXNMb3dlclByZWNlZGVuY2UocGFyZW50UnVsZU5hbWUsIHBhcmVudFByZWNlZGVuY2UpIHtcbiAgICBsZXQgbG93ZXJQcmVjZWRlbmNlID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcmVjZWRlbmNlID0gdGhpcy5nZXRQcmVjZWRlbmNlKCk7XG5cbiAgICBpZiAocHJlY2VkZW5jZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCk7XG5cbiAgICAgIGlmICgocnVsZU5hbWUgPT09IHBhcmVudFJ1bGVOYW1lKSAmJiAocHJlY2VkZW5jZSA8IHBhcmVudFByZWNlZGVuY2UpKSB7XG4gICAgICAgIGxvd2VyUHJlY2VkZW5jZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGxvd2VyUHJlY2VkZW5jZTtcbiAgfVxuXG4gIGlzVW5wcmVjZWRlbnRlZCgpIHtcbiAgICBsZXQgdW5wcmVjZWRlbnRlZCA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMucHJlY2VkZW5jZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcGFyZW50UnVsZU5hbWUgPSB0aGlzLnJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICAgIHBhcmVudFByZWNlZGVuY2UgPSB0aGlzLnByZWNlZGVuY2UsICAvLy9cbiAgICAgICAgICAgIGNoaWxkTm9kZXNMb3dlclByZWNlZGVuY2UgPSB0aGlzLmNoaWxkTm9kZXMuc29tZSgoY2hpbGROb2RlKSA9PiB7ICAvLy9cbiAgICAgICAgICAgICAgY29uc3QgY2hpbGROb2RlTG93ZXJQcmVjZWRlbmNlID0gY2hpbGROb2RlLmlzTG93ZXJQcmVjZWRlbmNlKHBhcmVudFJ1bGVOYW1lLCBwYXJlbnRQcmVjZWRlbmNlKTtcblxuICAgICAgICAgICAgICBpZiAoY2hpbGROb2RlTG93ZXJQcmVjZWRlbmNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBpZiAoY2hpbGROb2Rlc0xvd2VyUHJlY2VkZW5jZSkge1xuICAgICAgICB1bnByZWNlZGVudGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdW5wcmVjZWRlbnRlZDtcbiAgfVxuXG4gIGlzSW5jbHVkZWRJbihub2RlKSB7XG4gICAgbGV0IGluY2x1ZGVkSW4gPSBmYWxzZTtcblxuICAgIGlmICh0aGlzID09PSBub2RlKSB7XG4gICAgICBpbmNsdWRlZEluID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgbm9kZU5vblRlcm1pbmFsTm9kZSA9IG5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgICAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgICAgIGluY2x1ZGVkSW4gPSBjaGlsZE5vZGVzLnNvbWUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGluY2x1ZGVkSW5DaGlsZE5vZGUgPSB0aGlzLmlzSW5jbHVkZWRJbihjaGlsZE5vZGUpO1xuXG4gICAgICAgICAgaWYgKGluY2x1ZGVkSW5DaGlsZE5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGluY2x1ZGVkSW47XG4gIH1cblxuICBpc0VtcHR5KCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXNMZW5ndGggPSB0aGlzLmNoaWxkTm9kZXMubGVuZ3RoLFxuICAgICAgICAgIGVtcHR5ID0gKGNoaWxkTm9kZXNMZW5ndGggPT09IDApO1xuXG4gICAgcmV0dXJuIGVtcHR5O1xuICB9XG5cbiAgbWF0Y2gobm9kZSwgZGVwdGggPSBJbmZpbml0eSkge1xuICAgIGxldCBtYXRjaGVzID0gZmFsc2U7XG5cbiAgICBpZiAoZGVwdGggPT09IDApIHtcbiAgICAgIG1hdGNoZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgICBpZiAobm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICAgICAgICBpZiAobm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPT09IHRoaXMucnVsZU5hbWUpIHtcbiAgICAgICAgICBjb25zdCBjaGlsZE5vZGVzTGVuZ3RoID0gdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzTGVuZ3RoID0gbm9uVGVybWluYWxOb2RlQ2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICAgICAgICBpZiAoY2hpbGROb2Rlc0xlbmd0aCA9PT0gbm9uVGVybWluYWxOb2RlQ2hpbGROb2Rlc0xlbmd0aCkge1xuICAgICAgICAgICAgZGVwdGgtLTtcblxuICAgICAgICAgICAgbWF0Y2hlcyA9IHRoaXMuY2hpbGROb2Rlcy5ldmVyeSgoY2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVDaGlsZE5vZGUgPSBub25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGROb2RlTWF0Y2hlc05vblRlcm1pbmFsTm9kZUNoaWxkTm9kZSA9IGNoaWxkTm9kZS5tYXRjaChub25UZXJtaW5hbE5vZGVDaGlsZE5vZGUsIGRlcHRoKTtcblxuICAgICAgICAgICAgICBpZiAoY2hpbGROb2RlTWF0Y2hlc05vblRlcm1pbmFsTm9kZUNoaWxkTm9kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIHJld3JpdGUoKSB7XG4gICAgY29uc3QgcmV3cml0dGVuTm9uVGVybWluYWxOb2RlID0gbnVsbDtcblxuICAgIHJldHVybiByZXdyaXR0ZW5Ob25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBzZXRSdWxlTmFtZShydWxlTmFtZSkge1xuICAgIHRoaXMucnVsZU5hbWUgPSBydWxlTmFtZTtcbiAgfVxuXG4gIHNldENoaWxkTm9kZXMoY2hpbGROb2Rlcykge1xuICAgIHRoaXMuY2hpbGROb2RlcyA9IGNoaWxkTm9kZXM7XG4gIH1cblxuICBzZXRQcmVjZWRlbmNlKHByZWNlZGVuY2UpIHtcbiAgICB0aGlzLnByZWNlZGVuY2UgPSBwcmVjZWRlbmNlO1xuICB9XG4gIFxuICBhc1BhcnNlVHJlZSh0b2tlbnMpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlUGFyc2VUcmVlID0gTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlLmZyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnMobm9uVGVybWluYWxOb2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHBhcnNlVHJlZSA9IG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZTsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGNvbnN0IENsYXNzID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBydWxlTmFtZSA9IHRoaXMucnVsZU5hbWUsXG4gICAgICAgICAgY2hpbGROb2RlcyA9IHRoaXMuY2hpbGROb2Rlcy5tYXAoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgY2hpbGROb2RlID0gY2hpbGROb2RlLmNsb25lKCk7ICAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIGNoaWxkTm9kZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBwcmVjZWRlbmNlID0gdGhpcy5wcmVjZWRlbmNlLFxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IG5ldyBDbGFzcyhydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSk7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKSB7XG4gICAgaWYgKGNoaWxkTm9kZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY2hpbGROb2RlcyA9IHJ1bGVOYW1lOyAgLy8vXG5cbiAgICAgIHJ1bGVOYW1lID0gQ2xhc3M7IC8vL1xuXG4gICAgICBDbGFzcyA9IE5vblRlcm1pbmFsTm9kZTsgIC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHByZWNlZGVuY2UgPSBudWxsLFxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IG5ldyBDbGFzcyhydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSk7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRQcmVjZWRlbmNlKENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSkge1xuICAgIGlmIChwcmVjZWRlbmNlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHByZWNlZGVuY2UgPSBjaGlsZE5vZGVzOyAgLy8vXG5cbiAgICAgIGNoaWxkTm9kZXMgPSBydWxlTmFtZTsgIC8vL1xuXG4gICAgICBydWxlTmFtZSA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBOb25UZXJtaW5hbE5vZGU7ICAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBuZXcgQ2xhc3MocnVsZU5hbWUsIGNoaWxkTm9kZXMsIHByZWNlZGVuY2UpO1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbE5vZGUiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiZm9yd2FyZHNTb21lIiwiYmFja3dhcmRzU29tZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsInByZWNlZGVuY2UiLCJnZXRSdWxlTmFtZSIsImdldENoaWxkTm9kZXMiLCJnZXRQcmVjZWRlbmNlIiwicmVjdXJzaXZlbHkiLCJJbmZpbml0eSIsImZpcnN0Q2hpbGROb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImNoaWxkTm9kZSIsImdldExhc3RTaWduaWZpY2FudFRva2VuIiwibGFzdFNpZ25pZmljYW50VG9rZW4iLCJpc0xvd2VyUHJlY2VkZW5jZSIsInBhcmVudFJ1bGVOYW1lIiwicGFyZW50UHJlY2VkZW5jZSIsImxvd2VyUHJlY2VkZW5jZSIsImlzVW5wcmVjZWRlbnRlZCIsInVucHJlY2VkZW50ZWQiLCJjaGlsZE5vZGVzTG93ZXJQcmVjZWRlbmNlIiwic29tZSIsImNoaWxkTm9kZUxvd2VyUHJlY2VkZW5jZSIsImlzSW5jbHVkZWRJbiIsIm5vZGUiLCJpbmNsdWRlZEluIiwibm9kZU5vblRlcm1pbmFsTm9kZSIsImluY2x1ZGVkSW5DaGlsZE5vZGUiLCJpc0VtcHR5IiwiY2hpbGROb2Rlc0xlbmd0aCIsImxlbmd0aCIsImVtcHR5IiwibWF0Y2giLCJkZXB0aCIsIm1hdGNoZXMiLCJub25UZXJtaW5hbE5vZGVSdWxlTmFtZSIsIm5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMiLCJub25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzTGVuZ3RoIiwiZXZlcnkiLCJpbmRleCIsIm5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZSIsImNoaWxkTm9kZU1hdGNoZXNOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGUiLCJyZXdyaXRlIiwicmV3cml0dGVuTm9uVGVybWluYWxOb2RlIiwic2V0UnVsZU5hbWUiLCJzZXRDaGlsZE5vZGVzIiwic2V0UHJlY2VkZW5jZSIsImFzUGFyc2VUcmVlIiwidG9rZW5zIiwibm9uVGVybWluYWxOb2RlUGFyc2VUcmVlIiwiTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlIiwiZnJvbU5vblRlcm1pbmFsTm9kZUFuZFRva2VucyIsInBhcnNlVHJlZSIsImNsb25lIiwiQ2xhc3MiLCJjb25zdHJ1Y3RvciIsIm1hcCIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJ1bmRlZmluZWQiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kUHJlY2VkZW5jZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7eUJBTlU7c0VBRU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckMsSUFBUUMsUUFBdUNDLHlCQUFjLENBQXJERCxPQUFPRSxlQUFnQ0QseUJBQWMsQ0FBOUNDLGNBQWNDLGdCQUFrQkYseUJBQWMsQ0FBaENFO0FBRWQsSUFBQSxBQUFNSixnQ0FBTjthQUFNQSxnQkFDUEssUUFBUSxFQUFFQyxVQUFVLEVBQUVDLFVBQVU7Z0NBRHpCUDtRQUVqQixJQUFJLENBQUNLLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTs7a0JBSkRQOztZQU9uQlEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxRQUFRO1lBQ3RCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxVQUFVO1lBQ3hCOzs7WUFFQUksS0FBQUE7bUJB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