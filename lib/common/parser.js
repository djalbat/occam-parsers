"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return CommonParser;
    }
});
const _parser = /*#__PURE__*/ _interop_require_default(require("../mixins/parser"));
const _nonTerminal = /*#__PURE__*/ _interop_require_default(require("./../node/nonTerminal"));
const _parser1 = require("../utilities/parser");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class CommonParser {
    constructor(startRule, ruleMap){
        this.startRule = startRule;
        this.ruleMap = ruleMap;
    }
    getStartRule() {
        return this.startRule;
    }
    getRuleMap() {
        return this.ruleMap;
    }
    static NonTerminalNodeMap = {};
    static defaultNonTerminalNode = _nonTerminal.default;
    static fromNothing(Class) {
        const { bnf } = Class, rules = (0, _parser1.rulesFromBNF)(bnf), parser = (0, _parser1.parserFromRules)(Class, rules);
        return parser;
    }
    static fromBNF(Class, bnf) {
        const rules = (0, _parser1.rulesFromBNF)(bnf), parser = (0, _parser1.parserFromRules)(Class, rules);
        return parser;
    }
    static fromRules(Class, rules) {
        const parser = (0, _parser1.parserFromRules)(Class, rules);
        return parser;
    }
}
Object.assign(CommonParser.prototype, _parser.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vcGFyc2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgcGFyc2VyTWl4aW5zIGZyb20gXCIuLi9taXhpbnMvcGFyc2VyXCI7XG5pbXBvcnQgTm9uVGVybWluYWxOb2RlIGZyb20gXCIuLy4uL25vZGUvbm9uVGVybWluYWxcIjtcblxuaW1wb3J0IHsgcnVsZXNGcm9tQk5GLCBwYXJzZXJGcm9tUnVsZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhcnNlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tb25QYXJzZXIge1xuICBjb25zdHJ1Y3RvcihzdGFydFJ1bGUsIHJ1bGVNYXApIHtcbiAgICB0aGlzLnN0YXJ0UnVsZSA9IHN0YXJ0UnVsZTtcbiAgICB0aGlzLnJ1bGVNYXAgPSBydWxlTWFwO1xuICB9XG5cbiAgZ2V0U3RhcnRSdWxlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXJ0UnVsZTtcbiAgfVxuXG4gIGdldFJ1bGVNYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU1hcDtcbiAgfVxuXG4gIHN0YXRpYyBOb25UZXJtaW5hbE5vZGVNYXAgPSB7fTtcblxuICBzdGF0aWMgZGVmYXVsdE5vblRlcm1pbmFsTm9kZSA9IE5vblRlcm1pbmFsTm9kZTtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MpIHtcbiAgICBjb25zdCB7IGJuZiB9ID0gQ2xhc3MsXG4gICAgICAgICAgcnVsZXMgPSBydWxlc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgICBwYXJzZXIgPSBwYXJzZXJGcm9tUnVsZXMoQ2xhc3MsIHJ1bGVzKTtcblxuICAgIHJldHVybiBwYXJzZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJORihDbGFzcywgYm5mKSB7XG4gICAgY29uc3QgcnVsZXMgPSBydWxlc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgICBwYXJzZXIgPSBwYXJzZXJGcm9tUnVsZXMoQ2xhc3MsIHJ1bGVzKTtcblxuICAgIHJldHVybiBwYXJzZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVzKENsYXNzLCBydWxlcykge1xuICAgIGNvbnN0IHBhcnNlciA9IHBhcnNlckZyb21SdWxlcyhDbGFzcywgcnVsZXMpO1xuXG4gICAgcmV0dXJuIHBhcnNlcjtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKENvbW1vblBhcnNlci5wcm90b3R5cGUsIHBhcnNlck1peGlucyk7XG4iXSwibmFtZXMiOlsiQ29tbW9uUGFyc2VyIiwic3RhcnRSdWxlIiwicnVsZU1hcCIsImdldFN0YXJ0UnVsZSIsImdldFJ1bGVNYXAiLCJOb25UZXJtaW5hbE5vZGVNYXAiLCJkZWZhdWx0Tm9uVGVybWluYWxOb2RlIiwiTm9uVGVybWluYWxOb2RlIiwiZnJvbU5vdGhpbmciLCJDbGFzcyIsImJuZiIsInJ1bGVzIiwicnVsZXNGcm9tQk5GIiwicGFyc2VyIiwicGFyc2VyRnJvbVJ1bGVzIiwiZnJvbUJORiIsImZyb21SdWxlcyIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsInBhcnNlck1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFxQkE7OzsrREFMSTtvRUFDRzt5QkFFa0I7Ozs7OztBQUUvQixNQUFNQTtJQUNuQixZQUFZQyxTQUFTLEVBQUVDLE9BQU8sQ0FBRTtRQUM5QixJQUFJLENBQUNELFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO0lBQ2pCO0lBRUFDLGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQ0YsU0FBUztJQUN2QjtJQUVBRyxhQUFhO1FBQ1gsT0FBTyxJQUFJLENBQUNGLE9BQU87SUFDckI7SUFFQSxPQUFPRyxxQkFBcUIsQ0FBQyxFQUFFO0lBRS9CLE9BQU9DLHlCQUF5QkMsb0JBQWUsQ0FBQztJQUVoRCxPQUFPQyxZQUFZQyxLQUFLLEVBQUU7UUFDeEIsTUFBTSxFQUFFQyxHQUFHLEVBQUUsR0FBR0QsT0FDVkUsUUFBUUMsSUFBQUEscUJBQVksRUFBQ0YsTUFDckJHLFNBQVNDLElBQUFBLHdCQUFlLEVBQUNMLE9BQU9FO1FBRXRDLE9BQU9FO0lBQ1Q7SUFFQSxPQUFPRSxRQUFRTixLQUFLLEVBQUVDLEdBQUcsRUFBRTtRQUN6QixNQUFNQyxRQUFRQyxJQUFBQSxxQkFBWSxFQUFDRixNQUNyQkcsU0FBU0MsSUFBQUEsd0JBQWUsRUFBQ0wsT0FBT0U7UUFFdEMsT0FBT0U7SUFDVDtJQUVBLE9BQU9HLFVBQVVQLEtBQUssRUFBRUUsS0FBSyxFQUFFO1FBQzdCLE1BQU1FLFNBQVNDLElBQUFBLHdCQUFlLEVBQUNMLE9BQU9FO1FBRXRDLE9BQU9FO0lBQ1Q7QUFDRjtBQUVBSSxPQUFPQyxNQUFNLENBQUNsQixhQUFhbUIsU0FBUyxFQUFFQyxlQUFZIn0=