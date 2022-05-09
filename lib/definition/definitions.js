"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
var _definition = _interopRequireDefault(require("../definition"));
var _ruleName = _interopRequireDefault(require("../part/nonTerminal/ruleName"));
var _terminalSymbol = _interopRequireDefault(require("../part/terminal/terminalSymbol"));
var _zeroOrMoreParts = _interopRequireDefault(require("../part/nonTerminal/zeroOrMoreParts"));
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
function _getPrototypeOf(o1) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o1);
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
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
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
var verticalBar = _occamLexers.specialSymbols.verticalBar;
var DefinitionsDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(DefinitionsDefinition, Definition);
    var _super = _createSuper(DefinitionsDefinition);
    function DefinitionsDefinition() {
        _classCallCheck(this, DefinitionsDefinition);
        var definitionRuleName = _ruleNames.DefinitionRuleName, verticalBarTerminalSymbolContent = verticalBar, definitionRuleNamePart = new _ruleName.default(definitionRuleName), verticalBarTerminalSymbolPart = new _terminalSymbol.default(verticalBarTerminalSymbolContent), verticalBarTerminalSymbolThenDefinitionRuleNameParts = [
            verticalBarTerminalSymbolPart,
            definitionRuleNamePart
        ], sequenceOfPartsPart = new _sequenceOfParts.default(verticalBarTerminalSymbolThenDefinitionRuleNameParts), zeroOrMoreSequenceOfPartsPart = new _zeroOrMoreParts.default(sequenceOfPartsPart), parts = [
            definitionRuleNamePart,
            zeroOrMoreSequenceOfPartsPart
        ];
        return _super.call(this, parts);
    }
    return DefinitionsDefinition;
}(_definition.default);
exports.default = DefinitionsDefinition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL2RlZmluaXRpb25zLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IERlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb25cIjtcbmltcG9ydCBSdWxlTmFtZVBhcnQgZnJvbSBcIi4uL3BhcnQvbm9uVGVybWluYWwvcnVsZU5hbWVcIjtcbmltcG9ydCBUZXJtaW5hbFN5bWJvbFBhcnQgZnJvbSBcIi4uL3BhcnQvdGVybWluYWwvdGVybWluYWxTeW1ib2xcIjtcbmltcG9ydCBaZXJvT3JNb3JlUGFydHNQYXJ0IGZyb20gXCIuLi9wYXJ0L25vblRlcm1pbmFsL3plcm9Pck1vcmVQYXJ0c1wiO1xuaW1wb3J0IFNlcXVlbmNlT2ZQYXJ0c1BhcnQgZnJvbSBcIi4uL3BhcnQvbm9uVGVybWluYWwvc2VxdWVuY2VPZlBhcnRzXCI7XG5cbmltcG9ydCB7IERlZmluaXRpb25SdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgeyB2ZXJ0aWNhbEJhciB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlZmluaXRpb25zRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uUnVsZU5hbWUgPSBEZWZpbml0aW9uUnVsZU5hbWUsXG4gICAgICAgICAgdmVydGljYWxCYXJUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSB2ZXJ0aWNhbEJhcixcbiAgICAgICAgICBkZWZpbml0aW9uUnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChkZWZpbml0aW9uUnVsZU5hbWUpLFxuICAgICAgICAgIHZlcnRpY2FsQmFyVGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydCh2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sQ29udGVudCksXG4gICAgICAgICAgdmVydGljYWxCYXJUZXJtaW5hbFN5bWJvbFRoZW5EZWZpbml0aW9uUnVsZU5hbWVQYXJ0cyA9IFtcbiAgICAgICAgICAgIHZlcnRpY2FsQmFyVGVybWluYWxTeW1ib2xQYXJ0LFxuICAgICAgICAgICAgZGVmaW5pdGlvblJ1bGVOYW1lUGFydFxuICAgICAgICAgIF0sXG4gICAgICAgICAgc2VxdWVuY2VPZlBhcnRzUGFydCA9IG5ldyBTZXF1ZW5jZU9mUGFydHNQYXJ0KHZlcnRpY2FsQmFyVGVybWluYWxTeW1ib2xUaGVuRGVmaW5pdGlvblJ1bGVOYW1lUGFydHMpLFxuICAgICAgICAgIHplcm9Pck1vcmVTZXF1ZW5jZU9mUGFydHNQYXJ0ID0gbmV3IFplcm9Pck1vcmVQYXJ0c1BhcnQoc2VxdWVuY2VPZlBhcnRzUGFydCksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBkZWZpbml0aW9uUnVsZU5hbWVQYXJ0LFxuICAgICAgICAgICAgemVyb09yTW9yZVNlcXVlbmNlT2ZQYXJ0c1BhcnRcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbInZlcnRpY2FsQmFyIiwic3BlY2lhbFN5bWJvbHMiLCJEZWZpbml0aW9uc0RlZmluaXRpb24iLCJkZWZpbml0aW9uUnVsZU5hbWUiLCJEZWZpbml0aW9uUnVsZU5hbWUiLCJ2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sQ29udGVudCIsImRlZmluaXRpb25SdWxlTmFtZVBhcnQiLCJSdWxlTmFtZVBhcnQiLCJ2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sUGFydCIsIlRlcm1pbmFsU3ltYm9sUGFydCIsInZlcnRpY2FsQmFyVGVybWluYWxTeW1ib2xUaGVuRGVmaW5pdGlvblJ1bGVOYW1lUGFydHMiLCJzZXF1ZW5jZU9mUGFydHNQYXJ0IiwiU2VxdWVuY2VPZlBhcnRzUGFydCIsInplcm9Pck1vcmVTZXF1ZW5jZU9mUGFydHNQYXJ0IiwiWmVyb09yTW9yZVBhcnRzUGFydCIsInBhcnRzIiwiRGVmaW5pdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVrQixJQUFBLFlBQWMsV0FBZCxjQUFjLENBQUE7QUFFdEIsSUFBQSxXQUFlLGtDQUFmLGVBQWUsRUFBQTtBQUNiLElBQUEsU0FBOEIsa0NBQTlCLDhCQUE4QixFQUFBO0FBQ3hCLElBQUEsZUFBaUMsa0NBQWpDLGlDQUFpQyxFQUFBO0FBQ2hDLElBQUEsZ0JBQXFDLGtDQUFyQyxxQ0FBcUMsRUFBQTtBQUNyQyxJQUFBLGdCQUFxQyxrQ0FBckMscUNBQXFDLEVBQUE7QUFFbEMsSUFBQSxVQUFjLFdBQWQsY0FBYyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqRCxJQUFNLEFBQUVBLFdBQVcsR0FBS0MsWUFBYyxlQUFBLENBQTlCRCxXQUFXLEFBQW1CLEFBQUM7QUFFeEIsSUFBQSxBQUFNRSxxQkFBcUIsaUJDZHZDLEFEY1k7OzthQUFNQSxxQkFBcUI7O1FBRXRDLElBQU1DLGtCQUFrQixHQUFHQyxVQUFrQixtQkFBQSxFQUN2Q0MsZ0NBQWdDLEdBQUdMLFdBQVcsRUFDOUNNLHNCQUFzQixHQUFHLElBQUlDLFNBQVksUUFBQSxDQUFDSixrQkFBa0IsQ0FBQyxFQUM3REssNkJBQTZCLEdBQUcsSUFBSUMsZUFBa0IsUUFBQSxDQUFDSixnQ0FBZ0MsQ0FBQyxFQUN4Rkssb0RBQW9ELEdBQUc7WUFDckRGLDZCQUE2QjtZQUM3QkYsc0JBQXNCO1NBQ3ZCLEVBQ0RLLG1CQUFtQixHQUFHLElBQUlDLGdCQUFtQixRQUFBLENBQUNGLG9EQUFvRCxDQUFDLEVBQ25HRyw2QkFBNkIsR0FBRyxJQUFJQyxnQkFBbUIsUUFBQSxDQUFDSCxtQkFBbUIsQ0FBQyxFQUM1RUksS0FBSyxHQUFHO1lBQ05ULHNCQUFzQjtZQUN0Qk8sNkJBQTZCO1NBQzlCLEFBQUM7aUNBRUZFLEtBQUs7OztDQUVkLENBbkJrREMsV0FBVSxRQUFBLENBbUI1RDtrQkFuQm9CZCxxQkFBcUIifQ==