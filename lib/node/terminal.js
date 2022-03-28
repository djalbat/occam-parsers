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
                var terminalNode = this, terminalNodeParseTree = _terminalNode.default.fromTerminalNodeAndTokens(terminalNode, tokens), parseTree = terminalNodeParseTree; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3Rlcm1pbmFsLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGVybWluYWxOb2RlUGFyc2VUcmVlIGZyb20gXCIuLi9wYXJzZVRyZWUvdGVybWluYWxOb2RlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHNpZ25pZmljYW50VG9rZW4pIHtcbiAgICB0aGlzLnNpZ25pZmljYW50VG9rZW4gPSBzaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0U2lnbmlmaWNhbnRUb2tlbigpIHtcbiAgICByZXR1cm4gdGhpcy5zaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuKCkge1xuICAgIGNvbnN0IGZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IHRoaXMuc2lnbmlmaWNhbnRUb2tlbjsgIC8vL1xuXG4gICAgcmV0dXJuIGZpcnN0U2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGdldExhc3RTaWduaWZpY2FudFRva2VuKCkge1xuICAgIGNvbnN0IGxhc3RTaWduaWZpY2FudFRva2VuID0gdGhpcy5zaWduaWZpY2FudFRva2VuOyAgLy8vXG5cbiAgICByZXR1cm4gbGFzdFNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBpc05vV2hpdGVzcGFjZU5vZGUoKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIG5vV2hpdGVzcGFjZU5vZGU7XG4gIH1cblxuICBpc1Rlcm1pbmFsTm9kZSgpIHtcbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSB0cnVlO1xuICAgIFxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGU7XG4gIH1cblxuICBpc05vblRlcm1pbmFsTm9kZSgpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBmYWxzZTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBnZXRUeXBlKCkgeyByZXR1cm4gdGhpcy5zaWduaWZpY2FudFRva2VuLmdldFR5cGUoKTsgfVxuXG4gIGdldENvbnRlbnQoKSB7IHJldHVybiB0aGlzLnNpZ25pZmljYW50VG9rZW4uZ2V0Q29udGVudCgpOyB9XG5cbiAgc2V0U2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKSB7XG4gICAgdGhpcy5zaWduaWZpY2FudFRva2VuID0gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGFzUGFyc2VUcmVlKHRva2Vucykge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICB0ZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSBUZXJtaW5hbE5vZGVQYXJzZVRyZWUuZnJvbVRlcm1pbmFsTm9kZUFuZFRva2Vucyh0ZXJtaW5hbE5vZGUsIHRva2VucyksXG4gICAgICAgICAgcGFyc2VUcmVlID0gdGVybWluYWxOb2RlUGFyc2VUcmVlOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TaWduaWZpY2FudFRva2VuKENsYXNzLCBzaWduaWZpY2FudFRva2VuKSB7XG4gICAgaWYgKHNpZ25pZmljYW50VG9rZW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IENsYXNzOyAvLy9cbiAgICAgIENsYXNzID0gVGVybWluYWxOb2RlOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBuZXcgQ2xhc3Moc2lnbmlmaWNhbnRUb2tlbik7XG4gICAgXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJUZXJtaW5hbE5vZGUiLCJzaWduaWZpY2FudFRva2VuIiwiZ2V0U2lnbmlmaWNhbnRUb2tlbiIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImdldExhc3RTaWduaWZpY2FudFRva2VuIiwibGFzdFNpZ25pZmljYW50VG9rZW4iLCJpc05vV2hpdGVzcGFjZU5vZGUiLCJub1doaXRlc3BhY2VOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImdldFR5cGUiLCJnZXRDb250ZW50Iiwic2V0U2lnbmlmaWNhbnRUb2tlbiIsImFzUGFyc2VUcmVlIiwidG9rZW5zIiwidGVybWluYWxOb2RlUGFyc2VUcmVlIiwiVGVybWluYWxOb2RlUGFyc2VUcmVlIiwiZnJvbVRlcm1pbmFsTm9kZUFuZFRva2VucyIsInBhcnNlVHJlZSIsImZyb21TaWduaWZpY2FudFRva2VuIiwiQ2xhc3MiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFcUIsSUFBQSxhQUEyQixrQ0FBM0IsMkJBQTJCLEVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUMsSUFBQSxBQUFNQSxZQUFZLGlCQ0o5QixBRElZO2FBQU1BLFlBQVksQ0FDbkJDLGdCQUFnQjs7UUFDMUIsSUFBSSxDQUFDQSxnQkFBZ0IsR0FBR0EsZ0JBQWdCLENBQUM7Ozs7WUFHM0NDLEdBQW1CLEVBQW5CQSxxQkFBbUI7bUJBQW5CQSxTQUFBQSxtQkFBbUIsR0FBRztnQkFDcEIsT0FBTyxJQUFJLENBQUNELGdCQUFnQixDQUFDO2FBQzlCOzs7WUFFREUsR0FBd0IsRUFBeEJBLDBCQUF3QjttQkFBeEJBLFNBQUFBLHdCQUF3QixHQUFHO2dCQUN6QixJQUFNQyxxQkFBcUIsR0FBRyxJQUFJLENBQUNILGdCQUFnQixBQUFDLEVBQUUsR0FBRztnQkFFekQsT0FBT0cscUJBQXFCLENBQUM7YUFDOUI7OztZQUVEQyxHQUF1QixFQUF2QkEseUJBQXVCO21CQUF2QkEsU0FBQUEsdUJBQXVCLEdBQUc7Z0JBQ3hCLElBQU1DLG9CQUFvQixHQUFHLElBQUksQ0FBQ0wsZ0JBQWdCLEFBQUMsRUFBRSxHQUFHO2dCQUV4RCxPQUFPSyxvQkFBb0IsQ0FBQzthQUM3Qjs7O1lBRURDLEdBQWtCLEVBQWxCQSxvQkFBa0I7bUJBQWxCQSxTQUFBQSxrQkFBa0IsR0FBRztnQkFDbkIsSUFBTUMsZ0JBQWdCLEdBQUcsS0FBSyxBQUFDO2dCQUUvQixPQUFPQSxnQkFBZ0IsQ0FBQzthQUN6Qjs7O1lBRURDLEdBQWMsRUFBZEEsZ0JBQWM7bUJBQWRBLFNBQUFBLGNBQWMsR0FBRztnQkFDZixJQUFNQyxZQUFZLEdBQUcsSUFBSSxBQUFDO2dCQUUxQixPQUFPQSxZQUFZLENBQUM7YUFDckI7OztZQUVEQyxHQUFpQixFQUFqQkEsbUJBQWlCO21CQUFqQkEsU0FBQUEsaUJBQWlCLEdBQUc7Z0JBQ2xCLElBQU1DLGVBQWUsR0FBRyxLQUFLLEFBQUM7Z0JBRTlCLE9BQU9BLGVBQWUsQ0FBQzthQUN4Qjs7O1lBRURDLEdBQU8sRUFBUEEsU0FBTzttQkFBUEEsU0FBQUEsT0FBTyxHQUFHO2dCQUFFLE9BQU8sSUFBSSxDQUFDWixnQkFBZ0IsQ0FBQ1ksT0FBTyxFQUFFLENBQUM7YUFBRTs7O1lBRXJEQyxHQUFVLEVBQVZBLFlBQVU7bUJBQVZBLFNBQUFBLFVBQVUsR0FBRztnQkFBRSxPQUFPLElBQUksQ0FBQ2IsZ0JBQWdCLENBQUNhLFVBQVUsRUFBRSxDQUFDO2FBQUU7OztZQUUzREMsR0FBbUIsRUFBbkJBLHFCQUFtQjttQkFBbkJBLFNBQUFBLG1CQUFtQixDQUFDZCxnQkFBZ0IsRUFBRTtnQkFDcEMsSUFBSSxDQUFDQSxnQkFBZ0IsR0FBR0EsZ0JBQWdCLENBQUM7YUFDMUM7OztZQUVEZSxHQUFXLEVBQVhBLGFBQVc7bUJBQVhBLFNBQUFBLFdBQVcsQ0FBQ0MsTUFBTSxFQUFFO2dCQUNsQixJQUFNUCxZQUFZLEdBQUcsSUFBSSxFQUNuQlEscUJBQXFCLEdBQUdDLGFBQXFCLFFBQUEsQ0FBQ0MseUJBQXlCLENBQUNWLFlBQVksRUFBRU8sTUFBTSxDQUFDLEVBQzdGSSxTQUFTLEdBQUdILHFCQUFxQixBQUFDLEVBQUUsR0FBRztnQkFFN0MsT0FBT0csU0FBUyxDQUFDO2FBQ2xCOzs7O1lBRU1DLEdBQW9CLEVBQXBCQSxzQkFBb0I7bUJBQTNCLFNBQU9BLG9CQUFvQixDQUFDQyxLQUFLLEVBQUV0QixnQkFBZ0IsRUFBRTtnQkFDbkQsSUFBSUEsZ0JBQWdCLEtBQUt1QixTQUFTLEVBQUU7b0JBQ2xDdkIsZ0JBQWdCLEdBQUdzQixLQUFLLENBQUMsQ0FBQyxHQUFHO29CQUM3QkEsS0FBSyxHQUFHdkIsWUFBWSxDQUFDLENBQUMsR0FBRztpQkFDMUI7Z0JBRUQsSUFBTVUsWUFBWSxHQUFHLElBQUlhLEtBQUssQ0FBQ3RCLGdCQUFnQixDQUFDLEFBQUM7Z0JBRWpELE9BQU9TLFlBQVksQ0FBQzthQUNyQjs7OztDQUNGLEVBQUE7a0JBakVvQlYsWUFBWSJ9