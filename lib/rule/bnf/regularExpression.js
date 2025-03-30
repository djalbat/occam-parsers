"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RegularExpressionBNFRule;
    }
});
var _occamlexers = require("occam-lexers");
var _rule = /*#__PURE__*/ _interop_require_default(require("../../rule"));
var _regularExpression = /*#__PURE__*/ _interop_require_default(require("../../node/bnf/regularExpression"));
var _significantTokenType = /*#__PURE__*/ _interop_require_default(require("../../definition/significantTokenType"));
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
var regularExpressionType = _occamlexers.types.regularExpressionType;
var RegularExpressionBNFRule = /*#__PURE__*/ function(Rule) {
    _inherits(RegularExpressionBNFRule, Rule);
    function RegularExpressionBNFRule() {
        _class_call_check(this, RegularExpressionBNFRule);
        return _call_super(this, RegularExpressionBNFRule, arguments);
    }
    _create_class(RegularExpressionBNFRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var significantTokenType = regularExpressionType, regularExpressionSignificantTokenTypeDefinition = _significantTokenType.default.fromSignificantTokenType(significantTokenType), name = _ruleNames.regularExpressionRuleName, opacity = null, definitions = [
                    regularExpressionSignificantTokenTypeDefinition
                ], NonTerminalNode = _regularExpression.default, regularExpressionRule = new RegularExpressionBNFRule(name, opacity, definitions, NonTerminalNode);
                return regularExpressionRule;
            }
        }
    ]);
    return RegularExpressionBNFRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9yZWd1bGFyRXhwcmVzc2lvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgdHlwZXMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi8uLi9ydWxlXCI7XG5pbXBvcnQgUmVndWxhckV4cHJlc3Npb25CTkZOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2JuZi9yZWd1bGFyRXhwcmVzc2lvblwiO1xuaW1wb3J0IFNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvbi9zaWduaWZpY2FudFRva2VuVHlwZVwiO1xuXG5pbXBvcnQgeyByZWd1bGFyRXhwcmVzc2lvblJ1bGVOYW1lIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCB7IHJlZ3VsYXJFeHByZXNzaW9uVHlwZSB9ID0gdHlwZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZ3VsYXJFeHByZXNzaW9uQk5GUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlblR5cGUgPSByZWd1bGFyRXhwcmVzc2lvblR5cGUsICAvLy9cbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvbiA9IFNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvbi5mcm9tU2lnbmlmaWNhbnRUb2tlblR5cGUoc2lnbmlmaWNhbnRUb2tlblR5cGUpLFxuICAgICAgICAgIG5hbWUgPSByZWd1bGFyRXhwcmVzc2lvblJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICBvcGFjaXR5ID0gbnVsbCxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBSZWd1bGFyRXhwcmVzc2lvbkJORk5vZGUsIC8vL1xuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUnVsZSA9IG5ldyBSZWd1bGFyRXhwcmVzc2lvbkJORlJ1bGUobmFtZSwgb3BhY2l0eSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gcmVndWxhckV4cHJlc3Npb25SdWxlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUmVndWxhckV4cHJlc3Npb25CTkZSdWxlIiwicmVndWxhckV4cHJlc3Npb25UeXBlIiwidHlwZXMiLCJmcm9tTm90aGluZyIsInNpZ25pZmljYW50VG9rZW5UeXBlIiwicmVndWxhckV4cHJlc3Npb25TaWduaWZpY2FudFRva2VuVHlwZURlZmluaXRpb24iLCJTaWduaWZpY2FudFRva2VuVHlwZURlZmluaXRpb24iLCJmcm9tU2lnbmlmaWNhbnRUb2tlblR5cGUiLCJuYW1lIiwicmVndWxhckV4cHJlc3Npb25SdWxlTmFtZSIsIm9wYWNpdHkiLCJkZWZpbml0aW9ucyIsIk5vblRlcm1pbmFsTm9kZSIsIlJlZ3VsYXJFeHByZXNzaW9uQk5GTm9kZSIsInJlZ3VsYXJFeHByZXNzaW9uUnVsZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBWXFCQTs7OzJCQVZDOzJEQUVMO3dFQUNvQjsyRUFDTTt5QkFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQyxJQUFNLEFBQUVDLHdCQUEwQkMsa0JBQUssQ0FBL0JEO0FBRU8sSUFBQSxBQUFNRCx5Q0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDWkcsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTUMsdUJBQXVCSCx1QkFDdkJJLGtEQUFrREMsNkJBQThCLENBQUNDLHdCQUF3QixDQUFDSCx1QkFDMUdJLE9BQU9DLG9DQUF5QixFQUNoQ0MsVUFBVSxNQUNWQyxjQUFjO29CQUNaTjtpQkFDRCxFQUNETyxrQkFBa0JDLDBCQUF3QixFQUMxQ0Msd0JBQXdCLElBVmJkLHlCQVUwQ1EsTUFBTUUsU0FBU0MsYUFBYUM7Z0JBRXZGLE9BQU9FO1lBQ1Q7OztXQWJtQmQ7RUFBaUNlLGFBQUkifQ==