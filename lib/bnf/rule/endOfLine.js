"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
var _rule = _interopRequireDefault(require("../rule"));
var _endOfLine = _interopRequireDefault(require("../node/endOfLine"));
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
var END_OF_LINE = _occamLexers.specialSymbols.END_OF_LINE;
var EndOfLineRule = /*#__PURE__*/ function(Rule) {
    _inherits(EndOfLineRule, Rule);
    function EndOfLineRule() {
        _classCallCheck(this, EndOfLineRule);
        var endOfLineTerminalSymbolContent = END_OF_LINE, endOfLineTerminalSymbolDefinition = new _terminalSymbol.default(endOfLineTerminalSymbolContent), name = _ruleNames.EndOfLineRuleName, definitions = [
            endOfLineTerminalSymbolDefinition
        ], Node = _endOfLine.default;
        return _possibleConstructorReturn(this, _getPrototypeOf(EndOfLineRule).call(this, name, definitions, Node));
    }
    return EndOfLineRule;
}(_rule.default);
exports.default = EndOfLineRule;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvcnVsZS9lbmRPZkxpbmUuanMiXSwibmFtZXMiOlsic3BlY2lhbFN5bWJvbHMiLCJSdWxlIiwiRW5kT2ZMaW5lTm9kZSIsIlRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbiIsIkVuZE9mTGluZVJ1bGVOYW1lIiwiRU5EX09GX0xJTkUiLCJFbmRPZkxpbmVSdWxlIiwiY29uc3RydWN0b3IiLCJlbmRPZkxpbmVUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJlbmRPZkxpbmVUZXJtaW5hbFN5bWJvbERlZmluaXRpb24iLCJuYW1lIiwiZGVmaW5pdGlvbnMiLCJOb2RlIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVtQixHQUFjLENBQWQsWUFBYztBQUU1QixHQUFTLENBQVQsS0FBUztBQUNBLEdBQW1CLENBQW5CLFVBQW1CO0FBQ1IsR0FBOEIsQ0FBOUIsZUFBOEI7QUFFakMsR0FBYyxDQUFkLFVBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEQsR0FBSyxDQUFHLFdBQVcsR0FSWSxZQUFjLGdCQVFyQyxXQUFXO0lBRUUsYUFBYSxpQkFBbkIsUUFBUTtjQUFGLGFBQWE7YUFBYixhQUFhOzhCQUFiLGFBQWE7UUFFOUIsR0FBSyxDQUFDLDhCQUE4QixHQUFHLFdBQVcsRUFDNUMsaUNBQWlDLEdBQUcsR0FBRyxDQVRaLGVBQThCLFNBU1EsOEJBQThCLEdBQy9GLElBQUksR0FSb0IsVUFBYyxvQkFTdEMsV0FBVyxHQUFHLENBQUM7WUFDYixpQ0FBaUM7UUFDbkMsQ0FBQyxFQUNELElBQUksR0FmWSxVQUFtQjtnRUFPeEIsYUFBYSxhQVV4QixJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUk7O1dBVlosYUFBYTtFQVJqQixLQUFTO2tCQVFMLGFBQWEifQ==