"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PartBNFNode;
    }
});
var _necessary = require("necessary");
var _nonTerminal = /*#__PURE__*/ _interop_require_default(require("../../node/nonTerminal"));
var _optionalPart = /*#__PURE__*/ _interop_require_default(require("../../part/nonTerminal/optionalPart"));
var _oneOrMoreParts = /*#__PURE__*/ _interop_require_default(require("../../part/nonTerminal/oneOrMoreParts"));
var _zeroOrMoreParts = /*#__PURE__*/ _interop_require_default(require("../../part/nonTerminal/zeroOrMoreParts"));
var _bnf = require("../../utilities/bnf");
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
var last = _necessary.arrayUtilities.last;
var PartBNFNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(PartBNFNode, NonTerminalNode);
    function PartBNFNode() {
        _class_call_check(this, PartBNFNode);
        return _call_super(this, PartBNFNode, arguments);
    }
    _create_class(PartBNFNode, [
        {
            key: "generatePart",
            value: function generatePart(callAhead) {
                var childNodes = this.getChildNodes(), nodes = childNodes.slice(), part = partFromNodes(nodes);
                return part;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _nonTerminal.default.fromRuleNameChildNodesOpacityAndPrecedence(PartBNFNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return PartBNFNode;
}(_nonTerminal.default);
function partFromNodes(nodes) {
    var part;
    var nodesLength = nodes.length;
    if (nodesLength === 1) {
        var node = nodes.pop(), callAhead = false;
        part = node.generatePart(callAhead);
    } else {
        var lastNodeQuantifierNode = isLastNodeQuantifierNode(nodes);
        if (lastNodeQuantifierNode) {
            var node1 = nodes.pop(), quantifierNode = node1; ///
            part = partFromNodes(nodes);
            var ruleName = (0, _bnf.ruleNameFromQuantifierNode)(quantifierNode), collectionOfPartsPart = collectionOfPartsPartFromPartAndRuleName(part, ruleName);
            part = collectionOfPartsPart; ///
        } else {
            nodes.shift();
            part = partFromNodes(nodes);
        }
    }
    return part;
}
function isLastNodeQuantifierNode(nodes) {
    var lastNode = last(nodes), lastNodeQuantifierNode = (0, _bnf.isNodeQuantifierNode)(lastNode);
    return lastNodeQuantifierNode;
}
function collectionOfPartsPartFromPartAndRuleName(part, ruleName) {
    var collectionOfPartsPart;
    switch(ruleName){
        case _ruleNames.OPTIONAL_QUANTIFIER_RULE_NAME:
            var optionalPartPart = _optionalPart.default.fromPart(part);
            collectionOfPartsPart = optionalPartPart; ///
            break;
        case _ruleNames.ONE_OR_MORE_QUANTIFIER_RULE_NAME:
            var oneOrMorePartsPart = _oneOrMoreParts.default.fromPart(part);
            collectionOfPartsPart = oneOrMorePartsPart; ///
            break;
        case _ruleNames.ZERO_OR_MORE_QUANTIFIER_RULE_NAME:
            var zeroOrMorePartsPart = _zeroOrMoreParts.default.fromPart(part);
            collectionOfPartsPart = zeroOrMorePartsPart; ///
            break;
    }
    return collectionOfPartsPart;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2JuZi9wYXJ0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9ub25UZXJtaW5hbFwiO1xuaW1wb3J0IE9wdGlvbmFsUGFydFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvbm9uVGVybWluYWwvb3B0aW9uYWxQYXJ0XCI7XG5pbXBvcnQgT25lT3JNb3JlUGFydHNQYXJ0IGZyb20gXCIuLi8uLi9wYXJ0L25vblRlcm1pbmFsL29uZU9yTW9yZVBhcnRzXCI7XG5pbXBvcnQgWmVyb09yTW9yZVBhcnRzUGFydCBmcm9tIFwiLi4vLi4vcGFydC9ub25UZXJtaW5hbC96ZXJvT3JNb3JlUGFydHNcIjtcblxuaW1wb3J0IHsgaXNOb2RlUXVhbnRpZmllck5vZGUsIHJ1bGVOYW1lRnJvbVF1YW50aWZpZXJOb2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ibmZcIjtcbmltcG9ydCB7IE9QVElPTkFMX1FVQU5USUZJRVJfUlVMRV9OQU1FLCBPTkVfT1JfTU9SRV9RVUFOVElGSUVSX1JVTEVfTkFNRSwgWkVST19PUl9NT1JFX1FVQU5USUZJRVJfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCB7IGxhc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJ0Qk5GTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUGFydChjYWxsQWhlYWQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgbm9kZXMgPSBjaGlsZE5vZGVzLnNsaWNlKCksXG4gICAgICAgICAgcGFydCA9IHBhcnRGcm9tTm9kZXMobm9kZXMpO1xuXG4gICAgcmV0dXJuIHBhcnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKFBhcnRCTkZOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cblxuZnVuY3Rpb24gcGFydEZyb21Ob2Rlcyhub2Rlcykge1xuICBsZXQgcGFydDtcblxuICBjb25zdCBub2Rlc0xlbmd0aCA9IG5vZGVzLmxlbmd0aDtcblxuICBpZiAobm9kZXNMZW5ndGggPT09IDEpIHtcbiAgICBjb25zdCBub2RlID0gbm9kZXMucG9wKCksXG4gICAgICAgICAgY2FsbEFoZWFkID0gZmFsc2U7XG5cbiAgICBwYXJ0ID0gbm9kZS5nZW5lcmF0ZVBhcnQoY2FsbEFoZWFkKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBsYXN0Tm9kZVF1YW50aWZpZXJOb2RlID0gaXNMYXN0Tm9kZVF1YW50aWZpZXJOb2RlKG5vZGVzKTtcblxuICAgIGlmIChsYXN0Tm9kZVF1YW50aWZpZXJOb2RlKSB7XG4gICAgICBjb25zdCBub2RlID0gbm9kZXMucG9wKCksXG4gICAgICAgICAgICBxdWFudGlmaWVyTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgICAgcGFydCA9IHBhcnRGcm9tTm9kZXMobm9kZXMpO1xuXG4gICAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGVOYW1lRnJvbVF1YW50aWZpZXJOb2RlKHF1YW50aWZpZXJOb2RlKSxcbiAgICAgICAgICAgIGNvbGxlY3Rpb25PZlBhcnRzUGFydCA9IGNvbGxlY3Rpb25PZlBhcnRzUGFydEZyb21QYXJ0QW5kUnVsZU5hbWUocGFydCwgcnVsZU5hbWUpO1xuXG4gICAgICBwYXJ0ID0gY29sbGVjdGlvbk9mUGFydHNQYXJ0OyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZXMuc2hpZnQoKTtcblxuICAgICAgcGFydCA9IHBhcnRGcm9tTm9kZXMobm9kZXMpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0O1xufVxuXG5mdW5jdGlvbiBpc0xhc3ROb2RlUXVhbnRpZmllck5vZGUobm9kZXMpIHtcbiAgY29uc3QgbGFzdE5vZGUgPSBsYXN0KG5vZGVzKSxcbiAgICAgICAgbGFzdE5vZGVRdWFudGlmaWVyTm9kZSA9IGlzTm9kZVF1YW50aWZpZXJOb2RlKGxhc3ROb2RlKTtcblxuICByZXR1cm4gbGFzdE5vZGVRdWFudGlmaWVyTm9kZTtcbn1cblxuZnVuY3Rpb24gY29sbGVjdGlvbk9mUGFydHNQYXJ0RnJvbVBhcnRBbmRSdWxlTmFtZShwYXJ0LCBydWxlTmFtZSkge1xuICBsZXQgY29sbGVjdGlvbk9mUGFydHNQYXJ0O1xuXG4gIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICBjYXNlIE9QVElPTkFMX1FVQU5USUZJRVJfUlVMRV9OQU1FIDpcbiAgICAgIGNvbnN0IG9wdGlvbmFsUGFydFBhcnQgPSBPcHRpb25hbFBhcnRQYXJ0LmZyb21QYXJ0KHBhcnQpO1xuXG4gICAgICBjb2xsZWN0aW9uT2ZQYXJ0c1BhcnQgPSBvcHRpb25hbFBhcnRQYXJ0OyAvLy9cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBPTkVfT1JfTU9SRV9RVUFOVElGSUVSX1JVTEVfTkFNRSA6XG4gICAgICBjb25zdCBvbmVPck1vcmVQYXJ0c1BhcnQgPSBPbmVPck1vcmVQYXJ0c1BhcnQuZnJvbVBhcnQocGFydCk7XG5cbiAgICAgIGNvbGxlY3Rpb25PZlBhcnRzUGFydCA9IG9uZU9yTW9yZVBhcnRzUGFydDsgLy8vXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgWkVST19PUl9NT1JFX1FVQU5USUZJRVJfUlVMRV9OQU1FIDpcbiAgICAgIGNvbnN0IHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBaZXJvT3JNb3JlUGFydHNQYXJ0LmZyb21QYXJ0KHBhcnQpO1xuXG4gICAgICBjb2xsZWN0aW9uT2ZQYXJ0c1BhcnQgPSB6ZXJvT3JNb3JlUGFydHNQYXJ0OyAgLy8vXG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBjb2xsZWN0aW9uT2ZQYXJ0c1BhcnQ7XG59XG4iXSwibmFtZXMiOlsiUGFydEJORk5vZGUiLCJsYXN0IiwiYXJyYXlVdGlsaXRpZXMiLCJnZW5lcmF0ZVBhcnQiLCJjYWxsQWhlYWQiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsIm5vZGVzIiwic2xpY2UiLCJwYXJ0IiwicGFydEZyb21Ob2RlcyIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsInJ1bGVOYW1lIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJOb25UZXJtaW5hbE5vZGUiLCJub2Rlc0xlbmd0aCIsImxlbmd0aCIsIm5vZGUiLCJwb3AiLCJsYXN0Tm9kZVF1YW50aWZpZXJOb2RlIiwiaXNMYXN0Tm9kZVF1YW50aWZpZXJOb2RlIiwicXVhbnRpZmllck5vZGUiLCJydWxlTmFtZUZyb21RdWFudGlmaWVyTm9kZSIsImNvbGxlY3Rpb25PZlBhcnRzUGFydCIsImNvbGxlY3Rpb25PZlBhcnRzUGFydEZyb21QYXJ0QW5kUnVsZU5hbWUiLCJzaGlmdCIsImxhc3ROb2RlIiwiaXNOb2RlUXVhbnRpZmllck5vZGUiLCJPUFRJT05BTF9RVUFOVElGSUVSX1JVTEVfTkFNRSIsIm9wdGlvbmFsUGFydFBhcnQiLCJPcHRpb25hbFBhcnRQYXJ0IiwiZnJvbVBhcnQiLCJPTkVfT1JfTU9SRV9RVUFOVElGSUVSX1JVTEVfTkFNRSIsIm9uZU9yTW9yZVBhcnRzUGFydCIsIk9uZU9yTW9yZVBhcnRzUGFydCIsIlpFUk9fT1JfTU9SRV9RVUFOVElGSUVSX1JVTEVfTkFNRSIsInplcm9Pck1vcmVQYXJ0c1BhcnQiLCJaZXJvT3JNb3JlUGFydHNQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWNxQkE7Ozt5QkFaVTtrRUFFSDttRUFDQztxRUFDRTtzRUFDQzttQkFFaUM7eUJBQ2tEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5ILElBQU0sQUFBRUMsT0FBU0MseUJBQWMsQ0FBdkJEO0FBRU8sSUFBQSxBQUFNRCw0QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkcsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFDLFNBQVM7Z0JBQ3BCLElBQU1DLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxRQUFRRixXQUFXRyxLQUFLLElBQ3hCQyxPQUFPQyxjQUFjSDtnQkFFM0IsT0FBT0U7WUFDVDs7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSwyQ0FBMkNDLFFBQVEsRUFBRVAsVUFBVSxFQUFFUSxPQUFPLEVBQUVDLFVBQVU7Z0JBQUksT0FBT0Msb0JBQWUsQ0FBQ0osMENBQTBDLENBVDdJWCxhQVMySlksVUFBVVAsWUFBWVEsU0FBU0M7WUFBYTs7O1dBVHZNZDtFQUFvQmUsb0JBQWU7QUFZeEQsU0FBU0wsY0FBY0gsS0FBSztJQUMxQixJQUFJRTtJQUVKLElBQU1PLGNBQWNULE1BQU1VLE1BQU07SUFFaEMsSUFBSUQsZ0JBQWdCLEdBQUc7UUFDckIsSUFBTUUsT0FBT1gsTUFBTVksR0FBRyxJQUNoQmYsWUFBWTtRQUVsQkssT0FBT1MsS0FBS2YsWUFBWSxDQUFDQztJQUMzQixPQUFPO1FBQ0wsSUFBTWdCLHlCQUF5QkMseUJBQXlCZDtRQUV4RCxJQUFJYSx3QkFBd0I7WUFDMUIsSUFBTUYsUUFBT1gsTUFBTVksR0FBRyxJQUNoQkcsaUJBQWlCSixPQUFPLEdBQUc7WUFFakNULE9BQU9DLGNBQWNIO1lBRXJCLElBQU1LLFdBQVdXLElBQUFBLCtCQUEwQixFQUFDRCxpQkFDdENFLHdCQUF3QkMseUNBQXlDaEIsTUFBTUc7WUFFN0VILE9BQU9lLHVCQUF1QixHQUFHO1FBQ25DLE9BQU87WUFDTGpCLE1BQU1tQixLQUFLO1lBRVhqQixPQUFPQyxjQUFjSDtRQUN2QjtJQUNGO0lBRUEsT0FBT0U7QUFDVDtBQUVBLFNBQVNZLHlCQUF5QmQsS0FBSztJQUNyQyxJQUFNb0IsV0FBVzFCLEtBQUtNLFFBQ2hCYSx5QkFBeUJRLElBQUFBLHlCQUFvQixFQUFDRDtJQUVwRCxPQUFPUDtBQUNUO0FBRUEsU0FBU0sseUNBQXlDaEIsSUFBSSxFQUFFRyxRQUFRO0lBQzlELElBQUlZO0lBRUosT0FBUVo7UUFDTixLQUFLaUIsd0NBQTZCO1lBQ2hDLElBQU1DLG1CQUFtQkMscUJBQWdCLENBQUNDLFFBQVEsQ0FBQ3ZCO1lBRW5EZSx3QkFBd0JNLGtCQUFrQixHQUFHO1lBQzdDO1FBRUYsS0FBS0csMkNBQWdDO1lBQ25DLElBQU1DLHFCQUFxQkMsdUJBQWtCLENBQUNILFFBQVEsQ0FBQ3ZCO1lBRXZEZSx3QkFBd0JVLG9CQUFvQixHQUFHO1lBQy9DO1FBRUYsS0FBS0UsNENBQWlDO1lBQ3BDLElBQU1DLHNCQUFzQkMsd0JBQW1CLENBQUNOLFFBQVEsQ0FBQ3ZCO1lBRXpEZSx3QkFBd0JhLHFCQUFzQixHQUFHO1lBQ2pEO0lBQ0o7SUFFQSxPQUFPYjtBQUNUIn0=