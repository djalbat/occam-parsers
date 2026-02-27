"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SequenceOfPartsBNFRule;
    }
});
const _rule = /*#__PURE__*/ _interop_require_default(require("../../rule"));
const _sequenceOfParts = /*#__PURE__*/ _interop_require_default(require("../../definition/sequenceOfParts"));
const _ruleNames = require("../../ruleNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class SequenceOfPartsBNFRule extends _rule.default {
    static fromNothing() {
        const name = _ruleNames.SEQUENCE_OF_PARTS_RULE_NAME, sequenceOfPartsDefinition = _sequenceOfParts.default.fromNothing(), opacity = null, definitions = [
            sequenceOfPartsDefinition
        ], sequenceOfPartsRule = new SequenceOfPartsBNFRule(name, opacity, definitions);
        return sequenceOfPartsRule;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9zZXF1ZW5jZU9mUGFydHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi8uLi9ydWxlXCI7XG5pbXBvcnQgU2VxdWVuY2VPZlBhcnRzRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvbi9zZXF1ZW5jZU9mUGFydHNcIjtcblxuaW1wb3J0IHsgU0VRVUVOQ0VfT0ZfUEFSVFNfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXF1ZW5jZU9mUGFydHNCTkZSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBuYW1lID0gU0VRVUVOQ0VfT0ZfUEFSVFNfUlVMRV9OQU1FLCAvLy9cbiAgICAgICAgICBzZXF1ZW5jZU9mUGFydHNEZWZpbml0aW9uID0gU2VxdWVuY2VPZlBhcnRzRGVmaW5pdGlvbi5mcm9tTm90aGluZygpLFxuICAgICAgICAgIG9wYWNpdHkgPSBudWxsLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgc2VxdWVuY2VPZlBhcnRzRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgc2VxdWVuY2VPZlBhcnRzUnVsZSA9IG5ldyBTZXF1ZW5jZU9mUGFydHNCTkZSdWxlKG5hbWUsIG9wYWNpdHksIGRlZmluaXRpb25zKTtcblxuICAgIHJldHVybiBzZXF1ZW5jZU9mUGFydHNSdWxlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiU2VxdWVuY2VPZlBhcnRzQk5GUnVsZSIsIlJ1bGUiLCJmcm9tTm90aGluZyIsIm5hbWUiLCJTRVFVRU5DRV9PRl9QQVJUU19SVUxFX05BTUUiLCJzZXF1ZW5jZU9mUGFydHNEZWZpbml0aW9uIiwiU2VxdWVuY2VPZlBhcnRzRGVmaW5pdGlvbiIsIm9wYWNpdHkiLCJkZWZpbml0aW9ucyIsInNlcXVlbmNlT2ZQYXJ0c1J1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBcUJBOzs7NkRBTEo7d0VBQ3FCOzJCQUVNOzs7Ozs7QUFFN0IsTUFBTUEsK0JBQStCQyxhQUFJO0lBQ3RELE9BQU9DLGNBQWM7UUFDbkIsTUFBTUMsT0FBT0Msc0NBQTJCLEVBQ2xDQyw0QkFBNEJDLHdCQUF5QixDQUFDSixXQUFXLElBQ2pFSyxVQUFVLE1BQ1ZDLGNBQWM7WUFDWkg7U0FDRCxFQUNESSxzQkFBc0IsSUFBSVQsdUJBQXVCRyxNQUFNSSxTQUFTQztRQUV0RSxPQUFPQztJQUNUO0FBQ0YifQ==