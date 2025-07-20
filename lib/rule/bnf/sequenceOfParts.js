"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SequenceOfPartsBNFRule;
    }
});
var _rule = /*#__PURE__*/ _interop_require_default(require("../../rule"));
var _sequenceOfParts = /*#__PURE__*/ _interop_require_default(require("../../definition/sequenceOfParts"));
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
var SequenceOfPartsBNFRule = /*#__PURE__*/ function(Rule) {
    _inherits(SequenceOfPartsBNFRule, Rule);
    function SequenceOfPartsBNFRule() {
        _class_call_check(this, SequenceOfPartsBNFRule);
        return _call_super(this, SequenceOfPartsBNFRule, arguments);
    }
    _create_class(SequenceOfPartsBNFRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var name = _ruleNames.SEQUENCE_OF_PARTS_RULE_NAME, sequenceOfPartsDefinition = _sequenceOfParts.default.fromNothing(), opacity = null, definitions = [
                    sequenceOfPartsDefinition
                ], sequenceOfPartsRule = new SequenceOfPartsBNFRule(name, opacity, definitions);
                return sequenceOfPartsRule;
            }
        }
    ]);
    return SequenceOfPartsBNFRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9zZXF1ZW5jZU9mUGFydHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi8uLi9ydWxlXCI7XG5pbXBvcnQgU2VxdWVuY2VPZlBhcnRzRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvbi9zZXF1ZW5jZU9mUGFydHNcIjtcblxuaW1wb3J0IHsgU0VRVUVOQ0VfT0ZfUEFSVFNfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXF1ZW5jZU9mUGFydHNCTkZSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBuYW1lID0gU0VRVUVOQ0VfT0ZfUEFSVFNfUlVMRV9OQU1FLCAvLy9cbiAgICAgICAgICBzZXF1ZW5jZU9mUGFydHNEZWZpbml0aW9uID0gU2VxdWVuY2VPZlBhcnRzRGVmaW5pdGlvbi5mcm9tTm90aGluZygpLFxuICAgICAgICAgIG9wYWNpdHkgPSBudWxsLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgc2VxdWVuY2VPZlBhcnRzRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgc2VxdWVuY2VPZlBhcnRzUnVsZSA9IG5ldyBTZXF1ZW5jZU9mUGFydHNCTkZSdWxlKG5hbWUsIG9wYWNpdHksIGRlZmluaXRpb25zKTtcblxuICAgIHJldHVybiBzZXF1ZW5jZU9mUGFydHNSdWxlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiU2VxdWVuY2VPZlBhcnRzQk5GUnVsZSIsImZyb21Ob3RoaW5nIiwibmFtZSIsIlNFUVVFTkNFX09GX1BBUlRTX1JVTEVfTkFNRSIsInNlcXVlbmNlT2ZQYXJ0c0RlZmluaXRpb24iLCJTZXF1ZW5jZU9mUGFydHNEZWZpbml0aW9uIiwib3BhY2l0eSIsImRlZmluaXRpb25zIiwic2VxdWVuY2VPZlBhcnRzUnVsZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7OzJEQUxKO3NFQUNxQjt5QkFFTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFBLEFBQU1BLHVDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ1pDLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU1DLE9BQU9DLHNDQUEyQixFQUNsQ0MsNEJBQTRCQyx3QkFBeUIsQ0FBQ0osV0FBVyxJQUNqRUssVUFBVSxNQUNWQyxjQUFjO29CQUNaSDtpQkFDRCxFQUNESSxzQkFBc0IsSUFSWFIsdUJBUXNDRSxNQUFNSSxTQUFTQztnQkFFdEUsT0FBT0M7WUFDVDs7O1dBWG1CUjtFQUErQlMsYUFBSSJ9