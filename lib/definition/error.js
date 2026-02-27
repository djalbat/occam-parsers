"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ErrorDefinition;
    }
});
const _definition = /*#__PURE__*/ _interop_require_default(require("../definition"));
const _wildcard = /*#__PURE__*/ _interop_require_default(require("../part/terminal/wildcard"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class ErrorDefinition extends _definition.default {
    static fromNothing() {
        const wildcardPart = _wildcard.default.fromNothing(), parts = [
            wildcardPart
        ], precedence = null, errorDefinition = new ErrorDefinition(parts, precedence);
        return errorDefinition;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL2Vycm9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvblwiO1xuaW1wb3J0IFdpbGRjYXJkUGFydCBmcm9tIFwiLi4vcGFydC90ZXJtaW5hbC93aWxkY2FyZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvckRlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHdpbGRjYXJkUGFydCA9IFdpbGRjYXJkUGFydC5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgd2lsZGNhcmRQYXJ0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBwcmVjZWRlbmNlID0gbnVsbCxcbiAgICAgICAgICBlcnJvckRlZmluaXRpb24gPSBuZXcgRXJyb3JEZWZpbml0aW9uKHBhcnRzLCBwcmVjZWRlbmNlKTtcblxuICAgIHJldHVybiBlcnJvckRlZmluaXRpb247XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJFcnJvckRlZmluaXRpb24iLCJEZWZpbml0aW9uIiwiZnJvbU5vdGhpbmciLCJ3aWxkY2FyZFBhcnQiLCJXaWxkY2FyZFBhcnQiLCJwYXJ0cyIsInByZWNlZGVuY2UiLCJlcnJvckRlZmluaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUtBOzs7ZUFBcUJBOzs7bUVBSEU7aUVBQ0U7Ozs7OztBQUVWLE1BQU1BLHdCQUF3QkMsbUJBQVU7SUFDckQsT0FBT0MsY0FBYztRQUNuQixNQUFNQyxlQUFlQyxpQkFBWSxDQUFDRixXQUFXLElBQ3ZDRyxRQUFRO1lBQ05GO1NBQ0QsRUFDREcsYUFBYSxNQUNiQyxrQkFBa0IsSUFBSVAsZ0JBQWdCSyxPQUFPQztRQUVuRCxPQUFPQztJQUNUO0FBQ0YifQ==