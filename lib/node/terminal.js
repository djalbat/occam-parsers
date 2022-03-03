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
                    significantToken = Class; ///
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3Rlcm1pbmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGVybWluYWxOb2RlUGFyc2VUcmVlIGZyb20gXCIuLi9wYXJzZVRyZWUvdGVybWluYWxOb2RlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHNpZ25pZmljYW50VG9rZW4sIHBhcmVudE5vZGUpIHtcbiAgICB0aGlzLnNpZ25pZmljYW50VG9rZW4gPSBzaWduaWZpY2FudFRva2VuO1xuICAgIHRoaXMucGFyZW50Tm9kZSA9IHBhcmVudE5vZGU7XG4gIH1cblxuICBnZXRTaWduaWZpY2FudFRva2VuKCkge1xuICAgIHJldHVybiB0aGlzLnNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBnZXRQYXJlbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudE5vZGU7XG4gIH1cblxuICBnZXRGaXJzdFNpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgY29uc3QgZmlyc3RTaWduaWZpY2FudFRva2VuID0gdGhpcy5zaWduaWZpY2FudFRva2VuOyAgLy8vXG5cbiAgICByZXR1cm4gZmlyc3RTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgY29uc3QgbGFzdFNpZ25pZmljYW50VG9rZW4gPSB0aGlzLnNpZ25pZmljYW50VG9rZW47ICAvLy9cblxuICAgIHJldHVybiBsYXN0U2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGlzTm9XaGl0ZXNwYWNlTm9kZSgpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2VOb2RlID0gZmFsc2U7XG5cbiAgICByZXR1cm4gbm9XaGl0ZXNwYWNlTm9kZTtcbiAgfVxuXG4gIGlzVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IHRydWU7XG4gICAgXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGlzTm9uVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7IHJldHVybiB0aGlzLnNpZ25pZmljYW50VG9rZW4uZ2V0VHlwZSgpOyB9XG5cbiAgZ2V0Q29udGVudCgpIHsgcmV0dXJuIHRoaXMuc2lnbmlmaWNhbnRUb2tlbi5nZXRDb250ZW50KCk7IH1cblxuICBzZXRTaWduaWZpY2FudFRva2VuKHNpZ25pZmljYW50VG9rZW4pIHtcbiAgICB0aGlzLnNpZ25pZmljYW50VG9rZW4gPSBzaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgc2V0UGFyZW50Tm9kZShwYXJlbnROb2RlKSB7XG4gICAgdGhpcy5wYXJlbnROb2RlID0gcGFyZW50Tm9kZTtcbiAgfVxuXG4gIGFzUGFyc2VUcmVlKHRva2Vucykge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICB0ZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSBUZXJtaW5hbE5vZGVQYXJzZVRyZWUuZnJvbVRlcm1pbmFsTm9kZUFuZFRva2Vucyh0ZXJtaW5hbE5vZGUsIHRva2VucyksXG4gICAgICAgICAgcGFyc2VUcmVlID0gdGVybWluYWxOb2RlUGFyc2VUcmVlOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TaWduaWZpY2FudFRva2VuKENsYXNzLCBzaWduaWZpY2FudFRva2VuKSB7XG4gICAgaWYgKHNpZ25pZmljYW50VG9rZW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IENsYXNzOyAvLy9cbiAgICAgIENsYXNzID0gVGVybWluYWxOb2RlOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBwYXJlbnROb2RlID0gdW5kZWZpbmVkLCAvLy9cbiAgICAgICAgICB0ZXJtaW5hbE5vZGUgPSBuZXcgQ2xhc3Moc2lnbmlmaWNhbnRUb2tlbiwgcGFyZW50Tm9kZSk7XG4gICAgXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlRlcm1pbmFsTm9kZSIsInNpZ25pZmljYW50VG9rZW4iLCJwYXJlbnROb2RlIiwiZ2V0U2lnbmlmaWNhbnRUb2tlbiIsImdldFBhcmVudE5vZGUiLCJnZXRGaXJzdFNpZ25pZmljYW50VG9rZW4iLCJmaXJzdFNpZ25pZmljYW50VG9rZW4iLCJnZXRMYXN0U2lnbmlmaWNhbnRUb2tlbiIsImxhc3RTaWduaWZpY2FudFRva2VuIiwiaXNOb1doaXRlc3BhY2VOb2RlIiwibm9XaGl0ZXNwYWNlTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJnZXRUeXBlIiwiZ2V0Q29udGVudCIsInNldFNpZ25pZmljYW50VG9rZW4iLCJzZXRQYXJlbnROb2RlIiwiYXNQYXJzZVRyZWUiLCJ0b2tlbnMiLCJ0ZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJUZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJmcm9tVGVybWluYWxOb2RlQW5kVG9rZW5zIiwicGFyc2VUcmVlIiwiZnJvbVNpZ25pZmljYW50VG9rZW4iLCJDbGFzcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWSxXQUFBLENBQUM7OztFO3dCO0FBRXFCLEdBQTJCLENBQTNCLGFBQTJCOzs7Ozs7Ozs7OEQ7c0M7NkQ7aUU7Ozs7d0U7Z0U7Ozs7Ozs7O0lBRXhDQSxZQUFZLGlCQUFsQixRQUFRO2FBQUZBLFlBQVksQ0FDbkJDLGdCQUFnQixFQUFFQyxVQUFVOzJDO1FBQ3RDLElBQUksQ0FBQ0QsZ0JBQWdCLEdBQUdBLGdCQUFnQixDQUFDO1FBQ3pDLElBQUksQ0FBQ0MsVUFBVSxHQUFHQSxVQUFVLENBQUM7Ozs7WUFHL0JDLEdBQW1CLEVBQW5CQSxDQUFtQjttQkFBbkJB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