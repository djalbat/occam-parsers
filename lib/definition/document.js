"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DocumentDefinition;
    }
});
var _definition = /*#__PURE__*/ _interopRequireDefault(require("../definition"));
var _ruleName = /*#__PURE__*/ _interopRequireDefault(require("../part/nonTerminal/ruleName"));
var _choiceOfParts = /*#__PURE__*/ _interopRequireDefault(require("../part/nonTerminal/choiceOfParts"));
var _oneOrMoreParts = /*#__PURE__*/ _interopRequireDefault(require("../part/nonTerminal/oneOrMoreParts"));
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
var DocumentDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(DocumentDefinition, Definition);
    var _super = _createSuper(DocumentDefinition);
    function DocumentDefinition() {
        _classCallCheck(this, DocumentDefinition);
        var ruleRuleName = _ruleNames.RuleRuleName, errorRuleName = _ruleNames.ErrorRuleName, ruleRuleNamePart = new _ruleName.default(ruleRuleName), errorRuleNamePart = new _ruleName.default(errorRuleName), ruleRuleNameAndErrorRuleNameParts = [
            ruleRuleNamePart,
            errorRuleNamePart
        ], choiceOfRuleRuleNameAndErrorRuleNamePartsPart = new _choiceOfParts.default(ruleRuleNameAndErrorRuleNameParts), oneOrMoreChoiceOfRuleRuleNameAndErrorRuleNamePartsPartsPart = new _oneOrMoreParts.default(choiceOfRuleRuleNameAndErrorRuleNamePartsPart), parts = [
            oneOrMoreChoiceOfRuleRuleNameAndErrorRuleNamePartsPartsPart
        ];
        return _super.call(this, parts);
    }
    return DocumentDefinition;
}(_definition.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL2RvY3VtZW50LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvblwiO1xuaW1wb3J0IFJ1bGVOYW1lUGFydCBmcm9tIFwiLi4vcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZVwiO1xuaW1wb3J0IENob2ljZU9mUGFydHNQYXJ0IGZyb20gXCIuLi9wYXJ0L25vblRlcm1pbmFsL2Nob2ljZU9mUGFydHNcIjtcbmltcG9ydCBPbmVPck1vcmVQYXJ0c1BhcnQgZnJvbSBcIi4uL3BhcnQvbm9uVGVybWluYWwvb25lT3JNb3JlUGFydHNcIjtcblxuaW1wb3J0IHsgUnVsZVJ1bGVOYW1lLCBFcnJvclJ1bGVOYW1lIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb2N1bWVudERlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgcnVsZVJ1bGVOYW1lID0gUnVsZVJ1bGVOYW1lLFxuICAgICAgICAgIGVycm9yUnVsZU5hbWUgPSBFcnJvclJ1bGVOYW1lLFxuICAgICAgICAgIHJ1bGVSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KHJ1bGVSdWxlTmFtZSksXG4gICAgICAgICAgZXJyb3JSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KGVycm9yUnVsZU5hbWUpLFxuICAgICAgICAgIHJ1bGVSdWxlTmFtZUFuZEVycm9yUnVsZU5hbWVQYXJ0cyA9IFtcbiAgICAgICAgICAgIHJ1bGVSdWxlTmFtZVBhcnQsXG4gICAgICAgICAgICBlcnJvclJ1bGVOYW1lUGFydFxuICAgICAgICAgIF0sXG4gICAgICAgICAgY2hvaWNlT2ZSdWxlUnVsZU5hbWVBbmRFcnJvclJ1bGVOYW1lUGFydHNQYXJ0ID0gbmV3IENob2ljZU9mUGFydHNQYXJ0KHJ1bGVSdWxlTmFtZUFuZEVycm9yUnVsZU5hbWVQYXJ0cyksXG4gICAgICAgICAgb25lT3JNb3JlQ2hvaWNlT2ZSdWxlUnVsZU5hbWVBbmRFcnJvclJ1bGVOYW1lUGFydHNQYXJ0c1BhcnQgPSBuZXcgT25lT3JNb3JlUGFydHNQYXJ0KGNob2ljZU9mUnVsZVJ1bGVOYW1lQW5kRXJyb3JSdWxlTmFtZVBhcnRzUGFydCksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBvbmVPck1vcmVDaG9pY2VPZlJ1bGVSdWxlTmFtZUFuZEVycm9yUnVsZU5hbWVQYXJ0c1BhcnRzUGFydFxuICAgICAgICAgIF07XG4gICAgXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiRG9jdW1lbnREZWZpbml0aW9uIiwicnVsZVJ1bGVOYW1lIiwiUnVsZVJ1bGVOYW1lIiwiZXJyb3JSdWxlTmFtZSIsIkVycm9yUnVsZU5hbWUiLCJydWxlUnVsZU5hbWVQYXJ0IiwiUnVsZU5hbWVQYXJ0IiwiZXJyb3JSdWxlTmFtZVBhcnQiLCJydWxlUnVsZU5hbWVBbmRFcnJvclJ1bGVOYW1lUGFydHMiLCJjaG9pY2VPZlJ1bGVSdWxlTmFtZUFuZEVycm9yUnVsZU5hbWVQYXJ0c1BhcnQiLCJDaG9pY2VPZlBhcnRzUGFydCIsIm9uZU9yTW9yZUNob2ljZU9mUnVsZVJ1bGVOYW1lQW5kRXJyb3JSdWxlTmFtZVBhcnRzUGFydHNQYXJ0IiwiT25lT3JNb3JlUGFydHNQYXJ0IiwicGFydHMiLCJEZWZpbml0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFTUUEsa0JBQWtCOzs7K0RBUGhCLGVBQWU7NkRBQ2IsOEJBQThCO2tFQUN6QixtQ0FBbUM7bUVBQ2xDLG9DQUFvQzt5QkFFdkIsY0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0MsSUFBQSxBQUFNQSxrQkFBa0IsaUJBQXhCOzs7YUFBTUEsa0JBQWtCOztRQUVuQyxJQUFNQyxZQUFZLEdBQUdDLFVBQVksYUFBQSxFQUMzQkMsYUFBYSxHQUFHQyxVQUFhLGNBQUEsRUFDN0JDLGdCQUFnQixHQUFHLElBQUlDLFNBQVksUUFBQSxDQUFDTCxZQUFZLENBQUMsRUFDakRNLGlCQUFpQixHQUFHLElBQUlELFNBQVksUUFBQSxDQUFDSCxhQUFhLENBQUMsRUFDbkRLLGlDQUFpQyxHQUFHO1lBQ2xDSCxnQkFBZ0I7WUFDaEJFLGlCQUFpQjtTQUNsQixFQUNERSw2Q0FBNkMsR0FBRyxJQUFJQyxjQUFpQixRQUFBLENBQUNGLGlDQUFpQyxDQUFDLEVBQ3hHRywyREFBMkQsR0FBRyxJQUFJQyxlQUFrQixRQUFBLENBQUNILDZDQUE2QyxDQUFDLEVBQ25JSSxLQUFLLEdBQUc7WUFDTkYsMkRBQTJEO1NBQzVELEFBQUM7aUNBRUZFLEtBQUs7OztDQUVkLENBbEIrQ0MsV0FBVSxRQUFBLENBa0J6RCJ9