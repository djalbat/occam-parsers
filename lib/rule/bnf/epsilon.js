"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EpsilonBNFRule;
    }
});
const _occamlexers = require("occam-lexers");
const _rule = /*#__PURE__*/ _interop_require_default(require("../../rule"));
const _stringLiteral = /*#__PURE__*/ _interop_require_default(require("../../definition/stringLiteral"));
const _ruleNames = require("../../ruleNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { epsilon } = _occamlexers.specialSymbols;
class EpsilonBNFRule extends _rule.default {
    static fromNothing() {
        const content = epsilon, epsilonStringLiteralDefinition = _stringLiteral.default.fromContent(content), name = _ruleNames.EPSILON_RULE_NAME, opacity = null, definitions = [
            epsilonStringLiteralDefinition
        ], epsilonRule = new EpsilonBNFRule(name, opacity, definitions);
        return epsilonRule;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9lcHNpbG9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uLy4uL3J1bGVcIjtcbmltcG9ydCBTdHJpbmdMaXRlcmFsRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvbi9zdHJpbmdMaXRlcmFsXCI7XG5cbmltcG9ydCB7IEVQU0lMT05fUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCB7IGVwc2lsb24gfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcHNpbG9uQk5GUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGVwc2lsb24sIC8vL1xuICAgICAgICAgIGVwc2lsb25TdHJpbmdMaXRlcmFsRGVmaW5pdGlvbiA9IFN0cmluZ0xpdGVyYWxEZWZpbml0aW9uLmZyb21Db250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIG5hbWUgPSBFUFNJTE9OX1JVTEVfTkFNRSwgLy8vXG4gICAgICAgICAgb3BhY2l0eSA9IG51bGwsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBlcHNpbG9uU3RyaW5nTGl0ZXJhbERlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIGVwc2lsb25SdWxlID0gbmV3IEVwc2lsb25CTkZSdWxlKG5hbWUsIG9wYWNpdHksIGRlZmluaXRpb25zKTtcblxuICAgIHJldHVybiBlcHNpbG9uUnVsZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkVwc2lsb25CTkZSdWxlIiwiZXBzaWxvbiIsInNwZWNpYWxTeW1ib2xzIiwiUnVsZSIsImZyb21Ob3RoaW5nIiwiY29udGVudCIsImVwc2lsb25TdHJpbmdMaXRlcmFsRGVmaW5pdGlvbiIsIlN0cmluZ0xpdGVyYWxEZWZpbml0aW9uIiwiZnJvbUNvbnRlbnQiLCJuYW1lIiwiRVBTSUxPTl9SVUxFX05BTUUiLCJvcGFjaXR5IiwiZGVmaW5pdGlvbnMiLCJlcHNpbG9uUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFxQkE7Ozs2QkFUVTs2REFFZDtzRUFDbUI7MkJBRUY7Ozs7OztBQUVsQyxNQUFNLEVBQUVDLE9BQU8sRUFBRSxHQUFHQywyQkFBYztBQUVuQixNQUFNRix1QkFBdUJHLGFBQUk7SUFDOUMsT0FBT0MsY0FBYztRQUNuQixNQUFNQyxVQUFVSixTQUNWSyxpQ0FBaUNDLHNCQUF1QixDQUFDQyxXQUFXLENBQUNILFVBQ3JFSSxPQUFPQyw0QkFBaUIsRUFDeEJDLFVBQVUsTUFDVkMsY0FBYztZQUNaTjtTQUNELEVBQ0RPLGNBQWMsSUFBSWIsZUFBZVMsTUFBTUUsU0FBU0M7UUFFdEQsT0FBT0M7SUFDVDtBQUNGIn0=