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
    var rule = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.startRule, startOfContent = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
    var node = null;
    var nodes = [], state = _state.default.fromTokensRuleMapAndStartOfContent(tokens, this.ruleMap, startOfContent), callback = null, callAhead = null, parsed = rule.parse(nodes, state, callback, callAhead);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvcGFyc2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFN0YXRlIGZyb20gXCIuLi9zdGF0ZVwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZnVuY3Rpb24gcGFyc2UodG9rZW5zLCBydWxlID0gdGhpcy5zdGFydFJ1bGUsIHN0YXJ0T2ZDb250ZW50ID0gdHJ1ZSkge1xuICBsZXQgbm9kZSA9IG51bGw7XG5cbiAgY29uc3Qgbm9kZXMgPSBbXSxcbiAgICAgICAgc3RhdGUgPSBTdGF0ZS5mcm9tVG9rZW5zUnVsZU1hcEFuZFN0YXJ0T2ZDb250ZW50KHRva2VucywgdGhpcy5ydWxlTWFwLCBzdGFydE9mQ29udGVudCksXG4gICAgICAgIGNhbGxiYWNrID0gbnVsbCxcbiAgICAgICAgY2FsbEFoZWFkID0gbnVsbCxcbiAgICAgICAgcGFyc2VkID0gcnVsZS5wYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpO1xuXG4gIGlmIChwYXJzZWQpIHtcbiAgICBjb25zdCBmaXJzdE5vZGUgPSBmaXJzdChub2Rlcyk7XG5cbiAgICBub2RlID0gZmlyc3ROb2RlOyAvLy9cbiAgfVxuXG4gIHJldHVybiBub2RlO1xufVxuXG5jb25zdCBwYXJzZXJNaXhpbnMgPSB7XG4gIHBhcnNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBwYXJzZXJNaXhpbnM7XG4iXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsInBhcnNlIiwidG9rZW5zIiwicnVsZSIsInN0YXJ0UnVsZSIsInN0YXJ0T2ZDb250ZW50Iiwibm9kZSIsIm5vZGVzIiwic3RhdGUiLCJTdGF0ZSIsImZyb21Ub2tlbnNSdWxlTWFwQW5kU3RhcnRPZkNvbnRlbnQiLCJydWxlTWFwIiwiY2FsbGJhY2siLCJjYWxsQWhlYWQiLCJwYXJzZWQiLCJmaXJzdE5vZGUiLCJwYXJzZXJNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQThCQTs7O2VBQUE7Ozt5QkE1QitCOzREQUViOzs7Ozs7QUFFbEIsSUFBTSxBQUFFQSxRQUFVQyx5QkFBYyxDQUF4QkQ7QUFFUixTQUFTRSxNQUFNQyxNQUFNO1FBQUVDLE9BQUFBLGlFQUFPLElBQUksQ0FBQ0MsU0FBUyxFQUFFQyxpQkFBQUEsaUVBQWlCO0lBQzdELElBQUlDLE9BQU87SUFFWCxJQUFNQyxRQUFRLEVBQUUsRUFDVkMsUUFBUUMsY0FBSyxDQUFDQyxrQ0FBa0MsQ0FBQ1IsUUFBUSxJQUFJLENBQUNTLE9BQU8sRUFBRU4saUJBQ3ZFTyxXQUFXLE1BQ1hDLFlBQVksTUFDWkMsU0FBU1gsS0FBS0YsS0FBSyxDQUFDTSxPQUFPQyxPQUFPSSxVQUFVQztJQUVsRCxJQUFJQyxRQUFRO1FBQ1YsSUFBTUMsWUFBWWhCLE1BQU1RO1FBRXhCRCxPQUFPUyxXQUFXLEdBQUc7SUFDdkI7SUFFQSxPQUFPVDtBQUNUO0FBRUEsSUFBTVUsZUFBZTtJQUNuQmYsT0FBQUE7QUFDRjtJQUVBLFdBQWVlIn0=