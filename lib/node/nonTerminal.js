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
var forwardsSome = _necessary.arrayUtilities.forwardsSome, backwardsSome = _necessary.arrayUtilities.backwardsSome;
var NonTerminalNode = /*#__PURE__*/ function() {
    function NonTerminalNode(ruleName, precedence, childNodes) {
        _class_call_check(this, NonTerminalNode);
        this.ruleName = ruleName;
        this.precedence = precedence;
        this.childNodes = childNodes;
    }
    _create_class(NonTerminalNode, [
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
            key: "getRuleName",
            value: function getRuleName() {
                return this.ruleName;
            }
        },
        {
            key: "getPrecedence",
            value: function getPrecedence() {
                return this.precedence;
            }
        },
        {
            key: "getChildNodes",
            value: function getChildNodes() {
                return this.childNodes;
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
            key: "isHigherPrecedence",
            value: function isHigherPrecedence(precedence, ruleName) {
                var higherPrecedence = false; ///
                if (this.precedence !== null) {
                    if (this.ruleName === ruleName) {
                        higherPrecedence = this.precedence > precedence;
                    }
                }
                return higherPrecedence;
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
            key: "setRuleName",
            value: function setRuleName(ruleName) {
                this.ruleName = ruleName;
            }
        },
        {
            key: "setPrecedence",
            value: function setPrecedence(precedence) {
                this.precedence = precedence;
            }
        },
        {
            key: "setChildNodes",
            value: function setChildNodes(childNodes) {
                this.childNodes = childNodes;
            }
        },
        {
            key: "asParseTree",
            value: function asParseTree(tokens) {
                var abridged = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                var nonTerminalNode = this, nonTerminalNodeParseTree = _nonTerminalNode.default.fromNonTerminalNodeTokensAndAbridged(nonTerminalNode, tokens, abridged), parseTree = nonTerminalNodeParseTree; ///
                return parseTree;
            }
        }
    ], [
        {
            key: "fromRuleNamePrecedenceAndChildNodes",
            value: function fromRuleNamePrecedenceAndChildNodes(Class, ruleName, precedence, childNodes) {
                if (childNodes === undefined) {
                    childNodes = precedence; ///
                    precedence = ruleName; ///
                    ruleName = Class; ///
                    Class = NonTerminalNode; ///
                }
                var nonTerminalNode = new Class(ruleName, precedence, childNodes);
                return nonTerminalNode;
            }
        }
    ]);
    return NonTerminalNode;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL25vblRlcm1pbmFsLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSBmcm9tIFwiLi4vcGFyc2VUcmVlL25vblRlcm1pbmFsTm9kZVwiO1xuXG5jb25zdCB7IGZvcndhcmRzU29tZSwgYmFja3dhcmRzU29tZSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBwcmVjZWRlbmNlLCBjaGlsZE5vZGVzKSB7XG4gICAgdGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xuICAgIHRoaXMucHJlY2VkZW5jZSA9IHByZWNlZGVuY2U7XG4gICAgdGhpcy5jaGlsZE5vZGVzID0gY2hpbGROb2RlcztcbiAgfVxuXG4gIGlzVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGlzTm9uVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRydWU7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU5hbWU7XG4gIH1cblxuICBnZXRQcmVjZWRlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnByZWNlZGVuY2U7XG4gIH1cblxuICBnZXRDaGlsZE5vZGVzKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXM7XG4gIH1cblxuICBnZXRGaXJzdFNpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgbGV0IGZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgICBmb3J3YXJkc1NvbWUodGhpcy5jaGlsZE5vZGVzLCAoY2hpbGROb2RlKSA9PiB7XG4gICAgICBmaXJzdFNpZ25pZmljYW50VG9rZW4gPSBjaGlsZE5vZGUuZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuKCk7XG5cbiAgICAgIGlmIChmaXJzdFNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmlyc3RTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgbGV0IGxhc3RTaWduaWZpY2FudFRva2VuID0gbnVsbDtcblxuICAgIGJhY2t3YXJkc1NvbWUodGhpcy5jaGlsZE5vZGVzLCAoY2hpbGROb2RlKSA9PiB7XG4gICAgICBsYXN0U2lnbmlmaWNhbnRUb2tlbiA9IGNoaWxkTm9kZS5nZXRMYXN0U2lnbmlmaWNhbnRUb2tlbigpO1xuXG4gICAgICBpZiAobGFzdFNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGFzdFNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBpc0luY2x1ZGVkSW4obm9kZSkge1xuICAgIGxldCBpbmNsdWRlZEluID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcyA9PT0gbm9kZSkge1xuICAgICAgaW5jbHVkZWRJbiA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgICAgICBpbmNsdWRlZEluID0gY2hpbGROb2Rlcy5zb21lKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBpbmNsdWRlZEluQ2hpbGROb2RlID0gdGhpcy5pc0luY2x1ZGVkSW4oY2hpbGROb2RlKTtcblxuICAgICAgICAgIGlmIChpbmNsdWRlZEluQ2hpbGROb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbmNsdWRlZEluO1xuICB9XG5cbiAgaXNIaWdoZXJQcmVjZWRlbmNlKHByZWNlZGVuY2UsIHJ1bGVOYW1lKSB7XG4gICAgbGV0IGhpZ2hlclByZWNlZGVuY2UgPSBmYWxzZTsgIC8vL1xuXG4gICAgaWYgKHRoaXMucHJlY2VkZW5jZSAhPT0gbnVsbCkge1xuICAgICAgaWYgKHRoaXMucnVsZU5hbWUgPT09IHJ1bGVOYW1lKSB7XG4gICAgICAgIGhpZ2hlclByZWNlZGVuY2UgPSAodGhpcy5wcmVjZWRlbmNlID4gcHJlY2VkZW5jZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGhpZ2hlclByZWNlZGVuY2U7XG4gIH1cblxuICBtYXRjaChub2RlLCBkZXB0aCA9IEluZmluaXR5KSB7XG4gICAgbGV0IG1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGlmIChkZXB0aCA9PT0gMCkge1xuICAgICAgbWF0Y2hlcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpO1xuXG4gICAgICAgIGlmIChub25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9PT0gdGhpcy5ydWxlTmFtZSkge1xuICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZXNMZW5ndGggPSB0aGlzLmNoaWxkTm9kZXMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXNMZW5ndGggPSBub25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgICAgICAgIGlmIChjaGlsZE5vZGVzTGVuZ3RoID09PSBub25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzTGVuZ3RoKSB7XG4gICAgICAgICAgICBkZXB0aC0tO1xuXG4gICAgICAgICAgICBtYXRjaGVzID0gdGhpcy5jaGlsZE5vZGVzLmV2ZXJ5KChjaGlsZE5vZGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZSA9IG5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXNbaW5kZXhdLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZE5vZGVNYXRjaGVzTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlID0gY2hpbGROb2RlLm1hdGNoKG5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZSwgZGVwdGgpO1xuXG4gICAgICAgICAgICAgIGlmIChjaGlsZE5vZGVNYXRjaGVzTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG4gIFxuICBzZXRSdWxlTmFtZShydWxlTmFtZSkge1xuICAgIHRoaXMucnVsZU5hbWUgPSBydWxlTmFtZTtcbiAgfVxuXG4gIHNldFByZWNlZGVuY2UocHJlY2VkZW5jZSkge1xuICAgIHRoaXMucHJlY2VkZW5jZSA9IHByZWNlZGVuY2U7XG4gIH1cblxuICBzZXRDaGlsZE5vZGVzKGNoaWxkTm9kZXMpIHtcbiAgICB0aGlzLmNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzO1xuICB9XG4gIFxuICBhc1BhcnNlVHJlZSh0b2tlbnMsIGFicmlkZ2VkID0gZmFsc2UpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlUGFyc2VUcmVlID0gTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlLmZyb21Ob25UZXJtaW5hbE5vZGVUb2tlbnNBbmRBYnJpZGdlZChub25UZXJtaW5hbE5vZGUsIHRva2VucywgYWJyaWRnZWQpLFxuICAgICAgICAgIHBhcnNlVHJlZSA9IG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZTsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVQcmVjZWRlbmNlQW5kQ2hpbGROb2RlcyhDbGFzcywgcnVsZU5hbWUsIHByZWNlZGVuY2UsIGNoaWxkTm9kZXMpIHtcbiAgICBpZiAoY2hpbGROb2RlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjaGlsZE5vZGVzID0gcHJlY2VkZW5jZTsgIC8vL1xuXG4gICAgICBwcmVjZWRlbmNlID0gcnVsZU5hbWU7ICAvLy9cblxuICAgICAgcnVsZU5hbWUgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gTm9uVGVybWluYWxOb2RlOyAgLy8vXG4gICAgfVxuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbmV3IENsYXNzKHJ1bGVOYW1lLCBwcmVjZWRlbmNlLCBjaGlsZE5vZGVzKTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiTm9uVGVybWluYWxOb2RlIiwiZm9yd2FyZHNTb21lIiwiYXJyYXlVdGlsaXRpZXMiLCJiYWNrd2FyZHNTb21lIiwicnVsZU5hbWUiLCJwcmVjZWRlbmNlIiwiY2hpbGROb2RlcyIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJnZXRSdWxlTmFtZSIsImdldFByZWNlZGVuY2UiLCJnZXRDaGlsZE5vZGVzIiwiZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuIiwiZmlyc3RTaWduaWZpY2FudFRva2VuIiwiY2hpbGROb2RlIiwiZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4iLCJsYXN0U2lnbmlmaWNhbnRUb2tlbiIsImlzSW5jbHVkZWRJbiIsIm5vZGUiLCJpbmNsdWRlZEluIiwibm9kZU5vblRlcm1pbmFsTm9kZSIsInNvbWUiLCJpbmNsdWRlZEluQ2hpbGROb2RlIiwiaXNIaWdoZXJQcmVjZWRlbmNlIiwiaGlnaGVyUHJlY2VkZW5jZSIsIm1hdGNoIiwiZGVwdGgiLCJJbmZpbml0eSIsIm1hdGNoZXMiLCJub25UZXJtaW5hbE5vZGVSdWxlTmFtZSIsImNoaWxkTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJub25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzIiwibm9uVGVybWluYWxOb2RlQ2hpbGROb2Rlc0xlbmd0aCIsImV2ZXJ5IiwiaW5kZXgiLCJub25UZXJtaW5hbE5vZGVDaGlsZE5vZGUiLCJjaGlsZE5vZGVNYXRjaGVzTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlIiwic2V0UnVsZU5hbWUiLCJzZXRQcmVjZWRlbmNlIiwic2V0Q2hpbGROb2RlcyIsImFzUGFyc2VUcmVlIiwidG9rZW5zIiwiYWJyaWRnZWQiLCJub25UZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJmcm9tTm9uVGVybWluYWxOb2RlVG9rZW5zQW5kQWJyaWRnZWQiLCJwYXJzZVRyZWUiLCJmcm9tUnVsZU5hbWVQcmVjZWRl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