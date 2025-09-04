"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return WildcardBNFRule;
    }
});
var _occamlexers = require("occam-lexers");
var _rule = /*#__PURE__*/ _interop_require_default(require("../../rule"));
var _stringLiteral = /*#__PURE__*/ _interop_require_default(require("../../definition/stringLiteral"));
var _ruleNames = require("../../ruleNames");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var wildcard = _occamlexers.specialSymbols.wildcard;
var WildcardBNFRule = /*#__PURE__*/ function(Rule) {
    _inherits(WildcardBNFRule, Rule);
    function WildcardBNFRule() {
        _class_call_check(this, WildcardBNFRule);
        return _call_super(this, WildcardBNFRule, arguments);
    }
    _create_class(WildcardBNFRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var content = wildcard, wildcardStringLiteralDefinition = _stringLiteral.default.fromContent(content), name = _ruleNames.WILDCARD_RULE_NAME, opacity = null, definitions = [
                    wildcardStringLiteralDefinition
                ], wildcardRule = new WildcardBNFRule(name, opacity, definitions);
                return wildcardRule;
            }
        }
    ]);
    return WildcardBNFRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi93aWxkY2FyZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi8uLi9ydWxlXCI7XG5pbXBvcnQgU3RyaW5nTGl0ZXJhbERlZmluaXRpb24gZnJvbSBcIi4uLy4uL2RlZmluaXRpb24vc3RyaW5nTGl0ZXJhbFwiO1xuXG5pbXBvcnQgeyBXSUxEQ0FSRF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHsgd2lsZGNhcmQgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaWxkY2FyZEJORlJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB3aWxkY2FyZCwgLy8vXG4gICAgICAgICAgd2lsZGNhcmRTdHJpbmdMaXRlcmFsRGVmaW5pdGlvbiA9IFN0cmluZ0xpdGVyYWxEZWZpbml0aW9uLmZyb21Db250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIG5hbWUgPSBXSUxEQ0FSRF9SVUxFX05BTUUsICAvLy9cbiAgICAgICAgICBvcGFjaXR5ID0gbnVsbCxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIHdpbGRjYXJkU3RyaW5nTGl0ZXJhbERlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIHdpbGRjYXJkUnVsZSA9IG5ldyBXaWxkY2FyZEJORlJ1bGUobmFtZSwgb3BhY2l0eSwgZGVmaW5pdGlvbnMpO1xuXG4gICAgcmV0dXJuIHdpbGRjYXJkUnVsZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIldpbGRjYXJkQk5GUnVsZSIsIndpbGRjYXJkIiwic3BlY2lhbFN5bWJvbHMiLCJmcm9tTm90aGluZyIsImNvbnRlbnQiLCJ3aWxkY2FyZFN0cmluZ0xpdGVyYWxEZWZpbml0aW9uIiwiU3RyaW5nTGl0ZXJhbERlZmluaXRpb24iLCJmcm9tQ29udGVudCIsIm5hbWUiLCJXSUxEQ0FSRF9SVUxFX05BTUUiLCJvcGFjaXR5IiwiZGVmaW5pdGlvbnMiLCJ3aWxkY2FyZFJ1bGUiLCJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVdxQkE7OzsyQkFUVTsyREFFZDtvRUFDbUI7eUJBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkMsSUFBTSxBQUFFQyxXQUFhQywyQkFBYyxDQUEzQkQ7QUFFTyxJQUFBLEFBQU1ELGdDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ1pHLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU1DLFVBQVVILFVBQ1ZJLGtDQUFrQ0Msc0JBQXVCLENBQUNDLFdBQVcsQ0FBQ0gsVUFDdEVJLE9BQU9DLDZCQUFrQixFQUN6QkMsVUFBVSxNQUNWQyxjQUFjO29CQUNaTjtpQkFDRCxFQUNETyxlQUFlLElBVEpaLGdCQVN3QlEsTUFBTUUsU0FBU0M7Z0JBRXhELE9BQU9DO1lBQ1Q7OztXQVptQlo7RUFBd0JhLGFBQUkifQ==