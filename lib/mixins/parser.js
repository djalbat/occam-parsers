"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _necessary = require("necessary");
var _state = /*#__PURE__*/ _interop_require_default(require("../state"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var first = _necessary.arrayUtilities.first;
function parse(tokens) {
    var rule = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.startRule;
    var node = null;
    var nodes = [], state = _state.default.fromTokensAndRuleMap(tokens, this.ruleMap), callback = null, parsed = rule.parse(nodes, state, callback);
    if (parsed) {
        var firstNode = first(nodes);
        node = firstNode; ///
    }
    return node;
}
var parserMixins = {
    parse: parse
};
var _default = parserMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvcGFyc2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFN0YXRlIGZyb20gXCIuLi9zdGF0ZVwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZnVuY3Rpb24gcGFyc2UodG9rZW5zLCBydWxlID0gdGhpcy5zdGFydFJ1bGUpIHtcbiAgbGV0IG5vZGUgPSBudWxsO1xuXG4gIGNvbnN0IG5vZGVzID0gW10sXG4gICAgICAgIHN0YXRlID0gU3RhdGUuZnJvbVRva2Vuc0FuZFJ1bGVNYXAodG9rZW5zLCB0aGlzLnJ1bGVNYXApLFxuICAgICAgICBjYWxsYmFjayA9IG51bGwsXG4gICAgICAgIHBhcnNlZCA9IHJ1bGUucGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjayk7XG5cbiAgaWYgKHBhcnNlZCkge1xuICAgIGNvbnN0IGZpcnN0Tm9kZSA9IGZpcnN0KG5vZGVzKTtcblxuICAgIG5vZGUgPSBmaXJzdE5vZGU7IC8vL1xuICB9XG5cbiAgcmV0dXJuIG5vZGU7XG59XG5cbmNvbnN0IHBhcnNlck1peGlucyA9IHtcbiAgcGFyc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBhcnNlck1peGlucztcbiJdLCJuYW1lcyI6WyJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwicGFyc2UiLCJ0b2tlbnMiLCJydWxlIiwic3RhcnRSdWxlIiwibm9kZSIsIm5vZGVzIiwic3RhdGUiLCJTdGF0ZSIsImZyb21Ub2tlbnNBbmRSdWxlTWFwIiwicnVsZU1hcCIsImNhbGxiYWNrIiwicGFyc2VkIiwiZmlyc3ROb2RlIiwicGFyc2VyTWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE2QkE7OztlQUFBOzs7eUJBM0IrQjs0REFFYjs7Ozs7O0FBRWxCLElBQU0sQUFBRUEsUUFBVUMseUJBQWMsQ0FBeEJEO0FBRVIsU0FBU0UsTUFBTUMsTUFBTTtRQUFFQyxPQUFBQSxpRUFBTyxJQUFJLENBQUNDLFNBQVM7SUFDMUMsSUFBSUMsT0FBTztJQUVYLElBQU1DLFFBQVEsRUFBRSxFQUNWQyxRQUFRQyxjQUFLLENBQUNDLG9CQUFvQixDQUFDUCxRQUFRLElBQUksQ0FBQ1EsT0FBTyxHQUN2REMsV0FBVyxNQUNYQyxTQUFTVCxLQUFLRixLQUFLLENBQUNLLE9BQU9DLE9BQU9JO0lBRXhDLElBQUlDLFFBQVE7UUFDVixJQUFNQyxZQUFZZCxNQUFNTztRQUV4QkQsT0FBT1EsV0FBVyxHQUFHO0lBQ3ZCO0lBRUEsT0FBT1I7QUFDVDtBQUVBLElBQU1TLGVBQWU7SUFDbkJiLE9BQUFBO0FBQ0Y7SUFFQSxXQUFlYSJ9