"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
var _rule = _interopRequireDefault(require("../rule"));
var _wildcard = _interopRequireDefault(require("../node/wildcard"));
var _terminalSymbol = _interopRequireDefault(require("../definition/terminalSymbol"));
var _ruleNames = require("../ruleNames");
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var wildcard = _occamLexers.specialSymbols.wildcard;
var WildcardRule = /*#__PURE__*/ function(Rule) {
    _inherits(WildcardRule, Rule);
    function WildcardRule() {
        _classCallCheck(this, WildcardRule);
        var wildcardTerminalSymbolContent = wildcard, wildcardTerminalSymbolDefinition = new _terminalSymbol.default(wildcardTerminalSymbolContent), name = _ruleNames.WildcardRuleName, definitions = [
            wildcardTerminalSymbolDefinition
        ], Node = _wildcard.default;
        return _possibleConstructorReturn(this, _getPrototypeOf(WildcardRule).call(this, name, definitions, Node));
    }
    return WildcardRule;
}(_rule.default);
exports.default = WildcardRule;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvcnVsZS93aWxkY2FyZC5qcyJdLCJuYW1lcyI6WyJzcGVjaWFsU3ltYm9scyIsIlJ1bGUiLCJXaWxkY2FyZE5vZGUiLCJUZXJtaW5hbFN5bWJvbERlZmluaXRpb24iLCJXaWxkY2FyZFJ1bGVOYW1lIiwid2lsZGNhcmQiLCJXaWxkY2FyZFJ1bGUiLCJjb25zdHJ1Y3RvciIsIndpbGRjYXJkVGVybWluYWxTeW1ib2xDb250ZW50Iiwid2lsZGNhcmRUZXJtaW5hbFN5bWJvbERlZmluaXRpb24iLCJuYW1lIiwiZGVmaW5pdGlvbnMiLCJOb2RlIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVtQixHQUFjLENBQWQsWUFBYztBQUU1QixHQUFTLENBQVQsS0FBUztBQUNELEdBQWtCLENBQWxCLFNBQWtCO0FBQ04sR0FBOEIsQ0FBOUIsZUFBOEI7QUFFbEMsR0FBYyxDQUFkLFVBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0MsR0FBSyxDQUFHLFFBQVEsR0FSZSxZQUFjLGdCQVFyQyxRQUFRO0lBRUssWUFBWSxpQkFBbEIsUUFBUTtjQUFGLFlBQVk7YUFBWixZQUFZOzhCQUFaLFlBQVk7UUFFN0IsR0FBSyxDQUFDLDZCQUE2QixHQUFHLFFBQVEsRUFDeEMsZ0NBQWdDLEdBQUcsR0FBRyxDQVRYLGVBQThCLFNBU08sNkJBQTZCLEdBQzdGLElBQUksR0FSbUIsVUFBYyxtQkFTckMsV0FBVyxHQUFHLENBQUM7WUFDYixnQ0FBZ0M7UUFDbEMsQ0FBQyxFQUNELElBQUksR0FmVyxTQUFrQjtnRUFPdEIsWUFBWSxhQVV2QixJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUk7O1dBVlosWUFBWTtFQVJoQixLQUFTO2tCQVFMLFlBQVkifQ==