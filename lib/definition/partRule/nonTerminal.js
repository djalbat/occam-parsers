"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _definition = _interopRequireDefault(require("../../definition"));
var _ruleName = _interopRequireDefault(require("../../part/nonTerminal/ruleName"));
var _zeroOrMoreParts = _interopRequireDefault(require("../../part/nonTerminal/zeroOrMoreParts"));
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
var NonTerminalPartRuleDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(NonTerminalPartRuleDefinition, Definition);
    var _super = _createSuper(NonTerminalPartRuleDefinition);
    function NonTerminalPartRuleDefinition() {
        _classCallCheck(this, NonTerminalPartRuleDefinition);
        var quantifierRuleName = _ruleNames.QuantifierRuleName, nonTerminalPartRuleName = _ruleNames.NonTerminalPartRuleName, quantifierRuleNamePart = new _ruleName.default(quantifierRuleName), nonTerminalPartRuleNamePart = new _ruleName.default(nonTerminalPartRuleName), zeroOrMoreQuantifierRuleNamePartsPart = new _zeroOrMoreParts.default(quantifierRuleNamePart), parts = [
            nonTerminalPartRuleNamePart,
            zeroOrMoreQuantifierRuleNamePartsPart
        ];
        return _super.call(this, parts);
    }
    return NonTerminalPartRuleDefinition;
}(_definition.default);
exports.default = NonTerminalPartRuleDefinition;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3BhcnRSdWxlL25vblRlcm1pbmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvblwiO1xuaW1wb3J0IFJ1bGVOYW1lUGFydCBmcm9tIFwiLi4vLi4vcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZVwiO1xuaW1wb3J0IFplcm9Pck1vcmVQYXJ0c1BhcnQgZnJvbSBcIi4uLy4uL3BhcnQvbm9uVGVybWluYWwvemVyb09yTW9yZVBhcnRzXCI7XG5cbmltcG9ydCB7IFF1YW50aWZpZXJSdWxlTmFtZSwgTm9uVGVybWluYWxQYXJ0UnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHF1YW50aWZpZXJSdWxlTmFtZSA9IFF1YW50aWZpZXJSdWxlTmFtZSxcbiAgICAgICAgICBub25UZXJtaW5hbFBhcnRSdWxlTmFtZSA9IE5vblRlcm1pbmFsUGFydFJ1bGVOYW1lLFxuICAgICAgICAgIHF1YW50aWZpZXJSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KHF1YW50aWZpZXJSdWxlTmFtZSksXG4gICAgICAgICAgbm9uVGVybWluYWxQYXJ0UnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChub25UZXJtaW5hbFBhcnRSdWxlTmFtZSksXG4gICAgICAgICAgemVyb09yTW9yZVF1YW50aWZpZXJSdWxlTmFtZVBhcnRzUGFydCA9IG5ldyBaZXJvT3JNb3JlUGFydHNQYXJ0KHF1YW50aWZpZXJSdWxlTmFtZVBhcnQpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgbm9uVGVybWluYWxQYXJ0UnVsZU5hbWVQYXJ0LFxuICAgICAgICAgICAgemVyb09yTW9yZVF1YW50aWZpZXJSdWxlTmFtZVBhcnRzUGFydFxuICAgICAgICAgIF07XG4gICAgXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiIsInF1YW50aWZpZXJSdWxlTmFtZSIsIlF1YW50aWZpZXJSdWxlTmFtZSIsIm5vblRlcm1pbmFsUGFydFJ1bGVOYW1lIiwiTm9uVGVybWluYWxQYXJ0UnVsZU5hbWUiLCJxdWFudGlmaWVyUnVsZU5hbWVQYXJ0IiwiUnVsZU5hbWVQYXJ0Iiwibm9uVGVybWluYWxQYXJ0UnVsZU5hbWVQYXJ0IiwiemVyb09yTW9yZVF1YW50aWZpZXJSdWxlTmFtZVBhcnRzUGFydCIsIlplcm9Pck1vcmVQYXJ0c1BhcnQiLCJwYXJ0cyIsIkRlZmluaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBLENBQVksV0FBQSxDQUFDOzs7RUFBYjt3QkFBQTtBQUV1QixHQUFrQixDQUFsQixXQUFrQjtBQUNoQixHQUFpQyxDQUFqQyxTQUFpQztBQUMxQixHQUF3QyxDQUF4QyxnQkFBd0M7QUFFWixHQUFpQixDQUFqQixVQUFpQjs7Ozs7Ozs7Ozs7Ozs7O0tBTjdFOzs7Ozs7Ozs7Ozs7O01BQUE7eURBQUE7Ozs7Ozs7Ozs7Ozs7Ozt1QkFBQTs7S0FBQTs7OzsyQkFBQTs7Ozs7Ozs7cUZBQUE7Ozs7Ozs7Ozs7OzttRUFBQTs7aURBQUE7Ozs7O0FBUWUsR0FBSyxDQUFDQSw2QkFBNkIsaUJBQW5DLFFBQVE7d0RBUnZCOzthQVFxQkEsNkJBQTZCOzREQVJsRDtRQVVJLEdBQUssQ0FBQ0Msa0JBQWtCLEdBQUdDLFVBQWtCLHFCQUN2Q0MsdUJBQXVCLEdBQUdDLFVBQXVCLDBCQUNqREMsc0JBQXNCLEdBQUcsR0FBRyxDQUFDQyxTQUFZLFNBQUNMLGtCQUFrQixHQUM1RE0sMkJBQTJCLEdBQUcsR0FBRyxDQUFDRCxTQUFZLFNBQUNILHVCQUF1QixHQUN0RUsscUNBQXFDLEdBQUcsR0FBRyxDQUFDQyxnQkFBbUIsU0FBQ0osc0JBQXNCLEdBQ3RGSyxLQUFLLEdBQUcsQ0FBQztZQUNQSCwyQkFBMkI7WUFDM0JDLHFDQUFxQztRQUN2QyxDQUFDO2lDQUVERSxLQUFLOzs7RUFaNENDLFdBQVU7a0JBQWhEWCw2QkFBNkIsQUFSbEQifQ==