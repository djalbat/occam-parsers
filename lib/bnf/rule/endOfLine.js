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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvcnVsZS9lbmRPZkxpbmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vcnVsZVwiO1xuaW1wb3J0IEVuZE9mTGluZU5vZGUgZnJvbSBcIi4uL25vZGUvZW5kT2ZMaW5lXCI7XG5pbXBvcnQgVGVybWluYWxTeW1ib2xEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3Rlcm1pbmFsU3ltYm9sXCI7XG5cbmltcG9ydCB7IEVuZE9mTGluZVJ1bGVOYW1lIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCB7IEVORF9PRl9MSU5FIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5kT2ZMaW5lUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBlbmRPZkxpbmVUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBFTkRfT0ZfTElORSxcbiAgICAgICAgICBlbmRPZkxpbmVUZXJtaW5hbFN5bWJvbERlZmluaXRpb24gPSBuZXcgVGVybWluYWxTeW1ib2xEZWZpbml0aW9uKGVuZE9mTGluZVRlcm1pbmFsU3ltYm9sQ29udGVudCksXG4gICAgICAgICAgbmFtZSA9IEVuZE9mTGluZVJ1bGVOYW1lLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgZW5kT2ZMaW5lVGVybWluYWxTeW1ib2xEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gRW5kT2ZMaW5lTm9kZTtcblxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG4iXSwibmFtZXMiOlsiRU5EX09GX0xJTkUiLCJFbmRPZkxpbmVSdWxlIiwiZW5kT2ZMaW5lVGVybWluYWxTeW1ib2xDb250ZW50IiwiZW5kT2ZMaW5lVGVybWluYWxTeW1ib2xEZWZpbml0aW9uIiwibmFtZSIsImRlZmluaXRpb25zIiwiTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFbUIsR0FBYyxDQUFkLFlBQWM7QUFFNUIsR0FBUyxDQUFULEtBQVM7QUFDQSxHQUFtQixDQUFuQixVQUFtQjtBQUNSLEdBQThCLENBQTlCLGVBQThCO0FBRWpDLEdBQWMsQ0FBZCxVQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhELEdBQUssQ0FBR0EsV0FBVyxHQVJZLFlBQWMsZ0JBUXJDQSxXQUFXO0lBRUVDLGFBQWEsaUJBQW5CLFFBQVE7Y0FBRkEsYUFBYTthQUFiQSxhQUFhOzhCQUFiQSxhQUFhO1FBRTlCLEdBQUssQ0FBQ0MsOEJBQThCLEdBQUdGLFdBQVcsRUFDNUNHLGlDQUFpQyxHQUFHLEdBQUcsQ0FUWixlQUE4QixTQVNRRCw4QkFBOEIsR0FDL0ZFLElBQUksR0FSb0IsVUFBYyxvQkFTdENDLFdBQVcsR0FBRyxDQUFDO1lBQ2JGLGlDQUFpQztRQUNuQyxDQUFDLEVBQ0RHLElBQUksR0FmWSxVQUFtQjtnRUFPeEJMLGFBQWEsYUFVeEJHLElBQUksRUFBRUMsV0FBVyxFQUFFQyxJQUFJOztXQVZaTCxhQUFhO0VBUmpCLEtBQVM7a0JBUUxBLGFBQWEifQ==