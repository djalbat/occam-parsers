"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SequenceOfPartsRule;
    }
});
var _rule = /*#__PURE__*/ _interop_require_default(require("../rule"));
var _sequenceOfParts = /*#__PURE__*/ _interop_require_default(require("../node/bnf/sequenceOfParts"));
var _sequenceOfParts1 = /*#__PURE__*/ _interop_require_default(require("../definition/sequenceOfParts"));
var _ruleNames = require("../ruleNames");
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
var SequenceOfPartsRule = /*#__PURE__*/ function(Rule) {
    _inherits(SequenceOfPartsRule, Rule);
    function SequenceOfPartsRule() {
        _class_call_check(this, SequenceOfPartsRule);
        return _call_super(this, SequenceOfPartsRule, arguments);
    }
    _create_class(SequenceOfPartsRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var name = _ruleNames.sequenceOfPartsRuleName, sequenceOfPartsDefinition = _sequenceOfParts1.default.fromNothing(), opacity = null, definitions = [
                    sequenceOfPartsDefinition
                ], NonTerminalNode = _sequenceOfParts.default, sequenceOfPartsRule = new SequenceOfPartsRule(name, opacity, definitions, NonTerminalNode);
                return sequenceOfPartsRule;
            }
        }
    ]);
    return SequenceOfPartsRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3NlcXVlbmNlT2ZQYXJ0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBTZXF1ZW5jZU9mUGFydHNCTkZOb2RlIGZyb20gXCIuLi9ub2RlL2JuZi9zZXF1ZW5jZU9mUGFydHNcIjtcbmltcG9ydCBTZXF1ZW5jZU9mUGFydHNEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3NlcXVlbmNlT2ZQYXJ0c1wiO1xuXG5pbXBvcnQgeyBzZXF1ZW5jZU9mUGFydHNSdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VxdWVuY2VPZlBhcnRzUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbmFtZSA9IHNlcXVlbmNlT2ZQYXJ0c1J1bGVOYW1lLCAvLy9cbiAgICAgICAgICBzZXF1ZW5jZU9mUGFydHNEZWZpbml0aW9uID0gU2VxdWVuY2VPZlBhcnRzRGVmaW5pdGlvbi5mcm9tTm90aGluZygpLFxuICAgICAgICAgIG9wYWNpdHkgPSBudWxsLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgc2VxdWVuY2VPZlBhcnRzRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gU2VxdWVuY2VPZlBhcnRzQk5GTm9kZSwgLy8vXG4gICAgICAgICAgc2VxdWVuY2VPZlBhcnRzUnVsZSA9IG5ldyBTZXF1ZW5jZU9mUGFydHNSdWxlKG5hbWUsIG9wYWNpdHksIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIHNlcXVlbmNlT2ZQYXJ0c1J1bGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJTZXF1ZW5jZU9mUGFydHNSdWxlIiwiZnJvbU5vdGhpbmciLCJuYW1lIiwic2VxdWVuY2VPZlBhcnRzUnVsZU5hbWUiLCJzZXF1ZW5jZU9mUGFydHNEZWZpbml0aW9uIiwiU2VxdWVuY2VPZlBhcnRzRGVmaW5pdGlvbiIsIm9wYWNpdHkiLCJkZWZpbml0aW9ucyIsIk5vblRlcm1pbmFsTm9kZSIsIlNlcXVlbmNlT2ZQYXJ0c0JORk5vZGUiLCJzZXF1ZW5jZU9mUGFydHNSdWxlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7MkRBTko7c0VBQ2tCO3VFQUNHO3lCQUVFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpCLElBQUEsQUFBTUEsb0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ1pDLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU1DLE9BQU9DLGtDQUF1QixFQUM5QkMsNEJBQTRCQyx5QkFBeUIsQ0FBQ0osV0FBVyxJQUNqRUssVUFBVSxNQUNWQyxjQUFjO29CQUNaSDtpQkFDRCxFQUNESSxrQkFBa0JDLHdCQUFzQixFQUN4Q0Msc0JBQXNCLElBVFhWLG9CQVNtQ0UsTUFBTUksU0FBU0MsYUFBYUM7Z0JBRWhGLE9BQU9FO1lBQ1Q7OztXQVptQlY7RUFBNEJXLGFBQUkifQ==