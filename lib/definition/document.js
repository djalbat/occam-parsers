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
var _partChoice = /*#__PURE__*/ _interop_require_default(require("../partChoice"));
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
                var ruleRuleNamePart = _ruleName.default.fromRuleName(_ruleNames.ruleRuleName), errorRuleNamePart = _ruleName.default.fromRuleName(_ruleNames.errorRuleName), ruleRuleNamePartChoice = _partChoice.default.fromPart(ruleRuleNamePart), errorRuleNamePartChoice = _partChoice.default.fromPart(errorRuleNamePart), partChoices = [
                    ruleRuleNamePartChoice,
                    errorRuleNamePartChoice
                ], choiceOfRuleRuleNameAndErrorRuleNamePartsPart = _choiceOfParts.default.fromPartChoices(partChoices), oneOrMoreChoiceOfRuleRuleNameAndErrorRuleNamePartsPartsPart = _oneOrMoreParts.default.fromPart(choiceOfRuleRuleNameAndErrorRuleNamePartsPart), parts = [
                    oneOrMoreChoiceOfRuleRuleNameAndErrorRuleNamePartsPartsPart
                ], precedence = null, documentDefinition = new DocumentDefinition(parts, precedence);
                return documentDefinition;
            }
        }
    ]);
    return DocumentDefinition;
}(_definition.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL2RvY3VtZW50LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvblwiO1xuaW1wb3J0IFBhcnRDaG9pY2UgZnJvbSBcIi4uL3BhcnRDaG9pY2VcIjtcbmltcG9ydCBSdWxlTmFtZVBhcnQgZnJvbSBcIi4uL3BhcnQvbm9uVGVybWluYWwvcnVsZU5hbWVcIjtcbmltcG9ydCBDaG9pY2VPZlBhcnRzUGFydCBmcm9tIFwiLi4vcGFydC9ub25UZXJtaW5hbC9jaG9pY2VPZlBhcnRzXCI7XG5pbXBvcnQgT25lT3JNb3JlUGFydHNQYXJ0IGZyb20gXCIuLi9wYXJ0L25vblRlcm1pbmFsL29uZU9yTW9yZVBhcnRzXCI7XG5cbmltcG9ydCB7IHJ1bGVSdWxlTmFtZSwgZXJyb3JSdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9jdW1lbnREZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBydWxlUnVsZU5hbWVQYXJ0ID0gUnVsZU5hbWVQYXJ0LmZyb21SdWxlTmFtZShydWxlUnVsZU5hbWUpLFxuICAgICAgICAgIGVycm9yUnVsZU5hbWVQYXJ0ID0gUnVsZU5hbWVQYXJ0LmZyb21SdWxlTmFtZShlcnJvclJ1bGVOYW1lKSxcbiAgICAgICAgICBydWxlUnVsZU5hbWVQYXJ0Q2hvaWNlID0gUGFydENob2ljZS5mcm9tUGFydChydWxlUnVsZU5hbWVQYXJ0KSxcbiAgICAgICAgICBlcnJvclJ1bGVOYW1lUGFydENob2ljZSA9IFBhcnRDaG9pY2UuZnJvbVBhcnQoZXJyb3JSdWxlTmFtZVBhcnQpLFxuICAgICAgICAgIHBhcnRDaG9pY2VzID0gW1xuICAgICAgICAgICAgcnVsZVJ1bGVOYW1lUGFydENob2ljZSxcbiAgICAgICAgICAgIGVycm9yUnVsZU5hbWVQYXJ0Q2hvaWNlXG4gICAgICAgICAgXSxcbiAgICAgICAgICBjaG9pY2VPZlJ1bGVSdWxlTmFtZUFuZEVycm9yUnVsZU5hbWVQYXJ0c1BhcnQgPSBDaG9pY2VPZlBhcnRzUGFydC5mcm9tUGFydENob2ljZXMocGFydENob2ljZXMpLFxuICAgICAgICAgIG9uZU9yTW9yZUNob2ljZU9mUnVsZVJ1bGVOYW1lQW5kRXJyb3JSdWxlTmFtZVBhcnRzUGFydHNQYXJ0ID0gT25lT3JNb3JlUGFydHNQYXJ0LmZyb21QYXJ0KGNob2ljZU9mUnVsZVJ1bGVOYW1lQW5kRXJyb3JSdWxlTmFtZVBhcnRzUGFydCksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBvbmVPck1vcmVDaG9pY2VPZlJ1bGVSdWxlTmFtZUFuZEVycm9yUnVsZU5hbWVQYXJ0c1BhcnRzUGFydFxuICAgICAgICAgIF0sXG4gICAgICAgICAgcHJlY2VkZW5jZSA9IG51bGwsXG4gICAgICAgICAgZG9jdW1lbnREZWZpbml0aW9uID0gbmV3IERvY3VtZW50RGVmaW5pdGlvbihwYXJ0cywgcHJlY2VkZW5jZSk7XG5cbiAgICByZXR1cm4gZG9jdW1lbnREZWZpbml0aW9uO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkRvY3VtZW50RGVmaW5pdGlvbiIsImZyb21Ob3RoaW5nIiwicnVsZVJ1bGVOYW1lUGFydCIsIlJ1bGVOYW1lUGFydCIsImZyb21SdWxlTmFtZSIsInJ1bGVSdWxlTmFtZSIsImVycm9yUnVsZU5hbWVQYXJ0IiwiZXJyb3JSdWxlTmFtZSIsInJ1bGVSdWxlTmFtZVBhcnRDaG9pY2UiLCJQYXJ0Q2hvaWNlIiwiZnJvbVBhcnQiLCJlcnJvclJ1bGVOYW1lUGFydENob2ljZSIsInBhcnRDaG9pY2VzIiwiY2hvaWNlT2ZSdWxlUnVsZU5hbWVBbmRFcnJvclJ1bGVOYW1lUGFydHNQYXJ0IiwiQ2hvaWNlT2ZQYXJ0c1BhcnQiLCJmcm9tUGFydENob2ljZXMiLCJvbmVPck1vcmVDaG9pY2VPZlJ1bGVSdWxlTmFtZUFuZEVycm9yUnVsZU5hbWVQYXJ0c1BhcnRzUGFydCIsIk9uZU9yTW9yZVBhcnRzUGFydCIsInBhcnRzIiwicHJlY2VkZW5jZSIsImRvY3VtZW50RGVmaW5pdGlvbiIsIkRlZmluaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7O2lFQVJFO2lFQUNBOytEQUNFO29FQUNLO3FFQUNDO3lCQUVhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdCLElBQUEsQUFBTUEsbUNBQU47Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDWkMsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTUMsbUJBQW1CQyxrQkFBYUMsYUFBYUMsMEJBQzdDQyxvQkFBb0JILGtCQUFhQyxhQUFhRywyQkFDOUNDLHlCQUF5QkMsb0JBQVdDLFNBQVNSLG1CQUM3Q1MsMEJBQTBCRixvQkFBV0MsU0FBU0osb0JBQzlDTSxjQUFjO29CQUNaSjtvQkFDQUc7aUJBQ0QsRUFDREUsZ0RBQWdEQyx1QkFBa0JDLGdCQUFnQkgsY0FDbEZJLDhEQUE4REMsd0JBQW1CUCxTQUFTRyxnREFDMUZLLFFBQVE7b0JBQ05GO2lCQUNELEVBQ0RHLGFBQWEsTUFDYkMscUJBQXFCLElBaEJWcEIsbUJBZ0JpQ2tCLE9BQU9DO2dCQUV6RCxPQUFPQztZQUNUOzs7V0FuQm1CcEI7RUFBMkJxQiJ9