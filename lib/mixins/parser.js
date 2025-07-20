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
    var nodes = [], _this_constructor = this.constructor, NonTerminalNodeMap = _this_constructor.NonTerminalNodeMap, defaultNonTerminalNode = _this_constructor.defaultNonTerminalNode, state = _state.default.fromTokensRuleMapStartOfContentNonTerminalNodeMapAndDefaultNonTerminalNode(tokens, this.ruleMap, startOfContent, NonTerminalNodeMap, defaultNonTerminalNode), callback = null, callAhead = null, parsed = rule.parse(nodes, state, callback, callAhead);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvcGFyc2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFN0YXRlIGZyb20gXCIuLi9zdGF0ZVwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZnVuY3Rpb24gcGFyc2UodG9rZW5zLCBydWxlID0gdGhpcy5zdGFydFJ1bGUsIHN0YXJ0T2ZDb250ZW50ID0gdHJ1ZSkge1xuICBsZXQgbm9kZSA9IG51bGw7XG5cbiAgY29uc3Qgbm9kZXMgPSBbXSxcbiAgICAgICAgeyBOb25UZXJtaW5hbE5vZGVNYXAsIGRlZmF1bHROb25UZXJtaW5hbE5vZGUgfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgIHN0YXRlID0gU3RhdGUuZnJvbVRva2Vuc1J1bGVNYXBTdGFydE9mQ29udGVudE5vblRlcm1pbmFsTm9kZU1hcEFuZERlZmF1bHROb25UZXJtaW5hbE5vZGUodG9rZW5zLCB0aGlzLnJ1bGVNYXAsIHN0YXJ0T2ZDb250ZW50LCBOb25UZXJtaW5hbE5vZGVNYXAsIGRlZmF1bHROb25UZXJtaW5hbE5vZGUpLFxuICAgICAgICBjYWxsYmFjayA9IG51bGwsXG4gICAgICAgIGNhbGxBaGVhZCA9IG51bGwsXG4gICAgICAgIHBhcnNlZCA9IHJ1bGUucGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKTtcblxuICBpZiAocGFyc2VkKSB7XG4gICAgY29uc3QgZmlyc3ROb2RlID0gZmlyc3Qobm9kZXMpO1xuXG4gICAgbm9kZSA9IGZpcnN0Tm9kZTsgLy8vXG4gIH1cblxuICByZXR1cm4gbm9kZTtcbn1cblxuY29uc3QgcGFyc2VyTWl4aW5zID0ge1xuICBwYXJzZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcGFyc2VyTWl4aW5zO1xuIl0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJwYXJzZSIsInRva2VucyIsInJ1bGUiLCJzdGFydFJ1bGUiLCJzdGFydE9mQ29udGVudCIsIm5vZGUiLCJub2RlcyIsIk5vblRlcm1pbmFsTm9kZU1hcCIsImRlZmF1bHROb25UZXJtaW5hbE5vZGUiLCJzdGF0ZSIsIlN0YXRlIiwiZnJvbVRva2Vuc1J1bGVNYXBTdGFydE9mQ29udGVudE5vblRlcm1pbmFsTm9kZU1hcEFuZERlZmF1bHROb25UZXJtaW5hbE5vZGUiLCJydWxlTWFwIiwiY2FsbGJhY2siLCJjYWxsQWhlYWQiLCJwYXJzZWQiLCJmaXJzdE5vZGUiLCJwYXJzZXJNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQStCQTs7O2VBQUE7Ozt5QkE3QitCOzREQUViOzs7Ozs7QUFFbEIsSUFBTSxBQUFFQSxRQUFVQyx5QkFBYyxDQUF4QkQ7QUFFUixTQUFTRSxNQUFNQyxNQUFNO1FBQUVDLE9BQUFBLGlFQUFPLElBQUksQ0FBQ0MsU0FBUyxFQUFFQyxpQkFBQUEsaUVBQWlCO0lBQzdELElBQUlDLE9BQU87SUFFWCxJQUFNQyxRQUFRLEVBQUUsRUFDdUMsb0JBQUEsSUFBSSxDQUFDLFdBQVcsRUFBL0RDLHFCQUErQyxrQkFBL0NBLG9CQUFvQkMseUJBQTJCLGtCQUEzQkEsd0JBQ3RCQyxRQUFRQyxjQUFLLENBQUNDLDBFQUEwRSxDQUFDVixRQUFRLElBQUksQ0FBQ1csT0FBTyxFQUFFUixnQkFBZ0JHLG9CQUFvQkMseUJBQ25KSyxXQUFXLE1BQ1hDLFlBQVksTUFDWkMsU0FBU2IsS0FBS0YsS0FBSyxDQUFDTSxPQUFPRyxPQUFPSSxVQUFVQztJQUVsRCxJQUFJQyxRQUFRO1FBQ1YsSUFBTUMsWUFBWWxCLE1BQU1RO1FBRXhCRCxPQUFPVyxXQUFXLEdBQUc7SUFDdkI7SUFFQSxPQUFPWDtBQUNUO0FBRUEsSUFBTVksZUFBZTtJQUNuQmpCLE9BQUFBO0FBQ0Y7SUFFQSxXQUFlaUIifQ==