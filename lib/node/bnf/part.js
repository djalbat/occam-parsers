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
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _nonTerminal.default.fromRuleNameChildNodesAndOpacity(PartBNFNode, ruleName, childNodes, opacity);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2JuZi9wYXJ0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9ub25UZXJtaW5hbFwiO1xuaW1wb3J0IE9wdGlvbmFsUGFydFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvbm9uVGVybWluYWwvb3B0aW9uYWxQYXJ0XCI7XG5pbXBvcnQgT25lT3JNb3JlUGFydHNQYXJ0IGZyb20gXCIuLi8uLi9wYXJ0L25vblRlcm1pbmFsL29uZU9yTW9yZVBhcnRzXCI7XG5pbXBvcnQgWmVyb09yTW9yZVBhcnRzUGFydCBmcm9tIFwiLi4vLi4vcGFydC9ub25UZXJtaW5hbC96ZXJvT3JNb3JlUGFydHNcIjtcblxuaW1wb3J0IHsgaXNOb2RlUXVhbnRpZmllck5vZGUsIHJ1bGVOYW1lRnJvbVF1YW50aWZpZXJOb2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ibmZcIjtcbmltcG9ydCB7IE9QVElPTkFMX1FVQU5USUZJRVJfUlVMRV9OQU1FLCBPTkVfT1JfTU9SRV9RVUFOVElGSUVSX1JVTEVfTkFNRSwgWkVST19PUl9NT1JFX1FVQU5USUZJRVJfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCB7IGxhc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJ0Qk5GTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUGFydChjYWxsQWhlYWQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgbm9kZXMgPSBjaGlsZE5vZGVzLnNsaWNlKCksXG4gICAgICAgICAgcGFydCA9IHBhcnRGcm9tTm9kZXMobm9kZXMpO1xuXG4gICAgcmV0dXJuIHBhcnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShQYXJ0Qk5GTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpOyB9XG59XG5cbmZ1bmN0aW9uIHBhcnRGcm9tTm9kZXMobm9kZXMpIHtcbiAgbGV0IHBhcnQ7XG5cbiAgY29uc3Qgbm9kZXNMZW5ndGggPSBub2Rlcy5sZW5ndGg7XG5cbiAgaWYgKG5vZGVzTGVuZ3RoID09PSAxKSB7XG4gICAgY29uc3Qgbm9kZSA9IG5vZGVzLnBvcCgpLFxuICAgICAgICAgIGNhbGxBaGVhZCA9IGZhbHNlO1xuXG4gICAgcGFydCA9IG5vZGUuZ2VuZXJhdGVQYXJ0KGNhbGxBaGVhZCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgbGFzdE5vZGVRdWFudGlmaWVyTm9kZSA9IGlzTGFzdE5vZGVRdWFudGlmaWVyTm9kZShub2Rlcyk7XG5cbiAgICBpZiAobGFzdE5vZGVRdWFudGlmaWVyTm9kZSkge1xuICAgICAgY29uc3Qgbm9kZSA9IG5vZGVzLnBvcCgpLFxuICAgICAgICAgICAgcXVhbnRpZmllck5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICAgIHBhcnQgPSBwYXJ0RnJvbU5vZGVzKG5vZGVzKTtcblxuICAgICAgY29uc3QgcnVsZU5hbWUgPSBydWxlTmFtZUZyb21RdWFudGlmaWVyTm9kZShxdWFudGlmaWVyTm9kZSksXG4gICAgICAgICAgICBjb2xsZWN0aW9uT2ZQYXJ0c1BhcnQgPSBjb2xsZWN0aW9uT2ZQYXJ0c1BhcnRGcm9tUGFydEFuZFJ1bGVOYW1lKHBhcnQsIHJ1bGVOYW1lKTtcblxuICAgICAgcGFydCA9IGNvbGxlY3Rpb25PZlBhcnRzUGFydDsgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIG5vZGVzLnNoaWZ0KCk7XG5cbiAgICAgIHBhcnQgPSBwYXJ0RnJvbU5vZGVzKG5vZGVzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFydDtcbn1cblxuZnVuY3Rpb24gaXNMYXN0Tm9kZVF1YW50aWZpZXJOb2RlKG5vZGVzKSB7XG4gIGNvbnN0IGxhc3ROb2RlID0gbGFzdChub2RlcyksXG4gICAgICAgIGxhc3ROb2RlUXVhbnRpZmllck5vZGUgPSBpc05vZGVRdWFudGlmaWVyTm9kZShsYXN0Tm9kZSk7XG5cbiAgcmV0dXJuIGxhc3ROb2RlUXVhbnRpZmllck5vZGU7XG59XG5cbmZ1bmN0aW9uIGNvbGxlY3Rpb25PZlBhcnRzUGFydEZyb21QYXJ0QW5kUnVsZU5hbWUocGFydCwgcnVsZU5hbWUpIHtcbiAgbGV0IGNvbGxlY3Rpb25PZlBhcnRzUGFydDtcblxuICBzd2l0Y2ggKHJ1bGVOYW1lKSB7XG4gICAgY2FzZSBPUFRJT05BTF9RVUFOVElGSUVSX1JVTEVfTkFNRSA6XG4gICAgICBjb25zdCBvcHRpb25hbFBhcnRQYXJ0ID0gT3B0aW9uYWxQYXJ0UGFydC5mcm9tUGFydChwYXJ0KTtcblxuICAgICAgY29sbGVjdGlvbk9mUGFydHNQYXJ0ID0gb3B0aW9uYWxQYXJ0UGFydDsgLy8vXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgT05FX09SX01PUkVfUVVBTlRJRklFUl9SVUxFX05BTUUgOlxuICAgICAgY29uc3Qgb25lT3JNb3JlUGFydHNQYXJ0ID0gT25lT3JNb3JlUGFydHNQYXJ0LmZyb21QYXJ0KHBhcnQpO1xuXG4gICAgICBjb2xsZWN0aW9uT2ZQYXJ0c1BhcnQgPSBvbmVPck1vcmVQYXJ0c1BhcnQ7IC8vL1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFpFUk9fT1JfTU9SRV9RVUFOVElGSUVSX1JVTEVfTkFNRSA6XG4gICAgICBjb25zdCB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gWmVyb09yTW9yZVBhcnRzUGFydC5mcm9tUGFydChwYXJ0KTtcblxuICAgICAgY29sbGVjdGlvbk9mUGFydHNQYXJ0ID0gemVyb09yTW9yZVBhcnRzUGFydDsgIC8vL1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gY29sbGVjdGlvbk9mUGFydHNQYXJ0O1xufVxuIl0sIm5hbWVzIjpbIlBhcnRCTkZOb2RlIiwibGFzdCIsImFycmF5VXRpbGl0aWVzIiwiZ2VuZXJhdGVQYXJ0IiwiY2FsbEFoZWFkIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJub2RlcyIsInNsaWNlIiwicGFydCIsInBhcnRGcm9tTm9kZXMiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsInJ1bGVOYW1lIiwib3BhY2l0eSIsIk5vblRlcm1pbmFsTm9kZSIsIm5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwibm9kZSIsInBvcCIsImxhc3ROb2RlUXVhbnRpZmllck5vZGUiLCJpc0xhc3ROb2RlUXVhbnRpZmllck5vZGUiLCJxdWFudGlmaWVyTm9kZSIsInJ1bGVOYW1lRnJvbVF1YW50aWZpZXJOb2RlIiwiY29sbGVjdGlvbk9mUGFydHNQYXJ0IiwiY29sbGVjdGlvbk9mUGFydHNQYXJ0RnJvbVBhcnRBbmRSdWxlTmFtZSIsInNoaWZ0IiwibGFzdE5vZGUiLCJpc05vZGVRdWFudGlmaWVyTm9kZSIsIk9QVElPTkFMX1FVQU5USUZJRVJfUlVMRV9OQU1FIiwib3B0aW9uYWxQYXJ0UGFydCIsIk9wdGlvbmFsUGFydFBhcnQiLCJmcm9tUGFydCIsIk9ORV9PUl9NT1JFX1FVQU5USUZJRVJfUlVMRV9OQU1FIiwib25lT3JNb3JlUGFydHNQYXJ0IiwiT25lT3JNb3JlUGFydHNQYXJ0IiwiWkVST19PUl9NT1JFX1FVQU5USUZJRVJfUlVMRV9OQU1FIiwiemVyb09yTW9yZVBhcnRzUGFydCIsIlplcm9Pck1vcmVQYXJ0c1BhcnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBY3FCQTs7O3lCQVpVO2tFQUVIO21FQUNDO3FFQUNFO3NFQUNDO21CQUVpQzt5QkFDa0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkgsSUFBTSxBQUFFQyxPQUFTQyx5QkFBYyxDQUF2QkQ7QUFFTyxJQUFBLEFBQU1ELDRCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CRyxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYUMsU0FBUztnQkFDcEIsSUFBTUMsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLFFBQVFGLFdBQVdHLEtBQUssSUFDeEJDLE9BQU9DLGNBQWNIO2dCQUUzQixPQUFPRTtZQUNUOzs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLGlDQUFpQ0MsUUFBUSxFQUFFUCxVQUFVLEVBQUVRLE9BQU87Z0JBQUksT0FBT0Msb0JBQWUsQ0FBQ0gsZ0NBQWdDLENBVDdHWCxhQVMySFksVUFBVVAsWUFBWVE7WUFBVTs7O1dBVDNKYjtFQUFvQmMsb0JBQWU7QUFZeEQsU0FBU0osY0FBY0gsS0FBSztJQUMxQixJQUFJRTtJQUVKLElBQU1NLGNBQWNSLE1BQU1TLE1BQU07SUFFaEMsSUFBSUQsZ0JBQWdCLEdBQUc7UUFDckIsSUFBTUUsT0FBT1YsTUFBTVcsR0FBRyxJQUNoQmQsWUFBWTtRQUVsQkssT0FBT1EsS0FBS2QsWUFBWSxDQUFDQztJQUMzQixPQUFPO1FBQ0wsSUFBTWUseUJBQXlCQyx5QkFBeUJiO1FBRXhELElBQUlZLHdCQUF3QjtZQUMxQixJQUFNRixRQUFPVixNQUFNVyxHQUFHLElBQ2hCRyxpQkFBaUJKLE9BQU8sR0FBRztZQUVqQ1IsT0FBT0MsY0FBY0g7WUFFckIsSUFBTUssV0FBV1UsSUFBQUEsK0JBQTBCLEVBQUNELGlCQUN0Q0Usd0JBQXdCQyx5Q0FBeUNmLE1BQU1HO1lBRTdFSCxPQUFPYyx1QkFBdUIsR0FBRztRQUNuQyxPQUFPO1lBQ0xoQixNQUFNa0IsS0FBSztZQUVYaEIsT0FBT0MsY0FBY0g7UUFDdkI7SUFDRjtJQUVBLE9BQU9FO0FBQ1Q7QUFFQSxTQUFTVyx5QkFBeUJiLEtBQUs7SUFDckMsSUFBTW1CLFdBQVd6QixLQUFLTSxRQUNoQlkseUJBQXlCUSxJQUFBQSx5QkFBb0IsRUFBQ0Q7SUFFcEQsT0FBT1A7QUFDVDtBQUVBLFNBQVNLLHlDQUF5Q2YsSUFBSSxFQUFFRyxRQUFRO0lBQzlELElBQUlXO0lBRUosT0FBUVg7UUFDTixLQUFLZ0Isd0NBQTZCO1lBQ2hDLElBQU1DLG1CQUFtQkMscUJBQWdCLENBQUNDLFFBQVEsQ0FBQ3RCO1lBRW5EYyx3QkFBd0JNLGtCQUFrQixHQUFHO1lBQzdDO1FBRUYsS0FBS0csMkNBQWdDO1lBQ25DLElBQU1DLHFCQUFxQkMsdUJBQWtCLENBQUNILFFBQVEsQ0FBQ3RCO1lBRXZEYyx3QkFBd0JVLG9CQUFvQixHQUFHO1lBQy9DO1FBRUYsS0FBS0UsNENBQWlDO1lBQ3BDLElBQU1DLHNCQUFzQkMsd0JBQW1CLENBQUNOLFFBQVEsQ0FBQ3RCO1lBRXpEYyx3QkFBd0JhLHFCQUFzQixHQUFHO1lBQ2pEO0lBQ0o7SUFFQSxPQUFPYjtBQUNUIn0=