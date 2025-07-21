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
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _nonTerminal.default.fromRuleNameChildNodesOpacityAndPrecedence(NonTerminalPartBNFNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return NonTerminalPartBNFNode;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2JuZi9ub25UZXJtaW5hbFBhcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL25vblRlcm1pbmFsXCI7XG5cbmltcG9ydCB7IENBTExfQUhFQURfTU9ESUZJRVJfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgbm9kZUZyb21DaGlsZE5vZGVzQW5kUnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL25vZGVcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vblRlcm1pbmFsUGFydEJORk5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZVBhcnQoY2FsbEFoZWFkKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgaWYgKCFjYWxsQWhlYWQpIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gQ0FMTF9BSEVBRF9NT0RJRklFUl9SVUxFX05BTUUsXG4gICAgICAgICAgICBjYWxsQWhlYWRNb2RpZmllckJORk5vZGUgPSBub2RlRnJvbUNoaWxkTm9kZXNBbmRSdWxlTmFtZShjaGlsZE5vZGVzLCBydWxlTmFtZSk7XG5cbiAgICAgIGNhbGxBaGVhZCA9IChjYWxsQWhlYWRNb2RpZmllckJORk5vZGUgIT09IG51bGwpO1xuICAgIH1cblxuICAgIGNvbnN0IGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgbm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgcGFydCA9IG5vZGUuZ2VuZXJhdGVQYXJ0KGNhbGxBaGVhZCk7XG5cbiAgICByZXR1cm4gcGFydDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoTm9uVGVybWluYWxQYXJ0Qk5GTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiTm9uVGVybWluYWxQYXJ0Qk5GTm9kZSIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJnZW5lcmF0ZVBhcnQiLCJjYWxsQWhlYWQiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInJ1bGVOYW1lIiwiQ0FMTF9BSEVBRF9NT0RJRklFUl9SVUxFX05BTUUiLCJjYWxsQWhlYWRNb2RpZmllckJORk5vZGUiLCJub2RlRnJvbUNoaWxkTm9kZXNBbmRSdWxlTmFtZSIsImZpcnN0Q2hpbGROb2RlIiwibm9kZSIsInBhcnQiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIk5vblRlcm1pbmFsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFXcUJBOzs7eUJBVFU7a0VBRUg7eUJBRWtCO29CQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlDLElBQU0sQUFBRUMsUUFBVUMseUJBQWMsQ0FBeEJEO0FBRU8sSUFBQSxBQUFNRCx1Q0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkcsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFDLFNBQVM7Z0JBQ3BCLElBQU1DLGFBQWEsSUFBSSxDQUFDQyxhQUFhO2dCQUVyQyxJQUFJLENBQUNGLFdBQVc7b0JBQ2QsSUFBTUcsV0FBV0Msd0NBQTZCLEVBQ3hDQywyQkFBMkJDLElBQUFBLG1DQUE2QixFQUFDTCxZQUFZRTtvQkFFM0VILFlBQWFLLDZCQUE2QjtnQkFDNUM7Z0JBRUEsSUFBTUUsaUJBQWlCVixNQUFNSSxhQUN2Qk8sT0FBT0QsZ0JBQ1BFLE9BQU9ELEtBQUtULFlBQVksQ0FBQ0M7Z0JBRS9CLE9BQU9TO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsMkNBQTJDUCxRQUFRLEVBQUVGLFVBQVUsRUFBRVUsT0FBTyxFQUFFQyxVQUFVO2dCQUFJLE9BQU9DLG9CQUFlLENBQUNILDBDQUEwQyxDQWxCN0lkLHdCQWtCc0tPLFVBQVVGLFlBQVlVLFNBQVNDO1lBQWE7OztXQWxCbE5oQjtFQUErQmlCLG9CQUFlIn0=