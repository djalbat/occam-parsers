"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TerminalPartRuleDefinition;
    }
});
var _definition = /*#__PURE__*/ _interopRequireDefault(require("../../definition"));
var _ruleName = /*#__PURE__*/ _interopRequireDefault(require("../../part/nonTerminal/ruleName"));
var _zeroOrMoreParts = /*#__PURE__*/ _interopRequireDefault(require("../../part/nonTerminal/zeroOrMoreParts"));
var _ruleNames = require("../../ruleNames");
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
var TerminalPartRuleDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(TerminalPartRuleDefinition, Definition);
    var _super = _createSuper(TerminalPartRuleDefinition);
    function TerminalPartRuleDefinition() {
        _classCallCheck(this, TerminalPartRuleDefinition);
        var quantifierRuleNamePart = new _ruleName.default(_ruleNames.quantifierRuleName), terminalPartRuleNamePart = new _ruleName.default(_ruleNames.terminalPartRuleName), zeroOrMoreQuantifierRuleNamePartsPart = new _zeroOrMoreParts.default(quantifierRuleNamePart), parts = [
            terminalPartRuleNamePart,
            zeroOrMoreQuantifierRuleNamePartsPart
        ];
        return _super.call(this, parts);
    }
    return TerminalPartRuleDefinition;
}(_definition.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3BhcnRSdWxlL3Rlcm1pbmFsLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvblwiO1xuaW1wb3J0IFJ1bGVOYW1lUGFydCBmcm9tIFwiLi4vLi4vcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZVwiO1xuaW1wb3J0IFplcm9Pck1vcmVQYXJ0c1BhcnQgZnJvbSBcIi4uLy4uL3BhcnQvbm9uVGVybWluYWwvemVyb09yTW9yZVBhcnRzXCI7XG5cbmltcG9ydCB7IHF1YW50aWZpZXJSdWxlTmFtZSwgdGVybWluYWxQYXJ0UnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHF1YW50aWZpZXJSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KHF1YW50aWZpZXJSdWxlTmFtZSksXG4gICAgICAgICAgdGVybWluYWxQYXJ0UnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydCh0ZXJtaW5hbFBhcnRSdWxlTmFtZSksXG4gICAgICAgICAgemVyb09yTW9yZVF1YW50aWZpZXJSdWxlTmFtZVBhcnRzUGFydCA9IG5ldyBaZXJvT3JNb3JlUGFydHNQYXJ0KHF1YW50aWZpZXJSdWxlTmFtZVBhcnQpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgdGVybWluYWxQYXJ0UnVsZU5hbWVQYXJ0LFxuICAgICAgICAgICAgemVyb09yTW9yZVF1YW50aWZpZXJSdWxlTmFtZVBhcnRzUGFydFxuICAgICAgICAgIF07XG4gICAgXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24iLCJxdWFudGlmaWVyUnVsZU5hbWVQYXJ0IiwiUnVsZU5hbWVQYXJ0IiwicXVhbnRpZmllclJ1bGVOYW1lIiwidGVybWluYWxQYXJ0UnVsZU5hbWVQYXJ0IiwidGVybWluYWxQYXJ0UnVsZU5hbWUiLCJ6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lUGFydHNQYXJ0IiwiWmVyb09yTW9yZVBhcnRzUGFydCIsInBhcnRzIiwiRGVmaW5pdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7K0RBTkU7NkRBQ0U7b0VBQ087eUJBRXlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQyxJQUFBLEFBQU1BLDJDQUFOO2NBQU1BOzhCQUFBQTthQUFBQTs4QkFBQUE7UUFFakIsSUFBTUMseUJBQXlCLElBQUlDLGlCQUFZLENBQUNDLDZCQUFrQixHQUM1REMsMkJBQTJCLElBQUlGLGlCQUFZLENBQUNHLCtCQUFvQixHQUNoRUMsd0NBQXdDLElBQUlDLHdCQUFtQixDQUFDTix5QkFDaEVPLFFBQVE7WUFDTko7WUFDQUU7U0FDRDtpQ0FFREU7O1dBVldSO0VBQW1DUyxtQkFBVSJ9