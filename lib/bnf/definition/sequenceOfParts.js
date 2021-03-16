"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
var _definition = _interopRequireDefault(require("../definition"));
var _ruleName = _interopRequireDefault(require("../part/nonTerminal/ruleName"));
var _terminalSymbol = _interopRequireDefault(require("../part/terminal/terminalSymbol"));
var _oneOrMoreParts = _interopRequireDefault(require("../part/nonTerminal/oneOrMoreParts"));
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
var openBracket = _occamLexers.specialSymbols.openBracket, closeBracket = _occamLexers.specialSymbols.closeBracket;
var SequenceOfPartsDefinition = function(Definition) {
    _inherits(SequenceOfPartsDefinition, _definition.default);
    function SequenceOfPartsDefinition() {
        _classCallCheck(this, SequenceOfPartsDefinition);
        var partRuleName = _ruleNames.PartRuleName, openBracketTerminalSymbolContent = openBracket, closeBracketTerminalSymbolContent = closeBracket, partRuleNamePart = new _ruleName.default(partRuleName), openBracketTerminalSymbolPart = new _terminalSymbol.default(openBracketTerminalSymbolContent), closeBracketTerminalSymbolPart = new _terminalSymbol.default(closeBracketTerminalSymbolContent), oneOrMorePartRuleNamePartsPart = new _oneOrMoreParts.default(partRuleNamePart), parts = [
            openBracketTerminalSymbolPart,
            partRuleNamePart,
            oneOrMorePartRuleNamePartsPart,
            closeBracketTerminalSymbolPart
        ];
        return _possibleConstructorReturn(this, _getPrototypeOf(SequenceOfPartsDefinition).call(this, parts));
    }
    return SequenceOfPartsDefinition;
}(_definition.default);
exports.default = SequenceOfPartsDefinition;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvZGVmaW5pdGlvbi9zZXF1ZW5jZU9mUGFydHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvblwiO1xuaW1wb3J0IFJ1bGVOYW1lUGFydCBmcm9tIFwiLi4vcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZVwiO1xuaW1wb3J0IFRlcm1pbmFsU3ltYm9sUGFydCBmcm9tIFwiLi4vcGFydC90ZXJtaW5hbC90ZXJtaW5hbFN5bWJvbFwiO1xuaW1wb3J0IE9uZU9yTW9yZVBhcnRzUGFydCBmcm9tIFwiLi4vcGFydC9ub25UZXJtaW5hbC9vbmVPck1vcmVQYXJ0c1wiO1xuXG5pbXBvcnQgeyBQYXJ0UnVsZU5hbWUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHsgb3BlbkJyYWNrZXQsIGNsb3NlQnJhY2tldCB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlcXVlbmNlT2ZQYXJ0c0RlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgcGFydFJ1bGVOYW1lID0gUGFydFJ1bGVOYW1lLFxuICAgICAgICAgIG9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50ID0gb3BlbkJyYWNrZXQsIC8vL1xuICAgICAgICAgIGNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sQ29udGVudCA9IGNsb3NlQnJhY2tldCwgLy8vXG4gICAgICAgICAgcGFydFJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQocGFydFJ1bGVOYW1lKSxcbiAgICAgICAgICBvcGVuQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQob3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQpLFxuICAgICAgICAgIGNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQoY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50KSxcbiAgICAgICAgICBvbmVPck1vcmVQYXJ0UnVsZU5hbWVQYXJ0c1BhcnQgPSBuZXcgT25lT3JNb3JlUGFydHNQYXJ0KHBhcnRSdWxlTmFtZVBhcnQpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgb3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQsXG4gICAgICAgICAgICBwYXJ0UnVsZU5hbWVQYXJ0LFxuICAgICAgICAgICAgb25lT3JNb3JlUGFydFJ1bGVOYW1lUGFydHNQYXJ0LFxuICAgICAgICAgICAgY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0XG4gICAgICAgICAgXTtcblxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBQTs7Ozs7SUFFQSxZQUFBO0lBRUEsV0FBQTtJQUNBLFNBQUE7SUFDQSxlQUFBO0lBQ0EsZUFBQTtJQUVBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFQSxXQUFBLEdBVEEsWUFBQSxnQkFTQSxXQUFBLEVBQUEsWUFBQSxHQVRBLFlBQUEsZ0JBU0EsWUFBQTtJQUVBLHlCQUFBLFlBQUEsVUFBQTtjQUFBLHlCQUFBLEVBVEEsV0FBQTthQVNBLHlCQUFBOzhCQUFBLHlCQUFBO1lBRUEsWUFBQSxHQU5BLFVBQUEsZUFPQSxnQ0FBQSxHQUFBLFdBQUEsRUFDQSxpQ0FBQSxHQUFBLFlBQUEsRUFDQSxnQkFBQSxPQWJBLFNBQUEsU0FhQSxZQUFBLEdBQ0EsNkJBQUEsT0FiQSxlQUFBLFNBYUEsZ0NBQUEsR0FDQSw4QkFBQSxPQWRBLGVBQUEsU0FjQSxpQ0FBQSxHQUNBLDhCQUFBLE9BZEEsZUFBQSxTQWNBLGdCQUFBLEdBQ0EsS0FBQTtBQUNBLHlDQUFBO0FBQ0EsNEJBQUE7QUFDQSwwQ0FBQTtBQUNBLDBDQUFBOztnRUFiQSx5QkFBQSxhQWdCQSxLQUFBOztXQWhCQSx5QkFBQTtFQVRBLFdBQUE7a0JBU0EseUJBQUEifQ==