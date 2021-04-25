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
var ChoiceOfPartsDefinition = function(Definition) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvZGVmaW5pdGlvbi9jaG9pY2VPZlBhcnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IERlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb25cIjtcbmltcG9ydCBSdWxlTmFtZVBhcnQgZnJvbSBcIi4uL3BhcnQvbm9uVGVybWluYWwvcnVsZU5hbWVcIjtcbmltcG9ydCBPbmVPck1vcmVQYXJ0c1BhcnQgZnJvbSBcIi4uL3BhcnQvbm9uVGVybWluYWwvb25lT3JNb3JlUGFydHNcIjtcbmltcG9ydCBUZXJtaW5hbFN5bWJvbFBhcnQgZnJvbSBcIi4uL3BhcnQvdGVybWluYWwvdGVybWluYWxTeW1ib2xcIjtcbmltcG9ydCBTZXF1ZW5jZU9mUGFydHNQYXJ0IGZyb20gXCIuLi9wYXJ0L25vblRlcm1pbmFsL3NlcXVlbmNlT2ZQYXJ0c1wiO1xuXG5pbXBvcnQgeyBQYXJ0UnVsZU5hbWUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHsgdmVydGljYWxCYXIsIG9wZW5CcmFja2V0LCBjbG9zZUJyYWNrZXQgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaG9pY2VPZlBhcnRzRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBwYXJ0UnVsZU5hbWUgPSBQYXJ0UnVsZU5hbWUsXG4gICAgICAgICAgdmVydGljYWxCYXJUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSB2ZXJ0aWNhbEJhciwgLy8vXG4gICAgICAgICAgb3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBvcGVuQnJhY2tldCwgLy8vXG4gICAgICAgICAgY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50ID0gY2xvc2VCcmFja2V0LCAvLy9cbiAgICAgICAgICBwYXJ0UnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChwYXJ0UnVsZU5hbWUpLFxuICAgICAgICAgIHZlcnRpY2FsQmFyVGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydCh2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sQ29udGVudCksXG4gICAgICAgICAgb3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KG9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50KSxcbiAgICAgICAgICBjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KGNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sQ29udGVudCksXG4gICAgICAgICAgdmVydGljYWxCYXJUZXJtaW5hbFN5bWJvbFRoZW5QYXJ0UnVsZU5hbWVQYXJ0cyA9IFtcbiAgICAgICAgICAgIHZlcnRpY2FsQmFyVGVybWluYWxTeW1ib2xQYXJ0LFxuICAgICAgICAgICAgcGFydFJ1bGVOYW1lUGFydFxuICAgICAgICAgIF0sXG4gICAgICAgICAgc2VxdWVuY2VPZlBhcnRzUGFydCA9IG5ldyBTZXF1ZW5jZU9mUGFydHNQYXJ0KHZlcnRpY2FsQmFyVGVybWluYWxTeW1ib2xUaGVuUGFydFJ1bGVOYW1lUGFydHMpLFxuICAgICAgICAgIG9uZU9yTW9yZVNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBuZXcgT25lT3JNb3JlUGFydHNQYXJ0KHNlcXVlbmNlT2ZQYXJ0c1BhcnQpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgb3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQsXG4gICAgICAgICAgICBwYXJ0UnVsZU5hbWVQYXJ0LFxuICAgICAgICAgICAgb25lT3JNb3JlU2VxdWVuY2VPZlBhcnRzUGFydCxcbiAgICAgICAgICAgIGNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydFxuICAgICAgICAgIF07XG5cbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRW1CLFlBQWM7SUFFdEIsV0FBZTtJQUNiLFNBQThCO0lBQ3hCLGVBQW9DO0lBQ3BDLGVBQWlDO0lBQ2hDLGdCQUFxQztJQUV4QyxVQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRW5DLFdBQVcsR0FWWSxZQUFjLGdCQVVyQyxXQUFXLEVBQUUsV0FBVyxHQVZELFlBQWMsZ0JBVXhCLFdBQVcsRUFBRSxZQUFZLEdBVmYsWUFBYyxnQkFVWCxZQUFZO0lBRXpCLHVCQUF1QjtjQUF2Qix1QkFBdUI7YUFBdkIsdUJBQXVCOzhCQUF2Qix1QkFBdUI7WUFFbEMsWUFBWSxHQU5PLFVBQWMsZUFPakMsZ0NBQWdDLEdBQUcsV0FBVyxFQUM5QyxnQ0FBZ0MsR0FBRyxXQUFXLEVBQzlDLGlDQUFpQyxHQUFHLFlBQVksRUFDaEQsZ0JBQWdCLE9BZkQsU0FBOEIsU0FlVCxZQUFZLEdBQ2hELDZCQUE2QixPQWRSLGVBQWlDLFNBY0MsZ0NBQWdDLEdBQ3ZGLDZCQUE2QixPQWZSLGVBQWlDLFNBZUMsZ0NBQWdDLEdBQ3ZGLDhCQUE4QixPQWhCVCxlQUFpQyxTQWdCRSxpQ0FBaUMsR0FDekYsOENBQThDO1lBQzVDLDZCQUE2QjtZQUM3QixnQkFBZ0I7V0FFbEIsbUJBQW1CLE9BcEJHLGdCQUFxQyxTQW9CYiw4Q0FBOEMsR0FDNUYsNEJBQTRCLE9BdkJQLGVBQW9DLFNBdUJILG1CQUFtQixHQUN6RSxLQUFLO1lBQ0gsNkJBQTZCO1lBQzdCLGdCQUFnQjtZQUNoQiw0QkFBNEI7WUFDNUIsOEJBQThCOztnRUFwQnJCLHVCQUF1QixhQXVCbEMsS0FBSzs7V0F2Qk0sdUJBQXVCO0VBVnJCLFdBQWU7a0JBVWpCLHVCQUF1QiJ9