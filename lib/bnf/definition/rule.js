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
var RuleDefinition = /*#__PURE__*/ function(Definition) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvZGVmaW5pdGlvbi9ydWxlLmpzIl0sIm5hbWVzIjpbInNwZWNpYWxTeW1ib2xzIiwiRGVmaW5pdGlvbiIsIlJ1bGVOYW1lUGFydCIsIlRlcm1pbmFsU3ltYm9sUGFydCIsIk5hbWVSdWxlTmFtZSIsIkRlZmluaXRpb25zUnVsZU5hbWUiLCJzZXBhcmF0b3IiLCJ0ZXJtaW5hdG9yIiwiUnVsZURlZmluaXRpb24iLCJjb25zdHJ1Y3RvciIsInNlcGFyYXRvclRlcm1pbmFsU3ltYm9sQ29udGVudCIsInRlcm1pbmF0b3JUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJuYW1lUnVsZU5hbWUiLCJkZWZpbml0aW9uc1J1bGVOYW1lIiwibmFtZVJ1bGVOYW1lUGFydCIsInNlcGFyYXRvclRlcm1pbmFsU3ltYm9sUGFydCIsImRlZmluaXRpb25zUnVsZU5hbWVQYXJ0IiwidGVybWluYXRvclRlcm1pbmFsU3ltYm9sUGFydCIsInBhcnRzIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVtQixHQUFjLENBQWQsWUFBYztBQUV0QixHQUFlLENBQWYsV0FBZTtBQUNiLEdBQThCLENBQTlCLFNBQThCO0FBQ3hCLEdBQWlDLENBQWpDLGVBQWlDO0FBRWQsR0FBYyxDQUFkLFVBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEUsR0FBSyxDQUFHLFNBQVMsR0FSYyxZQUFjLGdCQVFyQyxTQUFTLEVBQUUsVUFBVSxHQVJFLFlBQWMsZ0JBUTFCLFVBQVU7SUFFUixjQUFjLGlCQUFwQixRQUFRO2NBQUYsY0FBYzthQUFkLGNBQWM7OEJBQWQsY0FBYztRQUUvQixHQUFLLENBQUMsOEJBQThCLEdBQUcsU0FBUyxFQUMxQywrQkFBK0IsR0FBRyxVQUFVLEVBQzVDLFlBQVksR0FSNEIsVUFBYyxlQVN0RCxtQkFBbUIsR0FUcUIsVUFBYyxzQkFVdEQsZ0JBQWdCLEdBQUcsR0FBRyxDQWJQLFNBQThCLFNBYVQsWUFBWSxHQUNoRCwyQkFBMkIsR0FBRyxHQUFHLENBYlosZUFBaUMsU0FhRCw4QkFBOEIsR0FDbkYsdUJBQXVCLEdBQUcsR0FBRyxDQWZkLFNBQThCLFNBZUYsbUJBQW1CLEdBQzlELDRCQUE0QixHQUFHLEdBQUcsQ0FmYixlQUFpQyxTQWVBLCtCQUErQixHQUNyRixLQUFLLEdBQUcsQ0FBQztZQUNQLGdCQUFnQjtZQUNoQiwyQkFBMkI7WUFDM0IsdUJBQXVCO1lBQ3ZCLDRCQUE0QjtRQUM5QixDQUFDO2dFQWZVLGNBQWMsYUFpQnpCLEtBQUs7O1dBakJNLGNBQWM7RUFSWixXQUFlO2tCQVFqQixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvblwiO1xuaW1wb3J0IFJ1bGVOYW1lUGFydCBmcm9tIFwiLi4vcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZVwiO1xuaW1wb3J0IFRlcm1pbmFsU3ltYm9sUGFydCBmcm9tIFwiLi4vcGFydC90ZXJtaW5hbC90ZXJtaW5hbFN5bWJvbFwiO1xuXG5pbXBvcnQgeyBOYW1lUnVsZU5hbWUsIERlZmluaXRpb25zUnVsZU5hbWUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHsgc2VwYXJhdG9yLCB0ZXJtaW5hdG9yIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3Qgc2VwYXJhdG9yVGVybWluYWxTeW1ib2xDb250ZW50ID0gc2VwYXJhdG9yLFxuICAgICAgICAgIHRlcm1pbmF0b3JUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSB0ZXJtaW5hdG9yLFxuICAgICAgICAgIG5hbWVSdWxlTmFtZSA9IE5hbWVSdWxlTmFtZSxcbiAgICAgICAgICBkZWZpbml0aW9uc1J1bGVOYW1lID0gRGVmaW5pdGlvbnNSdWxlTmFtZSxcbiAgICAgICAgICBuYW1lUnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChuYW1lUnVsZU5hbWUpLFxuICAgICAgICAgIHNlcGFyYXRvclRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQoc2VwYXJhdG9yVGVybWluYWxTeW1ib2xDb250ZW50KSxcbiAgICAgICAgICBkZWZpbml0aW9uc1J1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQoZGVmaW5pdGlvbnNSdWxlTmFtZSksXG4gICAgICAgICAgdGVybWluYXRvclRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQodGVybWluYXRvclRlcm1pbmFsU3ltYm9sQ29udGVudCksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBuYW1lUnVsZU5hbWVQYXJ0LFxuICAgICAgICAgICAgc2VwYXJhdG9yVGVybWluYWxTeW1ib2xQYXJ0LFxuICAgICAgICAgICAgZGVmaW5pdGlvbnNSdWxlTmFtZVBhcnQsXG4gICAgICAgICAgICB0ZXJtaW5hdG9yVGVybWluYWxTeW1ib2xQYXJ0XG4gICAgICAgICAgXTtcbiAgICBcbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuIl19