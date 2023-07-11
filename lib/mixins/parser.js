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
    var nodes = [], state = _state.default.fromTokensAndRuleMap(tokens, this.ruleMap), callback = null, callAhead = null, parsed = rule.parse(nodes, state, callback, callAhead);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvcGFyc2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFN0YXRlIGZyb20gXCIuLi9zdGF0ZVwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZnVuY3Rpb24gcGFyc2UodG9rZW5zLCBydWxlID0gdGhpcy5zdGFydFJ1bGUpIHtcbiAgbGV0IG5vZGUgPSBudWxsO1xuXG4gIGNvbnN0IG5vZGVzID0gW10sXG4gICAgICAgIHN0YXRlID0gU3RhdGUuZnJvbVRva2Vuc0FuZFJ1bGVNYXAodG9rZW5zLCB0aGlzLnJ1bGVNYXApLFxuICAgICAgICBjYWxsYmFjayA9IG51bGwsXG4gICAgICAgIGNhbGxBaGVhZCA9IG51bGwsXG4gICAgICAgIHBhcnNlZCA9IHJ1bGUucGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKTtcblxuICBpZiAocGFyc2VkKSB7XG4gICAgY29uc3QgZmlyc3ROb2RlID0gZmlyc3Qobm9kZXMpO1xuXG4gICAgbm9kZSA9IGZpcnN0Tm9kZTsgLy8vXG4gIH1cblxuICByZXR1cm4gbm9kZTtcbn1cblxuY29uc3QgcGFyc2VyTWl4aW5zID0ge1xuICBwYXJzZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcGFyc2VyTWl4aW5zO1xuIl0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJwYXJzZSIsInRva2VucyIsInJ1bGUiLCJzdGFydFJ1bGUiLCJub2RlIiwibm9kZXMiLCJzdGF0ZSIsIlN0YXRlIiwiZnJvbVRva2Vuc0FuZFJ1bGVNYXAiLCJydWxlTWFwIiwiY2FsbGJhY2siLCJjYWxsQWhlYWQiLCJwYXJzZWQiLCJmaXJzdE5vZGUiLCJwYXJzZXJNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQThCQTs7O2VBQUE7Ozt5QkE1QitCOzREQUViOzs7Ozs7QUFFbEIsSUFBTSxBQUFFQSxRQUFVQyx5QkFBYyxDQUF4QkQ7QUFFUixTQUFTRSxNQUFNQyxNQUFNO1FBQUVDLE9BQUFBLGlFQUFPLElBQUksQ0FBQ0MsU0FBUztJQUMxQyxJQUFJQyxPQUFPO0lBRVgsSUFBTUMsUUFBUSxFQUFFLEVBQ1ZDLFFBQVFDLGNBQUssQ0FBQ0Msb0JBQW9CLENBQUNQLFFBQVEsSUFBSSxDQUFDUSxPQUFPLEdBQ3ZEQyxXQUFXLE1BQ1hDLFlBQVksTUFDWkMsU0FBU1YsS0FBS0YsS0FBSyxDQUFDSyxPQUFPQyxPQUFPSSxVQUFVQztJQUVsRCxJQUFJQyxRQUFRO1FBQ1YsSUFBTUMsWUFBWWYsTUFBTU87UUFFeEJELE9BQU9TLFdBQVcsR0FBRztJQUN2QjtJQUVBLE9BQU9UO0FBQ1Q7QUFFQSxJQUFNVSxlQUFlO0lBQ25CZCxPQUFBQTtBQUNGO0lBRUEsV0FBZWMifQ==