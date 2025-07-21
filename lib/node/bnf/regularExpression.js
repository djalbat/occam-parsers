"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RegularExpressionBNFNode;
    }
});
var _necessary = require("necessary");
var _nonTerminal = /*#__PURE__*/ _interop_require_default(require("../../node/nonTerminal"));
var _regularExpression = /*#__PURE__*/ _interop_require_default(require("../../part/terminal/regularExpression"));
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
var RegularExpressionBNFNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(RegularExpressionBNFNode, NonTerminalNode);
    function RegularExpressionBNFNode() {
        _class_call_check(this, RegularExpressionBNFNode);
        var _this;
        _this = _call_super(this, RegularExpressionBNFNode, arguments), _define_property(_this, "regularExpression", /^\/((?:\\.|[^\/])*)\/$/);
        return _this;
    }
    _create_class(RegularExpressionBNFNode, [
        {
            key: "generatePart",
            value: function generatePart(callAhead) {
                var regularExpression = this.getRegularExpression(), regularExpressionPart = _regularExpression.default.fromRegularExpression(regularExpression);
                return regularExpressionPart;
            }
        },
        {
            key: "getRegularExpression",
            value: function getRegularExpression() {
                var childNodes = this.getChildNodes(), firstChildNode = first(childNodes), terminalNode = firstChildNode, terminalNodeContent = terminalNode.getContent(), matches = terminalNodeContent.match(this.regularExpression), secondMatch = second(matches), pattern = secondMatch, regularExpression = new RegExp(pattern); ///
                return regularExpression;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _nonTerminal.default.fromRuleNameChildNodesOpacityAndPrecedence(RegularExpressionBNFNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return RegularExpressionBNFNode;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2JuZi9yZWd1bGFyRXhwcmVzc2lvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbE5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbm9uVGVybWluYWxcIjtcbmltcG9ydCBSZWd1bGFyRXhwcmVzc2lvblBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvdGVybWluYWwvcmVndWxhckV4cHJlc3Npb25cIjtcblxuY29uc3QgeyBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVndWxhckV4cHJlc3Npb25CTkZOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgcmVndWxhckV4cHJlc3Npb24gPSAvXlxcLygoPzpcXFxcLnxbXlxcL10pKilcXC8kLztcblxuICBnZW5lcmF0ZVBhcnQoY2FsbEFoZWFkKSB7XG4gICAgY29uc3QgcmVndWxhckV4cHJlc3Npb24gPSB0aGlzLmdldFJlZ3VsYXJFeHByZXNzaW9uKCksXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb25QYXJ0ID0gUmVndWxhckV4cHJlc3Npb25QYXJ0LmZyb21SZWd1bGFyRXhwcmVzc2lvbihyZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICByZXR1cm4gcmVndWxhckV4cHJlc3Npb25QYXJ0O1xuICB9XG5cbiAgZ2V0UmVndWxhckV4cHJlc3Npb24oKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgdGVybWluYWxOb2RlID0gZmlyc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICB0ZXJtaW5hbE5vZGVDb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBtYXRjaGVzID0gdGVybWluYWxOb2RlQ29udGVudC5tYXRjaCh0aGlzLnJlZ3VsYXJFeHByZXNzaW9uKSxcbiAgICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICBwYXR0ZXJuID0gc2Vjb25kTWF0Y2gsIC8vL1xuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uID0gbmV3IFJlZ0V4cChwYXR0ZXJuKTsgIC8vL1xuXG4gICAgcmV0dXJuIHJlZ3VsYXJFeHByZXNzaW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShSZWd1bGFyRXhwcmVzc2lvbkJORk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuXG4iXSwibmFtZXMiOlsiUmVndWxhckV4cHJlc3Npb25CTkZOb2RlIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsInNlY29uZCIsInJlZ3VsYXJFeHByZXNzaW9uIiwiZ2VuZXJhdGVQYXJ0IiwiY2FsbEFoZWFkIiwiZ2V0UmVndWxhckV4cHJlc3Npb24iLCJyZWd1bGFyRXhwcmVzc2lvblBhcnQiLCJSZWd1bGFyRXhwcmVzc2lvblBhcnQiLCJmcm9tUmVndWxhckV4cHJlc3Npb24iLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImZpcnN0Q2hpbGROb2RlIiwidGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCIsInBhdHRlcm4iLCJSZWdFeHAiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJydWxlTmFtZSIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7Ozt5QkFQVTtrRUFFSDt3RUFDTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEMsSUFBUUMsUUFBa0JDLHlCQUFjLENBQWhDRCxPQUFPRSxTQUFXRCx5QkFBYyxDQUF6QkM7QUFFQSxJQUFBLEFBQU1ILHlDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTs7Z0JBQU4sa0JBQU1BLHNDQUNuQkksd0JBQUFBLHFCQUFvQjs7O2tCQURESjs7WUFHbkJLLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhQyxTQUFTO2dCQUNwQixJQUFNRixvQkFBb0IsSUFBSSxDQUFDRyxvQkFBb0IsSUFDN0NDLHdCQUF3QkMsMEJBQXFCLENBQUNDLHFCQUFxQixDQUFDTjtnQkFFMUUsT0FBT0k7WUFDVDs7O1lBRUFELEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNSSxhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQkMsaUJBQWlCWixNQUFNVSxhQUN2QkcsZUFBZUQsZ0JBQ2ZFLHNCQUFzQkQsYUFBYUUsVUFBVSxJQUM3Q0MsVUFBVUYsb0JBQW9CRyxLQUFLLENBQUMsSUFBSSxDQUFDZCxpQkFBaUIsR0FDMURlLGNBQWNoQixPQUFPYyxVQUNyQkcsVUFBVUQsYUFDVmYsb0JBQW9CLElBQUlpQixPQUFPRCxVQUFXLEdBQUc7Z0JBRW5ELE9BQU9oQjtZQUNUOzs7O1lBRU9rQixLQUFBQTttQkFBUCxTQUFPQSwyQ0FBMkNDLFFBQVEsRUFBRVosVUFBVSxFQUFFYSxPQUFPLEVBQUVDLFVBQVU7Z0JBQUksT0FBT0Msb0JBQWUsQ0FBQ0osMENBQTBDLENBdkI3SXRCLDBCQXVCd0t1QixVQUFVWixZQUFZYSxTQUFTQztZQUFhOzs7V0F2QnBOekI7RUFBaUMwQixvQkFBZSJ9