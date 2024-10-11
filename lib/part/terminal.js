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
        },
        {
            key: "isStartOfContentPart",
            value: function isStartOfContentPart() {
                var startOfContentPart = false;
                return startOfContentPart;
            }
        }
    ]);
    return TerminalPart;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJ0L3Rlcm1pbmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXJtaW5hbFBhcnQge1xuICBpc0xvb2tBaGVhZCgpIHtcbiAgICBjb25zdCBsb29rQWhlYWQgPSBmYWxzZTtcblxuICAgIHJldHVybiBsb29rQWhlYWQ7XG4gIH1cblxuICBpc05vblRlcm1pbmFsUGFydCgpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbFBhcnQgPSBmYWxzZTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbFBhcnQ7XG4gIH1cblxuICBpc1Rlcm1pbmFsUGFydCgpIHtcbiAgICBjb25zdCB0ZXJtaW5hbFBhcnQgPSB0cnVlO1xuICAgIFxuICAgIHJldHVybiB0ZXJtaW5hbFBhcnQ7XG4gIH1cblxuICBpc05vV2hpdGVzcGFjZVBhcnQoKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlUGFydCA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIG5vV2hpdGVzcGFjZVBhcnQ7XG4gIH1cblxuICBpc1N0YXJ0T2ZDb250ZW50UGFydCgpIHtcbiAgICBjb25zdCBzdGFydE9mQ29udGVudFBhcnQgPSBmYWxzZTtcblxuICAgIHJldHVybiBzdGFydE9mQ29udGVudFBhcnQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJUZXJtaW5hbFBhcnQiLCJpc0xvb2tBaGVhZCIsImxvb2tBaGVhZCIsImlzTm9uVGVybWluYWxQYXJ0Iiwibm9uVGVybWluYWxQYXJ0IiwiaXNUZXJtaW5hbFBhcnQiLCJ0ZXJtaW5hbFBhcnQiLCJpc05vV2hpdGVzcGFjZVBhcnQiLCJub1doaXRlc3BhY2VQYXJ0IiwiaXNTdGFydE9mQ29udGVudFBhcnQiLCJzdGFydE9mQ29udGVudFBhcnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBRXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLElBQUEsQUFBTUEsNkJBQU47YUFBTUE7Z0NBQUFBOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsWUFBWTtnQkFFbEIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxrQkFBa0I7Z0JBRXhCLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsZUFBZTtnQkFFckIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxtQkFBbUI7Z0JBRXpCLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMscUJBQXFCO2dCQUUzQixPQUFPQTtZQUNUOzs7V0E3Qm1CViJ9