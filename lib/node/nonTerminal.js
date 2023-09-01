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
                return this.precedence;
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
            value: function isLowerPrecedence(ruleName, precedence) {
                var lowerPrecedence;
                if (false) {
                ///
                } else if (this.precedence === null) {
                    lowerPrecedence = false;
                } else if (this.precedence === Infinity) {
                    var firstChildNode = first(this.childNodes);
                    lowerPrecedence = firstChildNode.isLowerPrecedence(ruleName, precedence);
                } else {
                    lowerPrecedence = this.ruleName === ruleName && this.precedence < precedence;
                }
                return lowerPrecedence;
            }
        },
        {
            key: "isUnprecedented",
            value: function isUnprecedented() {
                var _this = this;
                var unprecedented = false;
                if (this.precedence !== null) {
                    unprecedented = this.childNodes.some(function(childNode) {
                        var childNodeLowerPrecedence = childNode.isLowerPrecedence(_this.ruleName, _this.precedence);
                        if (childNodeLowerPrecedence) {
                            return true;
                        }
                    });
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
                            var nonTerminalNodePrecedence = nonTerminalNode.getPrecedence();
                            if (nonTerminalNodePrecedence === this.precedence) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL25vblRlcm1pbmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSBmcm9tIFwiLi4vcGFyc2VUcmVlL25vblRlcm1pbmFsTm9kZVwiO1xuXG5jb25zdCB7IGZpcnN0LCBmb3J3YXJkc1NvbWUsIGJhY2t3YXJkc1NvbWUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb25UZXJtaW5hbE5vZGUge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSkge1xuICAgIHRoaXMucnVsZU5hbWUgPSBydWxlTmFtZTtcbiAgICB0aGlzLmNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzO1xuICAgIHRoaXMucHJlY2VkZW5jZSA9IHByZWNlZGVuY2U7XG4gIH1cblxuICBnZXRSdWxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlTmFtZTtcbiAgfVxuXG4gIGdldENoaWxkTm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2RlcztcbiAgfVxuXG4gIGdldFByZWNlZGVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlY2VkZW5jZTtcbiAgfVxuXG4gIGlzVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGlzTm9uVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRydWU7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuKCkge1xuICAgIGxldCBmaXJzdFNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gICAgZm9yd2FyZHNTb21lKHRoaXMuY2hpbGROb2RlcywgKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuID0gY2hpbGROb2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbigpO1xuXG4gICAgICBpZiAoZmlyc3RTaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpcnN0U2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGdldExhc3RTaWduaWZpY2FudFRva2VuKCkge1xuICAgIGxldCBsYXN0U2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgICBiYWNrd2FyZHNTb21lKHRoaXMuY2hpbGROb2RlcywgKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgbGFzdFNpZ25pZmljYW50VG9rZW4gPSBjaGlsZE5vZGUuZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4oKTtcblxuICAgICAgaWYgKGxhc3RTaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxhc3RTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgaXNMb3dlclByZWNlZGVuY2UocnVsZU5hbWUsIHByZWNlZGVuY2UpIHtcbiAgICBsZXQgbG93ZXJQcmVjZWRlbmNlO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMucHJlY2VkZW5jZSA9PT0gbnVsbCkge1xuICAgICAgbG93ZXJQcmVjZWRlbmNlID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByZWNlZGVuY2UgPT09IEluZmluaXR5KSB7XG4gICAgICBjb25zdCBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KHRoaXMuY2hpbGROb2Rlcyk7XG5cbiAgICAgIGxvd2VyUHJlY2VkZW5jZSA9IGZpcnN0Q2hpbGROb2RlLmlzTG93ZXJQcmVjZWRlbmNlKHJ1bGVOYW1lLCBwcmVjZWRlbmNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG93ZXJQcmVjZWRlbmNlID0gKCh0aGlzLnJ1bGVOYW1lID09PSBydWxlTmFtZSkgJiYgKHRoaXMucHJlY2VkZW5jZSA8IHByZWNlZGVuY2UpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbG93ZXJQcmVjZWRlbmNlO1xuICB9XG5cbiAgaXNVbnByZWNlZGVudGVkKCkge1xuICAgIGxldCB1bnByZWNlZGVudGVkID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5wcmVjZWRlbmNlICE9PSBudWxsKSB7XG4gICAgICB1bnByZWNlZGVudGVkID0gdGhpcy5jaGlsZE5vZGVzLnNvbWUoKGNoaWxkTm9kZSkgPT4geyAgLy8vXG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZUxvd2VyUHJlY2VkZW5jZSA9IGNoaWxkTm9kZS5pc0xvd2VyUHJlY2VkZW5jZSh0aGlzLnJ1bGVOYW1lLCB0aGlzLnByZWNlZGVuY2UpO1xuXG4gICAgICAgIGlmIChjaGlsZE5vZGVMb3dlclByZWNlZGVuY2UpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVucHJlY2VkZW50ZWQ7XG4gIH1cblxuICBpc0luY2x1ZGVkSW4obm9kZSkge1xuICAgIGxldCBpbmNsdWRlZEluID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcyA9PT0gbm9kZSkge1xuICAgICAgaW5jbHVkZWRJbiA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgICAgICBpbmNsdWRlZEluID0gY2hpbGROb2Rlcy5zb21lKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBpbmNsdWRlZEluQ2hpbGROb2RlID0gdGhpcy5pc0luY2x1ZGVkSW4oY2hpbGROb2RlKTtcblxuICAgICAgICAgIGlmIChpbmNsdWRlZEluQ2hpbGROb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbmNsdWRlZEluO1xuICB9XG5cbiAgaXNFbXB0eSgpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzTGVuZ3RoID0gdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCxcbiAgICAgICAgICBlbXB0eSA9IChjaGlsZE5vZGVzTGVuZ3RoID09PSAwKTtcblxuICAgIHJldHVybiBlbXB0eTtcbiAgfVxuXG4gIG1hdGNoKG5vZGUsIGRlcHRoID0gSW5maW5pdHkpIHtcbiAgICBsZXQgbWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgaWYgKGRlcHRoID09PSAwKSB7XG4gICAgICBtYXRjaGVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgbm9kZU5vblRlcm1pbmFsTm9kZSA9IG5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgICAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCk7XG5cbiAgICAgICAgaWYgKG5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID09PSB0aGlzLnJ1bGVOYW1lKSB7XG4gICAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlUHJlY2VkZW5jZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRQcmVjZWRlbmNlKCk7XG5cbiAgICAgICAgICBpZiAobm9uVGVybWluYWxOb2RlUHJlY2VkZW5jZSA9PT0gdGhpcy5wcmVjZWRlbmNlKSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZE5vZGVzTGVuZ3RoID0gdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQ2hpbGROb2Rlc0xlbmd0aCA9IG5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMubGVuZ3RoO1xuXG4gICAgICAgICAgICBpZiAoY2hpbGROb2Rlc0xlbmd0aCA9PT0gbm9uVGVybWluYWxOb2RlQ2hpbGROb2Rlc0xlbmd0aCkge1xuICAgICAgICAgICAgICBkZXB0aC0tO1xuXG4gICAgICAgICAgICAgIG1hdGNoZXMgPSB0aGlzLmNoaWxkTm9kZXMuZXZlcnkoKGNoaWxkTm9kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVDaGlsZE5vZGUgPSBub25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgICAgICAgICBjaGlsZE5vZGVNYXRjaGVzTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlID0gY2hpbGROb2RlLm1hdGNoKG5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZSwgZGVwdGgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkTm9kZU1hdGNoZXNOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICByZXdyaXRlKCkge1xuICAgIGNvbnN0IHJld3JpdHRlbk5vblRlcm1pbmFsTm9kZSA9IG51bGw7XG5cbiAgICByZXR1cm4gcmV3cml0dGVuTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgc2V0UnVsZU5hbWUocnVsZU5hbWUpIHtcbiAgICB0aGlzLnJ1bGVOYW1lID0gcnVsZU5hbWU7XG4gIH1cblxuICBzZXRDaGlsZE5vZGVzKGNoaWxkTm9kZXMpIHtcbiAgICB0aGlzLmNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzO1xuICB9XG5cbiAgc2V0UHJlY2VkZW5jZShwcmVjZWRlbmNlKSB7XG4gICAgdGhpcy5wcmVjZWRlbmNlID0gcHJlY2VkZW5jZTtcbiAgfVxuICBcbiAgYXNQYXJzZVRyZWUodG9rZW5zKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IE5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZS5mcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBwYXJzZVRyZWUgPSBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWU7ICAvLy9cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBjb25zdCBDbGFzcyA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLnJ1bGVOYW1lLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSB0aGlzLmNoaWxkTm9kZXMubWFwKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgIGNoaWxkTm9kZSA9IGNoaWxkTm9kZS5jbG9uZSgpOyAgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBjaGlsZE5vZGU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgcHJlY2VkZW5jZSA9IHRoaXMucHJlY2VkZW5jZSxcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGUgPSBuZXcgQ2xhc3MocnVsZU5hbWUsIGNoaWxkTm9kZXMsIHByZWNlZGVuY2UpO1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2Rlcykge1xuICAgIGlmIChjaGlsZE5vZGVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNoaWxkTm9kZXMgPSBydWxlTmFtZTsgIC8vL1xuXG4gICAgICBydWxlTmFtZSA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBOb25UZXJtaW5hbE5vZGU7ICAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBwcmVjZWRlbmNlID0gbnVsbCxcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGUgPSBuZXcgQ2xhc3MocnVsZU5hbWUsIGNoaWxkTm9kZXMsIHByZWNlZGVuY2UpO1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kUHJlY2VkZW5jZShDbGFzcywgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIHByZWNlZGVuY2UpIHtcbiAgICBpZiAocHJlY2VkZW5jZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBwcmVjZWRlbmNlID0gY2hpbGROb2RlczsgIC8vL1xuXG4gICAgICBjaGlsZE5vZGVzID0gcnVsZU5hbWU7ICAvLy9cblxuICAgICAgcnVsZU5hbWUgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gTm9uVGVybWluYWxOb2RlOyAgLy8vXG4gICAgfVxuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbmV3IENsYXNzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlKTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbE5vZGUiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiZm9yd2FyZHNTb21lIiwiYmFja3dhcmRzU29tZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsInByZWNlZGVuY2UiLCJnZXRSdWxlTmFtZSIsImdldENoaWxkTm9kZXMiLCJnZXRQcmVjZWRlbmNlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImNoaWxkTm9kZSIsImdldExhc3RTaWduaWZpY2FudFRva2VuIiwibGFzdFNpZ25pZmljYW50VG9rZW4iLCJpc0xvd2VyUHJlY2VkZW5jZSIsImxvd2VyUHJlY2VkZW5jZSIsIkluZmluaXR5IiwiZmlyc3RDaGlsZE5vZGUiLCJpc1VucHJlY2VkZW50ZWQiLCJ1bnByZWNlZGVudGVkIiwic29tZSIsImNoaWxkTm9kZUxvd2VyUHJlY2VkZW5jZSIsImlzSW5jbHVkZWRJbiIsIm5vZGUiLCJpbmNsdWRlZEluIiwibm9kZU5vblRlcm1pbmFsTm9kZSIsImluY2x1ZGVkSW5DaGlsZE5vZGUiLCJpc0VtcHR5IiwiY2hpbGROb2Rlc0xlbmd0aCIsImxlbmd0aCIsImVtcHR5IiwibWF0Y2giLCJkZXB0aCIsIm1hdGNoZXMiLCJub25UZXJtaW5hbE5vZGVSdWxlTmFtZSIsIm5vblRlcm1pbmFsTm9kZVByZWNlZGVuY2UiLCJub25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzIiwibm9uVGVybWluYWxOb2RlQ2hpbGROb2Rlc0xlbmd0aCIsImV2ZXJ5IiwiaW5kZXgiLCJub25UZXJtaW5hbE5vZGVDaGlsZE5vZGUiLCJjaGlsZE5vZGVNYXRjaGVzTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlIiwicmV3cml0ZSIsInJld3JpdHRlbk5vblRlcm1pbmFsTm9kZSIsInNldFJ1bGVOYW1lIiwic2V0Q2hpbGROb2RlcyIsInNldFByZWNlZGVuY2UiLCJhc1BhcnNlVHJlZSIsInRva2VucyIsIm5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSIsIk5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSIsImZyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnMiLCJwYXJzZVRyZWUiLCJjbG9uZSIsIkNsYXNzIiwiY29uc3RydWN0b3IiLCJtYXAiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwidW5kZWZpbmVkIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZFByZWNlZGVuY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7O3lCQU5VO3NFQUVNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJDLElBQVFDLFFBQXVDQyx5QkFBYyxDQUFyREQsT0FBT0UsZUFBZ0NELHlCQUFjLENBQTlDQyxjQUFjQyxnQkFBa0JGLHlCQUFjLENBQWhDRTtBQUVkLElBQUEsQUFBTUosZ0NBQU47YUFBTUEsZ0JBQ1BLLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxVQUFVO2dDQUR6QlA7UUFFakIsSUFBSSxDQUFDSyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7O2tCQUpEUDs7WUFPbkJRLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsUUFBUTtZQUN0Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsVUFBVTtZQUN4Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsVUFBVTtZQUN4Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxlQUFlO2dCQUVyQixPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGtCQUFrQjtnQkFFeEIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyx3QkFBd0I7Z0JBRTVCYixhQUFhLElBQUksQ0FBQ0csVUFBVSxFQUFFLFNBQUNXO29CQUM3QkQsd0JBQXdC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