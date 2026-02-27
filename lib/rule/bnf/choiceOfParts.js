"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ChoiceOfPartsBNFRule;
    }
});
const _rule = /*#__PURE__*/ _interop_require_default(require("../../rule"));
const _choiceOfParts = /*#__PURE__*/ _interop_require_default(require("../../definition/choiceOfParts"));
const _ruleNames = require("../../ruleNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class ChoiceOfPartsBNFRule extends _rule.default {
    static fromNothing() {
        const name = _ruleNames.CHOICE_OF_PARTS_RULE_NAME, choiceOfPartsDefinition = _choiceOfParts.default.fromNothing(), opacity = null, definitions = [
            choiceOfPartsDefinition
        ], choiceOfPartsRule = new ChoiceOfPartsBNFRule(name, opacity, definitions);
        return choiceOfPartsRule;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9jaG9pY2VPZlBhcnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vLi4vcnVsZVwiO1xuaW1wb3J0IENob2ljZU9mUGFydHNEZWZpbml0aW9uIGZyb20gXCIuLi8uLi9kZWZpbml0aW9uL2Nob2ljZU9mUGFydHNcIjtcblxuaW1wb3J0IHsgQ0hPSUNFX09GX1BBUlRTX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hvaWNlT2ZQYXJ0c0JORlJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG5hbWUgPSBDSE9JQ0VfT0ZfUEFSVFNfUlVMRV9OQU1FLCAvLy9cbiAgICAgICAgICBjaG9pY2VPZlBhcnRzRGVmaW5pdGlvbiA9IENob2ljZU9mUGFydHNEZWZpbml0aW9uLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgb3BhY2l0eSA9IG51bGwsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBjaG9pY2VPZlBhcnRzRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgY2hvaWNlT2ZQYXJ0c1J1bGUgPSBuZXcgQ2hvaWNlT2ZQYXJ0c0JORlJ1bGUobmFtZSwgb3BhY2l0eSwgZGVmaW5pdGlvbnMpO1xuXG4gICAgcmV0dXJuIGNob2ljZU9mUGFydHNSdWxlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ2hvaWNlT2ZQYXJ0c0JORlJ1bGUiLCJSdWxlIiwiZnJvbU5vdGhpbmciLCJuYW1lIiwiQ0hPSUNFX09GX1BBUlRTX1JVTEVfTkFNRSIsImNob2ljZU9mUGFydHNEZWZpbml0aW9uIiwiQ2hvaWNlT2ZQYXJ0c0RlZmluaXRpb24iLCJvcGFjaXR5IiwiZGVmaW5pdGlvbnMiLCJjaG9pY2VPZlBhcnRzUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFxQkE7Ozs2REFMSjtzRUFDbUI7MkJBRU07Ozs7OztBQUUzQixNQUFNQSw2QkFBNkJDLGFBQUk7SUFDcEQsT0FBT0MsY0FBYztRQUNuQixNQUFNQyxPQUFPQyxvQ0FBeUIsRUFDaENDLDBCQUEwQkMsc0JBQXVCLENBQUNKLFdBQVcsSUFDN0RLLFVBQVUsTUFDVkMsY0FBYztZQUNaSDtTQUNELEVBQ0RJLG9CQUFvQixJQUFJVCxxQkFBcUJHLE1BQU1JLFNBQVNDO1FBRWxFLE9BQU9DO0lBQ1Q7QUFDRiJ9