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
var TerminalNode = function() {
    function TerminalNode(significantToken, parentNode) {
        _classCallCheck(this, TerminalNode);
        this.significantToken = significantToken;
        this.parentNode = parentNode;
    }
    _createClass(TerminalNode, [
        {
            key: "getSignificantToken",
            value: function getSignificantToken() {
                return this.significantToken;
            }
        },
        {
            key: "getParentNode",
            value: function getParentNode() {
                return this.parentNode;
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
            key: "setParentNode",
            value: function setParentNode(parentNode) {
                this.parentNode = parentNode;
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
                    significantToken = Class;
                    Class = TerminalNode; ///
                }
                var parentNode = undefined, terminalNode = new Class(significantToken, parentNode);
                return terminalNode;
            }
        }
    ]);
    return TerminalNode;
}();
exports.default = TerminalNode;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tb24vbm9kZS90ZXJtaW5hbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRlcm1pbmFsTm9kZVBhcnNlVHJlZSBmcm9tIFwiLi4vcGFyc2VUcmVlL3Rlcm1pbmFsTm9kZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXJtaW5hbE5vZGUge1xuICBjb25zdHJ1Y3RvcihzaWduaWZpY2FudFRva2VuLCBwYXJlbnROb2RlKSB7XG4gICAgdGhpcy5zaWduaWZpY2FudFRva2VuID0gc2lnbmlmaWNhbnRUb2tlbjtcbiAgICB0aGlzLnBhcmVudE5vZGUgPSBwYXJlbnROb2RlO1xuICB9XG5cbiAgZ2V0U2lnbmlmaWNhbnRUb2tlbigpIHtcbiAgICByZXR1cm4gdGhpcy5zaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0UGFyZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnROb2RlO1xuICB9XG5cbiAgZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuKCkge1xuICAgIGNvbnN0IGZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IHRoaXMuc2lnbmlmaWNhbnRUb2tlbjsgIC8vL1xuXG4gICAgcmV0dXJuIGZpcnN0U2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGdldExhc3RTaWduaWZpY2FudFRva2VuKCkge1xuICAgIGNvbnN0IGxhc3RTaWduaWZpY2FudFRva2VuID0gdGhpcy5zaWduaWZpY2FudFRva2VuOyAgLy8vXG5cbiAgICByZXR1cm4gbGFzdFNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBpc05vV2hpdGVzcGFjZU5vZGUoKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIG5vV2hpdGVzcGFjZU5vZGU7XG4gIH1cblxuICBpc0Vwc2lsb25Ob2RlKCkge1xuICAgIGNvbnN0IGVwc2lsb25Ob2RlID0gZmFsc2U7XG5cbiAgICByZXR1cm4gZXBzaWxvbk5vZGU7XG4gIH1cblxuICBpc1Rlcm1pbmFsTm9kZSgpIHtcbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSB0cnVlO1xuICAgIFxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGU7XG4gIH1cblxuICBpc05vblRlcm1pbmFsTm9kZSgpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBmYWxzZTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBnZXRUeXBlKCkgeyByZXR1cm4gdGhpcy5zaWduaWZpY2FudFRva2VuLmdldFR5cGUoKTsgfVxuXG4gIGdldENvbnRlbnQoKSB7IHJldHVybiB0aGlzLnNpZ25pZmljYW50VG9rZW4uZ2V0Q29udGVudCgpOyB9XG5cbiAgc2V0U2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKSB7XG4gICAgdGhpcy5zaWduaWZpY2FudFRva2VuID0gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIHNldFBhcmVudE5vZGUocGFyZW50Tm9kZSkge1xuICAgIHRoaXMucGFyZW50Tm9kZSA9IHBhcmVudE5vZGU7XG4gIH1cblxuICBhc1BhcnNlVHJlZSh0b2tlbnMpIHtcbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgdGVybWluYWxOb2RlUGFyc2VUcmVlID0gVGVybWluYWxOb2RlUGFyc2VUcmVlLmZyb21UZXJtaW5hbE5vZGVBbmRUb2tlbnModGVybWluYWxOb2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHBhcnNlVHJlZSA9IHRlcm1pbmFsTm9kZVBhcnNlVHJlZTsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU2lnbmlmaWNhbnRUb2tlbihDbGFzcywgc2lnbmlmaWNhbnRUb2tlbikge1xuICAgIGlmIChzaWduaWZpY2FudFRva2VuID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBDbGFzcztcbiAgICAgIENsYXNzID0gVGVybWluYWxOb2RlOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBwYXJlbnROb2RlID0gdW5kZWZpbmVkLCAvLy9cbiAgICAgICAgICB0ZXJtaW5hbE5vZGUgPSBuZXcgQ2xhc3Moc2lnbmlmaWNhbnRUb2tlbiwgcGFyZW50Tm9kZSk7XG4gICAgXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRXNCLGFBQTJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXhDLFlBQVk7YUFBWixZQUFZLENBQ25CLGdCQUFnQixFQUFFLFVBQVU7OEJBRHJCLFlBQVk7YUFFeEIsZ0JBQWdCLEdBQUcsZ0JBQWdCO2FBQ25DLFVBQVUsR0FBRyxVQUFVOztpQkFIWCxZQUFZOztZQU0vQixHQUFtQixHQUFuQixtQkFBbUI7NEJBQW5CLG1CQUFtQjs0QkFDTCxnQkFBZ0I7Ozs7WUFHOUIsR0FBYSxHQUFiLGFBQWE7NEJBQWIsYUFBYTs0QkFDQyxVQUFVOzs7O1lBR3hCLEdBQXdCLEdBQXhCLHdCQUF3Qjs0QkFBeEIsd0JBQXdCO29CQUNoQixxQkFBcUIsUUFBUSxnQkFBZ0IsQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7dUJBRWxELHFCQUFxQjs7OztZQUc5QixHQUF1QixHQUF2Qix1QkFBdUI7NEJBQXZCLHVCQUF1QjtvQkFDZixvQkFBb0IsUUFBUSxnQkFBZ0IsQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7dUJBRWpELG9CQUFvQjs7OztZQUc3QixHQUFrQixHQUFsQixrQkFBa0I7NEJBQWxCLGtCQUFrQjtvQkFDVixnQkFBZ0IsR0FBRyxLQUFLO3VCQUV2QixnQkFBZ0I7Ozs7WUFHekIsR0FBYSxHQUFiLGFBQWE7NEJBQWIsYUFBYTtvQkFDTCxXQUFXLEdBQUcsS0FBSzt1QkFFbEIsV0FBVzs7OztZQUdwQixHQUFjLEdBQWQsY0FBYzs0QkFBZCxjQUFjO29CQUNOLFlBQVksR0FBRyxJQUFJO3VCQUVsQixZQUFZOzs7O1lBR3JCLEdBQWlCLEdBQWpCLGlCQUFpQjs0QkFBakIsaUJBQWlCO29CQUNULGVBQWUsR0FBRyxLQUFLO3VCQUV0QixlQUFlOzs7O1lBR3hCLEdBQU8sR0FBUCxPQUFPOzRCQUFQLE9BQU87NEJBQWlCLGdCQUFnQixDQUFDLE9BQU87Ozs7WUFFaEQsR0FBVSxHQUFWLFVBQVU7NEJBQVYsVUFBVTs0QkFBaUIsZ0JBQWdCLENBQUMsVUFBVTs7OztZQUV0RCxHQUFtQixHQUFuQixtQkFBbUI7NEJBQW5CLG1CQUFtQixDQUFDLGdCQUFnQjtxQkFDN0IsZ0JBQWdCLEdBQUcsZ0JBQWdCOzs7O1lBRzFDLEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWEsQ0FBQyxVQUFVO3FCQUNqQixVQUFVLEdBQUcsVUFBVTs7OztZQUc5QixHQUFXLEdBQVgsV0FBVzs0QkFBWCxXQUFXLENBQUMsTUFBTTtvQkFDVixZQUFZLFNBQ1oscUJBQXFCLEdBbEVHLGFBQTJCLFNBa0VMLHlCQUF5QixDQUFDLFlBQVksRUFBRSxNQUFNLEdBQzVGLFNBQVMsR0FBRyxxQkFBcUIsQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7dUJBRXRDLFNBQVM7Ozs7O1lBR1gsR0FBb0IsR0FBcEIsb0JBQW9COzRCQUFwQixvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCO29CQUM3QyxnQkFBZ0IsS0FBSyxTQUFTO29CQUNoQyxnQkFBZ0IsR0FBRyxLQUFLO29CQUN4QixLQUFLLEdBQUcsWUFBWSxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRzs7b0JBR3JCLFVBQVUsR0FBRyxTQUFTLEVBQ3RCLFlBQVksT0FBTyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsVUFBVTt1QkFFcEQsWUFBWTs7OztXQS9FRixZQUFZOztrQkFBWixZQUFZIn0=