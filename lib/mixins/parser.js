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
    var nodes = [], state = _state.default.fromTokensAndRuleMap(tokens, this.ruleMap), callback = function() {
        return true;
    }, callAhead = null, parsed = rule.parse(nodes, state, callback, callAhead);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvcGFyc2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFN0YXRlIGZyb20gXCIuLi9zdGF0ZVwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZnVuY3Rpb24gcGFyc2UodG9rZW5zLCBydWxlID0gdGhpcy5zdGFydFJ1bGUpIHtcbiAgbGV0IG5vZGUgPSBudWxsO1xuXG4gIGNvbnN0IG5vZGVzID0gW10sXG4gICAgICAgIHN0YXRlID0gU3RhdGUuZnJvbVRva2Vuc0FuZFJ1bGVNYXAodG9rZW5zLCB0aGlzLnJ1bGVNYXApLFxuICAgICAgICBjYWxsYmFjayA9ICgpID0+IHRydWUsICAvLy9cbiAgICAgICAgY2FsbEFoZWFkID0gbnVsbCxcbiAgICAgICAgcGFyc2VkID0gcnVsZS5wYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpO1xuXG4gIGlmIChwYXJzZWQpIHtcbiAgICBjb25zdCBmaXJzdE5vZGUgPSBmaXJzdChub2Rlcyk7XG5cbiAgICBub2RlID0gZmlyc3ROb2RlOyAvLy9cbiAgfVxuXG4gIHJldHVybiBub2RlO1xufVxuXG5jb25zdCBwYXJzZXJNaXhpbnMgPSB7XG4gIHBhcnNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBwYXJzZXJNaXhpbnM7XG4iXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsInBhcnNlIiwidG9rZW5zIiwicnVsZSIsInN0YXJ0UnVsZSIsIm5vZGUiLCJub2RlcyIsInN0YXRlIiwiU3RhdGUiLCJmcm9tVG9rZW5zQW5kUnVsZU1hcCIsInJ1bGVNYXAiLCJjYWxsYmFjayIsImNhbGxBaGVhZCIsInBhcnNlZCIsImZpcnN0Tm9kZSIsInBhcnNlck1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBOEJBOzs7ZUFBQTs7O3lCQTVCK0I7NERBRWI7Ozs7OztBQUVsQixJQUFNLEFBQUVBLFFBQVVDLHlCQUFjLENBQXhCRDtBQUVSLFNBQVNFLE1BQU1DLE1BQU07UUFBRUMsT0FBQUEsaUVBQU8sSUFBSSxDQUFDQyxTQUFTO0lBQzFDLElBQUlDLE9BQU87SUFFWCxJQUFNQyxRQUFRLEVBQUUsRUFDVkMsUUFBUUMsY0FBSyxDQUFDQyxvQkFBb0IsQ0FBQ1AsUUFBUSxJQUFJLENBQUNRLE9BQU8sR0FDdkRDLFdBQVc7ZUFBTTtPQUNqQkMsWUFBWSxNQUNaQyxTQUFTVixLQUFLRixLQUFLLENBQUNLLE9BQU9DLE9BQU9JLFVBQVVDO0lBRWxELElBQUlDLFFBQVE7UUFDVixJQUFNQyxZQUFZZixNQUFNTztRQUV4QkQsT0FBT1MsV0FBVyxHQUFHO0lBQ3ZCO0lBRUEsT0FBT1Q7QUFDVDtBQUVBLElBQU1VLGVBQWU7SUFDbkJkLE9BQUFBO0FBQ0Y7SUFFQSxXQUFlYyJ9