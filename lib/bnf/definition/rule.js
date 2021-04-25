"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
var _definition = _interopRequireDefault(require("../definition"));
var _ruleName = _interopRequireDefault(require("../part/nonTerminal/ruleName"));
var _terminalSymbol = _interopRequireDefault(require("../part/terminal/terminalSymbol"));
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
var separator = _occamLexers.specialSymbols.separator, terminator = _occamLexers.specialSymbols.terminator;
var RuleDefinition = function(Definition) {
    _inherits(RuleDefinition, Definition);
    function RuleDefinition() {
        _classCallCheck(this, RuleDefinition);
        var separatorTerminalSymbolContent = separator, terminatorTerminalSymbolContent = terminator, nameRuleName = _ruleNames.NameRuleName, definitionsRuleName = _ruleNames.DefinitionsRuleName, nameRuleNamePart = new _ruleName.default(nameRuleName), separatorTerminalSymbolPart = new _terminalSymbol.default(separatorTerminalSymbolContent), definitionsRuleNamePart = new _ruleName.default(definitionsRuleName), terminatorTerminalSymbolPart = new _terminalSymbol.default(terminatorTerminalSymbolContent), parts = [
            nameRuleNamePart,
            separatorTerminalSymbolPart,
            definitionsRuleNamePart,
            terminatorTerminalSymbolPart
        ];
        return _possibleConstructorReturn(this, _getPrototypeOf(RuleDefinition).call(this, parts));
    }
    return RuleDefinition;
}(_definition.default);
exports.default = RuleDefinition;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvZGVmaW5pdGlvbi9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IERlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb25cIjtcbmltcG9ydCBSdWxlTmFtZVBhcnQgZnJvbSBcIi4uL3BhcnQvbm9uVGVybWluYWwvcnVsZU5hbWVcIjtcbmltcG9ydCBUZXJtaW5hbFN5bWJvbFBhcnQgZnJvbSBcIi4uL3BhcnQvdGVybWluYWwvdGVybWluYWxTeW1ib2xcIjtcblxuaW1wb3J0IHsgTmFtZVJ1bGVOYW1lLCBEZWZpbml0aW9uc1J1bGVOYW1lIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCB7IHNlcGFyYXRvciwgdGVybWluYXRvciB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHNlcGFyYXRvclRlcm1pbmFsU3ltYm9sQ29udGVudCA9IHNlcGFyYXRvcixcbiAgICAgICAgICB0ZXJtaW5hdG9yVGVybWluYWxTeW1ib2xDb250ZW50ID0gdGVybWluYXRvcixcbiAgICAgICAgICBuYW1lUnVsZU5hbWUgPSBOYW1lUnVsZU5hbWUsXG4gICAgICAgICAgZGVmaW5pdGlvbnNSdWxlTmFtZSA9IERlZmluaXRpb25zUnVsZU5hbWUsXG4gICAgICAgICAgbmFtZVJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQobmFtZVJ1bGVOYW1lKSxcbiAgICAgICAgICBzZXBhcmF0b3JUZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KHNlcGFyYXRvclRlcm1pbmFsU3ltYm9sQ29udGVudCksXG4gICAgICAgICAgZGVmaW5pdGlvbnNSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KGRlZmluaXRpb25zUnVsZU5hbWUpLFxuICAgICAgICAgIHRlcm1pbmF0b3JUZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KHRlcm1pbmF0b3JUZXJtaW5hbFN5bWJvbENvbnRlbnQpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgbmFtZVJ1bGVOYW1lUGFydCxcbiAgICAgICAgICAgIHNlcGFyYXRvclRlcm1pbmFsU3ltYm9sUGFydCxcbiAgICAgICAgICAgIGRlZmluaXRpb25zUnVsZU5hbWVQYXJ0LFxuICAgICAgICAgICAgdGVybWluYXRvclRlcm1pbmFsU3ltYm9sUGFydFxuICAgICAgICAgIF07XG4gICAgXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVtQixZQUFjO0lBRXRCLFdBQWU7SUFDYixTQUE4QjtJQUN4QixlQUFpQztJQUVkLFVBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFeEQsU0FBUyxHQVJjLFlBQWMsZ0JBUXJDLFNBQVMsRUFBRSxVQUFVLEdBUkUsWUFBYyxnQkFRMUIsVUFBVTtJQUVSLGNBQWM7Y0FBZCxjQUFjO2FBQWQsY0FBYzs4QkFBZCxjQUFjO1lBRXpCLDhCQUE4QixHQUFHLFNBQVMsRUFDMUMsK0JBQStCLEdBQUcsVUFBVSxFQUM1QyxZQUFZLEdBUjRCLFVBQWMsZUFTdEQsbUJBQW1CLEdBVHFCLFVBQWMsc0JBVXRELGdCQUFnQixPQWJELFNBQThCLFNBYVQsWUFBWSxHQUNoRCwyQkFBMkIsT0FiTixlQUFpQyxTQWFELDhCQUE4QixHQUNuRix1QkFBdUIsT0FmUixTQUE4QixTQWVGLG1CQUFtQixHQUM5RCw0QkFBNEIsT0FmUCxlQUFpQyxTQWVBLCtCQUErQixHQUNyRixLQUFLO1lBQ0gsZ0JBQWdCO1lBQ2hCLDJCQUEyQjtZQUMzQix1QkFBdUI7WUFDdkIsNEJBQTRCOztnRUFkbkIsY0FBYyxhQWlCekIsS0FBSzs7V0FqQk0sY0FBYztFQVJaLFdBQWU7a0JBUWpCLGNBQWMifQ==