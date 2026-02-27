"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RuleNamePart;
    }
});
const _occamlexers = require("occam-lexers");
const _nonTerminal = /*#__PURE__*/ _interop_require_default(require("../../part/nonTerminal"));
const _constants = require("../../constants");
const _partTypes = require("../../partTypes");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { ellipsis } = _occamlexers.specialSymbols;
class RuleNamePart extends _nonTerminal.default {
    constructor(type, callAAhead, ruleName){
        super(type, callAAhead);
        this.ruleName = ruleName;
    }
    getRuleName() {
        return this.ruleName;
    }
    isRuleNamePart() {
        const ruleNamePart = true;
        return ruleNamePart;
    }
    findRule(state) {
        const ruleMap = state.getRuleMap(), rule = ruleMap[this.ruleName] || null; ///
        return rule;
    }
    parse(nodes, state, callback, callAhead) {
        let parsed;
        const rule = this.findRule(state);
        parsed = rule !== null ? rule.parse(nodes, state, callback, callAhead) : false;
        return parsed;
    }
    asString() {
        const callAAhead = this.isCallAhead(), callAAheadString = callAAhead ? ellipsis : _constants.EMPTY_STRING, string = `${this.ruleName}${callAAheadString}`;
        return string;
    }
    static fromRuleName(ruleName) {
        const type = _partTypes.RuleNamePartType, callAAhead = false, ruleNamePart = new RuleNamePart(type, callAAhead, ruleName);
        return ruleNamePart;
    }
    static fromCallAheadAndRuleName(callAAhead, ruleName) {
        const type = _partTypes.RuleNamePartType, ruleNamePart = new RuleNamePart(type, callAAhead, ruleName);
        return ruleNamePart;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L25vblRlcm1pbmFsL3J1bGVOYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsUGFydCBmcm9tIFwiLi4vLi4vcGFydC9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBSdWxlTmFtZVBhcnRUeXBlIH0gZnJvbSBcIi4uLy4uL3BhcnRUeXBlc1wiO1xuXG5jb25zdCB7IGVsbGlwc2lzIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZU5hbWVQYXJ0IGV4dGVuZHMgTm9uVGVybWluYWxQYXJ0IHtcbiAgY29uc3RydWN0b3IodHlwZSwgY2FsbEFBaGVhZCwgcnVsZU5hbWUpIHtcbiAgICBzdXBlcih0eXBlLCBjYWxsQUFoZWFkKTtcblxuICAgIHRoaXMucnVsZU5hbWUgPSBydWxlTmFtZTtcbiAgfVxuICBcbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU5hbWU7XG4gIH1cblxuICBpc1J1bGVOYW1lUGFydCgpIHtcbiAgICBjb25zdCBydWxlTmFtZVBhcnQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lUGFydDtcbiAgfVxuXG4gIGZpbmRSdWxlKHN0YXRlKSB7XG4gICAgY29uc3QgcnVsZU1hcCA9IHN0YXRlLmdldFJ1bGVNYXAoKSxcbiAgICAgICAgICBydWxlID0gcnVsZU1hcFt0aGlzLnJ1bGVOYW1lXSB8fCBudWxsOyAgLy8vXG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuXG4gIHBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCkge1xuICAgIGxldCBwYXJzZWQ7XG5cbiAgICBjb25zdCBydWxlID0gdGhpcy5maW5kUnVsZShzdGF0ZSk7XG5cbiAgICBwYXJzZWQgPSAocnVsZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgcnVsZS5wYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpIDpcbiAgICAgICAgICAgICAgICAgZmFsc2U7XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgY2FsbEFBaGVhZCA9IHRoaXMuaXNDYWxsQWhlYWQoKSxcbiAgICAgICAgICBjYWxsQUFoZWFkU3RyaW5nID0gY2FsbEFBaGVhZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGxpcHNpcyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORyxcbiAgICAgICAgICBzdHJpbmcgPSBgJHt0aGlzLnJ1bGVOYW1lfSR7Y2FsbEFBaGVhZFN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWUocnVsZU5hbWUpIHtcbiAgICBjb25zdCB0eXBlID0gUnVsZU5hbWVQYXJ0VHlwZSxcbiAgICAgICAgICBjYWxsQUFoZWFkID0gZmFsc2UsXG4gICAgICAgICAgcnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydCh0eXBlLCBjYWxsQUFoZWFkLCBydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gcnVsZU5hbWVQYXJ0O1xuICB9XG5cbiAgc3RhdGljIGZyb21DYWxsQWhlYWRBbmRSdWxlTmFtZShjYWxsQUFoZWFkLCBydWxlTmFtZSkge1xuICAgIGNvbnN0IHR5cGUgPSBSdWxlTmFtZVBhcnRUeXBlLFxuICAgICAgICAgIHJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQodHlwZSwgY2FsbEFBaGVhZCwgcnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lUGFydDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlJ1bGVOYW1lUGFydCIsImVsbGlwc2lzIiwic3BlY2lhbFN5bWJvbHMiLCJOb25UZXJtaW5hbFBhcnQiLCJ0eXBlIiwiY2FsbEFBaGVhZCIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJpc1J1bGVOYW1lUGFydCIsInJ1bGVOYW1lUGFydCIsImZpbmRSdWxlIiwic3RhdGUiLCJydWxlTWFwIiwiZ2V0UnVsZU1hcCIsInJ1bGUiLCJwYXJzZSIsIm5vZGVzIiwiY2FsbGJhY2siLCJjYWxsQWhlYWQiLCJwYXJzZWQiLCJhc1N0cmluZyIsImlzQ2FsbEFoZWFkIiwiY2FsbEFBaGVhZFN0cmluZyIsIkVNUFRZX1NUUklORyIsInN0cmluZyIsImZyb21SdWxlTmFtZSIsIlJ1bGVOYW1lUGFydFR5cGUiLCJmcm9tQ2FsbEFoZWFkQW5kUnVsZU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBcUJBOzs7NkJBVFU7b0VBRUg7MkJBRUM7MkJBQ0k7Ozs7OztBQUVqQyxNQUFNLEVBQUVDLFFBQVEsRUFBRSxHQUFHQywyQkFBYztBQUVwQixNQUFNRixxQkFBcUJHLG9CQUFlO0lBQ3ZELFlBQVlDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxRQUFRLENBQUU7UUFDdEMsS0FBSyxDQUFDRixNQUFNQztRQUVaLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtJQUNsQjtJQUVBQyxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUNELFFBQVE7SUFDdEI7SUFFQUUsaUJBQWlCO1FBQ2YsTUFBTUMsZUFBZTtRQUVyQixPQUFPQTtJQUNUO0lBRUFDLFNBQVNDLEtBQUssRUFBRTtRQUNkLE1BQU1DLFVBQVVELE1BQU1FLFVBQVUsSUFDMUJDLE9BQU9GLE9BQU8sQ0FBQyxJQUFJLENBQUNOLFFBQVEsQ0FBQyxJQUFJLE1BQU8sR0FBRztRQUVqRCxPQUFPUTtJQUNUO0lBRUFDLE1BQU1DLEtBQUssRUFBRUwsS0FBSyxFQUFFTSxRQUFRLEVBQUVDLFNBQVMsRUFBRTtRQUN2QyxJQUFJQztRQUVKLE1BQU1MLE9BQU8sSUFBSSxDQUFDSixRQUFRLENBQUNDO1FBRTNCUSxTQUFTLEFBQUNMLFNBQVMsT0FDUkEsS0FBS0MsS0FBSyxDQUFDQyxPQUFPTCxPQUFPTSxVQUFVQyxhQUNqQztRQUViLE9BQU9DO0lBQ1Q7SUFFQUMsV0FBVztRQUNULE1BQU1mLGFBQWEsSUFBSSxDQUFDZ0IsV0FBVyxJQUM3QkMsbUJBQW1CakIsYUFDQ0osV0FDRXNCLHVCQUFZLEVBQ2xDQyxTQUFTLEdBQUcsSUFBSSxDQUFDbEIsUUFBUSxHQUFHZ0Isa0JBQWtCO1FBRXBELE9BQU9FO0lBQ1Q7SUFFQSxPQUFPQyxhQUFhbkIsUUFBUSxFQUFFO1FBQzVCLE1BQU1GLE9BQU9zQiwyQkFBZ0IsRUFDdkJyQixhQUFhLE9BQ2JJLGVBQWUsSUFBSVQsYUFBYUksTUFBTUMsWUFBWUM7UUFFeEQsT0FBT0c7SUFDVDtJQUVBLE9BQU9rQix5QkFBeUJ0QixVQUFVLEVBQUVDLFFBQVEsRUFBRTtRQUNwRCxNQUFNRixPQUFPc0IsMkJBQWdCLEVBQ3ZCakIsZUFBZSxJQUFJVCxhQUFhSSxNQUFNQyxZQUFZQztRQUV4RCxPQUFPRztJQUNUO0FBQ0YifQ==