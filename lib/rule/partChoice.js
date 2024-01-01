"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PartChoiceRule;
    }
});
var _rule = /*#__PURE__*/ _interop_require_default(require("../rule"));
var _partChoice = /*#__PURE__*/ _interop_require_default(require("../node/bnf/partChoice"));
var _partChoice1 = /*#__PURE__*/ _interop_require_default(require("../definition/partChoice"));
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
var PartChoiceRule = /*#__PURE__*/ function(Rule) {
    _inherits(PartChoiceRule, Rule);
    var _super = _create_super(PartChoiceRule);
    function PartChoiceRule() {
        _class_call_check(this, PartChoiceRule);
        return _super.apply(this, arguments);
    }
    _create_class(PartChoiceRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var name = _ruleNames.partChoiceRuleName, partChoiceDefinition = _partChoice1.default.fromNothing(), ambiguous = false, definitions = [
                    partChoiceDefinition
                ], NonTerminalNode = _partChoice.default, definitionRule = new PartChoiceRule(name, ambiguous, definitions, NonTerminalNode);
                return definitionRule;
            }
        }
    ]);
    return PartChoiceRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3BhcnRDaG9pY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi9ydWxlXCI7XG5pbXBvcnQgUGFydENob2ljZUJORk5vZGUgZnJvbSBcIi4uL25vZGUvYm5mL3BhcnRDaG9pY2VcIjtcbmltcG9ydCBQYXJ0Q2hvaWNlRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvbi9wYXJ0Q2hvaWNlXCI7XG5cbmltcG9ydCB7IHBhcnRDaG9pY2VSdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFydENob2ljZVJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG5hbWUgPSBwYXJ0Q2hvaWNlUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBwYXJ0Q2hvaWNlRGVmaW5pdGlvbiA9IFBhcnRDaG9pY2VEZWZpbml0aW9uLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgYW1iaWd1b3VzID0gZmFsc2UsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBwYXJ0Q2hvaWNlRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gUGFydENob2ljZUJORk5vZGUsICAvLy9cbiAgICAgICAgICBkZWZpbml0aW9uUnVsZSA9IG5ldyBQYXJ0Q2hvaWNlUnVsZShuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIGRlZmluaXRpb25SdWxlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUGFydENob2ljZVJ1bGUiLCJmcm9tTm90aGluZyIsIm5hbWUiLCJwYXJ0Q2hvaWNlUnVsZU5hbWUiLCJwYXJ0Q2hvaWNlRGVmaW5pdGlvbiIsIlBhcnRDaG9pY2VEZWZpbml0aW9uIiwiYW1iaWd1b3VzIiwiZGVmaW5pdGlvbnMiLCJOb25UZXJtaW5hbE5vZGUiLCJQYXJ0Q2hvaWNlQk5GTm9kZSIsImRlZmluaXRpb25SdWxlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7MkRBTko7aUVBQ2E7a0VBQ0c7eUJBRUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEIsSUFBQSxBQUFNQSwrQkFBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ1pDLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU1DLE9BQU9DLDZCQUFrQixFQUN6QkMsdUJBQXVCQyxvQkFBb0IsQ0FBQ0osV0FBVyxJQUN2REssWUFBWSxPQUNaQyxjQUFjO29CQUNaSDtpQkFDRCxFQUNESSxrQkFBa0JDLG1CQUFpQixFQUNuQ0MsaUJBQWlCLElBVE5WLGVBU3lCRSxNQUFNSSxXQUFXQyxhQUFhQztnQkFFeEUsT0FBT0U7WUFDVDs7O1dBWm1CVjtFQUF1QlcsYUFBSSJ9