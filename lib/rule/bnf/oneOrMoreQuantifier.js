"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return OneOrMoreQuantifierBNFRule;
    }
});
const _occamlexers = require("occam-lexers");
const _rule = /*#__PURE__*/ _interop_require_default(require("../../rule"));
const _quantifierRule = /*#__PURE__*/ _interop_require_default(require("../../definition/quantifierRule"));
const _ruleNames = require("../../ruleNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { plus } = _occamlexers.specialSymbols;
class OneOrMoreQuantifierBNFRule extends _rule.default {
    static fromNothing() {
        const name = _ruleNames.ONE_OR_MORE_QUANTIFIER_RULE_NAME, specialSymbol = plus, oneOrMoreQuantifierRuleDefinition = _quantifierRule.default.fromSpecialSymbol(specialSymbol), opacity = null, definitions = [
            oneOrMoreQuantifierRuleDefinition
        ], oneOrMoreQuantifierRule = new OneOrMoreQuantifierBNFRule(name, opacity, definitions);
        return oneOrMoreQuantifierRule;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9vbmVPck1vcmVRdWFudGlmaWVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uLy4uL3J1bGVcIjtcbmltcG9ydCBRdWFudGlmaWVyUnVsZURlZmluaXRpb24gZnJvbSBcIi4uLy4uL2RlZmluaXRpb24vcXVhbnRpZmllclJ1bGVcIjtcblxuaW1wb3J0IHsgT05FX09SX01PUkVfUVVBTlRJRklFUl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHsgcGx1cyB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9uZU9yTW9yZVF1YW50aWZpZXJCTkZSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBuYW1lID0gT05FX09SX01PUkVfUVVBTlRJRklFUl9SVUxFX05BTUUsIC8vL1xuICAgICAgICAgIHNwZWNpYWxTeW1ib2wgPSBwbHVzLCAvLy9cbiAgICAgICAgICBvbmVPck1vcmVRdWFudGlmaWVyUnVsZURlZmluaXRpb24gPSBRdWFudGlmaWVyUnVsZURlZmluaXRpb24uZnJvbVNwZWNpYWxTeW1ib2woc3BlY2lhbFN5bWJvbCksXG4gICAgICAgICAgb3BhY2l0eSA9IG51bGwsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBvbmVPck1vcmVRdWFudGlmaWVyUnVsZURlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIG9uZU9yTW9yZVF1YW50aWZpZXJSdWxlID0gbmV3IE9uZU9yTW9yZVF1YW50aWZpZXJCTkZSdWxlKG5hbWUsIG9wYWNpdHksIGRlZmluaXRpb25zKTtcblxuICAgIHJldHVybiBvbmVPck1vcmVRdWFudGlmaWVyUnVsZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk9uZU9yTW9yZVF1YW50aWZpZXJCTkZSdWxlIiwicGx1cyIsInNwZWNpYWxTeW1ib2xzIiwiUnVsZSIsImZyb21Ob3RoaW5nIiwibmFtZSIsIk9ORV9PUl9NT1JFX1FVQU5USUZJRVJfUlVMRV9OQU1FIiwic3BlY2lhbFN5bWJvbCIsIm9uZU9yTW9yZVF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbiIsIlF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbiIsImZyb21TcGVjaWFsU3ltYm9sIiwib3BhY2l0eSIsImRlZmluaXRpb25zIiwib25lT3JNb3JlUXVhbnRpZmllclJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBcUJBOzs7NkJBVFU7NkRBRWQ7dUVBQ29COzJCQUVZOzs7Ozs7QUFFakQsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBR0MsMkJBQWM7QUFFaEIsTUFBTUYsbUNBQW1DRyxhQUFJO0lBQzFELE9BQU9DLGNBQWM7UUFDbkIsTUFBTUMsT0FBT0MsMkNBQWdDLEVBQ3ZDQyxnQkFBZ0JOLE1BQ2hCTyxvQ0FBb0NDLHVCQUF3QixDQUFDQyxpQkFBaUIsQ0FBQ0gsZ0JBQy9FSSxVQUFVLE1BQ1ZDLGNBQWM7WUFDWko7U0FDRCxFQUNESywwQkFBMEIsSUFBSWIsMkJBQTJCSyxNQUFNTSxTQUFTQztRQUU5RSxPQUFPQztJQUNUO0FBQ0YifQ==