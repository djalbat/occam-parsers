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
                var recursive = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
                var precedence;
                if (recursive && this.precedence === Infinity) {
                    precedence = null;
                    this.childNodes.some(function(childNode) {
                        precedence = childNode.getPrecedence(); ///
                        if (precedence !== null) {
                            return true;
                        }
                    });
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
                    var recursive = true, precedence = this.getPrecedence(recursive);
                    if (precedence !== null) {
                        lowerPrecedence = precedence < parentPrecedence;
                    }
                }
                return lowerPrecedence;
            }
        },
        {
            key: "isUnprecedented",
            value: function isUnprecedented(precedence) {
                var unprecedented = false;
                if (precedence !== null) {
                    var parentRuleName = this.ruleName, parentPrecedence = precedence, childNodesLowerPrecedence = this.childNodes.some(function(childNode) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL25vblRlcm1pbmFsLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSBmcm9tIFwiLi4vcGFyc2VUcmVlL25vblRlcm1pbmFsTm9kZVwiO1xuXG5jb25zdCB7IGZvcndhcmRzU29tZSwgYmFja3dhcmRzU29tZSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlKSB7XG4gICAgdGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xuICAgIHRoaXMuY2hpbGROb2RlcyA9IGNoaWxkTm9kZXM7XG4gICAgdGhpcy5wcmVjZWRlbmNlID0gcHJlY2VkZW5jZTtcbiAgfVxuXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVOYW1lO1xuICB9XG5cbiAgZ2V0Q2hpbGROb2RlcygpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzO1xuICB9XG5cbiAgZ2V0UHJlY2VkZW5jZShyZWN1cnNpdmUgPSBmYWxzZSkge1xuICAgIGxldCBwcmVjZWRlbmNlO1xuXG4gICAgaWYgKHJlY3Vyc2l2ZSAmJiAodGhpcy5wcmVjZWRlbmNlID09PSBJbmZpbml0eSkpIHtcbiAgICAgIHByZWNlZGVuY2UgPSBudWxsO1xuXG4gICAgICB0aGlzLmNoaWxkTm9kZXMuc29tZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgIHByZWNlZGVuY2UgPSBjaGlsZE5vZGUuZ2V0UHJlY2VkZW5jZSgpOyAvLy9cblxuICAgICAgICBpZiAocHJlY2VkZW5jZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJlY2VkZW5jZSA9IHRoaXMucHJlY2VkZW5jZTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJlY2VkZW5jZTtcbiAgfVxuXG4gIGlzVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGlzTm9uVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRydWU7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuKCkge1xuICAgIGxldCBmaXJzdFNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gICAgZm9yd2FyZHNTb21lKHRoaXMuY2hpbGROb2RlcywgKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuID0gY2hpbGROb2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbigpO1xuXG4gICAgICBpZiAoZmlyc3RTaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpcnN0U2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGdldExhc3RTaWduaWZpY2FudFRva2VuKCkge1xuICAgIGxldCBsYXN0U2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgICBiYWNrd2FyZHNTb21lKHRoaXMuY2hpbGROb2RlcywgKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgbGFzdFNpZ25pZmljYW50VG9rZW4gPSBjaGlsZE5vZGUuZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4oKTtcblxuICAgICAgaWYgKGxhc3RTaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxhc3RTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgaXNMb3dlclByZWNlZGVuY2UocGFyZW50UnVsZU5hbWUsIHBhcmVudFByZWNlZGVuY2UpIHtcbiAgICBsZXQgbG93ZXJQcmVjZWRlbmNlID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5ydWxlTmFtZSA9PT0gcGFyZW50UnVsZU5hbWUpIHtcbiAgICAgIGNvbnN0IHJlY3Vyc2l2ZSA9IHRydWUsXG4gICAgICAgICAgICBwcmVjZWRlbmNlID0gdGhpcy5nZXRQcmVjZWRlbmNlKHJlY3Vyc2l2ZSk7XG5cbiAgICAgIGlmIChwcmVjZWRlbmNlICE9PSBudWxsKSB7XG4gICAgICAgIGxvd2VyUHJlY2VkZW5jZSA9IChwcmVjZWRlbmNlIDwgcGFyZW50UHJlY2VkZW5jZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGxvd2VyUHJlY2VkZW5jZTtcbiAgfVxuXG4gIGlzVW5wcmVjZWRlbnRlZChwcmVjZWRlbmNlKSB7XG4gICAgbGV0IHVucHJlY2VkZW50ZWQgPSBmYWxzZTtcblxuICAgIGlmIChwcmVjZWRlbmNlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwYXJlbnRSdWxlTmFtZSA9IHRoaXMucnVsZU5hbWUsIC8vL1xuICAgICAgICAgICAgcGFyZW50UHJlY2VkZW5jZSA9IHByZWNlZGVuY2UsICAvLy9cbiAgICAgICAgICAgIGNoaWxkTm9kZXNMb3dlclByZWNlZGVuY2UgPSB0aGlzLmNoaWxkTm9kZXMuc29tZSgoY2hpbGROb2RlKSA9PiB7ICAvLy9cbiAgICAgICAgICAgICAgY29uc3QgY2hpbGROb2RlTG93ZXJQcmVjZWRlbmNlID0gY2hpbGROb2RlLmlzTG93ZXJQcmVjZWRlbmNlKHBhcmVudFJ1bGVOYW1lLCBwYXJlbnRQcmVjZWRlbmNlKTtcblxuICAgICAgICAgICAgICBpZiAoY2hpbGROb2RlTG93ZXJQcmVjZWRlbmNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBpZiAoY2hpbGROb2Rlc0xvd2VyUHJlY2VkZW5jZSkge1xuICAgICAgICB1bnByZWNlZGVudGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdW5wcmVjZWRlbnRlZDtcbiAgfVxuXG4gIGlzSW5jbHVkZWRJbihub2RlKSB7XG4gICAgbGV0IGluY2x1ZGVkSW4gPSBmYWxzZTtcblxuICAgIGlmICh0aGlzID09PSBub2RlKSB7XG4gICAgICBpbmNsdWRlZEluID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgbm9kZU5vblRlcm1pbmFsTm9kZSA9IG5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgICAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgICAgIGluY2x1ZGVkSW4gPSBjaGlsZE5vZGVzLnNvbWUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGluY2x1ZGVkSW5DaGlsZE5vZGUgPSB0aGlzLmlzSW5jbHVkZWRJbihjaGlsZE5vZGUpO1xuXG4gICAgICAgICAgaWYgKGluY2x1ZGVkSW5DaGlsZE5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGluY2x1ZGVkSW47XG4gIH1cblxuICBpc0VtcHR5KCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXNMZW5ndGggPSB0aGlzLmNoaWxkTm9kZXMubGVuZ3RoLFxuICAgICAgICAgIGVtcHR5ID0gKGNoaWxkTm9kZXNMZW5ndGggPT09IDApO1xuXG4gICAgcmV0dXJuIGVtcHR5O1xuICB9XG5cbiAgbWF0Y2gobm9kZSwgZGVwdGggPSBJbmZpbml0eSkge1xuICAgIGxldCBtYXRjaGVzID0gZmFsc2U7XG5cbiAgICBpZiAoZGVwdGggPT09IDApIHtcbiAgICAgIG1hdGNoZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgICBpZiAobm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICAgICAgICBpZiAobm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPT09IHRoaXMucnVsZU5hbWUpIHtcbiAgICAgICAgICBjb25zdCBjaGlsZE5vZGVzTGVuZ3RoID0gdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzTGVuZ3RoID0gbm9uVGVybWluYWxOb2RlQ2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICAgICAgICBpZiAoY2hpbGROb2Rlc0xlbmd0aCA9PT0gbm9uVGVybWluYWxOb2RlQ2hpbGROb2Rlc0xlbmd0aCkge1xuICAgICAgICAgICAgZGVwdGgtLTtcblxuICAgICAgICAgICAgbWF0Y2hlcyA9IHRoaXMuY2hpbGROb2Rlcy5ldmVyeSgoY2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVDaGlsZE5vZGUgPSBub25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGROb2RlTWF0Y2hlc05vblRlcm1pbmFsTm9kZUNoaWxkTm9kZSA9IGNoaWxkTm9kZS5tYXRjaChub25UZXJtaW5hbE5vZGVDaGlsZE5vZGUsIGRlcHRoKTtcblxuICAgICAgICAgICAgICBpZiAoY2hpbGROb2RlTWF0Y2hlc05vblRlcm1pbmFsTm9kZUNoaWxkTm9kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuICBcbiAgc2V0UnVsZU5hbWUocnVsZU5hbWUpIHtcbiAgICB0aGlzLnJ1bGVOYW1lID0gcnVsZU5hbWU7XG4gIH1cblxuICBzZXRDaGlsZE5vZGVzKGNoaWxkTm9kZXMpIHtcbiAgICB0aGlzLmNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzO1xuICB9XG5cbiAgc2V0UHJlY2VkZW5jZShwcmVjZWRlbmNlKSB7XG4gICAgdGhpcy5wcmVjZWRlbmNlID0gcHJlY2VkZW5jZTtcbiAgfVxuICBcbiAgYXNQYXJzZVRyZWUodG9rZW5zKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IE5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZS5mcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBwYXJzZVRyZWUgPSBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWU7ICAvLy9cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhDbGFzcywgcnVsZU5hbWUsIGNoaWxkTm9kZXMpIHtcbiAgICBpZiAoY2hpbGROb2RlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjaGlsZE5vZGVzID0gcnVsZU5hbWU7ICAvLy9cblxuICAgICAgcnVsZU5hbWUgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gTm9uVGVybWluYWxOb2RlOyAgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgcHJlY2VkZW5jZSA9IG51bGwsXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlID0gbmV3IENsYXNzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlKTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZFByZWNlZGVuY2UoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlKSB7XG4gICAgaWYgKHByZWNlZGVuY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcHJlY2VkZW5jZSA9IGNoaWxkTm9kZXM7ICAvLy9cblxuICAgICAgY2hpbGROb2RlcyA9IHJ1bGVOYW1lOyAgLy8vXG5cbiAgICAgIHJ1bGVOYW1lID0gQ2xhc3M7IC8vL1xuXG4gICAgICBDbGFzcyA9IE5vblRlcm1pbmFsTm9kZTsgIC8vL1xuICAgIH1cblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5ldyBDbGFzcyhydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSk7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIk5vblRlcm1pbmFsTm9kZSIsImZvcndhcmRzU29tZSIsImFycmF5VXRpbGl0aWVzIiwiYmFja3dhcmRzU29tZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsInByZWNlZGVuY2UiLCJnZXRSdWxlTmFtZSIsImdldENoaWxkTm9kZXMiLCJnZXRQcmVjZWRlbmNlIiwicmVjdXJzaXZlIiwiSW5maW5pdHkiLCJzb21lIiwiY2hpbGROb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImdldExhc3RTaWduaWZpY2FudFRva2VuIiwibGFzdFNpZ25pZmljYW50VG9rZW4iLCJpc0xvd2VyUHJlY2VkZW5jZSIsInBhcmVudFJ1bGVOYW1lIiwicGFyZW50UHJlY2VkZW5jZSIsImxvd2VyUHJlY2VkZW5jZSIsImlzVW5wcmVjZWRlbnRlZCIsInVucHJlY2VkZW50ZWQiLCJjaGlsZE5vZGVzTG93ZXJQcmVjZWRlbmNlIiwiY2hpbGROb2RlTG93ZXJQcmVjZWRlbmNlIiwiaXNJbmNsdWRlZEluIiwibm9kZSIsImluY2x1ZGVkSW4iLCJub2RlTm9uVGVybWluYWxOb2RlIiwiaW5jbHVkZWRJbkNoaWxkTm9kZSIsImlzRW1wdHkiLCJjaGlsZE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiZW1wdHkiLCJtYXRjaCIsImRlcHRoIiwibWF0Y2hlcyIsIm5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lIiwibm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyIsIm5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXNMZW5ndGgiLCJldmVyeSIsImluZGV4Iiwibm9uVGVybWluYWxOb2RlQ2hpbGROb2RlIiwiY2hpbGROb2RlTWF0Y2hlc05vblRlcm1pbmFsTm9kZUNoaWxkTm9kZSIsInNldFJ1bGVOYW1lIiwic2V0Q2hpbGROb2RlcyIsInNldFByZWNlZGVuY2UiLCJhc1BhcnNlVHJlZSIsInRva2VucyIsIm5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSIsIk5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSIsImZyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnMiLCJwYXJzZVRyZWUiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwiQ2xhc3MiLCJ1bmRlZmluZWQiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kUHJlY2VkZW5jZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7eUJBTlU7c0VBRU07Ozs7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