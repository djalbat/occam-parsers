"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
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
var NonTerminalPart = /*#__PURE__*/ function() {
    function NonTerminalPart(type) {
        _classCallCheck(this, NonTerminalPart);
        this.type = type;
    }
    _createClass(NonTerminalPart, [
        {
            key: "getType",
            value: function getType() {
                return this.type;
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
exports.default = NonTerminalPart;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJ0L25vblRlcm1pbmFsLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb25UZXJtaW5hbFBhcnQge1xuICBjb25zdHJ1Y3Rvcih0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTsgIFxuICB9XG4gIFxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBpc05vblRlcm1pbmFsUGFydCgpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbFBhcnQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsUGFydDtcbiAgfVxuXG4gIGlzVGVybWluYWxQYXJ0KCkge1xuICAgIGNvbnN0IHRlcm1pbmFsUGFydCA9IGZhbHNlO1xuICAgIFxuICAgIHJldHVybiB0ZXJtaW5hbFBhcnQ7XG4gIH1cblxuICBpc1J1bGVOYW1lUGFydCgpIHtcbiAgICBjb25zdCBydWxlTmFtZVBhcnQgPSBmYWxzZTtcblxuICAgIHJldHVybiBydWxlTmFtZVBhcnQ7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiTm9uVGVybWluYWxQYXJ0IiwidHlwZSIsImdldFR5cGUiLCJpc05vblRlcm1pbmFsUGFydCIsIm5vblRlcm1pbmFsUGFydCIsImlzVGVybWluYWxQYXJ0IiwidGVybWluYWxQYXJ0IiwiaXNSdWxlTmFtZVBhcnQiLCJydWxlTmFtZVBhcnQiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUUsSUFBQSxBQUFNQSxlQUFlLGlCQUFyQjthQUFNQSxlQUFlLENBQ3RCQyxJQUFJOztRQUNkLElBQUksQ0FBQ0EsSUFBSSxHQUFHQSxJQUFJLENBQUM7Ozs7WUFHbkJDLEdBQU8sRUFBUEEsU0FBTzttQkFBUEEsU0FBQUEsT0FBTyxHQUFHO2dCQUNSLE9BQU8sSUFBSSxDQUFDRCxJQUFJLENBQUM7YUFDbEI7OztZQUVERSxHQUFpQixFQUFqQkEsbUJBQWlCO21CQUFqQkEsU0FBQUEsaUJBQWlCLEdBQUc7Z0JBQ2xCLElBQU1DLGVBQWUsR0FBRyxJQUFJLEFBQUM7Z0JBRTdCLE9BQU9BLGVBQWUsQ0FBQzthQUN4Qjs7O1lBRURDLEdBQWMsRUFBZEEsZ0JBQWM7bUJBQWRBLFNBQUFBLGNBQWMsR0FBRztnQkFDZixJQUFNQyxZQUFZLEdBQUcsS0FBSyxBQUFDO2dCQUUzQixPQUFPQSxZQUFZLENBQUM7YUFDckI7OztZQUVEQyxHQUFjLEVBQWRBLGdCQUFjO21CQUFkQSxTQUFBQSxjQUFjLEdBQUc7Z0JBQ2YsSUFBTUMsWUFBWSxHQUFHLEtBQUssQUFBQztnQkFFM0IsT0FBT0EsWUFBWSxDQUFDO2FBQ3JCOzs7O0NBQ0YsRUFBQTtrQkExQm9CUixlQUFlIn0=