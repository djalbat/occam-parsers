"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SignificantTokenTypeBNFNode;
    }
});
var _necessary = require("necessary");
var _nonTerminal = /*#__PURE__*/ _interop_require_default(require("../../node/nonTerminal"));
var _significantTokenType = /*#__PURE__*/ _interop_require_default(require("../../part/terminal/significantTokenType"));
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
var first = _necessary.arrayUtilities.first, second = _necessary.arrayUtilities.second;
var SignificantTokenTypeBNFNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(SignificantTokenTypeBNFNode, NonTerminalNode);
    function SignificantTokenTypeBNFNode() {
        _class_call_check(this, SignificantTokenTypeBNFNode);
        var _this;
        _this = _call_super(this, SignificantTokenTypeBNFNode, arguments), _define_property(_this, "regularExpression", /^\[([^\]]+)]$/);
        return _this;
    }
    _create_class(SignificantTokenTypeBNFNode, [
        {
            key: "generatePart",
            value: function generatePart(callAhead) {
                var significantTokenType = this.getSignificantTokenType(), significantTokenTypePart = _significantTokenType.default.fromSignificantTokenType(significantTokenType);
                return significantTokenTypePart;
            }
        },
        {
            key: "getSignificantTokenType",
            value: function getSignificantTokenType() {
                var childNodes = this.getChildNodes(), firstChildNode = first(childNodes), terminalNode = firstChildNode, terminalNodeContent = terminalNode.getContent(), matches = terminalNodeContent.match(this.regularExpression), secondMatch = second(matches), significantTokenType = secondMatch; ///
                return significantTokenType;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _nonTerminal.default.fromRuleNameChildNodesAndOpacity(SignificantTokenTypeBNFNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return SignificantTokenTypeBNFNode;
}(_nonTerminal.default);
module.exports = SignificantTokenTypeBNFNode;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2JuZi9zaWduaWZpY2FudFRva2VuVHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbE5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbm9uVGVybWluYWxcIjtcbmltcG9ydCBTaWduaWZpY2FudFRva2VuVHlwZVBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvdGVybWluYWwvc2lnbmlmaWNhbnRUb2tlblR5cGVcIjtcblxuY29uc3QgeyBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lnbmlmaWNhbnRUb2tlblR5cGVCTkZOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgcmVndWxhckV4cHJlc3Npb24gPSAvXlxcWyhbXlxcXV0rKV0kLztcblxuICBnZW5lcmF0ZVBhcnQoY2FsbEFoZWFkKSB7XG4gICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlblR5cGUgPSB0aGlzLmdldFNpZ25pZmljYW50VG9rZW5UeXBlKCksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0ID0gU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0LmZyb21TaWduaWZpY2FudFRva2VuVHlwZShzaWduaWZpY2FudFRva2VuVHlwZSk7XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0O1xuICB9XG5cbiAgZ2V0U2lnbmlmaWNhbnRUb2tlblR5cGUoKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgdGVybWluYWxOb2RlID0gZmlyc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICB0ZXJtaW5hbE5vZGVDb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBtYXRjaGVzID0gdGVybWluYWxOb2RlQ29udGVudC5tYXRjaCh0aGlzLnJlZ3VsYXJFeHByZXNzaW9uKSxcbiAgICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZSA9IHNlY29uZE1hdGNoOyAvLy9cblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuVHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KFNpZ25pZmljYW50VG9rZW5UeXBlQk5GTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2lnbmlmaWNhbnRUb2tlblR5cGVCTkZOb2RlO1xuXG5cbiJdLCJuYW1lcyI6WyJTaWduaWZpY2FudFRva2VuVHlwZUJORk5vZGUiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwic2Vjb25kIiwicmVndWxhckV4cHJlc3Npb24iLCJnZW5lcmF0ZVBhcnQiLCJjYWxsQWhlYWQiLCJzaWduaWZpY2FudFRva2VuVHlwZSIsImdldFNpZ25pZmljYW50VG9rZW5UeXBlIiwic2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0IiwiU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0IiwiZnJvbVNpZ25pZmljYW50VG9rZW5UeXBlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmaXJzdENoaWxkTm9kZSIsInRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsInJ1bGVOYW1lIiwib3BhY2l0eSIsIk5vblRlcm1pbmFsTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7O3lCQVBVO2tFQUVIOzJFQUNTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQyxJQUFRQyxRQUFrQkMseUJBQWMsQ0FBaENELE9BQU9FLFNBQVdELHlCQUFjLENBQXpCQztBQUVBLElBQUEsQUFBTUgsNENBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBOztnQkFBTixrQkFBTUEseUNBQ25CSSx3QkFBQUEscUJBQW9COzs7a0JBRERKOztZQUduQkssS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFDLFNBQVM7Z0JBQ3BCLElBQU1DLHVCQUF1QixJQUFJLENBQUNDLHVCQUF1QixJQUNuREMsMkJBQTJCQyw2QkFBd0IsQ0FBQ0Msd0JBQXdCLENBQUNKO2dCQUVuRixPQUFPRTtZQUNUOzs7WUFFQUQsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1JLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxpQkFBaUJiLE1BQU1XLGFBQ3ZCRyxlQUFlRCxnQkFDZkUsc0JBQXNCRCxhQUFhRSxVQUFVLElBQzdDQyxVQUFVRixvQkFBb0JHLEtBQUssQ0FBQyxJQUFJLENBQUNmLGlCQUFpQixHQUMxRGdCLGNBQWNqQixPQUFPZSxVQUNyQlgsdUJBQXVCYSxhQUFhLEdBQUc7Z0JBRTdDLE9BQU9iO1lBQ1Q7Ozs7WUFFT2MsS0FBQUE7bUJBQVAsU0FBT0EsaUNBQWlDQyxRQUFRLEVBQUVWLFVBQVUsRUFBRVcsT0FBTztnQkFBSSxPQUFPQyxvQkFBZSxDQUFDSCxnQ0FBZ0MsQ0F0QjdHckIsNkJBc0IySXNCLFVBQVVWLFlBQVlXO1lBQVU7OztXQXRCM0t2QjtFQUFvQ3dCLG9CQUFlO0FBeUJ4RUMsT0FBT0MsT0FBTyxHQUFHMUIifQ==