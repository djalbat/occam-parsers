"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ChoiceOfPartsBNFNode;
    }
});
var _nonTerminal = /*#__PURE__*/ _interop_require_default(require("../../node/nonTerminal"));
var _choiceOfParts = /*#__PURE__*/ _interop_require_default(require("../../part/nonTerminal/choiceOfParts"));
var _ruleNames = require("../../ruleNames");
var _node = require("../../utilities/node");
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
var ChoiceOfPartsBNFNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(ChoiceOfPartsBNFNode, NonTerminalNode);
    var _super = _create_super(ChoiceOfPartsBNFNode);
    function ChoiceOfPartsBNFNode() {
        _class_call_check(this, ChoiceOfPartsBNFNode);
        return _super.apply(this, arguments);
    }
    _create_class(ChoiceOfPartsBNFNode, [
        {
            key: "generatePart",
            value: function generatePart(lookAhead) {
                var childNodes = this.getChildNodes(), partBNFNodes = (0, _node.nodesFromChildNodesAndRuleName)(childNodes, _ruleNames.partRuleName);
                lookAhead = false; ///
                var parts = partBNFNodes.map(function(partBNFNode) {
                    var part = partBNFNode.generatePart(lookAhead);
                    return part;
                }), choiceOfPartsPart = _choiceOfParts.default.fromParts(parts), part = choiceOfPartsPart; ///
                return part;
            }
        }
    ], [
        {
            key: "fromRuleNamePrecedenceAndChildNodes",
            value: function fromRuleNamePrecedenceAndChildNodes(ruleName, precedence, childNodes) {
                return _nonTerminal.default.fromRuleNamePrecedenceAndChildNodes(ChoiceOfPartsBNFNode, ruleName, precedence, childNodes);
            }
        }
    ]);
    return ChoiceOfPartsBNFNode;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2JuZi9jaG9pY2VPZlBhcnRzLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL25vblRlcm1pbmFsXCI7XG5pbXBvcnQgQ2hvaWNlT2ZQYXJ0c1BhcnQgZnJvbSBcIi4uLy4uL3BhcnQvbm9uVGVybWluYWwvY2hvaWNlT2ZQYXJ0c1wiO1xuXG5pbXBvcnQgeyBwYXJ0UnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyBub2Rlc0Zyb21DaGlsZE5vZGVzQW5kUnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL25vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hvaWNlT2ZQYXJ0c0JORk5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZVBhcnQobG9va0FoZWFkKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHBhcnRCTkZOb2RlcyA9IG5vZGVzRnJvbUNoaWxkTm9kZXNBbmRSdWxlTmFtZShjaGlsZE5vZGVzLCBwYXJ0UnVsZU5hbWUpO1xuXG4gICAgbG9va0FoZWFkID0gZmFsc2U7ICAvLy9cblxuICAgIGNvbnN0IHBhcnRzID0gcGFydEJORk5vZGVzLm1hcCgocGFydEJORk5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnQgPSBwYXJ0Qk5GTm9kZS5nZW5lcmF0ZVBhcnQobG9va0FoZWFkKTtcblxuICAgICAgICAgICAgcmV0dXJuIHBhcnQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2hvaWNlT2ZQYXJ0c1BhcnQgPSBDaG9pY2VPZlBhcnRzUGFydC5mcm9tUGFydHMocGFydHMpLFxuICAgICAgICAgIHBhcnQgPSBjaG9pY2VPZlBhcnRzUGFydDsgLy8vXG5cbiAgICByZXR1cm4gcGFydDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVQcmVjZWRlbmNlQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgcHJlY2VkZW5jZSwgY2hpbGROb2RlcykgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZVByZWNlZGVuY2VBbmRDaGlsZE5vZGVzKENob2ljZU9mUGFydHNCTkZOb2RlLCBydWxlTmFtZSwgcHJlY2VkZW5jZSwgY2hpbGROb2Rlcyk7IH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiQ2hvaWNlT2ZQYXJ0c0JORk5vZGUiLCJnZW5lcmF0ZVBhcnQiLCJsb29rQWhlYWQiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInBhcnRCTkZOb2RlcyIsIm5vZGVzRnJvbUNoaWxkTm9kZXNBbmRSdWxlTmFtZSIsInBhcnRSdWxlTmFtZSIsInBhcnRzIiwibWFwIiwicGFydEJORk5vZGUiLCJwYXJ0IiwiY2hvaWNlT2ZQYXJ0c1BhcnQiLCJDaG9pY2VPZlBhcnRzUGFydCIsImZyb21QYXJ0cyIsImZyb21SdWxlTmFtZVByZWNlZGVuY2VBbmRDaGlsZE5vZGVzIiwicnVsZU5hbWUiLCJwcmVjZWRlbmNlIiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7OztrRUFOTztvRUFDRTt5QkFFRDtvQkFDa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEMsSUFBQSxBQUFNQSxxQ0FBTjtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFDLFNBQVM7Z0JBQ3BCLElBQU1DLGFBQWEsSUFBSSxDQUFDQyxpQkFDbEJDLGVBQWVDLElBQUFBLHNDQUErQkgsWUFBWUk7Z0JBRWhFTCxZQUFZLE9BQVEsR0FBRztnQkFFdkIsSUFBTU0sUUFBUUgsYUFBYUksSUFBSSxTQUFDQztvQkFDeEIsSUFBTUMsT0FBT0QsWUFBWVQsYUFBYUM7b0JBRXRDLE9BQU9TO2dCQUNULElBQ0FDLG9CQUFvQkMsdUJBQWtCQyxVQUFVTixRQUNoREcsT0FBT0MsbUJBQW1CLEdBQUc7Z0JBRW5DLE9BQU9EO1lBQ1Q7Ozs7WUFFT0ksS0FBQUE7bUJBQVAsU0FBT0Esb0NBQW9DQyxRQUFRLEVBQUVDLFVBQVUsRUFBRWQsVUFBVTtnQkFBSSxPQUFPZSxxQkFBZ0JILG9DQWxCbkZmLHNCQWtCNklnQixVQUFVQyxZQUFZZDtZQUFhOzs7V0FsQmhMSDtFQUE2QmtCIn0=