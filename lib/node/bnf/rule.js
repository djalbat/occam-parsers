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
                var name = this.getName(), opacity = this.getOpacity(), definitions = this.generateDefinitions(), rule = Rule.fromNameOpacityDefinitionsAndNonTerminalNode(name, opacity, definitions, _nonTerminal.default);
                return rule;
            }
        },
        {
            key: "getOpacity",
            value: function getOpacity() {
                var opacity = null;
                var childNodes = this.getChildNodes(), opacityModifierBNFNode = (0, _node.nodeFromChildNodesAndRuleName)(childNodes, _ruleNames.opacityModifierRuleName);
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
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _nonTerminal.default.fromRuleNameChildNodesAndOpacity(RuleBNFNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return RuleBNFNode;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2JuZi9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBvcGFjaXR5TW9kaWZpZXJSdWxlTmFtZSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IG5vZGVGcm9tQ2hpbGROb2Rlc0FuZFJ1bGVOYW1lIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ub2RlXCI7XG5cbmNvbnN0IHsgZmlyc3QsIHNlY29uZExhc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlQk5GTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUnVsZShSdWxlKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIG9wYWNpdHkgPSB0aGlzLmdldE9wYWNpdHkoKSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IHRoaXMuZ2VuZXJhdGVEZWZpbml0aW9ucygpLFxuICAgICAgICAgIHJ1bGUgPSBSdWxlLmZyb21OYW1lT3BhY2l0eURlZmluaXRpb25zQW5kTm9uVGVybWluYWxOb2RlKG5hbWUsIG9wYWNpdHksIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBnZXRPcGFjaXR5KCkge1xuICAgIGxldCBvcGFjaXR5ID0gbnVsbDtcblxuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBvcGFjaXR5TW9kaWZpZXJCTkZOb2RlID0gbm9kZUZyb21DaGlsZE5vZGVzQW5kUnVsZU5hbWUoY2hpbGROb2Rlcywgb3BhY2l0eU1vZGlmaWVyUnVsZU5hbWUpO1xuXG4gICAgaWYgKG9wYWNpdHlNb2RpZmllckJORk5vZGUgIT09IG51bGwpIHtcbiAgICAgIG9wYWNpdHkgPSBvcGFjaXR5TW9kaWZpZXJCTkZOb2RlLmdldE9wYWNpdHkoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3BhY2l0eTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgbmFtZUJORk5vZGUgPSBmaXJzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgIG5hbWUgPSBuYW1lQk5GTm9kZS5nZXROYW1lKCk7XG4gICAgXG4gICAgcmV0dXJuIG5hbWU7XG4gIH1cbiAgXG4gIGdlbmVyYXRlRGVmaW5pdGlvbnMoKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHNlY29uZExhc3RDaGlsZE5vZGUgPSBzZWNvbmRMYXN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIGRlZmluaXRpb25zQk5GTm9kZSA9IHNlY29uZExhc3RDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgIGRlZmluaXRpb25zID0gZGVmaW5pdGlvbnNCTkZOb2RlLmdlbmVyYXRlRGVmaW5pdGlvbnMoKTtcbiAgICBcbiAgICByZXR1cm4gZGVmaW5pdGlvbnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShSdWxlQk5GTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpOyB9XG59XG4iXSwibmFtZXMiOlsiUnVsZUJORk5vZGUiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwic2Vjb25kTGFzdCIsImdlbmVyYXRlUnVsZSIsIlJ1bGUiLCJuYW1lIiwiZ2V0TmFtZSIsIm9wYWNpdHkiLCJnZXRPcGFjaXR5IiwiZGVmaW5pdGlvbnMiLCJnZW5lcmF0ZURlZmluaXRpb25zIiwicnVsZSIsImZyb21OYW1lT3BhY2l0eURlZmluaXRpb25zQW5kTm9uVGVybWluYWxOb2RlIiwiTm9uVGVybWluYWxOb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJvcGFjaXR5TW9kaWZpZXJCTkZOb2RlIiwibm9kZUZyb21DaGlsZE5vZGVzQW5kUnVsZU5hbWUiLCJvcGFjaXR5TW9kaWZpZXJSdWxlTmFtZSIsImZpcnN0Q2hpbGROb2RlIiwibmFtZUJORk5vZGUiLCJzZWNvbmRMYXN0Q2hpbGROb2RlIiwiZGVmaW5pdGlvbnNCTkZOb2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJydWxlTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFXcUJBOzs7eUJBVFU7a0VBRUg7eUJBRVk7b0JBQ007Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUMsSUFBUUMsUUFBc0JDLHlCQUFjLENBQXBDRCxPQUFPRSxhQUFlRCx5QkFBYyxDQUE3QkM7QUFFQSxJQUFBLEFBQU1ILDRCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDbkJJLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhQyxJQUFJO2dCQUNmLElBQU1DLE9BQU8sSUFBSSxDQUFDQyxPQUFPLElBQ25CQyxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QkMsY0FBYyxJQUFJLENBQUNDLG1CQUFtQixJQUN0Q0MsT0FBT1AsS0FBS1EsNENBQTRDLENBQUNQLE1BQU1FLFNBQVNFLGFBQWFJLG9CQUFlO2dCQUUxRyxPQUFPRjtZQUNUOzs7WUFFQUgsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlELFVBQVU7Z0JBRWQsSUFBTU8sYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLHlCQUF5QkMsSUFBQUEsbUNBQTZCLEVBQUNILFlBQVlJLGtDQUF1QjtnQkFFaEcsSUFBSUYsMkJBQTJCLE1BQU07b0JBQ25DVCxVQUFVUyx1QkFBdUJSLFVBQVU7Z0JBQzdDO2dCQUVBLE9BQU9EO1lBQ1Q7OztZQUVBRCxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVEsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JJLGlCQUFpQm5CLE1BQU1jLGFBQ3ZCTSxjQUFjRCxnQkFDZGQsT0FBT2UsWUFBWWQsT0FBTztnQkFFaEMsT0FBT0Q7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNSSxhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQk0sc0JBQXNCbkIsV0FBV1ksYUFDakNRLHFCQUFxQkQscUJBQ3JCWixjQUFjYSxtQkFBbUJaLG1CQUFtQjtnQkFFMUQsT0FBT0Q7WUFDVDs7OztZQUVPYyxLQUFBQTttQkFBUCxTQUFPQSxpQ0FBaUNDLFFBQVEsRUFBRVYsVUFBVSxFQUFFUCxPQUFPO2dCQUFJLE9BQU9NLG9CQUFlLENBQUNVLGdDQUFnQyxDQXpDN0d4QixhQXlDMkh5QixVQUFVVixZQUFZUDtZQUFVOzs7V0F6QzNKUjtFQUFvQmMsb0JBQWUifQ==