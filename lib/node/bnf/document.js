"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DocumentBNFNode;
    }
});
var _nonTerminal = /*#__PURE__*/ _interop_require_default(require("../../node/nonTerminal"));
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
var DocumentBNFNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(DocumentBNFNode, NonTerminalNode);
    var _super = _create_super(DocumentBNFNode);
    function DocumentBNFNode() {
        _class_call_check(this, DocumentBNFNode);
        return _super.apply(this, arguments);
    }
    _create_class(DocumentBNFNode, [
        {
            key: "generateRules",
            value: function generateRules(Rule) {
                var childNodes = this.getChildNodes(), ruleBNFNodes = (0, _node.nodesFromChildNodesAndRuleName)(childNodes, _ruleNames.ruleRuleName), rules = ruleBNFNodes.map(function(ruleBNFNode) {
                    var rule = ruleBNFNode.generateRule(Rule);
                    return rule;
                });
                return rules;
            }
        }
    ], [
        {
            key: "fromRuleNameAndChildNodes",
            value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
                return _nonTerminal.default.fromRuleNameAndChildNodes(DocumentBNFNode, ruleName, childNodes);
            }
        },
        {
            key: "fromRuleNameChildNodesAndPrecedence",
            value: function fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence) {
                return _nonTerminal.default.fromRuleNameChildNodesAndPrecedence(DocumentBNFNode, ruleName, childNodes, precedence);
            }
        }
    ]);
    return DocumentBNFNode;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2JuZi9kb2N1bWVudC5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tXCIuLi8uLi9ub2RlL25vblRlcm1pbmFsXCI7XG5cbmltcG9ydCB7IHJ1bGVSdWxlTmFtZSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IG5vZGVzRnJvbUNoaWxkTm9kZXNBbmRSdWxlTmFtZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb2N1bWVudEJORk5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZVJ1bGVzKFJ1bGUpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgcnVsZUJORk5vZGVzID0gbm9kZXNGcm9tQ2hpbGROb2Rlc0FuZFJ1bGVOYW1lKGNoaWxkTm9kZXMsIHJ1bGVSdWxlTmFtZSksXG4gICAgICAgICAgcnVsZXMgPSBydWxlQk5GTm9kZXMubWFwKChydWxlQk5GTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcnVsZSA9IHJ1bGVCTkZOb2RlLmdlbmVyYXRlUnVsZShSdWxlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHJ1bGU7XG4gICAgICAgICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGNoaWxkTm9kZXMpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKERvY3VtZW50Qk5GTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMpOyB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZFByZWNlZGVuY2UoRG9jdW1lbnRCTkZOb2RlLCBydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSk7IH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiRG9jdW1lbnRCTkZOb2RlIiwiZ2VuZXJhdGVSdWxlcyIsIlJ1bGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInJ1bGVCTkZOb2RlcyIsIm5vZGVzRnJvbUNoaWxkTm9kZXNBbmRSdWxlTmFtZSIsInJ1bGVSdWxlTmFtZSIsInJ1bGVzIiwibWFwIiwicnVsZUJORk5vZGUiLCJydWxlIiwiZ2VuZXJhdGVSdWxlIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsInJ1bGVOYW1lIiwiTm9uVGVybWluYWxOb2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZFByZWNlZGVuY2UiLCJwcmVjZWRlbmNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7OztrRUFMTTt5QkFFRTtvQkFDa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEMsSUFBQSxBQUFNQSxnQ0FBTjtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNDLElBQUk7Z0JBQ2hCLElBQU1DLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxlQUFlQyxJQUFBQSxvQ0FBOEIsRUFBQ0gsWUFBWUksdUJBQVksR0FDdEVDLFFBQVFILGFBQWFJLEdBQUcsQ0FBQyxTQUFDQztvQkFDeEIsSUFBTUMsT0FBT0QsWUFBWUUsWUFBWSxDQUFDVjtvQkFFdEMsT0FBT1M7Z0JBQ1Q7Z0JBRU4sT0FBT0g7WUFDVDs7OztZQUVPSyxLQUFBQTttQkFBUCxTQUFPQSwwQkFBMEJDLFFBQVEsRUFBRVgsVUFBVTtnQkFBSSxPQUFPWSxvQkFBZSxDQUFDRix5QkFBeUIsQ0FidEZiLGlCQWF3R2MsVUFBVVg7WUFBYTs7O1lBRTNJYSxLQUFBQTttQkFBUCxTQUFPQSxvQ0FBb0NGLFFBQVEsRUFBRVgsVUFBVSxFQUFFYyxVQUFVO2dCQUFJLE9BQU9GLG9CQUFlLENBQUNDLG1DQUFtQyxDQWZ0SGhCLGlCQWV3SWMsVUFBVVgsWUFBWWM7WUFBYTs7O1dBZjNLakI7RUFBd0JlLG9CQUFlIn0=