"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RuleDefinition;
    }
});
var _occamLexers = require("occam-lexers");
var _definition = /*#__PURE__*/ _interopRequireDefault(require("../definition"));
var _ruleName = /*#__PURE__*/ _interopRequireDefault(require("../part/nonTerminal/ruleName"));
var _optionalPart = /*#__PURE__*/ _interopRequireDefault(require("../part/nonTerminal/optionalPart"));
var _terminalSymbol = /*#__PURE__*/ _interopRequireDefault(require("../part/terminal/terminalSymbol"));
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
        var separatorTerminalSymbolContent = separator, terminatorTerminalSymbolContent = terminator, ambiguousModifierRuleNamePart = new _ruleName.default(_ruleNames.ambiguousModifierRuleName), nameRuleNamePart = new _ruleName.default(_ruleNames.nameRuleName), optionalAmbiguousRuleNamePartPart = new _optionalPart.default(ambiguousModifierRuleNamePart), separatorTerminalSymbolPart = new _terminalSymbol.default(separatorTerminalSymbolContent), definitionsRuleNamePart = new _ruleName.default(_ruleNames.definitionsRuleName), terminatorTerminalSymbolPart = new _terminalSymbol.default(terminatorTerminalSymbolContent), parts = [
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL3J1bGUuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvblwiO1xuaW1wb3J0IFJ1bGVOYW1lUGFydCBmcm9tIFwiLi4vcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZVwiO1xuaW1wb3J0IE9wdGlvbmFsUGFydFBhcnQgZnJvbSBcIi4uL3BhcnQvbm9uVGVybWluYWwvb3B0aW9uYWxQYXJ0XCI7XG5pbXBvcnQgVGVybWluYWxTeW1ib2xQYXJ0IGZyb20gXCIuLi9wYXJ0L3Rlcm1pbmFsL3Rlcm1pbmFsU3ltYm9sXCI7XG5cbmltcG9ydCB7IG5hbWVSdWxlTmFtZSwgZGVmaW5pdGlvbnNSdWxlTmFtZSwgYW1iaWd1b3VzTW9kaWZpZXJSdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgeyBzZXBhcmF0b3IsIHRlcm1pbmF0b3IgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBzZXBhcmF0b3JUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBzZXBhcmF0b3IsXG4gICAgICAgICAgdGVybWluYXRvclRlcm1pbmFsU3ltYm9sQ29udGVudCA9IHRlcm1pbmF0b3IsXG4gICAgICAgICAgYW1iaWd1b3VzTW9kaWZpZXJSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KGFtYmlndW91c01vZGlmaWVyUnVsZU5hbWUpLFxuICAgICAgICAgIG5hbWVSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KG5hbWVSdWxlTmFtZSksXG4gICAgICAgICAgb3B0aW9uYWxBbWJpZ3VvdXNSdWxlTmFtZVBhcnRQYXJ0ID0gbmV3IE9wdGlvbmFsUGFydFBhcnQoYW1iaWd1b3VzTW9kaWZpZXJSdWxlTmFtZVBhcnQpLFxuICAgICAgICAgIHNlcGFyYXRvclRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQoc2VwYXJhdG9yVGVybWluYWxTeW1ib2xDb250ZW50KSxcbiAgICAgICAgICBkZWZpbml0aW9uc1J1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQoZGVmaW5pdGlvbnNSdWxlTmFtZSksXG4gICAgICAgICAgdGVybWluYXRvclRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQodGVybWluYXRvclRlcm1pbmFsU3ltYm9sQ29udGVudCksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBuYW1lUnVsZU5hbWVQYXJ0LFxuICAgICAgICAgICAgb3B0aW9uYWxBbWJpZ3VvdXNSdWxlTmFtZVBhcnRQYXJ0LFxuICAgICAgICAgICAgc2VwYXJhdG9yVGVybWluYWxTeW1ib2xQYXJ0LFxuICAgICAgICAgICAgZGVmaW5pdGlvbnNSdWxlTmFtZVBhcnQsXG4gICAgICAgICAgICB0ZXJtaW5hdG9yVGVybWluYWxTeW1ib2xQYXJ0XG4gICAgICAgICAgXTtcbiAgICBcbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJSdWxlRGVmaW5pdGlvbiIsInNlcGFyYXRvciIsInNwZWNpYWxTeW1ib2xzIiwidGVybWluYXRvciIsInNlcGFyYXRvclRlcm1pbmFsU3ltYm9sQ29udGVudCIsInRlcm1pbmF0b3JUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJhbWJpZ3VvdXNNb2RpZmllclJ1bGVOYW1lUGFydCIsIlJ1bGVOYW1lUGFydCIsImFtYmlndW91c01vZGlmaWVyUnVsZU5hbWUiLCJuYW1lUnVsZU5hbWVQYXJ0IiwibmFtZVJ1bGVOYW1lIiwib3B0aW9uYWxBbWJpZ3VvdXNSdWxlTmFtZVBhcnRQYXJ0IiwiT3B0aW9uYWxQYXJ0UGFydCIsInNlcGFyYXRvclRlcm1pbmFsU3ltYm9sUGFydCIsIlRlcm1pbmFsU3ltYm9sUGFydCIsImRlZmluaXRpb25zUnVsZU5hbWVQYXJ0IiwiZGVmaW5pdGlvbnNSdWxlTmFtZSIsInRlcm1pbmF0b3JUZXJtaW5hbFN5bWJvbFBhcnQiLCJwYXJ0cyIsIkRlZmluaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7OztlQWFRQSxjQUFjOzs7MkJBWEosY0FBYzsrREFFdEIsZUFBZTs2REFDYiw4QkFBOEI7aUVBQzFCLGtDQUFrQzttRUFDaEMsaUNBQWlDO3lCQUVhLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNGLElBQVFDLFNBQVMsR0FBaUJDLFlBQWMsZUFBQSxDQUF4Q0QsU0FBUyxFQUFFRSxVQUFVLEdBQUtELFlBQWMsZUFBQSxDQUE3QkMsVUFBVSxBQUFvQjtBQUVsQyxJQUFBLEFBQU1ILGNBQWMsaUJBQXBCOzs7YUFBTUEsY0FBYzs7UUFFL0IsSUFBTUksOEJBQThCLEdBQUdILFNBQVMsRUFDMUNJLCtCQUErQixHQUFHRixVQUFVLEVBQzVDRyw2QkFBNkIsR0FBRyxJQUFJQyxTQUFZLFFBQUEsQ0FBQ0MsVUFBeUIsMEJBQUEsQ0FBQyxFQUMzRUMsZ0JBQWdCLEdBQUcsSUFBSUYsU0FBWSxRQUFBLENBQUNHLFVBQVksYUFBQSxDQUFDLEVBQ2pEQyxpQ0FBaUMsR0FBRyxJQUFJQyxhQUFnQixRQUFBLENBQUNOLDZCQUE2QixDQUFDLEVBQ3ZGTywyQkFBMkIsR0FBRyxJQUFJQyxlQUFrQixRQUFBLENBQUNWLDhCQUE4QixDQUFDLEVBQ3BGVyx1QkFBdUIsR0FBRyxJQUFJUixTQUFZLFFBQUEsQ0FBQ1MsVUFBbUIsb0JBQUEsQ0FBQyxFQUMvREMsNEJBQTRCLEdBQUcsSUFBSUgsZUFBa0IsUUFBQSxDQUFDVCwrQkFBK0IsQ0FBQyxFQUN0RmEsS0FBSyxHQUFHO1lBQ05ULGdCQUFnQjtZQUNoQkUsaUNBQWlDO1lBQ2pDRSwyQkFBMkI7WUFDM0JFLHVCQUF1QjtZQUN2QkUsNEJBQTRCO1NBQzdCLEFBQUM7aUNBRUZDLEtBQUs7OztDQUVkLENBcEIyQ0MsV0FBVSxRQUFBLENBb0JyRCJ9