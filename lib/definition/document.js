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
                var ruleRuleNamePart = new _ruleName.default(_ruleNames.ruleRuleName), errorRuleNamePart = new _ruleName.default(_ruleNames.errorRuleName), ruleRuleNameAndErrorRuleNameParts = [
                    ruleRuleNamePart,
                    errorRuleNamePart
                ], choiceOfRuleRuleNameAndErrorRuleNamePartsPart = new _choiceOfParts.default(ruleRuleNameAndErrorRuleNameParts), oneOrMoreChoiceOfRuleRuleNameAndErrorRuleNamePartsPartsPart = new _oneOrMoreParts.default(choiceOfRuleRuleNameAndErrorRuleNamePartsPart), parts = [
                    oneOrMoreChoiceOfRuleRuleNameAndErrorRuleNamePartsPartsPart
                ], precedence = null, documentDefinition = new DocumentDefinition(parts, precedence);
                return documentDefinition;
            }
        }
    ]);
    return DocumentDefinition;
}(_definition.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL2RvY3VtZW50LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvblwiO1xuaW1wb3J0IFJ1bGVOYW1lUGFydCBmcm9tIFwiLi4vcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZVwiO1xuaW1wb3J0IENob2ljZU9mUGFydHNQYXJ0IGZyb20gXCIuLi9wYXJ0L25vblRlcm1pbmFsL2Nob2ljZU9mUGFydHNcIjtcbmltcG9ydCBPbmVPck1vcmVQYXJ0c1BhcnQgZnJvbSBcIi4uL3BhcnQvbm9uVGVybWluYWwvb25lT3JNb3JlUGFydHNcIjtcblxuaW1wb3J0IHsgcnVsZVJ1bGVOYW1lLCBlcnJvclJ1bGVOYW1lIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb2N1bWVudERlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHJ1bGVSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KHJ1bGVSdWxlTmFtZSksXG4gICAgICAgICAgZXJyb3JSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KGVycm9yUnVsZU5hbWUpLFxuICAgICAgICAgIHJ1bGVSdWxlTmFtZUFuZEVycm9yUnVsZU5hbWVQYXJ0cyA9IFtcbiAgICAgICAgICAgIHJ1bGVSdWxlTmFtZVBhcnQsXG4gICAgICAgICAgICBlcnJvclJ1bGVOYW1lUGFydFxuICAgICAgICAgIF0sXG4gICAgICAgICAgY2hvaWNlT2ZSdWxlUnVsZU5hbWVBbmRFcnJvclJ1bGVOYW1lUGFydHNQYXJ0ID0gbmV3IENob2ljZU9mUGFydHNQYXJ0KHJ1bGVSdWxlTmFtZUFuZEVycm9yUnVsZU5hbWVQYXJ0cyksXG4gICAgICAgICAgb25lT3JNb3JlQ2hvaWNlT2ZSdWxlUnVsZU5hbWVBbmRFcnJvclJ1bGVOYW1lUGFydHNQYXJ0c1BhcnQgPSBuZXcgT25lT3JNb3JlUGFydHNQYXJ0KGNob2ljZU9mUnVsZVJ1bGVOYW1lQW5kRXJyb3JSdWxlTmFtZVBhcnRzUGFydCksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBvbmVPck1vcmVDaG9pY2VPZlJ1bGVSdWxlTmFtZUFuZEVycm9yUnVsZU5hbWVQYXJ0c1BhcnRzUGFydFxuICAgICAgICAgIF0sXG4gICAgICAgICAgcHJlY2VkZW5jZSA9IG51bGwsXG4gICAgICAgICAgZG9jdW1lbnREZWZpbml0aW9uID0gbmV3IERvY3VtZW50RGVmaW5pdGlvbihwYXJ0cywgcHJlY2VkZW5jZSk7XG5cbiAgICByZXR1cm4gZG9jdW1lbnREZWZpbml0aW9uO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkRvY3VtZW50RGVmaW5pdGlvbiIsImZyb21Ob3RoaW5nIiwicnVsZVJ1bGVOYW1lUGFydCIsIlJ1bGVOYW1lUGFydCIsInJ1bGVSdWxlTmFtZSIsImVycm9yUnVsZU5hbWVQYXJ0IiwiZXJyb3JSdWxlTmFtZSIsInJ1bGVSdWxlTmFtZUFuZEVycm9yUnVsZU5hbWVQYXJ0cyIsImNob2ljZU9mUnVsZVJ1bGVOYW1lQW5kRXJyb3JSdWxlTmFtZVBhcnRzUGFydCIsIkNob2ljZU9mUGFydHNQYXJ0Iiwib25lT3JNb3JlQ2hvaWNlT2ZSdWxlUnVsZU5hbWVBbmRFcnJvclJ1bGVOYW1lUGFydHNQYXJ0c1BhcnQiLCJPbmVPck1vcmVQYXJ0c1BhcnQiLCJwYXJ0cyIsInByZWNlZGVuY2UiLCJkb2N1bWVudERlZmluaXRpb24iLCJEZWZpbml0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7OztpRUFQRTsrREFDRTtvRUFDSztxRUFDQzt5QkFFYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFBLEFBQU1BLG1DQUFOO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ1pDLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU1DLG1CQUFtQixJQUFJQyxrQkFBYUMsMEJBQ3BDQyxvQkFBb0IsSUFBSUYsa0JBQWFHLDJCQUNyQ0Msb0NBQW9DO29CQUNsQ0w7b0JBQ0FHO2lCQUNELEVBQ0RHLGdEQUFnRCxJQUFJQyx1QkFBa0JGLG9DQUN0RUcsOERBQThELElBQUlDLHdCQUFtQkgsZ0RBQ3JGSSxRQUFRO29CQUNORjtpQkFDRCxFQUNERyxhQUFhLE1BQ2JDLHFCQUFxQixJQWRWZCxtQkFjaUNZLE9BQU9DO2dCQUV6RCxPQUFPQztZQUNUOzs7V0FqQm1CZDtFQUEyQmUifQ==