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
var _nonTerminal = /*#__PURE__*/ _interop_require_default(require("../../../node/nonTerminal"));
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
var NonTerminalPartBNFNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(NonTerminalPartBNFNode, NonTerminalNode);
    var _super = _create_super(NonTerminalPartBNFNode);
    function NonTerminalPartBNFNode() {
        _class_call_check(this, NonTerminalPartBNFNode);
        return _super.apply(this, arguments);
    }
    _create_class(NonTerminalPartBNFNode, [
        {
            key: "generatePart",
            value: function generatePart(lookAhead) {
                var childNodes = this.getChildNodes(), nodes = childNodes.slice(), part = partFromNodes(nodes, lookAhead);
                return part;
            }
        }
    ], [
        {
            key: "fromRuleNameAndChildNodes",
            value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
                return _nonTerminal.default.fromRuleNameAndChildNodes(NonTerminalPartBNFNode, ruleName, childNodes);
            }
        },
        {
            key: "fromRuleNameChildNodesAndPrecedence",
            value: function fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence) {
                return _nonTerminal.default.fromRuleNameChildNodesAndPrecedence(NonTerminalPartBNFNode, ruleName, childNodes, precedence);
            }
        }
    ]);
    return NonTerminalPartBNFNode;
}(_nonTerminal.default);
function partFromNodes(nodes, lookAhead) {
    var part = null;
    var nodesLength = nodes.length;
    if (nodesLength === 1) {
        var node = nodes.pop();
        part = node.generatePart(lookAhead);
    } else {
        nodes.pop();
        lookAhead = true;
        part = partFromNodes(nodes, lookAhead);
    }
    return part;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2JuZi9wYXJ0L25vblRlcm1pbmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL25vblRlcm1pbmFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vblRlcm1pbmFsUGFydEJORk5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZVBhcnQobG9va0FoZWFkKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIG5vZGVzID0gY2hpbGROb2Rlcy5zbGljZSgpLFxuICAgICAgICAgIHBhcnQgPSBwYXJ0RnJvbU5vZGVzKG5vZGVzLCBsb29rQWhlYWQpO1xuXG4gICAgcmV0dXJuIHBhcnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcykgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoTm9uVGVybWluYWxQYXJ0Qk5GTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMpOyB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZFByZWNlZGVuY2UoTm9uVGVybWluYWxQYXJ0Qk5GTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIHByZWNlZGVuY2UpOyB9XG59XG5cbmZ1bmN0aW9uIHBhcnRGcm9tTm9kZXMobm9kZXMsIGxvb2tBaGVhZCkge1xuICBsZXQgcGFydCA9IG51bGw7XG5cbiAgY29uc3Qgbm9kZXNMZW5ndGggPSBub2Rlcy5sZW5ndGg7XG5cbiAgaWYgKG5vZGVzTGVuZ3RoID09PSAxKSB7XG4gICAgY29uc3Qgbm9kZSA9IG5vZGVzLnBvcCgpO1xuXG4gICAgcGFydCA9IG5vZGUuZ2VuZXJhdGVQYXJ0KGxvb2tBaGVhZCk7XG4gIH0gZWxzZSB7XG4gICAgbm9kZXMucG9wKCk7XG5cbiAgICBsb29rQWhlYWQgPSB0cnVlO1xuXG4gICAgcGFydCA9IHBhcnRGcm9tTm9kZXMobm9kZXMsIGxvb2tBaGVhZCk7XG4gIH1cblxuICByZXR1cm4gcGFydDtcbn1cbiJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbFBhcnRCTkZOb2RlIiwiZ2VuZXJhdGVQYXJ0IiwibG9va0FoZWFkIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJub2RlcyIsInNsaWNlIiwicGFydCIsInBhcnRGcm9tTm9kZXMiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwicnVsZU5hbWUiLCJOb25UZXJtaW5hbE5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kUHJlY2VkZW5jZSIsInByZWNlZGVuY2UiLCJub2Rlc0xlbmd0aCIsImxlbmd0aCIsIm5vZGUiLCJwb3AiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7O2tFQUZPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWIsSUFBQSxBQUFNQSx1Q0FjbEIsQUFkWTtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFDLFNBQVM7Z0JBQ3BCLElBQU1DLGFBQWEsSUFBSSxDQUFDQyxpQkFDbEJDLFFBQVFGLFdBQVdHLFNBQ25CQyxPQUFPQyxjQUFjSCxPQUFPSDtnQkFFbEMsT0FBT0s7WUFDVDs7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSwwQkFBMEJDLFFBQVEsRUFBRVAsVUFBVTtnQkFBSSxPQUFPUSxxQkFBZ0JGLDBCQVQ3RFQsd0JBUytHVSxVQUFVUDtZQUFhOzs7WUFFbEpTLEtBQUFBO21CQUFQLFNBQU9BLG9DQUFvQ0YsUUFBUSxFQUFFUCxVQUFVLEVBQUVVLFVBQVU7Z0JBQUksT0FBT0YscUJBQWdCQyxvQ0FYbkZaLHdCQVcrSVUsVUFBVVAsWUFBWVU7WUFBYTs7O1dBWGxMYjtFQUErQlc7QUFjcEQsU0FBU0gsY0FBY0gsS0FBSyxFQUFFSCxTQUFTO0lBQ3JDLElBQUlLLE9BQU87SUFFWCxJQUFNTyxjQUFjVCxNQUFNVTtJQUUxQixJQUFJRCxnQkFBZ0IsR0FBRztRQUNyQixJQUFNRSxPQUFPWCxNQUFNWTtRQUVuQlYsT0FBT1MsS0FBS2YsYUFBYUM7SUFDM0IsT0FBTztRQUNMRyxNQUFNWTtRQUVOZixZQUFZO1FBRVpLLE9BQU9DLGNBQWNILE9BQU9IO0lBQzlCO0lBRUEsT0FBT0s7QUFDVCJ9