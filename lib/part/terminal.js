"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TerminalPart;
    }
});
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
var TerminalPart = /*#__PURE__*/ function() {
    function TerminalPart() {
        _class_call_check(this, TerminalPart);
    }
    _create_class(TerminalPart, [
        {
            key: "isLookAhead",
            value: function isLookAhead() {
                var lookAhead = false;
                return lookAhead;
            }
        },
        {
            key: "isNonTerminalPart",
            value: function isNonTerminalPart() {
                var nonTerminalPart = false;
                return nonTerminalPart;
            }
        },
        {
            key: "isTerminalPart",
            value: function isTerminalPart() {
                var terminalPart = true;
                return terminalPart;
            }
        },
        {
            key: "isNoWhitespacePart",
            value: function isNoWhitespacePart() {
                var noWhitespacePart = false;
                return noWhitespacePart;
            }
        }
    ]);
    return TerminalPart;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJ0L3Rlcm1pbmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXJtaW5hbFBhcnQge1xuICBpc0xvb2tBaGVhZCgpIHtcbiAgICBjb25zdCBsb29rQWhlYWQgPSBmYWxzZTtcblxuICAgIHJldHVybiBsb29rQWhlYWQ7XG4gIH1cblxuICBpc05vblRlcm1pbmFsUGFydCgpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbFBhcnQgPSBmYWxzZTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbFBhcnQ7XG4gIH1cblxuICBpc1Rlcm1pbmFsUGFydCgpIHtcbiAgICBjb25zdCB0ZXJtaW5hbFBhcnQgPSB0cnVlO1xuICAgIFxuICAgIHJldHVybiB0ZXJtaW5hbFBhcnQ7XG4gIH1cblxuICBpc05vV2hpdGVzcGFjZVBhcnQoKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlUGFydCA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIG5vV2hpdGVzcGFjZVBhcnQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJUZXJtaW5hbFBhcnQiLCJpc0xvb2tBaGVhZCIsImxvb2tBaGVhZCIsImlzTm9uVGVybWluYWxQYXJ0Iiwibm9uVGVybWluYWxQYXJ0IiwiaXNUZXJtaW5hbFBhcnQiLCJ0ZXJtaW5hbFBhcnQiLCJpc05vV2hpdGVzcGFjZVBhcnQiLCJub1doaXRlc3BhY2VQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUVxQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTixJQUFBLEFBQU1BLDZCQUFOO2FBQU1BO2dDQUFBQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFlBQVk7Z0JBRWxCLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsa0JBQWtCO2dCQUV4QixPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGVBQWU7Z0JBRXJCLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsbUJBQW1CO2dCQUV6QixPQUFPQTtZQUNUOzs7V0F2Qm1CUiJ9