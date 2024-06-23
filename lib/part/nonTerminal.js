"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NonTerminalPart;
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
var NonTerminalPart = /*#__PURE__*/ function() {
    function NonTerminalPart(type, lookAhead) {
        _class_call_check(this, NonTerminalPart);
        this.type = type;
        this.lookAhead = lookAhead;
    }
    _create_class(NonTerminalPart, [
        {
            key: "getType",
            value: function getType() {
                return this.type;
            }
        },
        {
            key: "isLookAhead",
            value: function isLookAhead() {
                return this.lookAhead;
            }
        },
        {
            key: "isNonTerminalPart",
            value: function isNonTerminalPart() {
                var nonTerminalPart = true;
                return nonTerminalPart;
            }
        },
        {
            key: "isTerminalPart",
            value: function isTerminalPart() {
                var terminalPart = false;
                return terminalPart;
            }
        },
        {
            key: "isRuleNamePart",
            value: function isRuleNamePart() {
                var ruleNamePart = false;
                return ruleNamePart;
            }
        }
    ]);
    return NonTerminalPart;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJ0L25vblRlcm1pbmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb25UZXJtaW5hbFBhcnQge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBsb29rQWhlYWQpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMubG9va0FoZWFkID0gbG9va0FoZWFkO1xuICB9XG4gIFxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBpc0xvb2tBaGVhZCgpIHtcbiAgICByZXR1cm4gdGhpcy5sb29rQWhlYWQ7XG4gIH1cblxuICBpc05vblRlcm1pbmFsUGFydCgpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbFBhcnQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsUGFydDtcbiAgfVxuXG4gIGlzVGVybWluYWxQYXJ0KCkge1xuICAgIGNvbnN0IHRlcm1pbmFsUGFydCA9IGZhbHNlO1xuICAgIFxuICAgIHJldHVybiB0ZXJtaW5hbFBhcnQ7XG4gIH1cblxuICBpc1J1bGVOYW1lUGFydCgpIHtcbiAgICBjb25zdCBydWxlTmFtZVBhcnQgPSBmYWxzZTtcblxuICAgIHJldHVybiBydWxlTmFtZVBhcnQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbFBhcnQiLCJ0eXBlIiwibG9va0FoZWFkIiwiZ2V0VHlwZSIsImlzTG9va0FoZWFkIiwiaXNOb25UZXJtaW5hbFBhcnQiLCJub25UZXJtaW5hbFBhcnQiLCJpc1Rlcm1pbmFsUGFydCIsInRlcm1pbmFsUGFydCIsImlzUnVsZU5hbWVQYXJ0IiwicnVsZU5hbWVQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUVxQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTixJQUFBLEFBQU1BLGdDQUFELEFBQUw7YUFBTUEsZ0JBQ1BDLElBQUksRUFBRUMsU0FBUztnQ0FEUkY7UUFFakIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxTQUFTLEdBQUdBOztrQkFIQUY7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFNBQVM7WUFDdkI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsa0JBQWtCO2dCQUV4QixPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGVBQWU7Z0JBRXJCLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsZUFBZTtnQkFFckIsT0FBT0E7WUFDVDs7O1dBOUJtQlYifQ==