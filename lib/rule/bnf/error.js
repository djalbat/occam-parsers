"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ErrorBNFRule;
    }
});
const _occamlexers = require("occam-lexers");
const _rule = /*#__PURE__*/ _interop_require_default(require("../../rule"));
const _error = /*#__PURE__*/ _interop_require_default(require("../../definition/error"));
const _ruleNames = require("../../ruleNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { opaque } = _occamlexers.specialSymbols;
class ErrorBNFRule extends _rule.default {
    static fromNothing() {
        const errorDefinition = _error.default.fromNothing(), name = _ruleNames.ERROR_RULE_NAME, opacity = opaque, definitions = [
            errorDefinition
        ], errorRule = new ErrorBNFRule(name, opacity, definitions);
        return errorRule;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9lcnJvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi8uLi9ydWxlXCI7XG5pbXBvcnQgRXJyb3JEZWZpbml0aW9uIGZyb20gXCIuLi8uLi9kZWZpbml0aW9uL2Vycm9yXCI7XG5cbmltcG9ydCB7IEVSUk9SX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgeyBvcGFxdWUgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvckJORlJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGVycm9yRGVmaW5pdGlvbiA9IEVycm9yRGVmaW5pdGlvbi5mcm9tTm90aGluZygpLFxuICAgICAgICAgIG5hbWUgPSBFUlJPUl9SVUxFX05BTUUsIC8vL1xuICAgICAgICAgIG9wYWNpdHkgPSBvcGFxdWUsIC8vL1xuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgZXJyb3JEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBlcnJvclJ1bGUgPSBuZXcgRXJyb3JCTkZSdWxlKG5hbWUsIG9wYWNpdHksIGRlZmluaXRpb25zKTtcblxuICAgIHJldHVybiBlcnJvclJ1bGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJFcnJvckJORlJ1bGUiLCJvcGFxdWUiLCJzcGVjaWFsU3ltYm9scyIsIlJ1bGUiLCJmcm9tTm90aGluZyIsImVycm9yRGVmaW5pdGlvbiIsIkVycm9yRGVmaW5pdGlvbiIsIm5hbWUiLCJFUlJPUl9SVUxFX05BTUUiLCJvcGFjaXR5IiwiZGVmaW5pdGlvbnMiLCJlcnJvclJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBcUJBOzs7NkJBVFU7NkRBRWQ7OERBQ1c7MkJBRUk7Ozs7OztBQUVoQyxNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHQywyQkFBYztBQUVsQixNQUFNRixxQkFBcUJHLGFBQUk7SUFDNUMsT0FBT0MsY0FBYztRQUNuQixNQUFNQyxrQkFBa0JDLGNBQWUsQ0FBQ0YsV0FBVyxJQUM3Q0csT0FBT0MsMEJBQWUsRUFDdEJDLFVBQVVSLFFBQ1ZTLGNBQWM7WUFDWkw7U0FDRCxFQUNETSxZQUFZLElBQUlYLGFBQWFPLE1BQU1FLFNBQVNDO1FBRWxELE9BQU9DO0lBQ1Q7QUFDRiJ9