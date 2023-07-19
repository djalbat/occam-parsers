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
                var precedence;
                if (this.precedence === Infinity) {
                    var firstChildNode = first(this.childNodes);
                    precedence = firstChildNode.getPrecedence();
                } else {
                    precedence = this.precedence;
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
            ///
            }
        },
        {
            key: "unrewrite",
            value: function unrewrite() {
                this.childNodes.forEach(function(childNode) {
                    childNode.unrewrite();
                });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL25vblRlcm1pbmFsLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSBmcm9tIFwiLi4vcGFyc2VUcmVlL25vblRlcm1pbmFsTm9kZVwiO1xuXG5jb25zdCB7IGZpcnN0LCBmb3J3YXJkc1NvbWUsIGJhY2t3YXJkc1NvbWUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb25UZXJtaW5hbE5vZGUge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSkge1xuICAgIHRoaXMucnVsZU5hbWUgPSBydWxlTmFtZTtcbiAgICB0aGlzLmNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzO1xuICAgIHRoaXMucHJlY2VkZW5jZSA9IHByZWNlZGVuY2U7XG4gIH1cblxuICBnZXRSdWxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlTmFtZTtcbiAgfVxuXG4gIGdldENoaWxkTm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2RlcztcbiAgfVxuXG4gIGdldFByZWNlZGVuY2UoKSB7XG4gICAgbGV0IHByZWNlZGVuY2U7XG5cbiAgICBpZiAodGhpcy5wcmVjZWRlbmNlID09PSBJbmZpbml0eSkge1xuICAgICAgY29uc3QgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdCh0aGlzLmNoaWxkTm9kZXMpO1xuXG4gICAgICBwcmVjZWRlbmNlID0gZmlyc3RDaGlsZE5vZGUuZ2V0UHJlY2VkZW5jZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcmVjZWRlbmNlID0gdGhpcy5wcmVjZWRlbmNlO1xuICAgIH1cblxuICAgIHJldHVybiBwcmVjZWRlbmNlO1xuICB9XG5cbiAgaXNUZXJtaW5hbE5vZGUoKSB7XG4gICAgY29uc3QgdGVybWluYWxOb2RlID0gZmFsc2U7XG5cbiAgICByZXR1cm4gdGVybWluYWxOb2RlO1xuICB9XG5cbiAgaXNOb25UZXJtaW5hbE5vZGUoKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gdHJ1ZTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBnZXRGaXJzdFNpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgbGV0IGZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgICBmb3J3YXJkc1NvbWUodGhpcy5jaGlsZE5vZGVzLCAoY2hpbGROb2RlKSA9PiB7XG4gICAgICBmaXJzdFNpZ25pZmljYW50VG9rZW4gPSBjaGlsZE5vZGUuZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuKCk7XG5cbiAgICAgIGlmIChmaXJzdFNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmlyc3RTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgbGV0IGxhc3RTaWduaWZpY2FudFRva2VuID0gbnVsbDtcblxuICAgIGJhY2t3YXJkc1NvbWUodGhpcy5jaGlsZE5vZGVzLCAoY2hpbGROb2RlKSA9PiB7XG4gICAgICBsYXN0U2lnbmlmaWNhbnRUb2tlbiA9IGNoaWxkTm9kZS5nZXRMYXN0U2lnbmlmaWNhbnRUb2tlbigpO1xuXG4gICAgICBpZiAobGFzdFNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGFzdFNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBpc0xvd2VyUHJlY2VkZW5jZShwYXJlbnRSdWxlTmFtZSwgcGFyZW50UHJlY2VkZW5jZSkge1xuICAgIGxldCBsb3dlclByZWNlZGVuY2UgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLnJ1bGVOYW1lID09PSBwYXJlbnRSdWxlTmFtZSkge1xuICAgICAgY29uc3QgcHJlY2VkZW5jZSA9IHRoaXMuZ2V0UHJlY2VkZW5jZSgpO1xuXG4gICAgICBpZiAocHJlY2VkZW5jZSAhPT0gbnVsbCkge1xuICAgICAgICBsb3dlclByZWNlZGVuY2UgPSAocHJlY2VkZW5jZSA8IHBhcmVudFByZWNlZGVuY2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBsb3dlclByZWNlZGVuY2U7XG4gIH1cblxuICBpc1VucHJlY2VkZW50ZWQoKSB7XG4gICAgbGV0IHVucHJlY2VkZW50ZWQgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLnByZWNlZGVuY2UgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHBhcmVudFJ1bGVOYW1lID0gdGhpcy5ydWxlTmFtZSwgLy8vXG4gICAgICAgICAgICBwYXJlbnRQcmVjZWRlbmNlID0gdGhpcy5wcmVjZWRlbmNlLCAgLy8vXG4gICAgICAgICAgICBjaGlsZE5vZGVzTG93ZXJQcmVjZWRlbmNlID0gdGhpcy5jaGlsZE5vZGVzLnNvbWUoKGNoaWxkTm9kZSkgPT4geyAgLy8vXG4gICAgICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZUxvd2VyUHJlY2VkZW5jZSA9IGNoaWxkTm9kZS5pc0xvd2VyUHJlY2VkZW5jZShwYXJlbnRSdWxlTmFtZSwgcGFyZW50UHJlY2VkZW5jZSk7XG5cbiAgICAgICAgICAgICAgaWYgKGNoaWxkTm9kZUxvd2VyUHJlY2VkZW5jZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgaWYgKGNoaWxkTm9kZXNMb3dlclByZWNlZGVuY2UpIHtcbiAgICAgICAgdW5wcmVjZWRlbnRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHVucHJlY2VkZW50ZWQ7XG4gIH1cblxuICBpc0luY2x1ZGVkSW4obm9kZSkge1xuICAgIGxldCBpbmNsdWRlZEluID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcyA9PT0gbm9kZSkge1xuICAgICAgaW5jbHVkZWRJbiA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgICAgICBpbmNsdWRlZEluID0gY2hpbGROb2Rlcy5zb21lKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBpbmNsdWRlZEluQ2hpbGROb2RlID0gdGhpcy5pc0luY2x1ZGVkSW4oY2hpbGROb2RlKTtcblxuICAgICAgICAgIGlmIChpbmNsdWRlZEluQ2hpbGROb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbmNsdWRlZEluO1xuICB9XG5cbiAgaXNFbXB0eSgpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzTGVuZ3RoID0gdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCxcbiAgICAgICAgICBlbXB0eSA9IChjaGlsZE5vZGVzTGVuZ3RoID09PSAwKTtcblxuICAgIHJldHVybiBlbXB0eTtcbiAgfVxuXG4gIG1hdGNoKG5vZGUsIGRlcHRoID0gSW5maW5pdHkpIHtcbiAgICBsZXQgbWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgaWYgKGRlcHRoID09PSAwKSB7XG4gICAgICBtYXRjaGVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgbm9kZU5vblRlcm1pbmFsTm9kZSA9IG5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgICAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCk7XG5cbiAgICAgICAgaWYgKG5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID09PSB0aGlzLnJ1bGVOYW1lKSB7XG4gICAgICAgICAgY29uc3QgY2hpbGROb2Rlc0xlbmd0aCA9IHRoaXMuY2hpbGROb2Rlcy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQ2hpbGROb2Rlc0xlbmd0aCA9IG5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMubGVuZ3RoO1xuXG4gICAgICAgICAgaWYgKGNoaWxkTm9kZXNMZW5ndGggPT09IG5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXNMZW5ndGgpIHtcbiAgICAgICAgICAgIGRlcHRoLS07XG5cbiAgICAgICAgICAgIG1hdGNoZXMgPSB0aGlzLmNoaWxkTm9kZXMuZXZlcnkoKGNoaWxkTm9kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQ2hpbGROb2RlID0gbm9uVGVybWluYWxOb2RlQ2hpbGROb2Rlc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTm9kZU1hdGNoZXNOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGUgPSBjaGlsZE5vZGUubWF0Y2gobm9uVGVybWluYWxOb2RlQ2hpbGROb2RlLCBkZXB0aCk7XG5cbiAgICAgICAgICAgICAgaWYgKGNoaWxkTm9kZU1hdGNoZXNOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICByZXdyaXRlKCkge1xuICAgIC8vL1xuICB9XG5cbiAgdW5yZXdyaXRlKCkge1xuICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNoaWxkTm9kZS51bnJld3JpdGUoKTtcbiAgICB9KTtcbiAgfVxuICBcbiAgc2V0UnVsZU5hbWUocnVsZU5hbWUpIHtcbiAgICB0aGlzLnJ1bGVOYW1lID0gcnVsZU5hbWU7XG4gIH1cblxuICBzZXRDaGlsZE5vZGVzKGNoaWxkTm9kZXMpIHtcbiAgICB0aGlzLmNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzO1xuICB9XG5cbiAgc2V0UHJlY2VkZW5jZShwcmVjZWRlbmNlKSB7XG4gICAgdGhpcy5wcmVjZWRlbmNlID0gcHJlY2VkZW5jZTtcbiAgfVxuICBcbiAgYXNQYXJzZVRyZWUodG9rZW5zKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IE5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZS5mcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBwYXJzZVRyZWUgPSBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWU7ICAvLy9cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhDbGFzcywgcnVsZU5hbWUsIGNoaWxkTm9kZXMpIHtcbiAgICBpZiAoY2hpbGROb2RlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjaGlsZE5vZGVzID0gcnVsZU5hbWU7ICAvLy9cblxuICAgICAgcnVsZU5hbWUgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gTm9uVGVybWluYWxOb2RlOyAgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgcHJlY2VkZW5jZSA9IG51bGwsXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlID0gbmV3IENsYXNzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlKTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZFByZWNlZGVuY2UoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlKSB7XG4gICAgaWYgKHByZWNlZGVuY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcHJlY2VkZW5jZSA9IGNoaWxkTm9kZXM7ICAvLy9cblxuICAgICAgY2hpbGROb2RlcyA9IHJ1bGVOYW1lOyAgLy8vXG5cbiAgICAgIHJ1bGVOYW1lID0gQ2xhc3M7IC8vL1xuXG4gICAgICBDbGFzcyA9IE5vblRlcm1pbmFsTm9kZTsgIC8vL1xuICAgIH1cblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5ldyBDbGFzcyhydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSk7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIk5vblRlcm1pbmFsTm9kZSIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJmb3J3YXJkc1NvbWUiLCJiYWNrd2FyZHNTb21lIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwicHJlY2VkZW5jZSIsImdldFJ1bGVOYW1lIiwiZ2V0Q2hpbGROb2RlcyIsImdldFByZWNlZGVuY2UiLCJJbmZpbml0eSIsImZpcnN0Q2hpbGROb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImNoaWxkTm9kZSIsImdldExhc3RTaWduaWZpY2FudFRva2VuIiwibGFzdFNpZ25pZmljYW50VG9rZW4iLCJpc0xvd2VyUHJlY2VkZW5jZSIsInBhcmVudFJ1bGVOYW1lIiwicGFyZW50UHJlY2VkZW5jZSIsImxvd2VyUHJlY2VkZW5jZSIsImlzVW5wcmVjZWRlbnRlZCIsInVucHJlY2VkZW50ZWQiLCJjaGlsZE5vZGVzTG93ZXJQcmVjZWRlbmNlIiwic29tZSIsImNoaWxkTm9kZUxvd2VyUHJlY2VkZW5jZSIsImlzSW5jbHVkZWRJbiIsIm5vZGUiLCJpbmNsdWRlZEluIiwibm9kZU5vblRlcm1pbmFsTm9kZSIsImluY2x1ZGVkSW5DaGlsZE5vZGUiLCJpc0VtcHR5IiwiY2hpbGROb2Rlc0xlbmd0aCIsImxlbmd0aCIsImVtcHR5IiwibWF0Y2giLCJkZXB0aCIsIm1hdGNoZXMiLCJub25UZXJtaW5hbE5vZGVSdWxlTmFtZSIsIm5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMiLCJub25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzTGVuZ3RoIiwiZXZlcnkiLCJpbmRleCIsIm5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZSIsImNoaWxkTm9kZU1hdGNoZXNOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGUiLCJyZXdyaXRlIiwidW5yZXdyaXRlIiwiZm9yRWFjaCIsInNldFJ1bGVOYW1lIiwic2V0Q2hpbGROb2RlcyIsInNldFByZWNlZGVuY2UiLCJhc1BhcnNlVHJlZSIsInRva2VucyIsIm5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSIsIk5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSIsImZyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnMiLCJwYXJzZVRyZWUiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwiQ2xhc3MiLCJ1bmRlZmluZWQiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kUHJlY2VkZW5jZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJB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