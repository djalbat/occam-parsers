"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
var _definition = _interopRequireDefault(require("../definition"));
var _ruleName = _interopRequireDefault(require("../part/nonTerminal/ruleName"));
var _oneOrMoreParts = _interopRequireDefault(require("../part/nonTerminal/oneOrMoreParts"));
var _terminalSymbol = _interopRequireDefault(require("../part/terminal/terminalSymbol"));
var _sequenceOfParts = _interopRequireDefault(require("../part/nonTerminal/sequenceOfParts"));
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
var verticalBar = _occamLexers.specialSymbols.verticalBar, openBracket = _occamLexers.specialSymbols.openBracket, closeBracket = _occamLexers.specialSymbols.closeBracket;
var ChoiceOfPartsDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(ChoiceOfPartsDefinition, Definition);
    function ChoiceOfPartsDefinition() {
        _classCallCheck(this, ChoiceOfPartsDefinition);
        var partRuleName = _ruleNames.PartRuleName, verticalBarTerminalSymbolContent = verticalBar, openBracketTerminalSymbolContent = openBracket, closeBracketTerminalSymbolContent = closeBracket, partRuleNamePart = new _ruleName.default(partRuleName), verticalBarTerminalSymbolPart = new _terminalSymbol.default(verticalBarTerminalSymbolContent), openBracketTerminalSymbolPart = new _terminalSymbol.default(openBracketTerminalSymbolContent), closeBracketTerminalSymbolPart = new _terminalSymbol.default(closeBracketTerminalSymbolContent), verticalBarTerminalSymbolThenPartRuleNameParts = [
            verticalBarTerminalSymbolPart,
            partRuleNamePart
        ], sequenceOfPartsPart = new _sequenceOfParts.default(verticalBarTerminalSymbolThenPartRuleNameParts), oneOrMoreSequenceOfPartsPart = new _oneOrMoreParts.default(sequenceOfPartsPart), parts = [
            openBracketTerminalSymbolPart,
            partRuleNamePart,
            oneOrMoreSequenceOfPartsPart,
            closeBracketTerminalSymbolPart
        ];
        return _possibleConstructorReturn(this, _getPrototypeOf(ChoiceOfPartsDefinition).call(this, parts));
    }
    return ChoiceOfPartsDefinition;
}(_definition.default);
exports.default = ChoiceOfPartsDefinition;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvZGVmaW5pdGlvbi9jaG9pY2VPZlBhcnRzLmpzIl0sIm5hbWVzIjpbInNwZWNpYWxTeW1ib2xzIiwiRGVmaW5pdGlvbiIsIlJ1bGVOYW1lUGFydCIsIk9uZU9yTW9yZVBhcnRzUGFydCIsIlRlcm1pbmFsU3ltYm9sUGFydCIsIlNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJQYXJ0UnVsZU5hbWUiLCJ2ZXJ0aWNhbEJhciIsIm9wZW5CcmFja2V0IiwiY2xvc2VCcmFja2V0IiwiQ2hvaWNlT2ZQYXJ0c0RlZmluaXRpb24iLCJjb25zdHJ1Y3RvciIsInBhcnRSdWxlTmFtZSIsInZlcnRpY2FsQmFyVGVybWluYWxTeW1ib2xDb250ZW50Iiwib3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJwYXJ0UnVsZU5hbWVQYXJ0IiwidmVydGljYWxCYXJUZXJtaW5hbFN5bWJvbFBhcnQiLCJvcGVuQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydCIsImNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydCIsInZlcnRpY2FsQmFyVGVybWluYWxTeW1ib2xUaGVuUGFydFJ1bGVOYW1lUGFydHMiLCJzZXF1ZW5jZU9mUGFydHNQYXJ0Iiwib25lT3JNb3JlU2VxdWVuY2VPZlBhcnRzUGFydCIsInBhcnRzIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVtQixHQUFjLENBQWQsWUFBYztBQUV0QixHQUFlLENBQWYsV0FBZTtBQUNiLEdBQThCLENBQTlCLFNBQThCO0FBQ3hCLEdBQW9DLENBQXBDLGVBQW9DO0FBQ3BDLEdBQWlDLENBQWpDLGVBQWlDO0FBQ2hDLEdBQXFDLENBQXJDLGdCQUFxQztBQUV4QyxHQUFjLENBQWQsVUFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzQyxHQUFLLENBQUcsV0FBVyxHQVZZLFlBQWMsZ0JBVXJDLFdBQVcsRUFBRSxXQUFXLEdBVkQsWUFBYyxnQkFVeEIsV0FBVyxFQUFFLFlBQVksR0FWZixZQUFjLGdCQVVYLFlBQVk7SUFFekIsdUJBQXVCLGlCQUE3QixRQUFRO2NBQUYsdUJBQXVCO2FBQXZCLHVCQUF1Qjs4QkFBdkIsdUJBQXVCO1FBRXhDLEdBQUssQ0FBQyxZQUFZLEdBTk8sVUFBYyxlQU9qQyxnQ0FBZ0MsR0FBRyxXQUFXLEVBQzlDLGdDQUFnQyxHQUFHLFdBQVcsRUFDOUMsaUNBQWlDLEdBQUcsWUFBWSxFQUNoRCxnQkFBZ0IsR0FBRyxHQUFHLENBZlAsU0FBOEIsU0FlVCxZQUFZLEdBQ2hELDZCQUE2QixHQUFHLEdBQUcsQ0FkZCxlQUFpQyxTQWNDLGdDQUFnQyxHQUN2Riw2QkFBNkIsR0FBRyxHQUFHLENBZmQsZUFBaUMsU0FlQyxnQ0FBZ0MsR0FDdkYsOEJBQThCLEdBQUcsR0FBRyxDQWhCZixlQUFpQyxTQWdCRSxpQ0FBaUMsR0FDekYsOENBQThDLEdBQUcsQ0FBQztZQUNoRCw2QkFBNkI7WUFDN0IsZ0JBQWdCO1FBQ2xCLENBQUMsRUFDRCxtQkFBbUIsR0FBRyxHQUFHLENBcEJILGdCQUFxQyxTQW9CYiw4Q0FBOEMsR0FDNUYsNEJBQTRCLEdBQUcsR0FBRyxDQXZCYixlQUFvQyxTQXVCSCxtQkFBbUIsR0FDekUsS0FBSyxHQUFHLENBQUM7WUFDUCw2QkFBNkI7WUFDN0IsZ0JBQWdCO1lBQ2hCLDRCQUE0QjtZQUM1Qiw4QkFBOEI7UUFDaEMsQ0FBQztnRUFyQlUsdUJBQXVCLGFBdUJsQyxLQUFLOztXQXZCTSx1QkFBdUI7RUFWckIsV0FBZTtrQkFVakIsdUJBQXVCIn0=