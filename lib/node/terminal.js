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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3Rlcm1pbmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGVybWluYWxOb2RlUGFyc2VUcmVlIGZyb20gXCIuLi9wYXJzZVRyZWUvdGVybWluYWxOb2RlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHNpZ25pZmljYW50VG9rZW4pIHtcbiAgICB0aGlzLnNpZ25pZmljYW50VG9rZW4gPSBzaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0U2lnbmlmaWNhbnRUb2tlbigpIHtcbiAgICByZXR1cm4gdGhpcy5zaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuKCkge1xuICAgIGNvbnN0IGZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IHRoaXMuc2lnbmlmaWNhbnRUb2tlbjsgIC8vL1xuXG4gICAgcmV0dXJuIGZpcnN0U2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGdldExhc3RTaWduaWZpY2FudFRva2VuKCkge1xuICAgIGNvbnN0IGxhc3RTaWduaWZpY2FudFRva2VuID0gdGhpcy5zaWduaWZpY2FudFRva2VuOyAgLy8vXG5cbiAgICByZXR1cm4gbGFzdFNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBpc05vV2hpdGVzcGFjZU5vZGUoKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIG5vV2hpdGVzcGFjZU5vZGU7XG4gIH1cblxuICBpc1Rlcm1pbmFsTm9kZSgpIHtcbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSB0cnVlO1xuICAgIFxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGU7XG4gIH1cblxuICBpc05vblRlcm1pbmFsTm9kZSgpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBmYWxzZTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBnZXRUeXBlKCkgeyByZXR1cm4gdGhpcy5zaWduaWZpY2FudFRva2VuLmdldFR5cGUoKTsgfVxuXG4gIGdldENvbnRlbnQoKSB7IHJldHVybiB0aGlzLnNpZ25pZmljYW50VG9rZW4uZ2V0Q29udGVudCgpOyB9XG5cbiAgc2V0U2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKSB7XG4gICAgdGhpcy5zaWduaWZpY2FudFRva2VuID0gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGFzUGFyc2VUcmVlKHRva2Vucykge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICB0ZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSBUZXJtaW5hbE5vZGVQYXJzZVRyZWUuZnJvbVRlcm1pbmFsTm9kZUFuZFRva2Vucyh0ZXJtaW5hbE5vZGUsIHRva2VucyksXG4gICAgICAgICAgcGFyc2VUcmVlID0gdGVybWluYWxOb2RlUGFyc2VUcmVlOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TaWduaWZpY2FudFRva2VuKENsYXNzLCBzaWduaWZpY2FudFRva2VuKSB7XG4gICAgaWYgKHNpZ25pZmljYW50VG9rZW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IENsYXNzOyAvLy9cbiAgICAgIENsYXNzID0gVGVybWluYWxOb2RlOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBuZXcgQ2xhc3Moc2lnbmlmaWNhbnRUb2tlbik7XG4gICAgXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlRlcm1pbmFsTm9kZSIsInNpZ25pZmljYW50VG9rZW4iLCJnZXRTaWduaWZpY2FudFRva2VuIiwiZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuIiwiZmlyc3RTaWduaWZpY2FudFRva2VuIiwiZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4iLCJsYXN0U2lnbmlmaWNhbnRUb2tlbiIsImlzTm9XaGl0ZXNwYWNlTm9kZSIsIm5vV2hpdGVzcGFjZU5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwiZ2V0VHlwZSIsImdldENvbnRlbnQiLCJzZXRTaWduaWZpY2FudFRva2VuIiwiYXNQYXJzZVRyZWUiLCJ0b2tlbnMiLCJ0ZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJUZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJmcm9tVGVybWluYWxOb2RlQW5kVG9rZW5zIiwicGFyc2VUcmVlIiwiZnJvbVNpZ25pZmljYW50VG9rZW4iLCJDbGFzcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7RUFBYjt3QkFBQTtBQUVrQyxJQUFBLGFBQTJCLGtDQUEzQiwyQkFBMkIsRUFBQTs7Ozs7Ozs7OzhEQUY3RDtzQ0FBQTs2REFBQTtpRUFBQTs7Ozt3RUFBQTtnRUFBQTs7Ozs7Ozs7QUFJZSxJQUFBLEFBQU1BLFlBQVksaUJDSjlCLEFESVk7YUFBTUEsWUFBWSxDQUNuQkMsZ0JBQWdCOzJDQUw5QjtRQU1JLElBQUksQ0FBQ0EsZ0JBQWdCLEdBQUdBLGdCQUFnQixDQUFDOzs7O1lBRzNDQyxHQUFtQixFQUFuQkEscUJBQW1CO1lFVHJCLE9GU0VBLFNBQUFBLG1CQUFtQixHQUFHO2dCQUNwQixPQUFPLElBQUksQ0FBQ0QsZ0JBQWdCLENBQUM7YUFDOUI7OztZQUVERSxHQUF3QixFQUF4QkEsMEJBQXdCO1lFYjFCLE9GYUVBLFNBQUFBLHdCQUF3QixHQUFHO2dCQUN6QixJQUFNQyxxQkFBcUIsR0FBRyxJQUFJLENBQUNILGdCQUFnQixBQUFDLEVBQUUsR0FBRztnQkFFekQsT0FBT0cscUJBQXFCLENBQUM7YUFDOUI7OztZQUVEQyxHQUF1QixFQUF2QkEseUJBQXVCO1lFbkJ6QixPRm1CRUEsU0FBQUEsdUJBQXVCLEdBQUc7Z0JBQ3hCLElBQU1DLG9CQUFvQixHQUFHLElBQUksQ0FBQ0wsZ0JBQWdCLEFBQUMsRUFBRSxHQUFHO2dCQUV4RCxPQUFPSyxvQkFBb0IsQ0FBQzthQUM3Qjs7O1lBRURDLEdBQWtCLEVBQWxCQSxvQkFBa0I7WUV6QnBCLE9GeUJFQSxTQUFBQSxrQkFBa0IsR0FBRztnQkFDbkIsSUFBTUMsZ0JBQWdCLEdBQUcsS0FBSyxBQUFDO2dCQUUvQixPQUFPQSxnQkFBZ0IsQ0FBQzthQUN6Qjs7O1lBRURDLEdBQWMsRUFBZEEsZ0JBQWM7WUUvQmhCLE9GK0JFQSxTQUFBQSxjQUFjLEdBQUc7Z0JBQ2YsSUFBTUMsWUFBWSxHQUFHLElBQUksQUFBQztnQkFFMUIsT0FBT0EsWUFBWSxDQUFDO2FBQ3JCOzs7WUFFREMsR0FBaUIsRUFBakJBLG1CQUFpQjtZRXJDbkIsT0ZxQ0VBLFNBQUFBLGlCQUFpQixHQUFHO2dCQUNsQixJQUFNQyxlQUFlLEdBQUcsS0FBSyxBQUFDO2dCQUU5QixPQUFPQSxlQUFlLENBQUM7YUFDeEI7OztZQUVEQyxHQUFPLEVBQVBBLFNBQU87WUUzQ1QsT0YyQ0VBLFNBQUFBLE9BQU8sR0FBRztnQkFBRSxPQUFPLElBQUksQ0FBQ1osZ0JBQWdCLENBQUNZLE9BQU8sRUFBRSxDQUFDO2FBQUU7OztZQUVyREMsR0FBVSxFQUFWQSxZQUFVO1lFN0NaLE9GNkNFQSxTQUFBQSxVQUFVLEdBQUc7Z0JBQUUsT0FBTyxJQUFJLENBQUNiLGdCQUFnQixDQUFDYSxVQUFVLEVBQUUsQ0FBQzthQUFFOzs7WUFFM0RDLEdBQW1CLEVBQW5CQSxxQkFBbUI7WUUvQ3JCLE9GK0NFQSxTQUFBQSxtQkFBbUIsQ0FBQ2QsZ0JBQWdCLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQ0EsZ0JBQWdCLEdBQUdBLGdCQUFnQixDQUFDO2FBQzFDOzs7WUFFRGUsR0FBVyxFQUFYQSxhQUFXO1lFbkRiLE9GbURFQSxTQUFBQSxXQUFXLENBQUNDLE1BQU0sRUFBRTtnQkFDbEIsSUFBTVAsWUFBWSxHQUFHLElBQUksRUFDbkJRLHFCQUFxQixHQUFHQyxhQUFxQixTQUFDQyx5QkFBeUIsQ0FBQ1YsWUFBWSxFQUFFTyxNQUFNLENBQUMsRUFDN0ZJLFNBQVMsR0FBR0gscUJBQXFCLEFBQUMsRUFBRSxHQUFHO2dCQUU3QyxPQUFPRyxTQUFTLENBQUM7YUFDbEI7Ozs7WUFFTUMsR0FBb0IsRUFBcEJBLHNCQUFvQjtZRTNEN0IsT0YyREUsU0FBT0Esb0JBQW9CLENBQUNDLEtBQUssRUFBRXRCLGdCQUFnQixFQUFFO2dCQUNuRCxJQUFJQSxnQkFBZ0IsS0FBS3VCLFNBQVMsRUFBRTtvQkFDbEN2QixnQkFBZ0IsR0FBR3NCLEtBQUssQ0FBQyxDQUFDLEdBQUc7b0JBQzdCQSxLQUFLLEdBQUd2QixZQUFZLENBQUMsQ0FBQyxHQUFHO2lCQUMxQjtnQkFFRCxJQUFNVSxZQUFZLEdBQUcsSUFBSWEsS0FBSyxDQUFDdEIsZ0JBQWdCLENBQUMsQUFBQztnQkFFakQsT0FBT1MsWUFBWSxDQUFDO2FBQ3JCOztNQXBFSDs7Q0FxRUMsRUFBQTtrQkFqRW9CVixZQUFZLEFBSmpDIn0=