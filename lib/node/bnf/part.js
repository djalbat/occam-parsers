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
var last = _necessary.arrayUtilities.last;
var PartBNFNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(PartBNFNode, NonTerminalNode);
    var _super = _create_super(PartBNFNode);
    function PartBNFNode() {
        _class_call_check(this, PartBNFNode);
        return _super.apply(this, arguments);
    }
    _create_class(PartBNFNode, [
        {
            key: "generatePart",
            value: function generatePart(lookAhead) {
                var childNodes = this.getChildNodes(), nodes = childNodes.slice(), part = partFromNodes(nodes);
                return part;
            }
        }
    ], [
        {
            key: "fromRuleNameAndChildNodes",
            value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
                return _nonTerminal.default.fromRuleNameAndChildNodes(PartBNFNode, ruleName, childNodes);
            }
        },
        {
            key: "fromRuleNameChildNodesAndPrecedence",
            value: function fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence) {
                return _nonTerminal.default.fromRuleNameChildNodesAndPrecedence(PartBNFNode, ruleName, childNodes, precedence);
            }
        }
    ]);
    return PartBNFNode;
}(_nonTerminal.default);
function partFromNodes(nodes) {
    var part = null;
    var nodesLength = nodes.length;
    if (nodesLength === 1) {
        var node = nodes.pop(), lookAhead = false;
        part = node.generatePart(lookAhead);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2JuZi9wYXJ0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9ub25UZXJtaW5hbFwiO1xuaW1wb3J0IE9wdGlvbmFsUGFydFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvbm9uVGVybWluYWwvb3B0aW9uYWxQYXJ0XCI7XG5pbXBvcnQgT25lT3JNb3JlUGFydHNQYXJ0IGZyb20gXCIuLi8uLi9wYXJ0L25vblRlcm1pbmFsL29uZU9yTW9yZVBhcnRzXCI7XG5pbXBvcnQgWmVyb09yTW9yZVBhcnRzUGFydCBmcm9tIFwiLi4vLi4vcGFydC9ub25UZXJtaW5hbC96ZXJvT3JNb3JlUGFydHNcIjtcblxuaW1wb3J0IHsgaXNOb2RlUXVhbnRpZmllck5vZGUsIHJ1bGVOYW1lRnJvbVF1YW50aWZpZXJOb2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ibmZcIjtcbmltcG9ydCB7IG9wdGlvbmFsUXVhbnRpZmllclJ1bGVOYW1lLCBvbmVPck1vcmVRdWFudGlmaWVyUnVsZU5hbWUsIHplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHsgbGFzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnRCTkZOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVQYXJ0KGxvb2tBaGVhZCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBub2RlcyA9IGNoaWxkTm9kZXMuc2xpY2UoKSxcbiAgICAgICAgICBwYXJ0ID0gcGFydEZyb21Ob2Rlcyhub2Rlcyk7XG5cbiAgICByZXR1cm4gcGFydDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhQYXJ0Qk5GTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMpOyB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZFByZWNlZGVuY2UoUGFydEJORk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlKTsgfVxufVxuXG5mdW5jdGlvbiBwYXJ0RnJvbU5vZGVzKG5vZGVzKSB7XG4gIGxldCBwYXJ0ID0gbnVsbDtcblxuICBjb25zdCBub2Rlc0xlbmd0aCA9IG5vZGVzLmxlbmd0aDtcblxuICBpZiAobm9kZXNMZW5ndGggPT09IDEpIHtcbiAgICBjb25zdCBub2RlID0gbm9kZXMucG9wKCksXG4gICAgICAgICAgbG9va0FoZWFkID0gZmFsc2U7XG5cbiAgICBwYXJ0ID0gbm9kZS5nZW5lcmF0ZVBhcnQobG9va0FoZWFkKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBsYXN0Tm9kZVF1YW50aWZpZXJOb2RlID0gaXNMYXN0Tm9kZVF1YW50aWZpZXJOb2RlKG5vZGVzKTtcblxuICAgIGlmIChsYXN0Tm9kZVF1YW50aWZpZXJOb2RlKSB7XG4gICAgICBjb25zdCBub2RlID0gbm9kZXMucG9wKCksXG4gICAgICAgICAgICBxdWFudGlmaWVyTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgICAgcGFydCA9IHBhcnRGcm9tTm9kZXMobm9kZXMpO1xuXG4gICAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGVOYW1lRnJvbVF1YW50aWZpZXJOb2RlKHF1YW50aWZpZXJOb2RlKSxcbiAgICAgICAgICAgIGNvbGxlY3Rpb25PZlBhcnRzUGFydCA9IGNvbGxlY3Rpb25PZlBhcnRzUGFydEZyb21QYXJ0QW5kUnVsZU5hbWUocGFydCwgcnVsZU5hbWUpO1xuXG4gICAgICBwYXJ0ID0gY29sbGVjdGlvbk9mUGFydHNQYXJ0OyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZXMuc2hpZnQoKTtcblxuICAgICAgcGFydCA9IHBhcnRGcm9tTm9kZXMobm9kZXMpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0O1xufVxuXG5mdW5jdGlvbiBpc0xhc3ROb2RlUXVhbnRpZmllck5vZGUobm9kZXMpIHtcbiAgY29uc3QgbGFzdE5vZGUgPSBsYXN0KG5vZGVzKSxcbiAgICAgICAgbGFzdE5vZGVRdWFudGlmaWVyTm9kZSA9IGlzTm9kZVF1YW50aWZpZXJOb2RlKGxhc3ROb2RlKTtcblxuICByZXR1cm4gbGFzdE5vZGVRdWFudGlmaWVyTm9kZTtcbn1cblxuZnVuY3Rpb24gY29sbGVjdGlvbk9mUGFydHNQYXJ0RnJvbVBhcnRBbmRSdWxlTmFtZShwYXJ0LCBydWxlTmFtZSkge1xuICBsZXQgY29sbGVjdGlvbk9mUGFydHNQYXJ0O1xuXG4gIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICBjYXNlIG9wdGlvbmFsUXVhbnRpZmllclJ1bGVOYW1lIDpcbiAgICAgIGNvbnN0IG9wdGlvbmFsUGFydFBhcnQgPSBPcHRpb25hbFBhcnRQYXJ0LmZyb21QYXJ0KHBhcnQpO1xuXG4gICAgICBjb2xsZWN0aW9uT2ZQYXJ0c1BhcnQgPSBvcHRpb25hbFBhcnRQYXJ0OyAvLy9cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBvbmVPck1vcmVRdWFudGlmaWVyUnVsZU5hbWUgOlxuICAgICAgY29uc3Qgb25lT3JNb3JlUGFydHNQYXJ0ID0gT25lT3JNb3JlUGFydHNQYXJ0LmZyb21QYXJ0KHBhcnQpO1xuXG4gICAgICBjb2xsZWN0aW9uT2ZQYXJ0c1BhcnQgPSBvbmVPck1vcmVQYXJ0c1BhcnQ7IC8vL1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIHplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWUgOlxuICAgICAgY29uc3QgemVyb09yTW9yZVBhcnRzUGFydCA9IFplcm9Pck1vcmVQYXJ0c1BhcnQuZnJvbVBhcnQocGFydCk7XG5cbiAgICAgIGNvbGxlY3Rpb25PZlBhcnRzUGFydCA9IHplcm9Pck1vcmVQYXJ0c1BhcnQ7ICAvLy9cbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIGNvbGxlY3Rpb25PZlBhcnRzUGFydDtcbn1cbiJdLCJuYW1lcyI6WyJQYXJ0Qk5GTm9kZSIsImxhc3QiLCJhcnJheVV0aWxpdGllcyIsImdlbmVyYXRlUGFydCIsImxvb2tBaGVhZCIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibm9kZXMiLCJzbGljZSIsInBhcnQiLCJwYXJ0RnJvbU5vZGVzIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsInJ1bGVOYW1lIiwiTm9uVGVybWluYWxOb2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZFByZWNlZGVuY2UiLCJwcmVjZWRlbmNlIiwibm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJub2RlIiwicG9wIiwibGFzdE5vZGVRdWFudGlmaWVyTm9kZSIsImlzTGFzdE5vZGVRdWFudGlmaWVyTm9kZSIsInF1YW50aWZpZXJOb2RlIiwicnVsZU5hbWVGcm9tUXVhbnRpZmllck5vZGUiLCJjb2xsZWN0aW9uT2ZQYXJ0c1BhcnQiLCJjb2xsZWN0aW9uT2ZQYXJ0c1BhcnRGcm9tUGFydEFuZFJ1bGVOYW1lIiwic2hpZnQiLCJsYXN0Tm9kZSIsImlzTm9kZVF1YW50aWZpZXJOb2RlIiwib3B0aW9uYWxRdWFudGlmaWVyUnVsZU5hbWUiLCJvcHRpb25hbFBhcnRQYXJ0IiwiT3B0aW9uYWxQYXJ0UGFydCIsImZyb21QYXJ0Iiwib25lT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lIiwib25lT3JNb3JlUGFydHNQYXJ0IiwiT25lT3JNb3JlUGFydHNQYXJ0IiwiemVyb09yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSIsInplcm9Pck1vcmVQYXJ0c1BhcnQiLCJaZXJvT3JNb3JlUGFydHNQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWNxQkE7Ozt5QkFaVTtrRUFFSDttRUFDQztxRUFDRTtzRUFDQzttQkFFaUM7eUJBQ3FDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRHLElBQU0sQUFBRUMsT0FBU0MsMEJBQVREO0FBRU8sSUFBQSxBQUFNRCw0QkFjbEIsQUFkWTtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkcsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFDLFNBQVM7Z0JBQ3BCLElBQU1DLGFBQWEsSUFBSSxDQUFDQyxpQkFDbEJDLFFBQVFGLFdBQVdHLFNBQ25CQyxPQUFPQyxjQUFjSDtnQkFFM0IsT0FBT0U7WUFDVDs7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSwwQkFBMEJDLFFBQVEsRUFBRVAsVUFBVTtnQkFBSSxPQUFPUSxxQkFBZ0JGLDBCQVQ3RFgsYUFTb0dZLFVBQVVQO1lBQWE7OztZQUV2SVMsS0FBQUE7bUJBQVAsU0FBT0Esb0NBQW9DRixRQUFRLEVBQUVQLFVBQVUsRUFBRVUsVUFBVTtnQkFBSSxPQUFPRixxQkFBZ0JDLG9DQVhuRmQsYUFXb0lZLFVBQVVQLFlBQVlVO1lBQWE7OztXQVh2S2Y7RUFBb0JhO0FBY3pDLFNBQVNILGNBQWNILEtBQUs7SUFDMUIsSUFBSUUsT0FBTztJQUVYLElBQU1PLGNBQWNULE1BQU1VO0lBRTFCLElBQUlELGdCQUFnQixHQUFHO1FBQ3JCLElBQU1FLE9BQU9YLE1BQU1ZLE9BQ2JmLFlBQVk7UUFFbEJLLE9BQU9TLEtBQUtmLGFBQWFDO0lBQzNCLE9BQU87UUFDTCxJQUFNZ0IseUJBQXlCQyx5QkFBeUJkO1FBRXhELElBQUlhLHdCQUF3QjtZQUMxQixJQUFNRixRQUFPWCxNQUFNWSxPQUNiRyxpQkFBaUJKLE9BQU8sR0FBRztZQUVqQ1QsT0FBT0MsY0FBY0g7WUFFckIsSUFBTUssV0FBV1csSUFBQUEsaUNBQTJCRCxpQkFDdENFLHdCQUF3QkMseUNBQXlDaEIsTUFBTUc7WUFFN0VILE9BQU9lLHVCQUF1QixHQUFHO1FBQ25DLE9BQU87WUFDTGpCLE1BQU1tQjtZQUVOakIsT0FBT0MsY0FBY0g7UUFDdkI7SUFDRjtJQUVBLE9BQU9FO0FBQ1Q7QUFFQSxTQUFTWSx5QkFBeUJkLEtBQUs7SUFDckMsSUFBTW9CLFdBQVcxQixLQUFLTSxRQUNoQmEseUJBQXlCUSxJQUFBQSwyQkFBcUJEO0lBRXBELE9BQU9QO0FBQ1Q7QUFFQSxTQUFTSyx5Q0FBeUNoQixJQUFJLEVBQUVHLFFBQVE7SUFDOUQsSUFBSVk7SUFFSixPQUFRWjtRQUNOLEtBQUtpQjtZQUNILElBQU1DLG1CQUFtQkMsc0JBQWlCQyxTQUFTdkI7WUFFbkRlLHdCQUF3Qk0sa0JBQWtCLEdBQUc7WUFDN0M7UUFFRixLQUFLRztZQUNILElBQU1DLHFCQUFxQkMsd0JBQW1CSCxTQUFTdkI7WUFFdkRlLHdCQUF3QlUsb0JBQW9CLEdBQUc7WUFDL0M7UUFFRixLQUFLRTtZQUNILElBQU1DLHNCQUFzQkMseUJBQW9CTixTQUFTdkI7WUFFekRlLHdCQUF3QmEscUJBQXNCLEdBQUc7WUFDakQ7SUFDSjtJQUVBLE9BQU9iO0FBQ1QifQ==