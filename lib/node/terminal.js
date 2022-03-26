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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3Rlcm1pbmFsLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+IiwibGliL2NvbnN0YW50cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRlcm1pbmFsTm9kZVBhcnNlVHJlZSBmcm9tIFwiLi4vcGFyc2VUcmVlL3Rlcm1pbmFsTm9kZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXJtaW5hbE5vZGUge1xuICBjb25zdHJ1Y3RvcihzaWduaWZpY2FudFRva2VuKSB7XG4gICAgdGhpcy5zaWduaWZpY2FudFRva2VuID0gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGdldFNpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbigpIHtcbiAgICBjb25zdCBmaXJzdFNpZ25pZmljYW50VG9rZW4gPSB0aGlzLnNpZ25pZmljYW50VG9rZW47ICAvLy9cblxuICAgIHJldHVybiBmaXJzdFNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBnZXRMYXN0U2lnbmlmaWNhbnRUb2tlbigpIHtcbiAgICBjb25zdCBsYXN0U2lnbmlmaWNhbnRUb2tlbiA9IHRoaXMuc2lnbmlmaWNhbnRUb2tlbjsgIC8vL1xuXG4gICAgcmV0dXJuIGxhc3RTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgaXNOb1doaXRlc3BhY2VOb2RlKCkge1xuICAgIGNvbnN0IG5vV2hpdGVzcGFjZU5vZGUgPSBmYWxzZTtcblxuICAgIHJldHVybiBub1doaXRlc3BhY2VOb2RlO1xuICB9XG5cbiAgaXNUZXJtaW5hbE5vZGUoKSB7XG4gICAgY29uc3QgdGVybWluYWxOb2RlID0gdHJ1ZTtcbiAgICBcbiAgICByZXR1cm4gdGVybWluYWxOb2RlO1xuICB9XG5cbiAgaXNOb25UZXJtaW5hbE5vZGUoKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gZmFsc2U7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHsgcmV0dXJuIHRoaXMuc2lnbmlmaWNhbnRUb2tlbi5nZXRUeXBlKCk7IH1cblxuICBnZXRDb250ZW50KCkgeyByZXR1cm4gdGhpcy5zaWduaWZpY2FudFRva2VuLmdldENvbnRlbnQoKTsgfVxuXG4gIHNldFNpZ25pZmljYW50VG9rZW4oc2lnbmlmaWNhbnRUb2tlbikge1xuICAgIHRoaXMuc2lnbmlmaWNhbnRUb2tlbiA9IHNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBhc1BhcnNlVHJlZSh0b2tlbnMpIHtcbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgdGVybWluYWxOb2RlUGFyc2VUcmVlID0gVGVybWluYWxOb2RlUGFyc2VUcmVlLmZyb21UZXJtaW5hbE5vZGVBbmRUb2tlbnModGVybWluYWxOb2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHBhcnNlVHJlZSA9IHRlcm1pbmFsTm9kZVBhcnNlVHJlZTsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU2lnbmlmaWNhbnRUb2tlbihDbGFzcywgc2lnbmlmaWNhbnRUb2tlbikge1xuICAgIGlmIChzaWduaWZpY2FudFRva2VuID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBDbGFzczsgLy8vXG4gICAgICBDbGFzcyA9IFRlcm1pbmFsTm9kZTsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgdGVybWluYWxOb2RlID0gbmV3IENsYXNzKHNpZ25pZmljYW50VG9rZW4pO1xuICAgIFxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGU7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IEVNUFRZX1NUUklORyA9IFwiXCI7XG4iXSwibmFtZXMiOlsiVGVybWluYWxOb2RlIiwic2lnbmlmaWNhbnRUb2tlbiIsImdldFNpZ25pZmljYW50VG9rZW4iLCJnZXRGaXJzdFNpZ25pZmljYW50VG9rZW4iLCJmaXJzdFNpZ25pZmljYW50VG9rZW4iLCJnZXRMYXN0U2lnbmlmaWNhbnRUb2tlbiIsImxhc3RTaWduaWZpY2FudFRva2VuIiwiaXNOb1doaXRlc3BhY2VOb2RlIiwibm9XaGl0ZXNwYWNlTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJnZXRUeXBlIiwiZ2V0Q29udGVudCIsInNldFNpZ25pZmljYW50VG9rZW4iLCJhc1BhcnNlVHJlZSIsInRva2VucyIsInRlcm1pbmFsTm9kZVBhcnNlVHJlZSIsIlRlcm1pbmFsTm9kZVBhcnNlVHJlZSIsImZyb21UZXJtaW5hbE5vZGVBbmRUb2tlbnMiLCJwYXJzZVRyZWUiLCJmcm9tU2lnbmlmaWNhbnRUb2tlbiIsIkNsYXNzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7OztFQUFiO3dCQUFBO0FBRWtDLElBQUEsYUFBMkIsa0NBQTNCLDJCQUEyQixFQUFBOzs7Ozs7Ozs7OERBRjdEO3NDQUFBOzZEQUFBO2lFQUFBOzs7O3dFQUFBO2dFQUFBOzs7Ozs7OztBQUllLElBQUEsQUFBTUEsWUFBWSxpQkNKOUIsQURJWTthQUFNQSxZQUFZLENBQ25CQyxnQkFBZ0I7MkNBTDlCO1FBTUksSUFBSSxDQUFDQSxnQkFBZ0IsR0FBR0EsZ0JBQWdCLENBQUM7Ozs7WUFHM0NDLEdBQW1CLEVBQW5CQSxxQkFBbUI7WUVUckIsT0ZTRUEsU0FBQUEsbUJBQW1CLEdBQUc7Z0JBQ3BCLE9BQU8sSUFBSSxDQUFDRCxnQkFBZ0IsQ0FBQzthQUM5Qjs7O1lBRURFLEdBQXdCLEVBQXhCQSwwQkFBd0I7WUViMUIsT0ZhRUEsU0FBQUEsd0JBQXdCLEdBQUc7Z0JBQ3pCLElBQU1DLHFCQUFxQixHQUFHLElBQUksQ0FBQ0gsZ0JBQWdCLEFBQUMsRUFBRSxHQUFHO2dCQUV6RCxPQUFPRyxxQkFBcUIsQ0FBQzthQUM5Qjs7O1lBRURDLEdBQXVCLEVBQXZCQSx5QkFBdUI7WUVuQnpCLE9GbUJFQSxTQUFBQSx1QkFBdUIsR0FBRztnQkFDeEIsSUFBTUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDTCxnQkFBZ0IsQUFBQyxFQUFFLEdBQUc7Z0JBRXhELE9BQU9LLG9CQUFvQixDQUFDO2FBQzdCOzs7WUFFREMsR0FBa0IsRUFBbEJBLG9CQUFrQjtZRXpCcEIsT0Z5QkVBLFNBQUFBLGtCQUFrQixHQUFHO2dCQUNuQixJQUFNQyxnQkFBZ0IsR0FBRyxLQUFLLEFBQUM7Z0JBRS9CLE9BQU9BLGdCQUFnQixDQUFDO2FBQ3pCOzs7WUFFREMsR0FBYyxFQUFkQSxnQkFBYztZRS9CaEIsT0YrQkVBLFNBQUFBLGNBQWMsR0FBRztnQkFDZixJQUFNQyxZQUFZLEdBQUcsSUFBSSxBQUFDO2dCQUUxQixPQUFPQSxZQUFZLENBQUM7YUFDckI7OztZQUVEQyxHQUFpQixFQUFqQkEsbUJBQWlCO1lFckNuQixPRnFDRUEsU0FBQUEsaUJBQWlCLEdBQUc7Z0JBQ2xCLElBQU1DLGVBQWUsR0FBRyxLQUFLLEFBQUM7Z0JBRTlCLE9BQU9BLGVBQWUsQ0FBQzthQUN4Qjs7O1lBRURDLEdBQU8sRUFBUEEsU0FBTztZRTNDVCxPRjJDRUEsU0FBQUEsT0FBTyxHQUFHO2dCQUFFLE9BQU8sSUFBSSxDQUFDWixnQkFBZ0IsQ0FBQ1ksT0FBTyxFQUFFLENBQUM7YUFBRTs7O1lBRXJEQyxHQUFVLEVBQVZBLFlBQVU7WUU3Q1osT0Y2Q0VBLFNBQUFBLFVBQVUsR0FBRztnQkFBRSxPQUFPLElBQUksQ0FBQ2IsZ0JBQWdCLENBQUNhLFVBQVUsRUFBRSxDQUFDO2FBQUU7OztZQUUzREMsR0FBbUIsRUFBbkJBLHFCQUFtQjtZRS9DckIsT0YrQ0VBLFNBQUFBLG1CQUFtQixDQUFDZCxnQkFBZ0IsRUFBRTtnQkFDcEMsSUFBSSxDQUFDQSxnQkFBZ0IsR0FBR0EsZ0JBQWdCLENBQUM7YUFDMUM7OztZQUVEZSxHQUFXLEVBQVhBLGFBQVc7WUVuRGIsT0ZtREVBLFNBQUFBLFdBQVcsQ0FBQ0MsTUFBTSxFQUFFO2dCQUNsQixJQUFNUCxZQUFZLEdBQUcsSUFBSSxFQUNuQlEscUJBQXFCLEdBQUdDLGFBQXFCLFNBQUNDLHlCQUF5QixDQUFDVixZQUFZLEVBQUVPLE1BQU0sQ0FBQyxFQUM3RkksU0FBUyxHQUFHSCxxQkFBcUIsQUFBQyxFQUFFLEdBQUc7Z0JBRTdDLE9BQU9HLFNBQVMsQ0FBQzthQUNsQjs7OztZQUVNQyxHQUFvQixFQUFwQkEsc0JBQW9CO1lFM0Q3QixPRjJERSxTQUFPQSxvQkFBb0IsQ0FBQ0MsS0FBSyxFQUFFdEIsZ0JBQWdCLEVBQUU7Z0JBQ25ELElBQUlBLGdCQUFnQixLQUFLdUIsU0FBUyxFQUFFO29CQUNsQ3ZCLGdCQUFnQixHQUFHc0IsS0FBSyxDQUFDLENBQUMsR0FBRztvQkFDN0JBLEtBQUssR0FBR3ZCLFlBQVksQ0FBQyxDQUFDLEdBQUc7aUJBQzFCO2dCQUVELElBQU1VLFlBQVksR0FBRyxJQUFJYSxLQUFLLENBQUN0QixnQkFBZ0IsQ0FBQyxBQUFDO2dCQUVqRCxPQUFPUyxZQUFZLENBQUM7YUFDckI7O01BcEVIOztDQXFFQyxFQUFBO2tCQWpFb0JWLFlBQVksQUFKakMifQ==