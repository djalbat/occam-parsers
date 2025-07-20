"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NonTerminalPartBNFNode;
    }
});
var _necessary = require("necessary");
var _nonTerminal = /*#__PURE__*/ _interop_require_default(require("../../node/nonTerminal"));
var _ruleNames = require("../../ruleNames");
var _node = require("../../utilities/node");
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
var first = _necessary.arrayUtilities.first;
var NonTerminalPartBNFNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(NonTerminalPartBNFNode, NonTerminalNode);
    function NonTerminalPartBNFNode() {
        _class_call_check(this, NonTerminalPartBNFNode);
        return _call_super(this, NonTerminalPartBNFNode, arguments);
    }
    _create_class(NonTerminalPartBNFNode, [
        {
            key: "generatePart",
            value: function generatePart(callAhead) {
                var childNodes = this.getChildNodes();
                if (!callAhead) {
                    var ruleName = _ruleNames.CALL_AHEAD_MODIFIER_RULE_NAME, callAheadModifierBNFNode = (0, _node.nodeFromChildNodesAndRuleName)(childNodes, ruleName);
                    callAhead = callAheadModifierBNFNode !== null;
                }
                var firstChildNode = first(childNodes), node = firstChildNode, part = node.generatePart(callAhead);
                return part;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _nonTerminal.default.fromRuleNameChildNodesAndOpacity(NonTerminalPartBNFNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return NonTerminalPartBNFNode;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2JuZi9ub25UZXJtaW5hbFBhcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL25vblRlcm1pbmFsXCI7XG5cbmltcG9ydCB7IENBTExfQUhFQURfTU9ESUZJRVJfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgbm9kZUZyb21DaGlsZE5vZGVzQW5kUnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL25vZGVcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vblRlcm1pbmFsUGFydEJORk5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZVBhcnQoY2FsbEFoZWFkKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgaWYgKCFjYWxsQWhlYWQpIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gQ0FMTF9BSEVBRF9NT0RJRklFUl9SVUxFX05BTUUsXG4gICAgICAgICAgICBjYWxsQWhlYWRNb2RpZmllckJORk5vZGUgPSBub2RlRnJvbUNoaWxkTm9kZXNBbmRSdWxlTmFtZShjaGlsZE5vZGVzLCBydWxlTmFtZSk7XG5cbiAgICAgIGNhbGxBaGVhZCA9IChjYWxsQWhlYWRNb2RpZmllckJORk5vZGUgIT09IG51bGwpO1xuICAgIH1cblxuICAgIGNvbnN0IGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgbm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgcGFydCA9IG5vZGUuZ2VuZXJhdGVQYXJ0KGNhbGxBaGVhZCk7XG5cbiAgICByZXR1cm4gcGFydDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KE5vblRlcm1pbmFsUGFydEJORk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTsgfVxufVxuIl0sIm5hbWVzIjpbIk5vblRlcm1pbmFsUGFydEJORk5vZGUiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiZ2VuZXJhdGVQYXJ0IiwiY2FsbEFoZWFkIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJydWxlTmFtZSIsIkNBTExfQUhFQURfTU9ESUZJRVJfUlVMRV9OQU1FIiwiY2FsbEFoZWFkTW9kaWZpZXJCTkZOb2RlIiwibm9kZUZyb21DaGlsZE5vZGVzQW5kUnVsZU5hbWUiLCJmaXJzdENoaWxkTm9kZSIsIm5vZGUiLCJwYXJ0IiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJvcGFjaXR5IiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVdxQkE7Ozt5QkFUVTtrRUFFSDt5QkFFa0I7b0JBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUMsSUFBTSxBQUFFQyxRQUFVQyx5QkFBYyxDQUF4QkQ7QUFFTyxJQUFBLEFBQU1ELHVDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CRyxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYUMsU0FBUztnQkFDcEIsSUFBTUMsYUFBYSxJQUFJLENBQUNDLGFBQWE7Z0JBRXJDLElBQUksQ0FBQ0YsV0FBVztvQkFDZCxJQUFNRyxXQUFXQyx3Q0FBNkIsRUFDeENDLDJCQUEyQkMsSUFBQUEsbUNBQTZCLEVBQUNMLFlBQVlFO29CQUUzRUgsWUFBYUssNkJBQTZCO2dCQUM1QztnQkFFQSxJQUFNRSxpQkFBaUJWLE1BQU1JLGFBQ3ZCTyxPQUFPRCxnQkFDUEUsT0FBT0QsS0FBS1QsWUFBWSxDQUFDQztnQkFFL0IsT0FBT1M7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxpQ0FBaUNQLFFBQVEsRUFBRUYsVUFBVSxFQUFFVSxPQUFPO2dCQUFJLE9BQU9DLG9CQUFlLENBQUNGLGdDQUFnQyxDQWxCN0dkLHdCQWtCc0lPLFVBQVVGLFlBQVlVO1lBQVU7OztXQWxCdEtmO0VBQStCZ0Isb0JBQWUifQ==