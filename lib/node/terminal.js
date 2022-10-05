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