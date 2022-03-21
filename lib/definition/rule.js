"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
var _definition = _interopRequireDefault(require("../definition"));
var _ruleName = _interopRequireDefault(require("../part/nonTerminal/ruleName"));
var _optionalPart = _interopRequireDefault(require("../part/nonTerminal/optionalPart"));
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
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var separator = _occamLexers.specialSymbols.separator, terminator = _occamLexers.specialSymbols.terminator;
var RuleDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(RuleDefinition, Definition);
    var _super = _createSuper(RuleDefinition);
    function RuleDefinition() {
        _classCallCheck(this, RuleDefinition);
        var separatorTerminalSymbolContent = separator, terminatorTerminalSymbolContent = terminator, nameRuleName = _ruleNames.NameRuleName, definitionsRuleName = _ruleNames.DefinitionsRuleName, ambiguousModifierRuleName = _ruleNames.AmbiguousModifierRuleName, ambiguousModifierRuleNamePart = new _ruleName.default(ambiguousModifierRuleName), nameRuleNamePart = new _ruleName.default(nameRuleName), optionalAmbiguousRuleNamePartPart = new _optionalPart.default(ambiguousModifierRuleNamePart), separatorTerminalSymbolPart = new _terminalSymbol.default(separatorTerminalSymbolContent), definitionsRuleNamePart = new _ruleName.default(definitionsRuleName), terminatorTerminalSymbolPart = new _terminalSymbol.default(terminatorTerminalSymbolContent), parts = [
            nameRuleNamePart,
            optionalAmbiguousRuleNamePartPart,
            separatorTerminalSymbolPart,
            definitionsRuleNamePart,
            terminatorTerminalSymbolPart
        ];
        return _super.call(this, parts);
    }
    return RuleDefinition;
}(_definition.default);
exports.default = RuleDefinition;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL3J1bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvblwiO1xuaW1wb3J0IFJ1bGVOYW1lUGFydCBmcm9tIFwiLi4vcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZVwiO1xuaW1wb3J0IE9wdGlvbmFsUGFydFBhcnQgZnJvbSBcIi4uL3BhcnQvbm9uVGVybWluYWwvb3B0aW9uYWxQYXJ0XCI7XG5pbXBvcnQgVGVybWluYWxTeW1ib2xQYXJ0IGZyb20gXCIuLi9wYXJ0L3Rlcm1pbmFsL3Rlcm1pbmFsU3ltYm9sXCI7XG5cbmltcG9ydCB7IE5hbWVSdWxlTmFtZSwgRGVmaW5pdGlvbnNSdWxlTmFtZSwgQW1iaWd1b3VzTW9kaWZpZXJSdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgeyBzZXBhcmF0b3IsIHRlcm1pbmF0b3IgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBzZXBhcmF0b3JUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBzZXBhcmF0b3IsXG4gICAgICAgICAgdGVybWluYXRvclRlcm1pbmFsU3ltYm9sQ29udGVudCA9IHRlcm1pbmF0b3IsXG4gICAgICAgICAgbmFtZVJ1bGVOYW1lID0gTmFtZVJ1bGVOYW1lLFxuICAgICAgICAgIGRlZmluaXRpb25zUnVsZU5hbWUgPSBEZWZpbml0aW9uc1J1bGVOYW1lLFxuICAgICAgICAgIGFtYmlndW91c01vZGlmaWVyUnVsZU5hbWUgPSBBbWJpZ3VvdXNNb2RpZmllclJ1bGVOYW1lLFxuICAgICAgICAgIGFtYmlndW91c01vZGlmaWVyUnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChhbWJpZ3VvdXNNb2RpZmllclJ1bGVOYW1lKSxcbiAgICAgICAgICBuYW1lUnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChuYW1lUnVsZU5hbWUpLFxuICAgICAgICAgIG9wdGlvbmFsQW1iaWd1b3VzUnVsZU5hbWVQYXJ0UGFydCA9IG5ldyBPcHRpb25hbFBhcnRQYXJ0KGFtYmlndW91c01vZGlmaWVyUnVsZU5hbWVQYXJ0KSxcbiAgICAgICAgICBzZXBhcmF0b3JUZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KHNlcGFyYXRvclRlcm1pbmFsU3ltYm9sQ29udGVudCksXG4gICAgICAgICAgZGVmaW5pdGlvbnNSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KGRlZmluaXRpb25zUnVsZU5hbWUpLFxuICAgICAgICAgIHRlcm1pbmF0b3JUZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KHRlcm1pbmF0b3JUZXJtaW5hbFN5bWJvbENvbnRlbnQpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgbmFtZVJ1bGVOYW1lUGFydCxcbiAgICAgICAgICAgIG9wdGlvbmFsQW1iaWd1b3VzUnVsZU5hbWVQYXJ0UGFydCxcbiAgICAgICAgICAgIHNlcGFyYXRvclRlcm1pbmFsU3ltYm9sUGFydCxcbiAgICAgICAgICAgIGRlZmluaXRpb25zUnVsZU5hbWVQYXJ0LFxuICAgICAgICAgICAgdGVybWluYXRvclRlcm1pbmFsU3ltYm9sUGFydFxuICAgICAgICAgIF07XG4gICAgXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJzZXBhcmF0b3IiLCJzcGVjaWFsU3ltYm9scyIsInRlcm1pbmF0b3IiLCJSdWxlRGVmaW5pdGlvbiIsInNlcGFyYXRvclRlcm1pbmFsU3ltYm9sQ29udGVudCIsInRlcm1pbmF0b3JUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJuYW1lUnVsZU5hbWUiLCJOYW1lUnVsZU5hbWUiLCJkZWZpbml0aW9uc1J1bGVOYW1lIiwiRGVmaW5pdGlvbnNSdWxlTmFtZSIsImFtYmlndW91c01vZGlmaWVyUnVsZU5hbWUiLCJBbWJpZ3VvdXNNb2RpZmllclJ1bGVOYW1lIiwiYW1iaWd1b3VzTW9kaWZpZXJSdWxlTmFtZVBhcnQiLCJSdWxlTmFtZVBhcnQiLCJuYW1lUnVsZU5hbWVQYXJ0Iiwib3B0aW9uYWxBbWJpZ3VvdXNSdWxlTmFtZVBhcnRQYXJ0IiwiT3B0aW9uYWxQYXJ0UGFydCIsInNlcGFyYXRvclRlcm1pbmFsU3ltYm9sUGFydCIsIlRlcm1pbmFsU3ltYm9sUGFydCIsImRlZmluaXRpb25zUnVsZU5hbWVQYXJ0IiwidGVybWluYXRvclRlcm1pbmFsU3ltYm9sUGFydCIsInBhcnRzIiwiRGVmaW5pdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7RUFBYjt3QkFBQTtBQUUrQixJQUFBLFlBQWMsV0FBZCxjQUFjLENBQUE7QUFFdEIsSUFBQSxXQUFlLGtDQUFmLGVBQWUsRUFBQTtBQUNiLElBQUEsU0FBOEIsa0NBQTlCLDhCQUE4QixFQUFBO0FBQzFCLElBQUEsYUFBa0Msa0NBQWxDLGtDQUFrQyxFQUFBO0FBQ2hDLElBQUEsZUFBaUMsa0NBQWpDLGlDQUFpQyxFQUFBO0FBRWEsSUFBQSxVQUFjLFdBQWQsY0FBYyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7S0FUM0Y7Ozs7Ozs7Ozs7Ozs7TUFBQTt5REFBQTs7Ozs7Ozs7Ozs7Ozs7O3VCQUFBOztLQUFBOzs7OzJCQUFBOzs7Ozs7OztxRkFBQTs7Ozs7Ozs7Ozs7O21FQUFBOztpREFBQTs7Ozs7QUFXQSxJQUFRQSxTQUFTLEdBQWlCQyxZQUFjLGdCQUF4Q0QsU0FBUyxFQUFFRSxVQUFVLEdBQUtELFlBQWMsZ0JBQTdCQyxVQUFVLEFBQW9CO0FBRWxDLElBQUEsQUFBTUMsY0FBYyxpQkNiaEMsQURhWTt5Q0FiZjs7YUFhcUJBLGNBQWM7NkNBYm5DO1FBZUksSUFBTUMsOEJBQThCLEdBQUdKLFNBQVMsRUFDMUNLLCtCQUErQixHQUFHSCxVQUFVLEVBQzVDSSxZQUFZLEdBQUdDLFVBQVksYUFBQSxFQUMzQkMsbUJBQW1CLEdBQUdDLFVBQW1CLG9CQUFBLEVBQ3pDQyx5QkFBeUIsR0FBR0MsVUFBeUIsMEJBQUEsRUFDckRDLDZCQUE2QixHQUFHLElBQUlDLFNBQVksU0FBQ0gseUJBQXlCLENBQUMsRUFDM0VJLGdCQUFnQixHQUFHLElBQUlELFNBQVksU0FBQ1AsWUFBWSxDQUFDLEVBQ2pEUyxpQ0FBaUMsR0FBRyxJQUFJQyxhQUFnQixTQUFDSiw2QkFBNkIsQ0FBQyxFQUN2RkssMkJBQTJCLEdBQUcsSUFBSUMsZUFBa0IsU0FBQ2QsOEJBQThCLENBQUMsRUFDcEZlLHVCQUF1QixHQUFHLElBQUlOLFNBQVksU0FBQ0wsbUJBQW1CLENBQUMsRUFDL0RZLDRCQUE0QixHQUFHLElBQUlGLGVBQWtCLFNBQUNiLCtCQUErQixDQUFDLEVBQ3RGZ0IsS0FBSyxHQUFHO1lBQ05QLGdCQUFnQjtZQUNoQkMsaUNBQWlDO1lBQ2pDRSwyQkFBMkI7WUFDM0JFLHVCQUF1QjtZQUN2QkMsNEJBQTRCO1NBQzdCLEFBQUM7aUNBRUZDLEtBQUs7OztDQUVkLENBdkIyQ0MsV0FBVSxTQXVCckQ7a0JBdkJvQm5CLGNBQWMsQUFibkMifQ==