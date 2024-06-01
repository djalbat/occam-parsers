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
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var first = _necessary.arrayUtilities.first;
var DefaultState = _state.default; ///
function parse(tokens) {
    var rule = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.startRule;
    for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
        remainingArguments[_key - 2] = arguments[_key];
    }
    var _State;
    var node = null;
    var _this_constructor = this.constructor, _this_constructor_State = _this_constructor.State, _$State = _this_constructor_State === void 0 ? DefaultState : _this_constructor_State, nodes = [], state = (_State = _$State).fromTokensAndRuleMap.apply(_State, [
        tokens,
        this.ruleMap
    ].concat(_to_consumable_array(remainingArguments))), callback = null, callAhead = null, parsed = rule.parse(nodes, state, callback, callAhead);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvcGFyc2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFN0YXRlIGZyb20gXCIuLi9zdGF0ZVwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgRGVmYXVsdFN0YXRlID0gU3RhdGU7IC8vL1xuXG5mdW5jdGlvbiBwYXJzZSh0b2tlbnMsIHJ1bGUgPSB0aGlzLnN0YXJ0UnVsZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gIGxldCBub2RlID0gbnVsbDtcblxuICBjb25zdCB7IFN0YXRlID0gRGVmYXVsdFN0YXRlIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICBub2RlcyA9IFtdLFxuICAgICAgICBzdGF0ZSA9IFN0YXRlLmZyb21Ub2tlbnNBbmRSdWxlTWFwKHRva2VucywgdGhpcy5ydWxlTWFwLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpLFxuICAgICAgICBjYWxsYmFjayA9IG51bGwsXG4gICAgICAgIGNhbGxBaGVhZCA9IG51bGwsXG4gICAgICAgIHBhcnNlZCA9IHJ1bGUucGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKTtcblxuICBpZiAocGFyc2VkKSB7XG4gICAgY29uc3QgZmlyc3ROb2RlID0gZmlyc3Qobm9kZXMpO1xuXG4gICAgbm9kZSA9IGZpcnN0Tm9kZTsgLy8vXG4gIH1cblxuICByZXR1cm4gbm9kZTtcbn1cblxuY29uc3QgcGFyc2VyTWl4aW5zID0ge1xuICBwYXJzZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcGFyc2VyTWl4aW5zO1xuIl0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJEZWZhdWx0U3RhdGUiLCJTdGF0ZSIsInBhcnNlIiwidG9rZW5zIiwicnVsZSIsInN0YXJ0UnVsZSIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIm5vZGUiLCJjb25zdHJ1Y3RvciIsIm5vZGVzIiwic3RhdGUiLCJmcm9tVG9rZW5zQW5kUnVsZU1hcCIsInJ1bGVNYXAiLCJjYWxsYmFjayIsImNhbGxBaGVhZCIsInBhcnNlZCIsImZpcnN0Tm9kZSIsInBhcnNlck1peGlucyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpQ0E7OztlQUFBOzs7eUJBL0IrQjs0REFFYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQixJQUFNLEFBQUVBLFFBQVVDLHlCQUFjLENBQXhCRDtBQUVSLElBQU1FLGVBQWVDLGNBQUssRUFBRSxHQUFHO0FBRS9CLFNBQVNDLE1BQU1DLE1BQU07UUFBRUMsT0FBQUEsaUVBQU8sSUFBSSxDQUFDQyxTQUFTO0lBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdDLHFCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO1FBQUdBLG1CQUFILE9BQUEsS0FBQSxTQUFBLENBQUEsS0FBcUI7O1FBS25ETDtJQUpkLElBQUlNLE9BQU87SUFFWCxJQUFpQyxvQkFBQSxJQUFJLENBQUNDLFdBQVcsNEJBQWhCLGtCQUF6QlAsT0FBQUEsK0NBQVFELHdDQUNWUyxRQUFRLEVBQUUsRUFDVkMsUUFBUVQsQ0FBQUEsU0FBQUEsU0FBTVUsb0JBQW9CLENBQTFCVixNQUFBQSxRQUFBQTtRQUEyQkU7UUFBUSxJQUFJLENBQUNTLE9BQU87S0FBd0IsQ0FBdkVYLE9BQWlELHFCQUFHSyx1QkFDNURPLFdBQVcsTUFDWEMsWUFBWSxNQUNaQyxTQUFTWCxLQUFLRixLQUFLLENBQUNPLE9BQU9DLE9BQU9HLFVBQVVDO0lBRWxELElBQUlDLFFBQVE7UUFDVixJQUFNQyxZQUFZbEIsTUFBTVc7UUFFeEJGLE9BQU9TLFdBQVcsR0FBRztJQUN2QjtJQUVBLE9BQU9UO0FBQ1Q7QUFFQSxJQUFNVSxlQUFlO0lBQ25CZixPQUFBQTtBQUNGO0lBRUEsV0FBZWUifQ==