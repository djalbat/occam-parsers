"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _terminalNode = _interopRequireDefault(require("../parseTree/terminalNode"));
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
exports.default = TerminalNode;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3Rlcm1pbmFsLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGVybWluYWxOb2RlUGFyc2VUcmVlIGZyb20gXCIuLi9wYXJzZVRyZWUvdGVybWluYWxOb2RlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHNpZ25pZmljYW50VG9rZW4pIHtcbiAgICB0aGlzLnNpZ25pZmljYW50VG9rZW4gPSBzaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0U2lnbmlmaWNhbnRUb2tlbigpIHtcbiAgICByZXR1cm4gdGhpcy5zaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuKCkge1xuICAgIGNvbnN0IGZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IHRoaXMuc2lnbmlmaWNhbnRUb2tlbjsgIC8vL1xuXG4gICAgcmV0dXJuIGZpcnN0U2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGdldExhc3RTaWduaWZpY2FudFRva2VuKCkge1xuICAgIGNvbnN0IGxhc3RTaWduaWZpY2FudFRva2VuID0gdGhpcy5zaWduaWZpY2FudFRva2VuOyAgLy8vXG5cbiAgICByZXR1cm4gbGFzdFNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBpc05vV2hpdGVzcGFjZU5vZGUoKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIG5vV2hpdGVzcGFjZU5vZGU7XG4gIH1cblxuICBpc1Rlcm1pbmFsTm9kZSgpIHtcbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSB0cnVlO1xuICAgIFxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGU7XG4gIH1cblxuICBpc05vblRlcm1pbmFsTm9kZSgpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBmYWxzZTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBnZXRUeXBlKCkgeyByZXR1cm4gdGhpcy5zaWduaWZpY2FudFRva2VuLmdldFR5cGUoKTsgfVxuXG4gIGdldENvbnRlbnQoKSB7IHJldHVybiB0aGlzLnNpZ25pZmljYW50VG9rZW4uZ2V0Q29udGVudCgpOyB9XG5cbiAgc2V0U2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKSB7XG4gICAgdGhpcy5zaWduaWZpY2FudFRva2VuID0gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGFzUGFyc2VUcmVlKHRva2VucywgYWJyaWRnZWQgPSBmYWxzZSkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICB0ZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSBUZXJtaW5hbE5vZGVQYXJzZVRyZWUuZnJvbVRlcm1pbmFsTm9kZVRva2Vuc0FuZEFicmlkZ2VkKHRlcm1pbmFsTm9kZSwgdG9rZW5zLCBhYnJpZGdlZCksXG4gICAgICAgICAgcGFyc2VUcmVlID0gdGVybWluYWxOb2RlUGFyc2VUcmVlOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TaWduaWZpY2FudFRva2VuKENsYXNzLCBzaWduaWZpY2FudFRva2VuKSB7XG4gICAgaWYgKHNpZ25pZmljYW50VG9rZW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IENsYXNzOyAvLy9cbiAgICAgIENsYXNzID0gVGVybWluYWxOb2RlOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBuZXcgQ2xhc3Moc2lnbmlmaWNhbnRUb2tlbik7XG4gICAgXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJUZXJtaW5hbE5vZGUiLCJzaWduaWZpY2FudFRva2VuIiwiZ2V0U2lnbmlmaWNhbnRUb2tlbiIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImdldExhc3RTaWduaWZpY2FudFRva2VuIiwibGFzdFNpZ25pZmljYW50VG9rZW4iLCJpc05vV2hpdGVzcGFjZU5vZGUiLCJub1doaXRlc3BhY2VOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImdldFR5cGUiLCJnZXRDb250ZW50Iiwic2V0U2lnbmlmaWNhbnRUb2tlbiIsImFzUGFyc2VUcmVlIiwidG9rZW5zIiwiYWJyaWRnZWQiLCJ0ZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJUZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJmcm9tVGVybWluYWxOb2RlVG9rZW5zQW5kQWJyaWRnZWQiLCJwYXJzZVRyZWUiLCJmcm9tU2lnbmlmaWNhbnRUb2tlbiIsIkNsYXNzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRXFCLElBQUEsYUFBMkIsa0NBQTNCLDJCQUEyQixFQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlDLElBQUEsQUFBTUEsWUFBWSxpQkFBbEI7YUFBTUEsWUFBWSxDQUNuQkMsZ0JBQWdCOztRQUMxQixJQUFJLENBQUNBLGdCQUFnQixHQUFHQSxnQkFBZ0IsQ0FBQzs7OztZQUczQ0MsR0FBbUIsRUFBbkJBLHFCQUFtQjttQkFBbkJBLFNBQUFBLG1CQUFtQixHQUFHO2dCQUNwQixPQUFPLElBQUksQ0FBQ0QsZ0JBQWdCLENBQUM7YUFDOUI7OztZQUVERSxHQUF3QixFQUF4QkEsMEJBQXdCO21CQUF4QkEsU0FBQUEsd0JBQXdCLEdBQUc7Z0JBQ3pCLElBQU1DLHFCQUFxQixHQUFHLElBQUksQ0FBQ0gsZ0JBQWdCLEFBQUMsRUFBRSxHQUFHO2dCQUV6RCxPQUFPRyxxQkFBcUIsQ0FBQzthQUM5Qjs7O1lBRURDLEdBQXVCLEVBQXZCQSx5QkFBdUI7bUJBQXZCQSxTQUFBQSx1QkFBdUIsR0FBRztnQkFDeEIsSUFBTUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDTCxnQkFBZ0IsQUFBQyxFQUFFLEdBQUc7Z0JBRXhELE9BQU9LLG9CQUFvQixDQUFDO2FBQzdCOzs7WUFFREMsR0FBa0IsRUFBbEJBLG9CQUFrQjttQkFBbEJBLFNBQUFBLGtCQUFrQixHQUFHO2dCQUNuQixJQUFNQyxnQkFBZ0IsR0FBRyxLQUFLLEFBQUM7Z0JBRS9CLE9BQU9BLGdCQUFnQixDQUFDO2FBQ3pCOzs7WUFFREMsR0FBYyxFQUFkQSxnQkFBYzttQkFBZEEsU0FBQUEsY0FBYyxHQUFHO2dCQUNmLElBQU1DLFlBQVksR0FBRyxJQUFJLEFBQUM7Z0JBRTFCLE9BQU9BLFlBQVksQ0FBQzthQUNyQjs7O1lBRURDLEdBQWlCLEVBQWpCQSxtQkFBaUI7bUJBQWpCQSxTQUFBQSxpQkFBaUIsR0FBRztnQkFDbEIsSUFBTUMsZUFBZSxHQUFHLEtBQUssQUFBQztnQkFFOUIsT0FBT0EsZUFBZSxDQUFDO2FBQ3hCOzs7WUFFREMsR0FBTyxFQUFQQSxTQUFPO21CQUFQQSxTQUFBQSxPQUFPLEdBQUc7Z0JBQUUsT0FBTyxJQUFJLENBQUNaLGdCQUFnQixDQUFDWSxPQUFPLEVBQUUsQ0FBQzthQUFFOzs7WUFFckRDLEdBQVUsRUFBVkEsWUFBVTttQkFBVkEsU0FBQUEsVUFBVSxHQUFHO2dCQUFFLE9BQU8sSUFBSSxDQUFDYixnQkFBZ0IsQ0FBQ2EsVUFBVSxFQUFFLENBQUM7YUFBRTs7O1lBRTNEQyxHQUFtQixFQUFuQkEscUJBQW1CO21CQUFuQkEsU0FBQUEsbUJBQW1CLENBQUNkLGdCQUFnQixFQUFFO2dCQUNwQyxJQUFJLENBQUNBLGdCQUFnQixHQUFHQSxnQkFBZ0IsQ0FBQzthQUMxQzs7O1lBRURlLEdBQVcsRUFBWEEsYUFBVzttQkFBWEEsU0FBQUEsV0FBVyxDQUFDQyxNQUFNLEVBQW9CO29CQUFsQkMsUUFBUSxHQUFSQSwrQ0FBZ0Isa0JBQUwsS0FBSztnQkFDbEMsSUFBTVIsWUFBWSxHQUFHLElBQUksRUFDbkJTLHFCQUFxQixHQUFHQyxhQUFxQixRQUFBLENBQUNDLGlDQUFpQyxDQUFDWCxZQUFZLEVBQUVPLE1BQU0sRUFBRUMsUUFBUSxDQUFDLEVBQy9HSSxTQUFTLEdBQUdILHFCQUFxQixBQUFDLEVBQUUsR0FBRztnQkFFN0MsT0FBT0csU0FBUyxDQUFDO2FBQ2xCOzs7O1lBRU1DLEdBQW9CLEVBQXBCQSxzQkFBb0I7bUJBQTNCLFNBQU9BLG9CQUFvQixDQUFDQyxLQUFLLEVBQUV2QixnQkFBZ0IsRUFBRTtnQkFDbkQsSUFBSUEsZ0JBQWdCLEtBQUt3QixTQUFTLEVBQUU7b0JBQ2xDeEIsZ0JBQWdCLEdBQUd1QixLQUFLLENBQUMsQ0FBQyxHQUFHO29CQUM3QkEsS0FBSyxHQUFHeEIsWUFBWSxDQUFDLENBQUMsR0FBRztpQkFDMUI7Z0JBRUQsSUFBTVUsWUFBWSxHQUFHLElBQUljLEtBQUssQ0FBQ3ZCLGdCQUFnQixDQUFDLEFBQUM7Z0JBRWpELE9BQU9TLFlBQVksQ0FBQzthQUNyQjs7OztDQUNGLEVBQUE7a0JBakVvQlYsWUFBWSJ9