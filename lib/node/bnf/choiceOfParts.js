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
                var childNodes = this.getChildNodes(), partBNFNodes = childNodes.filter(function(childNode) {
                    var childNodeNonTerminalNode = childNode.isNonTerminalNode();
                    if (childNodeNonTerminalNode) {
                        var nonTerminalNode = childNode, ruleName = nonTerminalNode.getRuleName(), ruleNamePartRuleName = ruleName === _ruleNames.partRuleName;
                        if (ruleNamePartRuleName) {
                            return true;
                        }
                    }
                });
                lookAhead = false; ///
                var parts = partBNFNodes.map(function(partBNFNode) {
                    var part = partBNFNode.generatePart(lookAhead);
                    return part;
                }), choiceOfPartsPart = new _choiceOfParts.default(parts), part = choiceOfPartsPart; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2JuZi9jaG9pY2VPZlBhcnRzLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL25vblRlcm1pbmFsXCI7XG5pbXBvcnQgQ2hvaWNlT2ZQYXJ0c1BhcnQgZnJvbSBcIi4uLy4uL3BhcnQvbm9uVGVybWluYWwvY2hvaWNlT2ZQYXJ0c1wiO1xuXG5pbXBvcnQgeyBwYXJ0UnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENob2ljZU9mUGFydHNCTkZOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVQYXJ0KGxvb2tBaGVhZCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBwYXJ0Qk5GTm9kZXMgPSBjaGlsZE5vZGVzLmZpbHRlcigoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgICAgICAgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgcnVsZU5hbWVQYXJ0UnVsZU5hbWUgPSAocnVsZU5hbWUgPT09IHBhcnRSdWxlTmFtZSk7XG5cbiAgICAgICAgICAgICAgaWYgKHJ1bGVOYW1lUGFydFJ1bGVOYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGxvb2tBaGVhZCA9IGZhbHNlOyAgLy8vXG5cbiAgICBjb25zdCBwYXJ0cyA9IHBhcnRCTkZOb2Rlcy5tYXAoKHBhcnRCTkZOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0ID0gcGFydEJORk5vZGUuZ2VuZXJhdGVQYXJ0KGxvb2tBaGVhZCk7XG5cbiAgICAgICAgICAgIHJldHVybiBwYXJ0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNob2ljZU9mUGFydHNQYXJ0ID0gbmV3IENob2ljZU9mUGFydHNQYXJ0KHBhcnRzKSxcbiAgICAgICAgICBwYXJ0ID0gY2hvaWNlT2ZQYXJ0c1BhcnQ7IC8vL1xuXG4gICAgcmV0dXJuIHBhcnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lUHJlY2VkZW5jZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIHByZWNlZGVuY2UsIGNoaWxkTm9kZXMpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVQcmVjZWRlbmNlQW5kQ2hpbGROb2RlcyhDaG9pY2VPZlBhcnRzQk5GTm9kZSwgcnVsZU5hbWUsIHByZWNlZGVuY2UsIGNoaWxkTm9kZXMpOyB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkNob2ljZU9mUGFydHNCTkZOb2RlIiwiZ2VuZXJhdGVQYXJ0IiwibG9va0FoZWFkIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJwYXJ0Qk5GTm9kZXMiLCJmaWx0ZXIiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJydWxlTmFtZVBhcnRSdWxlTmFtZSIsInBhcnRSdWxlTmFtZSIsInBhcnRzIiwibWFwIiwicGFydEJORk5vZGUiLCJwYXJ0IiwiY2hvaWNlT2ZQYXJ0c1BhcnQiLCJDaG9pY2VPZlBhcnRzUGFydCIsImZyb21SdWxlTmFtZVByZWNlZGVuY2VBbmRDaGlsZE5vZGVzIiwicHJlY2VkZW5jZSIsIk5vblRlcm1pbmFsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7a0VBTE87b0VBQ0U7eUJBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZCxJQUFBLEFBQU1BLHFDQUFOO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYUMsU0FBUztnQkFDcEIsSUFBTUMsYUFBYSxJQUFJLENBQUNDLGlCQUNsQkMsZUFBZUYsV0FBV0csT0FBTyxTQUFDQztvQkFDaEMsSUFBTUMsMkJBQTJCRCxVQUFVRTtvQkFFM0MsSUFBSUQsMEJBQTBCO3dCQUM1QixJQUFNRSxrQkFBa0JILFdBQ2xCSSxXQUFXRCxnQkFBZ0JFLGVBQzNCQyx1QkFBd0JGLGFBQWFHO3dCQUUzQyxJQUFJRCxzQkFBc0I7NEJBQ3hCLE9BQU87d0JBQ1Q7b0JBQ0Y7Z0JBQ0Y7Z0JBRU5YLFlBQVksT0FBUSxHQUFHO2dCQUV2QixJQUFNYSxRQUFRVixhQUFhVyxJQUFJLFNBQUNDO29CQUN4QixJQUFNQyxPQUFPRCxZQUFZaEIsYUFBYUM7b0JBRXRDLE9BQU9nQjtnQkFDVCxJQUNBQyxvQkFBb0IsSUFBSUMsdUJBQWtCTCxRQUMxQ0csT0FBT0MsbUJBQW1CLEdBQUc7Z0JBRW5DLE9BQU9EO1lBQ1Q7Ozs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0Esb0NBQW9DVixRQUFRLEVBQUVXLFVBQVUsRUFBRW5CLFVBQVU7Z0JBQUksT0FBT29CLHFCQUFnQkYsb0NBOUJuRnJCLHNCQThCNklXLFVBQVVXLFlBQVluQjtZQUFhOzs7V0E5QmhMSDtFQUE2QnVCIn0=