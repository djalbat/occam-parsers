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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3Rlcm1pbmFsLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGVybWluYWxOb2RlUGFyc2VUcmVlIGZyb20gXCIuLi9wYXJzZVRyZWUvdGVybWluYWxOb2RlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHNpZ25pZmljYW50VG9rZW4pIHtcbiAgICB0aGlzLnNpZ25pZmljYW50VG9rZW4gPSBzaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0U2lnbmlmaWNhbnRUb2tlbigpIHtcbiAgICByZXR1cm4gdGhpcy5zaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuKCkge1xuICAgIGNvbnN0IGZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IHRoaXMuc2lnbmlmaWNhbnRUb2tlbjsgIC8vL1xuXG4gICAgcmV0dXJuIGZpcnN0U2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGdldExhc3RTaWduaWZpY2FudFRva2VuKCkge1xuICAgIGNvbnN0IGxhc3RTaWduaWZpY2FudFRva2VuID0gdGhpcy5zaWduaWZpY2FudFRva2VuOyAgLy8vXG5cbiAgICByZXR1cm4gbGFzdFNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBpc05vV2hpdGVzcGFjZU5vZGUoKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIG5vV2hpdGVzcGFjZU5vZGU7XG4gIH1cblxuICBpc0Vwc2lsb25Ob2RlKCkge1xuICAgIGNvbnN0IGVwc2lsb25Ob2RlID0gZmFsc2U7XG5cbiAgICByZXR1cm4gZXBzaWxvbk5vZGU7XG4gIH1cblxuICBpc1Rlcm1pbmFsTm9kZSgpIHtcbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSB0cnVlO1xuICAgIFxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGU7XG4gIH1cblxuICBpc05vblRlcm1pbmFsTm9kZSgpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBmYWxzZTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBnZXRUeXBlKCkgeyByZXR1cm4gdGhpcy5zaWduaWZpY2FudFRva2VuLmdldFR5cGUoKTsgfVxuXG4gIGdldENvbnRlbnQoKSB7IHJldHVybiB0aGlzLnNpZ25pZmljYW50VG9rZW4uZ2V0Q29udGVudCgpOyB9XG5cbiAgc2V0U2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKSB7XG4gICAgdGhpcy5zaWduaWZpY2FudFRva2VuID0gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGFzUGFyc2VUcmVlKHRva2VucywgYWJyaWRnZWQgPSBmYWxzZSkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICB0ZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSBUZXJtaW5hbE5vZGVQYXJzZVRyZWUuZnJvbVRlcm1pbmFsTm9kZVRva2Vuc0FuZEFicmlkZ2VkKHRlcm1pbmFsTm9kZSwgdG9rZW5zLCBhYnJpZGdlZCksXG4gICAgICAgICAgcGFyc2VUcmVlID0gdGVybWluYWxOb2RlUGFyc2VUcmVlOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgbWF0Y2gobm9kZSkge1xuICAgIGxldCBtYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICAgIHRlcm1pbmFsTm9kZUVwc2lsb25Ob2RlID0gdGVybWluYWxOb2RlLmlzRXBzaWxvbk5vZGUoKSxcbiAgICAgICAgICAgIHRlcm1pbmFsTm9kZU5vV2hpdGVzcGFjZU5vZGUgPSB0ZXJtaW5hbE5vZGUuaXNOb1doaXRlc3BhY2VOb2RlKCk7XG5cbiAgICAgIGlmICghdGVybWluYWxOb2RlRXBzaWxvbk5vZGUgJiYgIXRlcm1pbmFsTm9kZU5vV2hpdGVzcGFjZU5vZGUpIHtcbiAgICAgICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IHRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCk7XG5cbiAgICAgICAgbWF0Y2hlcyA9IHRoaXMuc2lnbmlmaWNhbnRUb2tlbi5tYXRjaChzaWduaWZpY2FudFRva2VuKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU2lnbmlmaWNhbnRUb2tlbihDbGFzcywgc2lnbmlmaWNhbnRUb2tlbikge1xuICAgIGlmIChzaWduaWZpY2FudFRva2VuID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBDbGFzczsgLy8vXG4gICAgICBDbGFzcyA9IFRlcm1pbmFsTm9kZTsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgdGVybWluYWxOb2RlID0gbmV3IENsYXNzKHNpZ25pZmljYW50VG9rZW4pO1xuICAgIFxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGU7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiVGVybWluYWxOb2RlIiwic2lnbmlmaWNhbnRUb2tlbiIsImdldFNpZ25pZmljYW50VG9rZW4iLCJnZXRGaXJzdFNpZ25pZmljYW50VG9rZW4iLCJmaXJzdFNpZ25pZmljYW50VG9rZW4iLCJnZXRMYXN0U2lnbmlmaWNhbnRUb2tlbiIsImxhc3RTaWduaWZpY2FudFRva2VuIiwiaXNOb1doaXRlc3BhY2VOb2RlIiwibm9XaGl0ZXNwYWNlTm9kZSIsImlzRXBzaWxvbk5vZGUiLCJlcHNpbG9uTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJnZXRUeXBlIiwiZ2V0Q29udGVudCIsInNldFNpZ25pZmljYW50VG9rZW4iLCJhc1BhcnNlVHJlZSIsInRva2VucyIsImFicmlkZ2VkIiwidGVybWluYWxOb2RlUGFyc2VUcmVlIiwiVGVybWluYWxOb2RlUGFyc2VUcmVlIiwiZnJvbVRlcm1pbmFsTm9kZVRva2Vuc0FuZEFicmlkZ2VkIiwicGFyc2VUcmVlIiwibWF0Y2giLCJub2RlIiwibWF0Y2hlcyIsIm5vZGVUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVFcHNpbG9uTm9kZSIsInRlcm1pbmFsTm9kZU5vV2hpdGVzcGFjZU5vZGUiLCJmcm9tU2lnbmlmaWNhbnRUb2tlbiIsIkNsYXNzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFJUUEsWUFBWTs7O2lFQUZDLDJCQUEyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5QyxJQUFBLEFBQU1BLFlBQVksaUJBQWxCO2FBQU1BLFlBQVksQ0FDbkJDLGdCQUFnQjs4QkFEVEQsWUFBWTtRQUU3QixJQUFJLENBQUNDLGdCQUFnQixHQUFHQSxnQkFBZ0IsQ0FBQzs7aUJBRnhCRCxZQUFZOztZQUsvQkUsR0FBbUIsRUFBbkJBLHFCQUFtQjttQkFBbkJBLFNBQUFBLG1CQUFtQixHQUFHO2dCQUNwQixPQUFPLElBQUksQ0FBQ0QsZ0JBQWdCLENBQUM7WUFDL0IsQ0FBQzs7O1lBRURFLEdBQXdCLEVBQXhCQSwwQkFBd0I7bUJBQXhCQSxTQUFBQSx3QkFBd0IsR0FBRztnQkFDekIsSUFBTUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDSCxnQkFBZ0IsQUFBQyxFQUFFLEdBQUc7Z0JBRXpELE9BQU9HLHFCQUFxQixDQUFDO1lBQy9CLENBQUM7OztZQUVEQyxHQUF1QixFQUF2QkEseUJBQXVCO21CQUF2QkEsU0FBQUEsdUJBQXVCLEdBQUc7Z0JBQ3hCLElBQU1DLG9CQUFvQixHQUFHLElBQUksQ0FBQ0wsZ0JBQWdCLEFBQUMs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