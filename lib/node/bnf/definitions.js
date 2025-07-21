"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DefinitionsBNFNode;
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
var DefinitionsBNFNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(DefinitionsBNFNode, NonTerminalNode);
    function DefinitionsBNFNode() {
        _class_call_check(this, DefinitionsBNFNode);
        return _call_super(this, DefinitionsBNFNode, arguments);
    }
    _create_class(DefinitionsBNFNode, [
        {
            key: "generateDefinitions",
            value: function generateDefinitions() {
                var ruleName = _ruleNames.DEFINITION_RULE_NAME, childNodes = this.getChildNodes(), definitionBNFNodes = (0, _node.nodesFromChildNodesAndRuleName)(childNodes, ruleName), definitions = definitionBNFNodes.map(function(definitionBNFNode) {
                    var definition = definitionBNFNode.generateDefinition();
                    return definition;
                });
                return definitions;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNode, opacity, precedence) {
                return _nonTerminal.default.fromRuleNameChildNodesOpacityAndPrecedence(DefinitionsBNFNode, ruleName, childNode, opacity, precedence);
            }
        }
    ]);
    return DefinitionsBNFNode;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2JuZi9kZWZpbml0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBERUZJTklUSU9OX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IG5vZGVzRnJvbUNoaWxkTm9kZXNBbmRSdWxlTmFtZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWZpbml0aW9uc0JORk5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZURlZmluaXRpb25zKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gREVGSU5JVElPTl9SVUxFX05BTUUsXG4gICAgICAgICAgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGRlZmluaXRpb25CTkZOb2RlcyA9IG5vZGVzRnJvbUNoaWxkTm9kZXNBbmRSdWxlTmFtZShjaGlsZE5vZGVzLCBydWxlTmFtZSksXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9uQk5GTm9kZXMubWFwKChkZWZpbml0aW9uQk5GTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IGRlZmluaXRpb25CTkZOb2RlLmdlbmVyYXRlRGVmaW5pdGlvbigpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gZGVmaW5pdGlvbjtcbiAgICAgICAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gZGVmaW5pdGlvbnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGUsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoRGVmaW5pdGlvbnNCTkZOb2RlLCBydWxlTmFtZSwgY2hpbGROb2RlLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIkRlZmluaXRpb25zQk5GTm9kZSIsImdlbmVyYXRlRGVmaW5pdGlvbnMiLCJydWxlTmFtZSIsIkRFRklOSVRJT05fUlVMRV9OQU1FIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJkZWZpbml0aW9uQk5GTm9kZXMiLCJub2Rlc0Zyb21DaGlsZE5vZGVzQW5kUnVsZU5hbWUiLCJkZWZpbml0aW9ucyIsIm1hcCIsImRlZmluaXRpb25CTkZOb2RlIiwiZGVmaW5pdGlvbiIsImdlbmVyYXRlRGVmaW5pdGlvbiIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsImNoaWxkTm9kZSIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7OztrRUFMTzt5QkFFUztvQkFDVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoQyxJQUFBLEFBQU1BLG1DQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBV0MsK0JBQW9CLEVBQy9CQyxhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQkMscUJBQXFCQyxJQUFBQSxvQ0FBOEIsRUFBQ0gsWUFBWUYsV0FDaEVNLGNBQWNGLG1CQUFtQkcsR0FBRyxDQUFDLFNBQUNDO29CQUNwQyxJQUFNQyxhQUFhRCxrQkFBa0JFLGtCQUFrQjtvQkFFdkQsT0FBT0Q7Z0JBQ1Q7Z0JBRU4sT0FBT0g7WUFDVDs7OztZQUVPSyxLQUFBQTttQkFBUCxTQUFPQSwyQ0FBMkNYLFFBQVEsRUFBRVksU0FBUyxFQUFFQyxPQUFPLEVBQUVDLFVBQVU7Z0JBQUksT0FBT0Msb0JBQWUsQ0FBQ0osMENBQTBDLENBZDVJYixvQkFjaUtFLFVBQVVZLFdBQVdDLFNBQVNDO1lBQWE7OztXQWQ1TWhCO0VBQTJCaUIsb0JBQWUifQ==