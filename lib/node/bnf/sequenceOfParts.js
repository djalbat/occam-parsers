"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SequenceOfPartsBNFNode;
    }
});
var _nonTerminal = /*#__PURE__*/ _interop_require_default(require("../../node/nonTerminal"));
var _sequenceOfParts = /*#__PURE__*/ _interop_require_default(require("../../part/nonTerminal/sequenceOfParts"));
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
var SequenceOfPartsBNFNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(SequenceOfPartsBNFNode, NonTerminalNode);
    var _super = _create_super(SequenceOfPartsBNFNode);
    function SequenceOfPartsBNFNode() {
        _class_call_check(this, SequenceOfPartsBNFNode);
        return _super.apply(this, arguments);
    }
    _create_class(SequenceOfPartsBNFNode, [
        {
            key: "generatePart",
            value: function generatePart(lookAhead) {
                var childNodes = this.getChildNodes(), partBNFNodes = (0, _node.nodesFromChildNodesAndRuleName)(childNodes, _ruleNames.partRuleName);
                lookAhead = false; ///
                var parts = partBNFNodes.map(function(partBNFNode) {
                    var part = partBNFNode.generatePart(lookAhead);
                    return part;
                }), sequenceOfPartsPart = _sequenceOfParts.default.fromParts(parts), part = sequenceOfPartsPart; ///
                return part;
            }
        }
    ], [
        {
            key: "fromRuleNameAndChildNodes",
            value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
                return _nonTerminal.default.fromRuleNameAndChildNodes(SequenceOfPartsBNFNode, ruleName, childNodes);
            }
        },
        {
            key: "fromRuleNameChildNodesAndPrecedence",
            value: function fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence) {
                return _nonTerminal.default.fromRuleNameChildNodesAndPrecedence(SequenceOfPartsBNFNode, ruleName, childNodes, precedence);
            }
        }
    ]);
    return SequenceOfPartsBNFNode;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2JuZi9zZXF1ZW5jZU9mUGFydHMuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbE5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbm9uVGVybWluYWxcIjtcbmltcG9ydCBTZXF1ZW5jZU9mUGFydHNQYXJ0IGZyb20gXCIuLi8uLi9wYXJ0L25vblRlcm1pbmFsL3NlcXVlbmNlT2ZQYXJ0c1wiO1xuXG5pbXBvcnQgeyBwYXJ0UnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyBub2Rlc0Zyb21DaGlsZE5vZGVzQW5kUnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL25vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VxdWVuY2VPZlBhcnRzQk5GTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUGFydChsb29rQWhlYWQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgcGFydEJORk5vZGVzID0gbm9kZXNGcm9tQ2hpbGROb2Rlc0FuZFJ1bGVOYW1lKGNoaWxkTm9kZXMsIHBhcnRSdWxlTmFtZSk7XG5cbiAgICBsb29rQWhlYWQgPSBmYWxzZTsgIC8vL1xuXG4gICAgY29uc3QgcGFydHMgPSBwYXJ0Qk5GTm9kZXMubWFwKChwYXJ0Qk5GTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFydCA9IHBhcnRCTkZOb2RlLmdlbmVyYXRlUGFydChsb29rQWhlYWQpO1xuXG4gICAgICAgICAgICByZXR1cm4gcGFydDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gU2VxdWVuY2VPZlBhcnRzUGFydC5mcm9tUGFydHMocGFydHMpLFxuICAgICAgICAgIHBhcnQgPSBzZXF1ZW5jZU9mUGFydHNQYXJ0OyAvLy9cblxuICAgIHJldHVybiBwYXJ0O1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGNoaWxkTm9kZXMpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKFNlcXVlbmNlT2ZQYXJ0c0JORk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTsgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRQcmVjZWRlbmNlKFNlcXVlbmNlT2ZQYXJ0c0JORk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlKTsgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJTZXF1ZW5jZU9mUGFydHNCTkZOb2RlIiwiZ2VuZXJhdGVQYXJ0IiwibG9va0FoZWFkIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJwYXJ0Qk5GTm9kZXMiLCJub2Rlc0Zyb21DaGlsZE5vZGVzQW5kUnVsZU5hbWUiLCJwYXJ0UnVsZU5hbWUiLCJwYXJ0cyIsIm1hcCIsInBhcnRCTkZOb2RlIiwicGFydCIsInNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJTZXF1ZW5jZU9mUGFydHNQYXJ0IiwiZnJvbVBhcnRzIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsInJ1bGVOYW1lIiwiTm9uVGVybWluYWxOb2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZFByZWNlZGVuY2UiLCJwcmVjZWRlbmNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7OztrRUFOTztzRUFDSTt5QkFFSDtvQkFDa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEMsSUFBQSxBQUFNQSx1Q0FBTjtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFDLFNBQVM7Z0JBQ3BCLElBQU1DLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxlQUFlQyxJQUFBQSxvQ0FBOEIsRUFBQ0gsWUFBWUksdUJBQVk7Z0JBRTVFTCxZQUFZLE9BQVEsR0FBRztnQkFFdkIsSUFBTU0sUUFBUUgsYUFBYUksR0FBRyxDQUFDLFNBQUNDO29CQUN4QixJQUFNQyxPQUFPRCxZQUFZVCxZQUFZLENBQUNDO29CQUV0QyxPQUFPUztnQkFDVCxJQUNBQyxzQkFBc0JDLHdCQUFtQixDQUFDQyxTQUFTLENBQUNOLFFBQ3BERyxPQUFPQyxxQkFBcUIsR0FBRztnQkFFckMsT0FBT0Q7WUFDVDs7OztZQUVPSSxLQUFBQTttQkFBUCxTQUFPQSwwQkFBMEJDLFFBQVEsRUFBRWIsVUFBVTtnQkFBSSxPQUFPYyxvQkFBZSxDQUFDRix5QkFBeUIsQ0FsQnRGZix3QkFrQitHZ0IsVUFBVWI7WUFBYTs7O1lBRWxKZSxLQUFBQTttQkFBUCxTQUFPQSxvQ0FBb0NGLFFBQVEsRUFBRWIsVUFBVSxFQUFFZ0IsVUFBVTtnQkFBSSxPQUFPRixvQkFBZSxDQUFDQyxtQ0FBbUMsQ0FwQnRIbEIsd0JBb0IrSWdCLFVBQVViLFlBQVlnQjtZQUFhOzs7V0FwQmxMbkI7RUFBK0JpQixvQkFBZSJ9