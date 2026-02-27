"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return OptionalQuantifierBNFRule;
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
const { questionMark } = _occamlexers.specialSymbols;
class OptionalQuantifierBNFRule extends _rule.default {
    static fromNothing() {
        const name = _ruleNames.OPTIONAL_QUANTIFIER_RULE_NAME, specialSymbol = questionMark, optionalQuantifierRuleDefinition = _quantifierRule.default.fromSpecialSymbol(specialSymbol), opacity = null, definitions = [
            optionalQuantifierRuleDefinition
        ], optionalQuantifierRule = new OptionalQuantifierBNFRule(name, opacity, definitions);
        return optionalQuantifierRule;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9vcHRpb25hbFF1YW50aWZpZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vLi4vcnVsZVwiO1xuaW1wb3J0IFF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvbi9xdWFudGlmaWVyUnVsZVwiO1xuXG5pbXBvcnQgeyBPUFRJT05BTF9RVUFOVElGSUVSX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgeyBxdWVzdGlvbk1hcmsgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcHRpb25hbFF1YW50aWZpZXJCTkZSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBuYW1lID0gT1BUSU9OQUxfUVVBTlRJRklFUl9SVUxFX05BTUUsICAvLy9cbiAgICAgICAgICBzcGVjaWFsU3ltYm9sID0gcXVlc3Rpb25NYXJrLCAvLy9cbiAgICAgICAgICBvcHRpb25hbFF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbiA9IFF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbi5mcm9tU3BlY2lhbFN5bWJvbChzcGVjaWFsU3ltYm9sKSxcbiAgICAgICAgICBvcGFjaXR5ID0gbnVsbCxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIG9wdGlvbmFsUXVhbnRpZmllclJ1bGVEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBvcHRpb25hbFF1YW50aWZpZXJSdWxlID0gbmV3IE9wdGlvbmFsUXVhbnRpZmllckJORlJ1bGUobmFtZSwgb3BhY2l0eSwgZGVmaW5pdGlvbnMpO1xuXG4gICAgcmV0dXJuIG9wdGlvbmFsUXVhbnRpZmllclJ1bGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJPcHRpb25hbFF1YW50aWZpZXJCTkZSdWxlIiwicXVlc3Rpb25NYXJrIiwic3BlY2lhbFN5bWJvbHMiLCJSdWxlIiwiZnJvbU5vdGhpbmciLCJuYW1lIiwiT1BUSU9OQUxfUVVBTlRJRklFUl9SVUxFX05BTUUiLCJzcGVjaWFsU3ltYm9sIiwib3B0aW9uYWxRdWFudGlmaWVyUnVsZURlZmluaXRpb24iLCJRdWFudGlmaWVyUnVsZURlZmluaXRpb24iLCJmcm9tU3BlY2lhbFN5bWJvbCIsIm9wYWNpdHkiLCJkZWZpbml0aW9ucyIsIm9wdGlvbmFsUXVhbnRpZmllclJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBcUJBOzs7NkJBVFU7NkRBRWQ7dUVBQ29COzJCQUVTOzs7Ozs7QUFFOUMsTUFBTSxFQUFFQyxZQUFZLEVBQUUsR0FBR0MsMkJBQWM7QUFFeEIsTUFBTUYsa0NBQWtDRyxhQUFJO0lBQ3pELE9BQU9DLGNBQWM7UUFDbkIsTUFBTUMsT0FBT0Msd0NBQTZCLEVBQ3BDQyxnQkFBZ0JOLGNBQ2hCTyxtQ0FBbUNDLHVCQUF3QixDQUFDQyxpQkFBaUIsQ0FBQ0gsZ0JBQzlFSSxVQUFVLE1BQ1ZDLGNBQWM7WUFDWko7U0FDRCxFQUNESyx5QkFBeUIsSUFBSWIsMEJBQTBCSyxNQUFNTSxTQUFTQztRQUU1RSxPQUFPQztJQUNUO0FBQ0YifQ==