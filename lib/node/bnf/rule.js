"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RuleBNFNode;
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
var first = _necessary.arrayUtilities.first, secondLast = _necessary.arrayUtilities.secondLast;
var RuleBNFNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(RuleBNFNode, NonTerminalNode);
    function RuleBNFNode() {
        _class_call_check(this, RuleBNFNode);
        return _call_super(this, RuleBNFNode, arguments);
    }
    _create_class(RuleBNFNode, [
        {
            key: "generateRule",
            value: function generateRule(Rule) {
                var name = this.getName(), opacity = this.getOpacity(), definitions = this.generateDefinitions(), rule = Rule.fromNameOpacityAndDefinitions(name, opacity, definitions);
                return rule;
            }
        },
        {
            key: "getOpacity",
            value: function getOpacity() {
                var opacity = null;
                var ruleName = _ruleNames.OPACITY_MODIFIER_RULE_NAME, childNodes = this.getChildNodes(), opacityModifierBNFNode = (0, _node.nodeFromChildNodesAndRuleName)(childNodes, ruleName);
                if (opacityModifierBNFNode !== null) {
                    opacity = opacityModifierBNFNode.getOpacity();
                }
                return opacity;
            }
        },
        {
            key: "getName",
            value: function getName() {
                var childNodes = this.getChildNodes(), firstChildNode = first(childNodes), nameBNFNode = firstChildNode, name = nameBNFNode.getName();
                return name;
            }
        },
        {
            key: "generateDefinitions",
            value: function generateDefinitions() {
                var childNodes = this.getChildNodes(), secondLastChildNode = secondLast(childNodes), definitionsBNFNode = secondLastChildNode, definitions = definitionsBNFNode.generateDefinitions();
                return definitions;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _nonTerminal.default.fromRuleNameChildNodesOpacityAndPrecedence(RuleBNFNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return RuleBNFNode;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2JuZi9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBPUEFDSVRZX01PRElGSUVSX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IG5vZGVGcm9tQ2hpbGROb2Rlc0FuZFJ1bGVOYW1lIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ub2RlXCI7XG5cbmNvbnN0IHsgZmlyc3QsIHNlY29uZExhc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlQk5GTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUnVsZShSdWxlKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIG9wYWNpdHkgPSB0aGlzLmdldE9wYWNpdHkoKSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IHRoaXMuZ2VuZXJhdGVEZWZpbml0aW9ucygpLFxuICAgICAgICAgIHJ1bGUgPSBSdWxlLmZyb21OYW1lT3BhY2l0eUFuZERlZmluaXRpb25zKG5hbWUsIG9wYWNpdHksIGRlZmluaXRpb25zKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgZ2V0T3BhY2l0eSgpIHtcbiAgICBsZXQgb3BhY2l0eSA9IG51bGw7XG5cbiAgICBjb25zdCBydWxlTmFtZSA9IE9QQUNJVFlfTU9ESUZJRVJfUlVMRV9OQU1FLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBvcGFjaXR5TW9kaWZpZXJCTkZOb2RlID0gbm9kZUZyb21DaGlsZE5vZGVzQW5kUnVsZU5hbWUoY2hpbGROb2RlcywgcnVsZU5hbWUpO1xuXG4gICAgaWYgKG9wYWNpdHlNb2RpZmllckJORk5vZGUgIT09IG51bGwpIHtcbiAgICAgIG9wYWNpdHkgPSBvcGFjaXR5TW9kaWZpZXJCTkZOb2RlLmdldE9wYWNpdHkoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3BhY2l0eTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgbmFtZUJORk5vZGUgPSBmaXJzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgIG5hbWUgPSBuYW1lQk5GTm9kZS5nZXROYW1lKCk7XG4gICAgXG4gICAgcmV0dXJuIG5hbWU7XG4gIH1cbiAgXG4gIGdlbmVyYXRlRGVmaW5pdGlvbnMoKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHNlY29uZExhc3RDaGlsZE5vZGUgPSBzZWNvbmRMYXN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIGRlZmluaXRpb25zQk5GTm9kZSA9IHNlY29uZExhc3RDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgIGRlZmluaXRpb25zID0gZGVmaW5pdGlvbnNCTkZOb2RlLmdlbmVyYXRlRGVmaW5pdGlvbnMoKTtcbiAgICBcbiAgICByZXR1cm4gZGVmaW5pdGlvbnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKFJ1bGVCTkZOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJSdWxlQk5GTm9kZSIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJzZWNvbmRMYXN0IiwiZ2VuZXJhdGVSdWxlIiwiUnVsZSIsIm5hbWUiLCJnZXROYW1lIiwib3BhY2l0eSIsImdldE9wYWNpdHkiLCJkZWZpbml0aW9ucyIsImdlbmVyYXRlRGVmaW5pdGlvbnMiLCJydWxlIiwiZnJvbU5hbWVPcGFjaXR5QW5kRGVmaW5pdGlvbnMiLCJydWxlTmFtZSIsIk9QQUNJVFlfTU9ESUZJRVJfUlVMRV9OQU1FIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJvcGFjaXR5TW9kaWZpZXJCTkZOb2RlIiwibm9kZUZyb21DaGlsZE5vZGVzQW5kUnVsZU5hbWUiLCJmaXJzdENoaWxkTm9kZSIsIm5hbWVCTkZOb2RlIiwic2Vjb25kTGFzdENoaWxkTm9kZSIsImRlZmluaXRpb25zQk5GTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsInByZWNlZGVuY2UiLCJOb25UZXJtaW5hbE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBV3FCQTs7O3lCQVRVO2tFQUVIO3lCQUVlO29CQUNHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlDLElBQVFDLFFBQXNCQyx5QkFBYyxDQUFwQ0QsT0FBT0UsYUFBZUQseUJBQWMsQ0FBN0JDO0FBRUEsSUFBQSxBQUFNSCw0QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkksS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFDLElBQUk7Z0JBQ2YsSUFBTUMsT0FBTyxJQUFJLENBQUNDLE9BQU8sSUFDbkJDLFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCQyxjQUFjLElBQUksQ0FBQ0MsbUJBQW1CLElBQ3RDQyxPQUFPUCxLQUFLUSw2QkFBNkIsQ0FBQ1AsTUFBTUUsU0FBU0U7Z0JBRS9ELE9BQU9FO1lBQ1Q7OztZQUVBSCxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUQsVUFBVTtnQkFFZCxJQUFNTSxXQUFXQyxxQ0FBMEIsRUFDckNDLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyx5QkFBeUJDLElBQUFBLG1DQUE2QixFQUFDSCxZQUFZRjtnQkFFekUsSUFBSUksMkJBQTJCLE1BQU07b0JBQ25DVixVQUFVVSx1QkFBdUJULFVBQVU7Z0JBQzdDO2dCQUVBLE9BQU9EO1lBQ1Q7OztZQUVBRCxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVMsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JHLGlCQUFpQm5CLE1BQU1lLGFBQ3ZCSyxjQUFjRCxnQkFDZGQsT0FBT2UsWUFBWWQsT0FBTztnQkFFaEMsT0FBT0Q7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNSyxhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQkssc0JBQXNCbkIsV0FBV2EsYUFDakNPLHFCQUFxQkQscUJBQ3JCWixjQUFjYSxtQkFBbUJaLG1CQUFtQjtnQkFFMUQsT0FBT0Q7WUFDVDs7OztZQUVPYyxLQUFBQTttQkFBUCxTQUFPQSwyQ0FBMkNWLFFBQVEsRUFBRUUsVUFBVSxFQUFFUixPQUFPLEVBQUVpQixVQUFVO2dCQUFJLE9BQU9DLG9CQUFlLENBQUNGLDBDQUEwQyxDQTFDN0l4QixhQTBDMkpjLFVBQVVFLFlBQVlSLFNBQVNpQjtZQUFhOzs7V0ExQ3ZNekI7RUFBb0IwQixvQkFBZSJ9