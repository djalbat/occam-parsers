"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
var _rule = _interopRequireDefault(require("../rule"));
var _terminalSymbol = _interopRequireDefault(require("../node/terminalSymbol"));
var _significantTokenType = _interopRequireDefault(require("../definition/significantTokenType"));
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
var stringLiteralType = _occamLexers.types.stringLiteralType;
var TerminalSymbolRule = /*#__PURE__*/ function(Rule) {
    _inherits(TerminalSymbolRule, Rule);
    function TerminalSymbolRule() {
        _classCallCheck(this, TerminalSymbolRule);
        var stringLiteralSignificantTokenType = stringLiteralType, stringLiteralSignificantTokenTypeDefinition = new _significantTokenType.default(stringLiteralSignificantTokenType), name = _ruleNames.TerminalSymbolRuleName, definitions = [
            stringLiteralSignificantTokenTypeDefinition
        ], Node = _terminalSymbol.default;
        return _possibleConstructorReturn(this, _getPrototypeOf(TerminalSymbolRule).call(this, name, definitions, Node));
    }
    return TerminalSymbolRule;
}(_rule.default);
exports.default = TerminalSymbolRule;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvcnVsZS90ZXJtaW5hbFN5bWJvbC5qcyJdLCJuYW1lcyI6WyJ0eXBlcyIsIlJ1bGUiLCJUZXJtaW5hbFN5bWJvbE5vZGUiLCJTaWduaWZpY2FudFRva2VuVHlwZURlZmluaXRpb24iLCJUZXJtaW5hbFN5bWJvbFJ1bGVOYW1lIiwic3RyaW5nTGl0ZXJhbFR5cGUiLCJUZXJtaW5hbFN5bWJvbFJ1bGUiLCJjb25zdHJ1Y3RvciIsInN0cmluZ0xpdGVyYWxTaWduaWZpY2FudFRva2VuVHlwZSIsInN0cmluZ0xpdGVyYWxTaWduaWZpY2FudFRva2VuVHlwZURlZmluaXRpb24iLCJuYW1lIiwiZGVmaW5pdGlvbnMiLCJOb2RlIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVVLEdBQWMsQ0FBZCxZQUFjO0FBRW5CLEdBQVMsQ0FBVCxLQUFTO0FBQ0ssR0FBd0IsQ0FBeEIsZUFBd0I7QUFDWixHQUFvQyxDQUFwQyxxQkFBb0M7QUFFeEMsR0FBYyxDQUFkLFVBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckQsR0FBSyxDQUFHLGlCQUFpQixHQVJILFlBQWMsT0FRNUIsaUJBQWlCO0lBRUosa0JBQWtCLGlCQUF4QixRQUFRO2NBQUYsa0JBQWtCO2FBQWxCLGtCQUFrQjs4QkFBbEIsa0JBQWtCO1FBRW5DLEdBQUssQ0FBQyxpQ0FBaUMsR0FBRyxpQkFBaUIsRUFDckQsMkNBQTJDLEdBQUcsR0FBRyxDQVRoQixxQkFBb0MsU0FTWSxpQ0FBaUMsR0FDbEgsSUFBSSxHQVJ5QixVQUFjLHlCQVMzQyxXQUFXLEdBQUcsQ0FBQztZQUNiLDJDQUEyQztRQUM3QyxDQUFDLEVBQ0QsSUFBSSxHQWZpQixlQUF3QjtnRUFPbEMsa0JBQWtCLGFBVTdCLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSTs7V0FWWixrQkFBa0I7RUFSdEIsS0FBUztrQkFRTCxrQkFBa0IifQ==