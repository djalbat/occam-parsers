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
                if (this.ruleName === parentRuleName) {
                    var precedence = this.getPrecedence();
                    if (precedence !== null) {
                        lowerPrecedence = precedence < parentPrecedence;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL25vblRlcm1pbmFsLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSBmcm9tIFwiLi4vcGFyc2VUcmVlL25vblRlcm1pbmFsTm9kZVwiO1xuXG5jb25zdCB7IGZpcnN0LCBmb3J3YXJkc1NvbWUsIGJhY2t3YXJkc1NvbWUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb25UZXJtaW5hbE5vZGUge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSkge1xuICAgIHRoaXMucnVsZU5hbWUgPSBydWxlTmFtZTtcbiAgICB0aGlzLmNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzO1xuICAgIHRoaXMucHJlY2VkZW5jZSA9IHByZWNlZGVuY2U7XG4gIH1cblxuICBnZXRSdWxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlTmFtZTtcbiAgfVxuXG4gIGdldENoaWxkTm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2RlcztcbiAgfVxuXG4gIGdldFByZWNlZGVuY2UocmVjdXJzaXZlbHkgPSB0cnVlKSB7XG4gICAgbGV0IHByZWNlZGVuY2UgPSB0aGlzLnByZWNlZGVuY2U7XG5cbiAgICBpZiAocmVjdXJzaXZlbHkpIHtcbiAgICAgIGlmIChwcmVjZWRlbmNlID09PSBJbmZpbml0eSkge1xuICAgICAgICBjb25zdCBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KHRoaXMuY2hpbGROb2Rlcyk7XG5cbiAgICAgICAgcHJlY2VkZW5jZSA9IGZpcnN0Q2hpbGROb2RlLmdldFByZWNlZGVuY2UoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcHJlY2VkZW5jZTtcbiAgfVxuXG4gIGlzVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGlzTm9uVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRydWU7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuKCkge1xuICAgIGxldCBmaXJzdFNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gICAgZm9yd2FyZHNTb21lKHRoaXMuY2hpbGROb2RlcywgKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuID0gY2hpbGROb2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbigpO1xuXG4gICAgICBpZiAoZmlyc3RTaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpcnN0U2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGdldExhc3RTaWduaWZpY2FudFRva2VuKCkge1xuICAgIGxldCBsYXN0U2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgICBiYWNrd2FyZHNTb21lKHRoaXMuY2hpbGROb2RlcywgKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgbGFzdFNpZ25pZmljYW50VG9rZW4gPSBjaGlsZE5vZGUuZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4oKTtcblxuICAgICAgaWYgKGxhc3RTaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxhc3RTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgaXNMb3dlclByZWNlZGVuY2UocGFyZW50UnVsZU5hbWUsIHBhcmVudFByZWNlZGVuY2UpIHtcbiAgICBsZXQgbG93ZXJQcmVjZWRlbmNlID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5ydWxlTmFtZSA9PT0gcGFyZW50UnVsZU5hbWUpIHtcbiAgICAgIGNvbnN0IHByZWNlZGVuY2UgPSB0aGlzLmdldFByZWNlZGVuY2UoKTtcblxuICAgICAgaWYgKHByZWNlZGVuY2UgIT09IG51bGwpIHtcbiAgICAgICAgbG93ZXJQcmVjZWRlbmNlID0gKHByZWNlZGVuY2UgPCBwYXJlbnRQcmVjZWRlbmNlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbG93ZXJQcmVjZWRlbmNlO1xuICB9XG5cbiAgaXNVbnByZWNlZGVudGVkKCkge1xuICAgIGxldCB1bnByZWNlZGVudGVkID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5wcmVjZWRlbmNlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwYXJlbnRSdWxlTmFtZSA9IHRoaXMucnVsZU5hbWUsIC8vL1xuICAgICAgICAgICAgcGFyZW50UHJlY2VkZW5jZSA9IHRoaXMucHJlY2VkZW5jZSwgIC8vL1xuICAgICAgICAgICAgY2hpbGROb2Rlc0xvd2VyUHJlY2VkZW5jZSA9IHRoaXMuY2hpbGROb2Rlcy5zb21lKChjaGlsZE5vZGUpID0+IHsgIC8vL1xuICAgICAgICAgICAgICBjb25zdCBjaGlsZE5vZGVMb3dlclByZWNlZGVuY2UgPSBjaGlsZE5vZGUuaXNMb3dlclByZWNlZGVuY2UocGFyZW50UnVsZU5hbWUsIHBhcmVudFByZWNlZGVuY2UpO1xuXG4gICAgICAgICAgICAgIGlmIChjaGlsZE5vZGVMb3dlclByZWNlZGVuY2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVzTG93ZXJQcmVjZWRlbmNlKSB7XG4gICAgICAgIHVucHJlY2VkZW50ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB1bnByZWNlZGVudGVkO1xuICB9XG5cbiAgaXNJbmNsdWRlZEluKG5vZGUpIHtcbiAgICBsZXQgaW5jbHVkZWRJbiA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMgPT09IG5vZGUpIHtcbiAgICAgIGluY2x1ZGVkSW4gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgICBpZiAobm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICAgICAgaW5jbHVkZWRJbiA9IGNoaWxkTm9kZXMuc29tZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgaW5jbHVkZWRJbkNoaWxkTm9kZSA9IHRoaXMuaXNJbmNsdWRlZEluKGNoaWxkTm9kZSk7XG5cbiAgICAgICAgICBpZiAoaW5jbHVkZWRJbkNoaWxkTm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5jbHVkZWRJbjtcbiAgfVxuXG4gIGlzRW1wdHkoKSB7XG4gICAgY29uc3QgY2hpbGROb2Rlc0xlbmd0aCA9IHRoaXMuY2hpbGROb2Rlcy5sZW5ndGgsXG4gICAgICAgICAgZW1wdHkgPSAoY2hpbGROb2Rlc0xlbmd0aCA9PT0gMCk7XG5cbiAgICByZXR1cm4gZW1wdHk7XG4gIH1cblxuICBtYXRjaChub2RlLCBkZXB0aCA9IEluZmluaXR5KSB7XG4gICAgbGV0IG1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGlmIChkZXB0aCA9PT0gMCkge1xuICAgICAgbWF0Y2hlcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpO1xuXG4gICAgICAgIGlmIChub25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9PT0gdGhpcy5ydWxlTmFtZSkge1xuICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZXNMZW5ndGggPSB0aGlzLmNoaWxkTm9kZXMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXNMZW5ndGggPSBub25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgICAgICAgIGlmIChjaGlsZE5vZGVzTGVuZ3RoID09PSBub25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzTGVuZ3RoKSB7XG4gICAgICAgICAgICBkZXB0aC0tO1xuXG4gICAgICAgICAgICBtYXRjaGVzID0gdGhpcy5jaGlsZE5vZGVzLmV2ZXJ5KChjaGlsZE5vZGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZSA9IG5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXNbaW5kZXhdLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZE5vZGVNYXRjaGVzTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlID0gY2hpbGROb2RlLm1hdGNoKG5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZSwgZGVwdGgpO1xuXG4gICAgICAgICAgICAgIGlmIChjaGlsZE5vZGVNYXRjaGVzTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgcmV3cml0ZSgpIHtcbiAgICBjb25zdCByZXdyaXR0ZW5Ob25UZXJtaW5hbE5vZGUgPSBudWxsO1xuXG4gICAgcmV0dXJuIHJld3JpdHRlbk5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIHNldFJ1bGVOYW1lKHJ1bGVOYW1lKSB7XG4gICAgdGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xuICB9XG5cbiAgc2V0Q2hpbGROb2RlcyhjaGlsZE5vZGVzKSB7XG4gICAgdGhpcy5jaGlsZE5vZGVzID0gY2hpbGROb2RlcztcbiAgfVxuXG4gIHNldFByZWNlZGVuY2UocHJlY2VkZW5jZSkge1xuICAgIHRoaXMucHJlY2VkZW5jZSA9IHByZWNlZGVuY2U7XG4gIH1cbiAgXG4gIGFzUGFyc2VUcmVlKHRva2Vucykge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSBOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUuZnJvbU5vblRlcm1pbmFsTm9kZUFuZFRva2Vucyhub25UZXJtaW5hbE5vZGUsIHRva2VucyksXG4gICAgICAgICAgcGFyc2VUcmVlID0gbm9uVGVybWluYWxOb2RlUGFyc2VUcmVlOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgQ2xhc3MgPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5ydWxlTmFtZSxcbiAgICAgICAgICBjaGlsZE5vZGVzID0gdGhpcy5jaGlsZE5vZGVzLm1hcCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgICBjaGlsZE5vZGUgPSBjaGlsZE5vZGUuY2xvbmUoKTsgIC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gY2hpbGROb2RlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHByZWNlZGVuY2UgPSB0aGlzLnByZWNlZGVuY2UsXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlID0gbmV3IENsYXNzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlKTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhDbGFzcywgcnVsZU5hbWUsIGNoaWxkTm9kZXMpIHtcbiAgICBpZiAoY2hpbGROb2RlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjaGlsZE5vZGVzID0gcnVsZU5hbWU7ICAvLy9cblxuICAgICAgcnVsZU5hbWUgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gTm9uVGVybWluYWxOb2RlOyAgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgcHJlY2VkZW5jZSA9IG51bGwsXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlID0gbmV3IENsYXNzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlKTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZFByZWNlZGVuY2UoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlKSB7XG4gICAgaWYgKHByZWNlZGVuY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcHJlY2VkZW5jZSA9IGNoaWxkTm9kZXM7ICAvLy9cblxuICAgICAgY2hpbGROb2RlcyA9IHJ1bGVOYW1lOyAgLy8vXG5cbiAgICAgIHJ1bGVOYW1lID0gQ2xhc3M7IC8vL1xuXG4gICAgICBDbGFzcyA9IE5vblRlcm1pbmFsTm9kZTsgIC8vL1xuICAgIH1cblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5ldyBDbGFzcyhydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSk7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIk5vblRlcm1pbmFsTm9kZSIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJmb3J3YXJkc1NvbWUiLCJiYWNrd2FyZHNTb21lIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwicHJlY2VkZW5jZSIsImdldFJ1bGVOYW1lIiwiZ2V0Q2hpbGROb2RlcyIsImdldFByZWNlZGVuY2UiLCJyZWN1cnNpdmVseSIsIkluZmluaXR5IiwiZmlyc3RDaGlsZE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwiZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuIiwiZmlyc3RTaWduaWZpY2FudFRva2VuIiwiY2hpbGROb2RlIiwiZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4iLCJsYXN0U2lnbmlmaWNhbnRUb2tlbiIsImlzTG93ZXJQcmVjZWRlbmNlIiwicGFyZW50UnVsZU5hbWUiLCJwYXJlbnRQcmVjZWRlbmNlIiwibG93ZXJQcmVjZWRlbmNlIiwiaXNVbnByZWNlZGVudGVkIiwidW5wcmVjZWRlbnRlZCIsImNoaWxkTm9kZXNMb3dlclByZWNlZGVuY2UiLCJzb21lIiwiY2hpbGROb2RlTG93ZXJQcmVjZWRlbmNlIiwiaXNJbmNsdWRlZEluIiwibm9kZSIsImluY2x1ZGVkSW4iLCJub2RlTm9uVGVybWluYWxOb2RlIiwiaW5jbHVkZWRJbkNoaWxkTm9kZSIsImlzRW1wdHkiLCJjaGlsZE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiZW1wdHkiLCJtYXRjaCIsImRlcHRoIiwibWF0Y2hlcyIsIm5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lIiwibm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyIsIm5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXNMZW5ndGgiLCJldmVyeSIsImluZGV4Iiwibm9uVGVybWluYWxOb2RlQ2hpbGROb2RlIiwiY2hpbGROb2RlTWF0Y2hlc05vblRlcm1pbmFsTm9kZUNoaWxkTm9kZSIsInJld3JpdGUiLCJyZXdyaXR0ZW5Ob25UZXJtaW5hbE5vZGUiLCJzZXRSdWxlTmFtZSIsInNldENoaWxkTm9kZXMiLCJzZXRQcmVjZWRlbmNlIiwiYXNQYXJzZVRyZWUiLCJ0b2tlbnMiLCJub25UZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJmcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zIiwicGFyc2VUcmVlIiwiY2xvbmUiLCJDbGFzcyIsImNvbnN0cnVjdG9yIiwibWFwIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsInVuZGVmaW5lZCIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRQcmVjZWRlbmNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7Ozt5QkFOVTtzRUFFTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQyxJQUFRQyxRQUF1Q0MseUJBQWMsQ0FBckRELE9BQU9FLGVBQWdDRCx5QkFBYyxDQUE5Q0MsY0FBY0MsZ0JBQWtCRix5QkFBYyxDQUFoQ0U7QUFFZCxJQUFBLEFBQU1KLGdDQUFOO2FBQU1BLGdCQUNQSyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsVUFBVTtnQ0FEekJQO1FBRWpCLElBQUksQ0FBQ0ssUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBOztrQkFKRFA7O1lBT25CUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFFBQVE7WUFDdEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFVBQVU7WUFDeEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7b0JBQWNDLGNBQUFBLGlFQUFjO2dCQUMxQixJQUFJSixhQUFhLElB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