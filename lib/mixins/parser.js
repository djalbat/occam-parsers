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
var DefaultState = _state.default; ///
function parse(tokens) {
    var rule = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.startRule, context = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
    var node = null;
    var _this_constructor = this.constructor, _this_constructor_State = _this_constructor.State, _$State = _this_constructor_State === void 0 ? DefaultState : _this_constructor_State, nodes = [], state = _$State.fromTokensAndRuleMap(tokens, this.ruleMap, context), callback = null, callAhead = null, parsed = rule.parse(nodes, state, callback, callAhead);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvcGFyc2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFN0YXRlIGZyb20gXCIuLi9zdGF0ZVwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgRGVmYXVsdFN0YXRlID0gU3RhdGU7IC8vL1xuXG5mdW5jdGlvbiBwYXJzZSh0b2tlbnMsIHJ1bGUgPSB0aGlzLnN0YXJ0UnVsZSwgY29udGV4dCA9IG51bGwpIHtcbiAgbGV0IG5vZGUgPSBudWxsO1xuXG4gIGNvbnN0IHsgU3RhdGUgPSBEZWZhdWx0U3RhdGUgfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgIG5vZGVzID0gW10sXG4gICAgICAgIHN0YXRlID0gU3RhdGUuZnJvbVRva2Vuc0FuZFJ1bGVNYXAodG9rZW5zLCB0aGlzLnJ1bGVNYXAsIGNvbnRleHQpLFxuICAgICAgICBjYWxsYmFjayA9IG51bGwsXG4gICAgICAgIGNhbGxBaGVhZCA9IG51bGwsXG4gICAgICAgIHBhcnNlZCA9IHJ1bGUucGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKTtcblxuICBpZiAocGFyc2VkKSB7XG4gICAgY29uc3QgZmlyc3ROb2RlID0gZmlyc3Qobm9kZXMpO1xuXG4gICAgbm9kZSA9IGZpcnN0Tm9kZTsgLy8vXG4gIH1cblxuICByZXR1cm4gbm9kZTtcbn1cblxuY29uc3QgcGFyc2VyTWl4aW5zID0ge1xuICBwYXJzZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcGFyc2VyTWl4aW5zO1xuIl0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJEZWZhdWx0U3RhdGUiLCJTdGF0ZSIsInBhcnNlIiwidG9rZW5zIiwicnVsZSIsInN0YXJ0UnVsZSIsImNvbnRleHQiLCJub2RlIiwiY29uc3RydWN0b3IiLCJub2RlcyIsInN0YXRlIiwiZnJvbVRva2Vuc0FuZFJ1bGVNYXAiLCJydWxlTWFwIiwiY2FsbGJhY2siLCJjYWxsQWhlYWQiLCJwYXJzZWQiLCJmaXJzdE5vZGUiLCJwYXJzZXJNaXhpbnMiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWlDQTs7O2VBQUE7Ozt5QkEvQitCOzREQUViOzs7Ozs7QUFFbEIsSUFBTSxBQUFFQSxRQUFVQyx5QkFBYyxDQUF4QkQ7QUFFUixJQUFNRSxlQUFlQyxjQUFLLEVBQUUsR0FBRztBQUUvQixTQUFTQyxNQUFNQyxNQUFNO1FBQUVDLE9BQUFBLGlFQUFPLElBQUksQ0FBQ0MsU0FBUyxFQUFFQyxVQUFBQSxpRUFBVTtJQUN0RCxJQUFJQyxPQUFPO0lBRVgsSUFBaUMsb0JBQUEsSUFBSSxDQUFDQyxXQUFXLDRCQUFoQixrQkFBekJQLE9BQUFBLCtDQUFRRCx3Q0FDVlMsUUFBUSxFQUFFLEVBQ1ZDLFFBQVFULFFBQU1VLG9CQUFvQixDQUFDUixRQUFRLElBQUksQ0FBQ1MsT0FBTyxFQUFFTixVQUN6RE8sV0FBVyxNQUNYQyxZQUFZLE1BQ1pDLFNBQVNYLEtBQUtGLEtBQUssQ0FBQ08sT0FBT0MsT0FBT0csVUFBVUM7SUFFbEQsSUFBSUMsUUFBUTtRQUNWLElBQU1DLFlBQVlsQixNQUFNVztRQUV4QkYsT0FBT1MsV0FBVyxHQUFHO0lBQ3ZCO0lBRUEsT0FBT1Q7QUFDVDtBQUVBLElBQU1VLGVBQWU7SUFDbkJmLE9BQUFBO0FBQ0Y7SUFFQSxXQUFlZSJ9