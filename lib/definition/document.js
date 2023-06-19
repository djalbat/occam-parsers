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
var _definition = /*#__PURE__*/ _interop_require_default(require("../definition"));
var _ruleName = /*#__PURE__*/ _interop_require_default(require("../part/nonTerminal/ruleName"));
var _choiceOfParts = /*#__PURE__*/ _interop_require_default(require("../part/nonTerminal/choiceOfParts"));
var _oneOrMoreParts = /*#__PURE__*/ _interop_require_default(require("../part/nonTerminal/oneOrMoreParts"));
var _ruleNames = require("../ruleNames");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var DocumentDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(DocumentDefinition, Definition);
    var _super = _create_super(DocumentDefinition);
    function DocumentDefinition() {
        _class_call_check(this, DocumentDefinition);
        return _super.apply(this, arguments);
    }
    _create_class(DocumentDefinition, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var parts;
                var ruleRuleNamePart = _ruleName.default.fromRuleName(_ruleNames.ruleRuleName), errorRuleNamePart = _ruleName.default.fromRuleName(_ruleNames.errorRuleName);
                parts = [
                    ruleRuleNamePart,
                    errorRuleNamePart
                ];
                var choiceOfRuleRuleNameAndErrorRuleNamePartsPart = _choiceOfParts.default.fromParts(parts), oneOrMoreChoiceOfRuleRuleNameAndErrorRuleNamePartsPartsPart = _oneOrMoreParts.default.fromPart(choiceOfRuleRuleNameAndErrorRuleNamePartsPart);
                parts = [
                    oneOrMoreChoiceOfRuleRuleNameAndErrorRuleNamePartsPartsPart
                ];
                var precedence = null, documentDefinition = new DocumentDefinition(parts, precedence);
                return documentDefinition;
            }
        }
    ]);
    return DocumentDefinition;
}(_definition.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL2RvY3VtZW50LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvblwiO1xuaW1wb3J0IFJ1bGVOYW1lUGFydCBmcm9tIFwiLi4vcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZVwiO1xuaW1wb3J0IENob2ljZU9mUGFydHNQYXJ0IGZyb20gXCIuLi9wYXJ0L25vblRlcm1pbmFsL2Nob2ljZU9mUGFydHNcIjtcbmltcG9ydCBPbmVPck1vcmVQYXJ0c1BhcnQgZnJvbSBcIi4uL3BhcnQvbm9uVGVybWluYWwvb25lT3JNb3JlUGFydHNcIjtcblxuaW1wb3J0IHsgcnVsZVJ1bGVOYW1lLCBlcnJvclJ1bGVOYW1lIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb2N1bWVudERlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGxldCBwYXJ0cztcblxuICAgIGNvbnN0IHJ1bGVSdWxlTmFtZVBhcnQgPSBSdWxlTmFtZVBhcnQuZnJvbVJ1bGVOYW1lKHJ1bGVSdWxlTmFtZSksXG4gICAgICAgICAgZXJyb3JSdWxlTmFtZVBhcnQgPSBSdWxlTmFtZVBhcnQuZnJvbVJ1bGVOYW1lKGVycm9yUnVsZU5hbWUpO1xuXG4gICAgcGFydHMgPSBbXG4gICAgICBydWxlUnVsZU5hbWVQYXJ0LFxuICAgICAgZXJyb3JSdWxlTmFtZVBhcnRcbiAgICBdO1xuXG4gICAgY29uc3QgY2hvaWNlT2ZSdWxlUnVsZU5hbWVBbmRFcnJvclJ1bGVOYW1lUGFydHNQYXJ0ID0gQ2hvaWNlT2ZQYXJ0c1BhcnQuZnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgICBvbmVPck1vcmVDaG9pY2VPZlJ1bGVSdWxlTmFtZUFuZEVycm9yUnVsZU5hbWVQYXJ0c1BhcnRzUGFydCA9IE9uZU9yTW9yZVBhcnRzUGFydC5mcm9tUGFydChjaG9pY2VPZlJ1bGVSdWxlTmFtZUFuZEVycm9yUnVsZU5hbWVQYXJ0c1BhcnQpO1xuXG4gICAgcGFydHMgPSBbXG4gICAgICBvbmVPck1vcmVDaG9pY2VPZlJ1bGVSdWxlTmFtZUFuZEVycm9yUnVsZU5hbWVQYXJ0c1BhcnRzUGFydFxuICAgIF07XG5cbiAgICBjb25zdCBwcmVjZWRlbmNlID0gbnVsbCxcbiAgICAgICAgICBkb2N1bWVudERlZmluaXRpb24gPSBuZXcgRG9jdW1lbnREZWZpbml0aW9uKHBhcnRzLCBwcmVjZWRlbmNlKTtcblxuICAgIHJldHVybiBkb2N1bWVudERlZmluaXRpb247XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiRG9jdW1lbnREZWZpbml0aW9uIiwiZnJvbU5vdGhpbmciLCJwYXJ0cyIsInJ1bGVSdWxlTmFtZVBhcnQiLCJSdWxlTmFtZVBhcnQiLCJmcm9tUnVsZU5hbWUiLCJydWxlUnVsZU5hbWUiLCJlcnJvclJ1bGVOYW1lUGFydCIsImVycm9yUnVsZU5hbWUiLCJjaG9pY2VPZlJ1bGVSdWxlTmFtZUFuZEVycm9yUnVsZU5hbWVQYXJ0c1BhcnQiLCJDaG9pY2VPZlBhcnRzUGFydCIsImZyb21QYXJ0cyIsIm9uZU9yTW9yZUNob2ljZU9mUnVsZVJ1bGVOYW1lQW5kRXJyb3JSdWxlTmFtZVBhcnRzUGFydHNQYXJ0IiwiT25lT3JNb3JlUGFydHNQYXJ0IiwiZnJvbVBhcnQiLCJwcmVjZWRlbmNlIiwiZG9jdW1lbnREZWZpbml0aW9uIiwiRGVmaW5pdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7aUVBUEU7K0RBQ0U7b0VBQ0s7cUVBQ0M7eUJBRWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0IsSUFBQSxBQUFNQSxtQ0FBTjtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNaQyxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFJQztnQkFFSixJQUFNQyxtQkFBbUJDLGtCQUFhQyxhQUFhQywwQkFDN0NDLG9CQUFvQkgsa0JBQWFDLGFBQWFHO2dCQUVwRE4sUUFBUTtvQkFDTkM7b0JBQ0FJO2lCQUNEO2dCQUVELElBQU1FLGdEQUFnREMsdUJBQWtCQyxVQUFVVCxRQUM1RVUsOERBQThEQyx3QkFBbUJDLFNBQVNMO2dCQUVoR1AsUUFBUTtvQkFDTlU7aUJBQ0Q7Z0JBRUQsSUFBTUcsYUFBYSxNQUNiQyxxQkFBcUIsSUFwQlZoQixtQkFvQmlDRSxPQUFPYTtnQkFFekQsT0FBT0M7WUFDVDs7O1dBdkJtQmhCO0VBQTJCaUIifQ==