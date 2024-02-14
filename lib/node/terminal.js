"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TerminalNode;
    }
});
var _terminalNode = /*#__PURE__*/ _interop_require_default(require("../parseTree/terminalNode"));
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
var TerminalNode = /*#__PURE__*/ function() {
    function TerminalNode(significantToken) {
        _class_call_check(this, TerminalNode);
        this.significantToken = significantToken;
    }
    _create_class(TerminalNode, [
        {
            key: "getSignificantToken",
            value: function getSignificantToken() {
                return this.significantToken;
            }
        },
        {
            key: "getFirstSignificantToken",
            value: function getFirstSignificantToken() {
                var firstSignificantToken = this.significantToken; ///
                return firstSignificantToken;
            }
        },
        {
            key: "getLastSignificantToken",
            value: function getLastSignificantToken() {
                var lastSignificantToken = this.significantToken; ///
                return lastSignificantToken;
            }
        },
        {
            key: "isNoWhitespaceNode",
            value: function isNoWhitespaceNode() {
                var noWhitespaceNode = false;
                return noWhitespaceNode;
            }
        },
        {
            key: "isEndOfLineNode",
            value: function isEndOfLineNode() {
                var endOfLineNode = false;
                return endOfLineNode;
            }
        },
        {
            key: "isEpsilonNode",
            value: function isEpsilonNode() {
                var epsilonNode = false;
                return epsilonNode;
            }
        },
        {
            key: "isTerminalNode",
            value: function isTerminalNode() {
                var terminalNode = true;
                return terminalNode;
            }
        },
        {
            key: "isNonTerminalNode",
            value: function isNonTerminalNode() {
                var nonTerminalNode = false;
                return nonTerminalNode;
            }
        },
        {
            key: "getType",
            value: function getType() {
                return this.significantToken.getType();
            }
        },
        {
            key: "getContent",
            value: function getContent() {
                return this.significantToken.getContent();
            }
        },
        {
            key: "getPrecedence",
            value: function getPrecedence() {
                var precedence = null;
                return precedence;
            }
        },
        {
            key: "isLowerPrecedence",
            value: function isLowerPrecedence(parentRuleName, parentPrecedence) {
                var lowerPrecedence = false;
                return lowerPrecedence;
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
            key: "match",
            value: function match(node) {
                var depth = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Infinity, exactly = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
                var matches = false;
                var nodeTerminalNode = node.isTerminalNode();
                if (nodeTerminalNode) {
                    var terminalNode = node, significantToken = terminalNode.getSignificantToken();
                    matches = exactly ? this.significantToken === significantToken : this.significantToken.match(significantToken);
                }
                return matches;
            }
        },
        {
            key: "setSignificantToken",
            value: function setSignificantToken(significantToken) {
                this.significantToken = significantToken;
            }
        },
        {
            key: "asParseTree",
            value: function asParseTree(tokens) {
                var terminalNode = this, terminalNodeParseTree = _terminalNode.default.fromTerminalNodeAndTokens(terminalNode, tokens), parseTree = terminalNodeParseTree; ///
                return parseTree;
            }
        },
        {
            key: "clone",
            value: function clone() {
                var Class = this.constructor, significantToken = this.significantToken, terminalNode = new Class(significantToken);
                return terminalNode;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing(Class) {
                if (Class === undefined) {
                    Class = TerminalNode; ///
                }
                var significantToken = null, terminalNode = new Class(significantToken);
                return terminalNode;
            }
        },
        {
            key: "fromSignificantToken",
            value: function fromSignificantToken(Class, significantToken) {
                if (significantToken === undefined) {
                    significantToken = Class; ///
                    Class = TerminalNode; ///
                }
                var terminalNode = new Class(significantToken);
                return terminalNode;
            }
        }
    ]);
    return TerminalNode;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3Rlcm1pbmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGVybWluYWxOb2RlUGFyc2VUcmVlIGZyb20gXCIuLi9wYXJzZVRyZWUvdGVybWluYWxOb2RlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHNpZ25pZmljYW50VG9rZW4pIHtcbiAgICB0aGlzLnNpZ25pZmljYW50VG9rZW4gPSBzaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0U2lnbmlmaWNhbnRUb2tlbigpIHtcbiAgICByZXR1cm4gdGhpcy5zaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuKCkge1xuICAgIGNvbnN0IGZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IHRoaXMuc2lnbmlmaWNhbnRUb2tlbjsgIC8vL1xuXG4gICAgcmV0dXJuIGZpcnN0U2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGdldExhc3RTaWduaWZpY2FudFRva2VuKCkge1xuICAgIGNvbnN0IGxhc3RTaWduaWZpY2FudFRva2VuID0gdGhpcy5zaWduaWZpY2FudFRva2VuOyAgLy8vXG5cbiAgICByZXR1cm4gbGFzdFNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBpc05vV2hpdGVzcGFjZU5vZGUoKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIG5vV2hpdGVzcGFjZU5vZGU7XG4gIH1cblxuICBpc0VuZE9mTGluZU5vZGUoKSB7XG4gICAgY29uc3QgZW5kT2ZMaW5lTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIGVuZE9mTGluZU5vZGU7XG4gIH1cblxuICBpc0Vwc2lsb25Ob2RlKCkge1xuICAgIGNvbnN0IGVwc2lsb25Ob2RlID0gZmFsc2U7XG5cbiAgICByZXR1cm4gZXBzaWxvbk5vZGU7XG4gIH1cblxuICBpc1Rlcm1pbmFsTm9kZSgpIHtcbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSB0cnVlO1xuICAgIFxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGU7XG4gIH1cblxuICBpc05vblRlcm1pbmFsTm9kZSgpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBmYWxzZTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBnZXRUeXBlKCkgeyByZXR1cm4gdGhpcy5zaWduaWZpY2FudFRva2VuLmdldFR5cGUoKTsgfVxuXG4gIGdldENvbnRlbnQoKSB7IHJldHVybiB0aGlzLnNpZ25pZmljYW50VG9rZW4uZ2V0Q29udGVudCgpOyB9XG5cbiAgZ2V0UHJlY2VkZW5jZSgpICB7XG4gICAgY29uc3QgcHJlY2VkZW5jZSA9IG51bGw7XG5cbiAgICByZXR1cm4gcHJlY2VkZW5jZTtcbiAgfVxuXG4gIGlzTG93ZXJQcmVjZWRlbmNlKHBhcmVudFJ1bGVOYW1lLCBwYXJlbnRQcmVjZWRlbmNlKSB7XG4gICAgY29uc3QgbG93ZXJQcmVjZWRlbmNlID0gZmFsc2U7XG5cbiAgICByZXR1cm4gbG93ZXJQcmVjZWRlbmNlO1xuICB9XG5cbiAgaXNJbmNsdWRlZEluKG5vZGUpIHtcbiAgICBsZXQgaW5jbHVkZWRJbiA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMgPT09IG5vZGUpIHtcbiAgICAgIGluY2x1ZGVkSW4gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgICBpZiAobm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICAgICAgaW5jbHVkZWRJbiA9IGNoaWxkTm9kZXMuc29tZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgaW5jbHVkZWRJbkNoaWxkTm9kZSA9IHRoaXMuaXNJbmNsdWRlZEluKGNoaWxkTm9kZSk7XG5cbiAgICAgICAgICBpZiAoaW5jbHVkZWRJbkNoaWxkTm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5jbHVkZWRJbjtcbiAgfVxuXG4gIG1hdGNoKG5vZGUsIGRlcHRoID0gSW5maW5pdHksIGV4YWN0bHkgPSBmYWxzZSkge1xuICAgIGxldCBtYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSB0ZXJtaW5hbE5vZGUuZ2V0U2lnbmlmaWNhbnRUb2tlbigpO1xuXG4gICAgICBtYXRjaGVzID0gZXhhY3RseSA/XG4gICAgICAgICAgICAgICAgICAodGhpcy5zaWduaWZpY2FudFRva2VuID09PSBzaWduaWZpY2FudFRva2VuKSA6XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLnNpZ25pZmljYW50VG9rZW4ubWF0Y2goc2lnbmlmaWNhbnRUb2tlbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBzZXRTaWduaWZpY2FudFRva2VuKHNpZ25pZmljYW50VG9rZW4pIHtcbiAgICB0aGlzLnNpZ25pZmljYW50VG9rZW4gPSBzaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgYXNQYXJzZVRyZWUodG9rZW5zKSB7XG4gICAgY29uc3QgdGVybWluYWxOb2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIHRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IFRlcm1pbmFsTm9kZVBhcnNlVHJlZS5mcm9tVGVybWluYWxOb2RlQW5kVG9rZW5zKHRlcm1pbmFsTm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBwYXJzZVRyZWUgPSB0ZXJtaW5hbE5vZGVQYXJzZVRyZWU7ICAvLy9cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBjb25zdCBDbGFzcyA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IHRoaXMuc2lnbmlmaWNhbnRUb2tlbixcbiAgICAgICAgICB0ZXJtaW5hbE5vZGUgPSBuZXcgQ2xhc3Moc2lnbmlmaWNhbnRUb2tlbik7XG5cbiAgICByZXR1cm4gdGVybWluYWxOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzKSB7XG4gICAgaWYgKENsYXNzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIENsYXNzID0gVGVybWluYWxOb2RlOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBzaWduaWZpY2FudFRva2VuID0gbnVsbCxcbiAgICAgICAgICB0ZXJtaW5hbE5vZGUgPSBuZXcgQ2xhc3Moc2lnbmlmaWNhbnRUb2tlbik7XG5cbiAgICByZXR1cm4gdGVybWluYWxOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TaWduaWZpY2FudFRva2VuKENsYXNzLCBzaWduaWZpY2FudFRva2VuKSB7XG4gICAgaWYgKHNpZ25pZmljYW50VG9rZW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBUZXJtaW5hbE5vZGU7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5ldyBDbGFzcyhzaWduaWZpY2FudFRva2VuKTtcbiAgICBcbiAgICByZXR1cm4gdGVybWluYWxOb2RlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiVGVybWluYWxOb2RlIiwic2lnbmlmaWNhbnRUb2tlbiIsImdldFNpZ25pZmljYW50VG9rZW4iLCJnZXRGaXJzdFNpZ25pZmljYW50VG9rZW4iLCJmaXJzdFNpZ25pZmljYW50VG9rZW4iLCJnZXRMYXN0U2lnbmlmaWNhbnRUb2tlbiIsImxhc3RTaWduaWZpY2FudFRva2VuIiwiaXNOb1doaXRlc3BhY2VOb2RlIiwibm9XaGl0ZXNwYWNlTm9kZSIsImlzRW5kT2ZMaW5lTm9kZSIsImVuZE9mTGluZU5vZGUiLCJpc0Vwc2lsb25Ob2RlIiwiZXBzaWxvbk5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwiZ2V0VHlwZSIsImdldENvbnRlbnQiLCJnZXRQcmVjZWRlbmNlIiwicHJlY2VkZW5jZSIsImlzTG93ZXJQcmVjZWRlbmNlIiwicGFyZW50UnVsZU5hbWUiLCJwYXJlbnRQcmVjZWRlbmNlIiwibG93ZXJQcmVjZWRlbmNlIiwiaXNJbmNsdWRlZEluIiwibm9kZSIsImluY2x1ZGVkSW4iLCJub2RlTm9uVGVybWluYWxOb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJzb21lIiwiY2hpbGROb2RlIiwiaW5jbHVkZWRJbkNoaWxkTm9kZSIsIm1hdGNoIiwiZGVwdGgiLCJJbmZpbml0eSIsImV4YWN0bHkiLCJtYXRjaGVzIiwibm9kZVRlcm1pbmFsTm9kZSIsInNldFNpZ25pZmljYW50VG9rZW4iLCJhc1BhcnNlVHJlZSIsInRva2VucyIsInRlcm1pbmFsTm9kZVBhcnNlVHJlZSIsIlRlcm1pbmFsTm9kZVBhcnNlVHJlZSIsImZyb21UZXJtaW5hbE5vZGVBbmRUb2tlbnMiLCJwYXJzZVRyZWUiLCJjbG9uZSIsIkNsYXNzIiwiY29uc3RydWN0b3IiLCJmcm9tTm90aGluZyIsInVuZGVmaW5lZCIsImZyb21TaWduaWZpY2FudFRva2VuIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OzttRUFGYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuQixJQUFB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