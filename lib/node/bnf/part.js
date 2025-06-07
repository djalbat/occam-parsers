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
        case _ruleNames.optionalQuantifierRuleName:
            var optionalPartPart = _optionalPart.default.fromPart(part);
            collectionOfPartsPart = optionalPartPart; ///
            break;
        case _ruleNames.oneOrMoreQuantifierRuleName:
            var oneOrMorePartsPart = _oneOrMoreParts.default.fromPart(part);
            collectionOfPartsPart = oneOrMorePartsPart; ///
            break;
        case _ruleNames.zeroOrMoreQuantifierRuleName:
            var zeroOrMorePartsPart = _zeroOrMoreParts.default.fromPart(part);
            collectionOfPartsPart = zeroOrMorePartsPart; ///
            break;
    }
    return collectionOfPartsPart;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2JuZi9wYXJ0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9ub25UZXJtaW5hbFwiO1xuaW1wb3J0IE9wdGlvbmFsUGFydFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvbm9uVGVybWluYWwvb3B0aW9uYWxQYXJ0XCI7XG5pbXBvcnQgT25lT3JNb3JlUGFydHNQYXJ0IGZyb20gXCIuLi8uLi9wYXJ0L25vblRlcm1pbmFsL29uZU9yTW9yZVBhcnRzXCI7XG5pbXBvcnQgWmVyb09yTW9yZVBhcnRzUGFydCBmcm9tIFwiLi4vLi4vcGFydC9ub25UZXJtaW5hbC96ZXJvT3JNb3JlUGFydHNcIjtcblxuaW1wb3J0IHsgaXNOb2RlUXVhbnRpZmllck5vZGUsIHJ1bGVOYW1lRnJvbVF1YW50aWZpZXJOb2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ibmZcIjtcbmltcG9ydCB7IG9wdGlvbmFsUXVhbnRpZmllclJ1bGVOYW1lLCBvbmVPck1vcmVRdWFudGlmaWVyUnVsZU5hbWUsIHplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHsgbGFzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnRCTkZOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVQYXJ0KGNhbGxBaGVhZCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBub2RlcyA9IGNoaWxkTm9kZXMuc2xpY2UoKSxcbiAgICAgICAgICBwYXJ0ID0gcGFydEZyb21Ob2Rlcyhub2Rlcyk7XG5cbiAgICByZXR1cm4gcGFydDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KFBhcnRCTkZOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7IH1cbn1cblxuZnVuY3Rpb24gcGFydEZyb21Ob2Rlcyhub2Rlcykge1xuICBsZXQgcGFydDtcblxuICBjb25zdCBub2Rlc0xlbmd0aCA9IG5vZGVzLmxlbmd0aDtcblxuICBpZiAobm9kZXNMZW5ndGggPT09IDEpIHtcbiAgICBjb25zdCBub2RlID0gbm9kZXMucG9wKCksXG4gICAgICAgICAgY2FsbEFoZWFkID0gZmFsc2U7XG5cbiAgICBwYXJ0ID0gbm9kZS5nZW5lcmF0ZVBhcnQoY2FsbEFoZWFkKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBsYXN0Tm9kZVF1YW50aWZpZXJOb2RlID0gaXNMYXN0Tm9kZVF1YW50aWZpZXJOb2RlKG5vZGVzKTtcblxuICAgIGlmIChsYXN0Tm9kZVF1YW50aWZpZXJOb2RlKSB7XG4gICAgICBjb25zdCBub2RlID0gbm9kZXMucG9wKCksXG4gICAgICAgICAgICBxdWFudGlmaWVyTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgICAgcGFydCA9IHBhcnRGcm9tTm9kZXMobm9kZXMpO1xuXG4gICAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGVOYW1lRnJvbVF1YW50aWZpZXJOb2RlKHF1YW50aWZpZXJOb2RlKSxcbiAgICAgICAgICAgIGNvbGxlY3Rpb25PZlBhcnRzUGFydCA9IGNvbGxlY3Rpb25PZlBhcnRzUGFydEZyb21QYXJ0QW5kUnVsZU5hbWUocGFydCwgcnVsZU5hbWUpO1xuXG4gICAgICBwYXJ0ID0gY29sbGVjdGlvbk9mUGFydHNQYXJ0OyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZXMuc2hpZnQoKTtcblxuICAgICAgcGFydCA9IHBhcnRGcm9tTm9kZXMobm9kZXMpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0O1xufVxuXG5mdW5jdGlvbiBpc0xhc3ROb2RlUXVhbnRpZmllck5vZGUobm9kZXMpIHtcbiAgY29uc3QgbGFzdE5vZGUgPSBsYXN0KG5vZGVzKSxcbiAgICAgICAgbGFzdE5vZGVRdWFudGlmaWVyTm9kZSA9IGlzTm9kZVF1YW50aWZpZXJOb2RlKGxhc3ROb2RlKTtcblxuICByZXR1cm4gbGFzdE5vZGVRdWFudGlmaWVyTm9kZTtcbn1cblxuZnVuY3Rpb24gY29sbGVjdGlvbk9mUGFydHNQYXJ0RnJvbVBhcnRBbmRSdWxlTmFtZShwYXJ0LCBydWxlTmFtZSkge1xuICBsZXQgY29sbGVjdGlvbk9mUGFydHNQYXJ0O1xuXG4gIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICBjYXNlIG9wdGlvbmFsUXVhbnRpZmllclJ1bGVOYW1lIDpcbiAgICAgIGNvbnN0IG9wdGlvbmFsUGFydFBhcnQgPSBPcHRpb25hbFBhcnRQYXJ0LmZyb21QYXJ0KHBhcnQpO1xuXG4gICAgICBjb2xsZWN0aW9uT2ZQYXJ0c1BhcnQgPSBvcHRpb25hbFBhcnRQYXJ0OyAvLy9cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBvbmVPck1vcmVRdWFudGlmaWVyUnVsZU5hbWUgOlxuICAgICAgY29uc3Qgb25lT3JNb3JlUGFydHNQYXJ0ID0gT25lT3JNb3JlUGFydHNQYXJ0LmZyb21QYXJ0KHBhcnQpO1xuXG4gICAgICBjb2xsZWN0aW9uT2ZQYXJ0c1BhcnQgPSBvbmVPck1vcmVQYXJ0c1BhcnQ7IC8vL1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIHplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWUgOlxuICAgICAgY29uc3QgemVyb09yTW9yZVBhcnRzUGFydCA9IFplcm9Pck1vcmVQYXJ0c1BhcnQuZnJvbVBhcnQocGFydCk7XG5cbiAgICAgIGNvbGxlY3Rpb25PZlBhcnRzUGFydCA9IHplcm9Pck1vcmVQYXJ0c1BhcnQ7ICAvLy9cbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIGNvbGxlY3Rpb25PZlBhcnRzUGFydDtcbn1cbiJdLCJuYW1lcyI6WyJQYXJ0Qk5GTm9kZSIsImxhc3QiLCJhcnJheVV0aWxpdGllcyIsImdlbmVyYXRlUGFydCIsImNhbGxBaGVhZCIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibm9kZXMiLCJzbGljZSIsInBhcnQiLCJwYXJ0RnJvbU5vZGVzIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJydWxlTmFtZSIsIm9wYWNpdHkiLCJOb25UZXJtaW5hbE5vZGUiLCJub2Rlc0xlbmd0aCIsImxlbmd0aCIsIm5vZGUiLCJwb3AiLCJsYXN0Tm9kZVF1YW50aWZpZXJOb2RlIiwiaXNMYXN0Tm9kZVF1YW50aWZpZXJOb2RlIiwicXVhbnRpZmllck5vZGUiLCJydWxlTmFtZUZyb21RdWFudGlmaWVyTm9kZSIsImNvbGxlY3Rpb25PZlBhcnRzUGFydCIsImNvbGxlY3Rpb25PZlBhcnRzUGFydEZyb21QYXJ0QW5kUnVsZU5hbWUiLCJzaGlmdCIsImxhc3ROb2RlIiwiaXNOb2RlUXVhbnRpZmllck5vZGUiLCJvcHRpb25hbFF1YW50aWZpZXJSdWxlTmFtZSIsIm9wdGlvbmFsUGFydFBhcnQiLCJPcHRpb25hbFBhcnRQYXJ0IiwiZnJvbVBhcnQiLCJvbmVPck1vcmVRdWFudGlmaWVyUnVsZU5hbWUiLCJvbmVPck1vcmVQYXJ0c1BhcnQiLCJPbmVPck1vcmVQYXJ0c1BhcnQiLCJ6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lIiwiemVyb09yTW9yZVBhcnRzUGFydCIsIlplcm9Pck1vcmVQYXJ0c1BhcnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBY3FCQTs7O3lCQVpVO2tFQUVIO21FQUNDO3FFQUNFO3NFQUNDO21CQUVpQzt5QkFDcUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEcsSUFBTSxBQUFFQyxPQUFTQyx5QkFBYyxDQUF2QkQ7QUFFTyxJQUFBLEFBQU1ELDRCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CRyxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYUMsU0FBUztnQkFDcEIsSUFBTUMsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLFFBQVFGLFdBQVdHLEtBQUssSUFDeEJDLE9BQU9DLGNBQWNIO2dCQUUzQixPQUFPRTtZQUNUOzs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLGlDQUFpQ0MsUUFBUSxFQUFFUCxVQUFVLEVBQUVRLE9BQU87Z0JBQUksT0FBT0Msb0JBQWUsQ0FBQ0gsZ0NBQWdDLENBVDdHWCxhQVMySFksVUFBVVAsWUFBWVE7WUFBVTs7O1dBVDNKYjtFQUFvQmMsb0JBQWU7QUFZeEQsU0FBU0osY0FBY0gsS0FBSztJQUMxQixJQUFJRTtJQUVKLElBQU1NLGNBQWNSLE1BQU1TLE1BQU07SUFFaEMsSUFBSUQsZ0JBQWdCLEdBQUc7UUFDckIsSUFBTUUsT0FBT1YsTUFBTVcsR0FBRyxJQUNoQmQsWUFBWTtRQUVsQkssT0FBT1EsS0FBS2QsWUFBWSxDQUFDQztJQUMzQixPQUFPO1FBQ0wsSUFBTWUseUJBQXlCQyx5QkFBeUJiO1FBRXhELElBQUlZLHdCQUF3QjtZQUMxQixJQUFNRixRQUFPVixNQUFNVyxHQUFHLElBQ2hCRyxpQkFBaUJKLE9BQU8sR0FBRztZQUVqQ1IsT0FBT0MsY0FBY0g7WUFFckIsSUFBTUssV0FBV1UsSUFBQUEsK0JBQTBCLEVBQUNELGlCQUN0Q0Usd0JBQXdCQyx5Q0FBeUNmLE1BQU1HO1lBRTdFSCxPQUFPYyx1QkFBdUIsR0FBRztRQUNuQyxPQUFPO1lBQ0xoQixNQUFNa0IsS0FBSztZQUVYaEIsT0FBT0MsY0FBY0g7UUFDdkI7SUFDRjtJQUVBLE9BQU9FO0FBQ1Q7QUFFQSxTQUFTVyx5QkFBeUJiLEtBQUs7SUFDckMsSUFBTW1CLFdBQVd6QixLQUFLTSxRQUNoQlkseUJBQXlCUSxJQUFBQSx5QkFBb0IsRUFBQ0Q7SUFFcEQsT0FBT1A7QUFDVDtBQUVBLFNBQVNLLHlDQUF5Q2YsSUFBSSxFQUFFRyxRQUFRO0lBQzlELElBQUlXO0lBRUosT0FBUVg7UUFDTixLQUFLZ0IscUNBQTBCO1lBQzdCLElBQU1DLG1CQUFtQkMscUJBQWdCLENBQUNDLFFBQVEsQ0FBQ3RCO1lBRW5EYyx3QkFBd0JNLGtCQUFrQixHQUFHO1lBQzdDO1FBRUYsS0FBS0csc0NBQTJCO1lBQzlCLElBQU1DLHFCQUFxQkMsdUJBQWtCLENBQUNILFFBQVEsQ0FBQ3RCO1lBRXZEYyx3QkFBd0JVLG9CQUFvQixHQUFHO1lBQy9DO1FBRUYsS0FBS0UsdUNBQTRCO1lBQy9CLElBQU1DLHNCQUFzQkMsd0JBQW1CLENBQUNOLFFBQVEsQ0FBQ3RCO1lBRXpEYyx3QkFBd0JhLHFCQUFzQixHQUFHO1lBQ2pEO0lBQ0o7SUFFQSxPQUFPYjtBQUNUIn0=