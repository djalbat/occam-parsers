"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DefinitionBNFNode;
    }
});
var _definition = /*#__PURE__*/ _interop_require_default(require("../../definition"));
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
var DefinitionBNFNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(DefinitionBNFNode, NonTerminalNode);
    function DefinitionBNFNode() {
        _class_call_check(this, DefinitionBNFNode);
        return _call_super(this, DefinitionBNFNode, arguments);
    }
    _create_class(DefinitionBNFNode, [
        {
            key: "generateDefinition",
            value: function generateDefinition() {
                var childNodes = this.getChildNodes(), partBNFNodes = (0, _node.nodesFromChildNodesAndRuleName)(childNodes, _ruleNames.partRuleName), precedenceBNFNode = (0, _node.nodeFromChildNodesAndRuleName)(childNodes, _ruleNames.precedenceRuleName), callAhead = false, parts = partBNFNodes.map(function(partBNFNode) {
                    var part = partBNFNode.generatePart(callAhead);
                    return part;
                }), precedence = precedenceBNFNode === null ? null : precedenceBNFNode.getPrecedence(), definition = _definition.default.fromPartsAndPrecedence(parts, precedence);
                return definition;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _nonTerminal.default.fromRuleNameChildNodesAndOpacity(DefinitionBNFNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return DefinitionBNFNode;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2JuZi9kZWZpbml0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvblwiO1xuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBwYXJ0UnVsZU5hbWUsIHByZWNlZGVuY2VSdWxlTmFtZSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IG5vZGVGcm9tQ2hpbGROb2Rlc0FuZFJ1bGVOYW1lLCBub2Rlc0Zyb21DaGlsZE5vZGVzQW5kUnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL25vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVmaW5pdGlvbkJORk5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZURlZmluaXRpb24oKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHBhcnRCTkZOb2RlcyA9IG5vZGVzRnJvbUNoaWxkTm9kZXNBbmRSdWxlTmFtZShjaGlsZE5vZGVzLCBwYXJ0UnVsZU5hbWUpLFxuICAgICAgICAgIHByZWNlZGVuY2VCTkZOb2RlID0gbm9kZUZyb21DaGlsZE5vZGVzQW5kUnVsZU5hbWUoY2hpbGROb2RlcywgcHJlY2VkZW5jZVJ1bGVOYW1lKSxcbiAgICAgICAgICBjYWxsQWhlYWQgPSBmYWxzZSwgIC8vL1xuICAgICAgICAgIHBhcnRzID0gcGFydEJORk5vZGVzLm1hcCgocGFydEJORk5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnQgPSBwYXJ0Qk5GTm9kZS5nZW5lcmF0ZVBhcnQoY2FsbEFoZWFkKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gcGFydDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBwcmVjZWRlbmNlID0gKHByZWNlZGVuY2VCTkZOb2RlID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWNlZGVuY2VCTkZOb2RlLmdldFByZWNlZGVuY2UoKSxcbiAgICAgICAgICBkZWZpbml0aW9uID0gRGVmaW5pdGlvbi5mcm9tUGFydHNBbmRQcmVjZWRlbmNlKHBhcnRzLCBwcmVjZWRlbmNlKTtcblxuICAgIHJldHVybiBkZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoRGVmaW5pdGlvbkJORk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTsgfVxufVxuIl0sIm5hbWVzIjpbIkRlZmluaXRpb25CTkZOb2RlIiwiZ2VuZXJhdGVEZWZpbml0aW9uIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJwYXJ0Qk5GTm9kZXMiLCJub2Rlc0Zyb21DaGlsZE5vZGVzQW5kUnVsZU5hbWUiLCJwYXJ0UnVsZU5hbWUiLCJwcmVjZWRlbmNlQk5GTm9kZSIsIm5vZGVGcm9tQ2hpbGROb2Rlc0FuZFJ1bGVOYW1lIiwicHJlY2VkZW5jZVJ1bGVOYW1lIiwiY2FsbEFoZWFkIiwicGFydHMiLCJtYXAiLCJwYXJ0Qk5GTm9kZSIsInBhcnQiLCJnZW5lcmF0ZVBhcnQiLCJwcmVjZWRlbmNlIiwiZ2V0UHJlY2VkZW5jZSIsImRlZmluaXRpb24iLCJEZWZpbml0aW9uIiwiZnJvbVBhcnRzQW5kUHJlY2VkZW5jZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwicnVsZU5hbWUiLCJvcGFjaXR5IiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7OztpRUFORTtrRUFDSzt5QkFFcUI7b0JBQzZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9ELElBQUEsQUFBTUEsa0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQkMsZUFBZUMsSUFBQUEsb0NBQThCLEVBQUNILFlBQVlJLHVCQUFZLEdBQ3RFQyxvQkFBb0JDLElBQUFBLG1DQUE2QixFQUFDTixZQUFZTyw2QkFBa0IsR0FDaEZDLFlBQVksT0FDWkMsUUFBUVAsYUFBYVEsR0FBRyxDQUFDLFNBQUNDO29CQUN4QixJQUFNQyxPQUFPRCxZQUFZRSxZQUFZLENBQUNMO29CQUV0QyxPQUFPSTtnQkFDVCxJQUNBRSxhQUFhLEFBQUNULHNCQUFzQixPQUNwQixPQUNFQSxrQkFBa0JVLGFBQWEsSUFDakRDLGFBQWFDLG1CQUFVLENBQUNDLHNCQUFzQixDQUFDVCxPQUFPSztnQkFFNUQsT0FBT0U7WUFDVDs7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSxpQ0FBaUNDLFFBQVEsRUFBRXBCLFVBQVUsRUFBRXFCLE9BQU87Z0JBQUksT0FBT0Msb0JBQWUsQ0FBQ0gsZ0NBQWdDLENBbkI3R3JCLG1CQW1CaUlzQixVQUFVcEIsWUFBWXFCO1lBQVU7OztXQW5Cakt2QjtFQUEwQndCLG9CQUFlIn0=