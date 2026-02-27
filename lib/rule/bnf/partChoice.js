"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PartChoiceBNFRule;
    }
});
const _rule = /*#__PURE__*/ _interop_require_default(require("../../rule"));
const _partChoice = /*#__PURE__*/ _interop_require_default(require("../../definition/partChoice"));
const _ruleNames = require("../../ruleNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class PartChoiceBNFRule extends _rule.default {
    static fromNothing() {
        const name = _ruleNames.PART_CHOICE_RULE_NAME, partChoiceDefinition = _partChoice.default.fromNothing(), opacity = null, definitions = [
            partChoiceDefinition
        ], definitionRule = new PartChoiceBNFRule(name, opacity, definitions);
        return definitionRule;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9wYXJ0Q2hvaWNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vLi4vcnVsZVwiO1xuaW1wb3J0IFBhcnRDaG9pY2VEZWZpbml0aW9uIGZyb20gXCIuLi8uLi9kZWZpbml0aW9uL3BhcnRDaG9pY2VcIjtcblxuaW1wb3J0IHsgUEFSVF9DSE9JQ0VfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJ0Q2hvaWNlQk5GUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbmFtZSA9IFBBUlRfQ0hPSUNFX1JVTEVfTkFNRSwgIC8vL1xuICAgICAgICAgIHBhcnRDaG9pY2VEZWZpbml0aW9uID0gUGFydENob2ljZURlZmluaXRpb24uZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBvcGFjaXR5ID0gbnVsbCxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIHBhcnRDaG9pY2VEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBkZWZpbml0aW9uUnVsZSA9IG5ldyBQYXJ0Q2hvaWNlQk5GUnVsZShuYW1lLCBvcGFjaXR5LCBkZWZpbml0aW9ucyk7XG5cbiAgICByZXR1cm4gZGVmaW5pdGlvblJ1bGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJQYXJ0Q2hvaWNlQk5GUnVsZSIsIlJ1bGUiLCJmcm9tTm90aGluZyIsIm5hbWUiLCJQQVJUX0NIT0lDRV9SVUxFX05BTUUiLCJwYXJ0Q2hvaWNlRGVmaW5pdGlvbiIsIlBhcnRDaG9pY2VEZWZpbml0aW9uIiwib3BhY2l0eSIsImRlZmluaXRpb25zIiwiZGVmaW5pdGlvblJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBcUJBOzs7NkRBTEo7bUVBQ2dCOzJCQUVLOzs7Ozs7QUFFdkIsTUFBTUEsMEJBQTBCQyxhQUFJO0lBQ2pELE9BQU9DLGNBQWM7UUFDbkIsTUFBTUMsT0FBT0MsZ0NBQXFCLEVBQzVCQyx1QkFBdUJDLG1CQUFvQixDQUFDSixXQUFXLElBQ3ZESyxVQUFVLE1BQ1ZDLGNBQWM7WUFDWkg7U0FDRCxFQUNESSxpQkFBaUIsSUFBSVQsa0JBQWtCRyxNQUFNSSxTQUFTQztRQUU1RCxPQUFPQztJQUNUO0FBQ0YifQ==