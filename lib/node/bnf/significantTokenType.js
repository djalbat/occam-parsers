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
var first = _necessary.arrayUtilities.first, second = _necessary.arrayUtilities.second;
var SignificantTokenTypeBNFNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(SignificantTokenTypeBNFNode, NonTerminalNode);
    var _super = _create_super(SignificantTokenTypeBNFNode);
    function SignificantTokenTypeBNFNode() {
        _class_call_check(this, SignificantTokenTypeBNFNode);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "regularExpression", /^\[([^\]]+)]$/);
        return _this;
    }
    _create_class(SignificantTokenTypeBNFNode, [
        {
            key: "generatePart",
            value: function generatePart(lookAhead) {
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
            key: "fromRuleNameAndChildNodes",
            value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
                return _nonTerminal.default.fromRuleNameAndChildNodes(SignificantTokenTypeBNFNode, ruleName, childNodes);
            }
        }
    ]);
    return SignificantTokenTypeBNFNode;
}(_nonTerminal.default);
module.exports = SignificantTokenTypeBNFNode;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2JuZi9zaWduaWZpY2FudFRva2VuVHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbE5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbm9uVGVybWluYWxcIjtcbmltcG9ydCBTaWduaWZpY2FudFRva2VuVHlwZVBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvdGVybWluYWwvc2lnbmlmaWNhbnRUb2tlblR5cGVcIjtcblxuY29uc3QgeyBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lnbmlmaWNhbnRUb2tlblR5cGVCTkZOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgcmVndWxhckV4cHJlc3Npb24gPSAvXlxcWyhbXlxcXV0rKV0kLztcblxuICBnZW5lcmF0ZVBhcnQobG9va0FoZWFkKSB7XG4gICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlblR5cGUgPSB0aGlzLmdldFNpZ25pZmljYW50VG9rZW5UeXBlKCksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0ID0gU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0LmZyb21TaWduaWZpY2FudFRva2VuVHlwZShzaWduaWZpY2FudFRva2VuVHlwZSk7XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0O1xuICB9XG5cbiAgZ2V0U2lnbmlmaWNhbnRUb2tlblR5cGUoKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgdGVybWluYWxOb2RlID0gZmlyc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICB0ZXJtaW5hbE5vZGVDb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBtYXRjaGVzID0gdGVybWluYWxOb2RlQ29udGVudC5tYXRjaCh0aGlzLnJlZ3VsYXJFeHByZXNzaW9uKSxcbiAgICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZSA9IHNlY29uZE1hdGNoOyAvLy9cblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuVHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhTaWduaWZpY2FudFRva2VuVHlwZUJORk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNpZ25pZmljYW50VG9rZW5UeXBlQk5GTm9kZTtcblxuXG4iXSwibmFtZXMiOlsiU2lnbmlmaWNhbnRUb2tlblR5cGVCTkZOb2RlIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsInNlY29uZCIsInJlZ3VsYXJFeHByZXNzaW9uIiwiZ2VuZXJhdGVQYXJ0IiwibG9va0FoZWFkIiwic2lnbmlmaWNhbnRUb2tlblR5cGUiLCJnZXRTaWduaWZpY2FudFRva2VuVHlwZSIsInNpZ25pZmljYW50VG9rZW5UeXBlUGFydCIsIlNpZ25pZmljYW50VG9rZW5UeXBlUGFydCIsImZyb21TaWduaWZpY2FudFRva2VuVHlwZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZmlyc3RDaGlsZE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsIm1hdGNoZXMiLCJtYXRjaCIsInNlY29uZE1hdGNoIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsInJ1bGVOYW1lIiwiTm9uVGVybWluYWxOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7eUJBUFU7a0VBRUg7MkVBQ1M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJDLElBQVFDLFFBQWtCQywwQkFBbEJELE9BQU9FLFNBQVdELDBCQUFYQztBQUVBLElBQUEsQUFBTUgsNENBeUJsQixBQXpCWTtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7UUFDbkJJLGtEQUFBQSxxQkFBb0I7OztrQkFEREo7O1lBR25CSyxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYUMsU0FBUztnQkFDcEIsSUFBTUMsdUJBQXVCLElBQUksQ0FBQ0MsMkJBQzVCQywyQkFBMkJDLDhCQUF5QkMseUJBQXlCSjtnQkFFbkYsT0FBT0U7WUFDVDs7O1lBRUFELEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNSSxhQUFhLElBQUksQ0FBQ0MsaUJBQ2xCQyxpQkFBaUJiLE1BQU1XLGFBQ3ZCRyxlQUFlRCxnQkFDZkUsc0JBQXNCRCxhQUFhRSxjQUNuQ0MsVUFBVUYsb0JBQW9CRyxNQUFNLElBQUksQ0FBQ2Ysb0JBQ3pDZ0IsY0FBY2pCLE9BQU9lLFVBQ3JCWCx1QkFBdUJhLGFBQWEsR0FBRztnQkFFN0MsT0FBT2I7WUFDVDs7OztZQUVPYyxLQUFBQTttQkFBUCxTQUFPQSwwQkFBMEJDLFFBQVEsRUFBRVYsVUFBVTtnQkFBSSxPQUFPVyxxQkFBZ0JGLDBCQXRCN0RyQiw2QkFzQm9Ic0IsVUFBVVY7WUFBYTs7O1dBdEIzSVo7RUFBb0N1QjtBQXlCekRDLE9BQU9DLFVBQVV6QiJ9