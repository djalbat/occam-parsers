"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DefinitionsBNFRule;
    }
});
const _rule = /*#__PURE__*/ _interop_require_default(require("../../rule"));
const _definitions = /*#__PURE__*/ _interop_require_default(require("../../definition/definitions"));
const _ruleNames = require("../../ruleNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class DefinitionsBNFRule extends _rule.default {
    static fromNothing() {
        const definitionsDefinition = _definitions.default.fromNothing(), name = _ruleNames.DEFINITIONS_RULE_NAME, opacity = null, definitions = [
            definitionsDefinition
        ], definitionsRule = new DefinitionsBNFRule(name, opacity, definitions);
        return definitionsRule;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9kZWZpbml0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uLy4uL3J1bGVcIjtcbmltcG9ydCBEZWZpbml0aW9uc0RlZmluaXRpb24gZnJvbSBcIi4uLy4uL2RlZmluaXRpb24vZGVmaW5pdGlvbnNcIjtcblxuaW1wb3J0IHsgREVGSU5JVElPTlNfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWZpbml0aW9uc0JORlJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGRlZmluaXRpb25zRGVmaW5pdGlvbiA9IERlZmluaXRpb25zRGVmaW5pdGlvbi5mcm9tTm90aGluZygpLFxuICAgICAgICAgIG5hbWUgPSBERUZJTklUSU9OU19SVUxFX05BTUUsIC8vL1xuICAgICAgICAgIG9wYWNpdHkgPSBudWxsLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgZGVmaW5pdGlvbnNEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBkZWZpbml0aW9uc1J1bGUgPSBuZXcgRGVmaW5pdGlvbnNCTkZSdWxlKG5hbWUsIG9wYWNpdHksIGRlZmluaXRpb25zKTtcblxuICAgIHJldHVybiBkZWZpbml0aW9uc1J1bGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJEZWZpbml0aW9uc0JORlJ1bGUiLCJSdWxlIiwiZnJvbU5vdGhpbmciLCJkZWZpbml0aW9uc0RlZmluaXRpb24iLCJEZWZpbml0aW9uc0RlZmluaXRpb24iLCJuYW1lIiwiREVGSU5JVElPTlNfUlVMRV9OQU1FIiwib3BhY2l0eSIsImRlZmluaXRpb25zIiwiZGVmaW5pdGlvbnNSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQXFCQTs7OzZEQUxKO29FQUNpQjsyQkFFSTs7Ozs7O0FBRXZCLE1BQU1BLDJCQUEyQkMsYUFBSTtJQUNsRCxPQUFPQyxjQUFjO1FBQ25CLE1BQU1DLHdCQUF3QkMsb0JBQXFCLENBQUNGLFdBQVcsSUFDekRHLE9BQU9DLGdDQUFxQixFQUM1QkMsVUFBVSxNQUNWQyxjQUFjO1lBQ1pMO1NBQ0QsRUFDRE0sa0JBQWtCLElBQUlULG1CQUFtQkssTUFBTUUsU0FBU0M7UUFFOUQsT0FBT0M7SUFDVDtBQUNGIn0=