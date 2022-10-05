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
var _terminalNode = /*#__PURE__*/ _interopRequireDefault(require("../parseTree/terminalNode"));
function _classCallCheck(instance, Constructor) {
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
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var TerminalNode = /*#__PURE__*/ function() {
    function TerminalNode(significantToken) {
        _classCallCheck(this, TerminalNode);
        this.significantToken = significantToken;
    }
    _createClass(TerminalNode, [
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
            key: "setSignificantToken",
            value: function setSignificantToken(significantToken) {
                this.significantToken = significantToken;
            }
        },
        {
            key: "asParseTree",
            value: function asParseTree(tokens) {
                var abridged = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                var terminalNode = this, terminalNodeParseTree = _terminalNode.default.fromTerminalNodeTokensAndAbridged(terminalNode, tokens, abridged), parseTree = terminalNodeParseTree; ///
                return parseTree;
            }
        },
        {
            key: "match",
            value: function match(node) {
                var matches = false;
                var nodeTerminalNode = node.isTerminalNode();
                if (nodeTerminalNode) {
                    var terminalNode = node, terminalNodeEpsilonNode = terminalNode.isEpsilonNode(), terminalNodeNoWhitespaceNode = terminalNode.isNoWhitespaceNode();
                    if (!terminalNodeEpsilonNode && !terminalNodeNoWhitespaceNode) {
                        var significantToken = terminalNode.getSignificantToken();
                        matches = this.significantToken.match(significantToken);
                    }
                }
                return matches;
            }
        },
        {
            key: "clone",
            value: function clone(Class) {
                if (Class === undefined) {
                    var constructor = this.constructor;
                    Class = constructor;
                }
                var contentLength = this.significantToken.getContentLength(), startPosition = 0, endPosition = contentLength, significantToken = this.significantToken.clone(startPosition, endPosition), terminalNode = Class.fromSignificantToken(significantToken);
                return terminalNode;
            }
        }
    ], [
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3Rlcm1pbmFsLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGVybWluYWxOb2RlUGFyc2VUcmVlIGZyb20gXCIuLi9wYXJzZVRyZWUvdGVybWluYWxOb2RlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHNpZ25pZmljYW50VG9rZW4pIHtcbiAgICB0aGlzLnNpZ25pZmljYW50VG9rZW4gPSBzaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0U2lnbmlmaWNhbnRUb2tlbigpIHtcbiAgICByZXR1cm4gdGhpcy5zaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuKCkge1xuICAgIGNvbnN0IGZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IHRoaXMuc2lnbmlmaWNhbnRUb2tlbjsgIC8vL1xuXG4gICAgcmV0dXJuIGZpcnN0U2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGdldExhc3RTaWduaWZpY2FudFRva2VuKCkge1xuICAgIGNvbnN0IGxhc3RTaWduaWZpY2FudFRva2VuID0gdGhpcy5zaWduaWZpY2FudFRva2VuOyAgLy8vXG5cbiAgICByZXR1cm4gbGFzdFNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBpc05vV2hpdGVzcGFjZU5vZGUoKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIG5vV2hpdGVzcGFjZU5vZGU7XG4gIH1cblxuICBpc0Vwc2lsb25Ob2RlKCkge1xuICAgIGNvbnN0IGVwc2lsb25Ob2RlID0gZmFsc2U7XG5cbiAgICByZXR1cm4gZXBzaWxvbk5vZGU7XG4gIH1cblxuICBpc1Rlcm1pbmFsTm9kZSgpIHtcbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSB0cnVlO1xuICAgIFxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGU7XG4gIH1cblxuICBpc05vblRlcm1pbmFsTm9kZSgpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBmYWxzZTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBnZXRUeXBlKCkgeyByZXR1cm4gdGhpcy5zaWduaWZpY2FudFRva2VuLmdldFR5cGUoKTsgfVxuXG4gIGdldENvbnRlbnQoKSB7IHJldHVybiB0aGlzLnNpZ25pZmljYW50VG9rZW4uZ2V0Q29udGVudCgpOyB9XG5cbiAgc2V0U2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKSB7XG4gICAgdGhpcy5zaWduaWZpY2FudFRva2VuID0gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGFzUGFyc2VUcmVlKHRva2VucywgYWJyaWRnZWQgPSBmYWxzZSkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICB0ZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSBUZXJtaW5hbE5vZGVQYXJzZVRyZWUuZnJvbVRlcm1pbmFsTm9kZVRva2Vuc0FuZEFicmlkZ2VkKHRlcm1pbmFsTm9kZSwgdG9rZW5zLCBhYnJpZGdlZCksXG4gICAgICAgICAgcGFyc2VUcmVlID0gdGVybWluYWxOb2RlUGFyc2VUcmVlOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgbWF0Y2gobm9kZSkge1xuICAgIGxldCBtYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICAgIHRlcm1pbmFsTm9kZUVwc2lsb25Ob2RlID0gdGVybWluYWxOb2RlLmlzRXBzaWxvbk5vZGUoKSxcbiAgICAgICAgICAgIHRlcm1pbmFsTm9kZU5vV2hpdGVzcGFjZU5vZGUgPSB0ZXJtaW5hbE5vZGUuaXNOb1doaXRlc3BhY2VOb2RlKCk7XG5cbiAgICAgIGlmICghdGVybWluYWxOb2RlRXBzaWxvbk5vZGUgJiYgIXRlcm1pbmFsTm9kZU5vV2hpdGVzcGFjZU5vZGUpIHtcbiAgICAgICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IHRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCk7XG5cbiAgICAgICAgbWF0Y2hlcyA9IHRoaXMuc2lnbmlmaWNhbnRUb2tlbi5tYXRjaChzaWduaWZpY2FudFRva2VuKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIGNsb25lKENsYXNzKSB7XG4gICAgaWYgKENsYXNzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IHsgY29uc3RydWN0b3IgfSA9IHRoaXM7XG5cbiAgICAgIENsYXNzID0gY29uc3RydWN0b3I7XG4gICAgfVxuXG4gICAgY29uc3QgY29udGVudExlbmd0aCA9IHRoaXMuc2lnbmlmaWNhbnRUb2tlbi5nZXRDb250ZW50TGVuZ3RoKCksXG4gICAgICAgICAgc3RhcnRQb3NpdGlvbiA9IDAsXG4gICAgICAgICAgZW5kUG9zaXRpb24gPSBjb250ZW50TGVuZ3RoLCAgLy8vXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IHRoaXMuc2lnbmlmaWNhbnRUb2tlbi5jbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiksXG4gICAgICAgICAgdGVybWluYWxOb2RlID0gQ2xhc3MuZnJvbVNpZ25pZmljYW50VG9rZW4oc2lnbmlmaWNhbnRUb2tlbik7XG5cbiAgICByZXR1cm4gdGVybWluYWxOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TaWduaWZpY2FudFRva2VuKENsYXNzLCBzaWduaWZpY2FudFRva2VuKSB7XG4gICAgaWYgKHNpZ25pZmljYW50VG9rZW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IENsYXNzOyAvLy9cbiAgICAgIENsYXNzID0gVGVybWluYWxOb2RlOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBuZXcgQ2xhc3Moc2lnbmlmaWNhbnRUb2tlbik7XG4gICAgXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJUZXJtaW5hbE5vZGUiLCJzaWduaWZpY2FudFRva2VuIiwiZ2V0U2lnbmlmaWNhbnRUb2tlbiIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImdldExhc3RTaWduaWZpY2FudFRva2VuIiwibGFzdFNpZ25pZmljYW50VG9rZW4iLCJpc05vV2hpdGVzcGFjZU5vZGUiLCJub1doaXRlc3BhY2VOb2RlIiwiaXNFcHNpbG9uTm9kZSIsImVwc2lsb25Ob2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImdldFR5cGUiLCJnZXRDb250ZW50Iiwic2V0U2lnbmlmaWNhbnRUb2tlbiIsImFzUGFyc2VUcmVlIiwidG9rZW5zIiwiYWJyaWRnZWQiLCJ0ZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJUZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJmcm9tVGVybWluYWxOb2RlVG9rZW5zQW5kQWJyaWRnZWQiLCJwYXJzZVRyZWUiLCJtYXRjaCIsIm5vZGUiLCJtYXRjaGVzIiwibm9kZVRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZUVwc2lsb25Ob2RlIiwidGVybWluYWxOb2RlTm9XaGl0ZXNwYWNlTm9kZSIsImNsb25lIiwiQ2xhc3MiLCJ1bmRlZmluZWQiLCJjb25zdHJ1Y3RvciIsImNvbnRlbnRMZW5ndGgiLCJnZXRDb250ZW50TGVuZ3RoIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwiZnJvbVNpZ25pZmljYW50VG9rZW4iXSwibWFw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