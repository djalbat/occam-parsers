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
var DocumentBNFNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(DocumentBNFNode, NonTerminalNode);
    function DocumentBNFNode() {
        _class_call_check(this, DocumentBNFNode);
        return _call_super(this, DocumentBNFNode, arguments);
    }
    _create_class(DocumentBNFNode, [
        {
            key: "generateRules",
            value: function generateRules(Rule) {
                var ruleName = _ruleNames.RULE_RULE_NAME, childNodes = this.getChildNodes(), ruleBNFNodes = (0, _node.nodesFromChildNodesAndRuleName)(childNodes, ruleName), rules = ruleBNFNodes.map(function(ruleBNFNode) {
                    var rule = ruleBNFNode.generateRule(Rule);
                    return rule;
                });
                return rules;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _nonTerminal.default.fromRuleNameChildNodesOpacityAndPrecedence(DocumentBNFNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return DocumentBNFNode;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2JuZi9kb2N1bWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tXCIuLi8uLi9ub2RlL25vblRlcm1pbmFsXCI7XG5cbmltcG9ydCB7IFJVTEVfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgbm9kZXNGcm9tQ2hpbGROb2Rlc0FuZFJ1bGVOYW1lIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ub2RlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvY3VtZW50Qk5GTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUnVsZXMoUnVsZSkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gUlVMRV9SVUxFX05BTUUsXG4gICAgICAgICAgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHJ1bGVCTkZOb2RlcyA9IG5vZGVzRnJvbUNoaWxkTm9kZXNBbmRSdWxlTmFtZShjaGlsZE5vZGVzLCBydWxlTmFtZSksXG4gICAgICAgICAgcnVsZXMgPSBydWxlQk5GTm9kZXMubWFwKChydWxlQk5GTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcnVsZSA9IHJ1bGVCTkZOb2RlLmdlbmVyYXRlUnVsZShSdWxlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHJ1bGU7XG4gICAgICAgICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShEb2N1bWVudEJORk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIkRvY3VtZW50Qk5GTm9kZSIsImdlbmVyYXRlUnVsZXMiLCJSdWxlIiwicnVsZU5hbWUiLCJSVUxFX1JVTEVfTkFNRSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwicnVsZUJORk5vZGVzIiwibm9kZXNGcm9tQ2hpbGROb2Rlc0FuZFJ1bGVOYW1lIiwicnVsZXMiLCJtYXAiLCJydWxlQk5GTm9kZSIsInJ1bGUiLCJnZW5lcmF0ZVJ1bGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIk5vblRlcm1pbmFsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7a0VBTE07eUJBRUk7b0JBQ2dCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhDLElBQUEsQUFBTUEsZ0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjQyxJQUFJO2dCQUNoQixJQUFNQyxXQUFXQyx5QkFBYyxFQUN6QkMsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLGVBQWVDLElBQUFBLG9DQUE4QixFQUFDSCxZQUFZRixXQUMxRE0sUUFBUUYsYUFBYUcsR0FBRyxDQUFDLFNBQUNDO29CQUN4QixJQUFNQyxPQUFPRCxZQUFZRSxZQUFZLENBQUNYO29CQUV0QyxPQUFPVTtnQkFDVDtnQkFFTixPQUFPSDtZQUNUOzs7O1lBRU9LLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ1gsUUFBUSxFQUFFRSxVQUFVLEVBQUVVLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQyxvQkFBZSxDQUFDSCwwQ0FBMEMsQ0FkN0lkLGlCQWMrSkcsVUFBVUUsWUFBWVUsU0FBU0M7WUFBYTs7O1dBZDNNaEI7RUFBd0JpQixvQkFBZSJ9