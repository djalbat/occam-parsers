"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return StringLiteralBNFNode;
    }
});
var _necessary = require("necessary");
var _nonTerminal = /*#__PURE__*/ _interop_require_default(require("../../node/nonTerminal"));
var _stringLiteral = /*#__PURE__*/ _interop_require_default(require("../../part/terminal/stringLiteral"));
var _constants = require("../../constants");
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
var first = _necessary.arrayUtilities.first, second = _necessary.arrayUtilities.second;
var StringLiteralBNFNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(StringLiteralBNFNode, NonTerminalNode);
    function StringLiteralBNFNode() {
        _class_call_check(this, StringLiteralBNFNode);
        var _this;
        _this = _call_super(this, StringLiteralBNFNode, arguments), _define_property(_this, "regularExpression", /^"((?:\\.|[^"\\])*)"$/);
        return _this;
    }
    _create_class(StringLiteralBNFNode, [
        {
            key: "generatePart",
            value: function generatePart(callAhead) {
                var content = this.getContent(), stringLiteralPart = _stringLiteral.default.fromContent(content);
                return stringLiteralPart;
            }
        },
        {
            key: "getContent",
            value: function getContent() {
                var content;
                var childNodes = this.getChildNodes(), firstChildNode = first(childNodes), terminalNode = firstChildNode, terminalNodeContent = terminalNode.getContent(), matches = terminalNodeContent.match(this.regularExpression), secondMatch = second(matches);
                content = secondMatch; ///
                content = sanitiseContent(content);
                return content;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _nonTerminal.default.fromRuleNameChildNodesOpacityAndPrecedence(StringLiteralBNFNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return StringLiteralBNFNode;
}(_nonTerminal.default);
function sanitiseContent(content) {
    content = content.replace(/\\\\/g, _constants.ESCAPED_BACKSLASH).replace(/\\"/g, _constants.ESCAPED_DOUBLE_QUOTE);
    return content;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2JuZi9zdHJpbmdMaXRlcmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9ub25UZXJtaW5hbFwiO1xuaW1wb3J0IFN0cmluZ0xpdGVyYWxQYXJ0IGZyb20gXCIuLi8uLi9wYXJ0L3Rlcm1pbmFsL3N0cmluZ0xpdGVyYWxcIjtcblxuaW1wb3J0IHsgRVNDQVBFRF9CQUNLU0xBU0gsIEVTQ0FQRURfRE9VQkxFX1FVT1RFIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IGZpcnN0LCBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHJpbmdMaXRlcmFsQk5GTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIHJlZ3VsYXJFeHByZXNzaW9uID0gL15cIigoPzpcXFxcLnxbXlwiXFxcXF0pKilcIiQvO1xuXG4gIGdlbmVyYXRlUGFydChjYWxsQWhlYWQpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgc3RyaW5nTGl0ZXJhbFBhcnQgPSBTdHJpbmdMaXRlcmFsUGFydC5mcm9tQ29udGVudChjb250ZW50KTtcblxuICAgIHJldHVybiBzdHJpbmdMaXRlcmFsUGFydDtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgbGV0IGNvbnRlbnQ7XG5cbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICB0ZXJtaW5hbE5vZGUgPSBmaXJzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgIHRlcm1pbmFsTm9kZUNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIG1hdGNoZXMgPSB0ZXJtaW5hbE5vZGVDb250ZW50Lm1hdGNoKHRoaXMucmVndWxhckV4cHJlc3Npb24pLFxuICAgICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgY29udGVudCA9IHNlY29uZE1hdGNoOyAgLy8vXG5cbiAgICBjb250ZW50ID0gc2FuaXRpc2VDb250ZW50KGNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKFN0cmluZ0xpdGVyYWxCTkZOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cblxuZnVuY3Rpb24gc2FuaXRpc2VDb250ZW50KGNvbnRlbnQpIHtcbiAgY29udGVudCA9IGNvbnRlbnRcbiAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFxcXFxcL2csIEVTQ0FQRURfQkFDS1NMQVNIKVxuICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXFwiL2csIEVTQ0FQRURfRE9VQkxFX1FVT1RFKTtcblxuICByZXR1cm4gY29udGVudDtcbn1cbiJdLCJuYW1lcyI6WyJTdHJpbmdMaXRlcmFsQk5GTm9kZSIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJzZWNvbmQiLCJyZWd1bGFyRXhwcmVzc2lvbiIsImdlbmVyYXRlUGFydCIsImNhbGxBaGVhZCIsImNvbnRlbnQiLCJnZXRDb250ZW50Iiwic3RyaW5nTGl0ZXJhbFBhcnQiLCJTdHJpbmdMaXRlcmFsUGFydCIsImZyb21Db250ZW50IiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmaXJzdENoaWxkTm9kZSIsInRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZUNvbnRlbnQiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCIsInNhbml0aXNlQ29udGVudCIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsInJ1bGVOYW1lIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJOb25UZXJtaW5hbE5vZGUiLCJyZXBsYWNlIiwiRVNDQVBFRF9CQUNLU0xBU0giLCJFU0NBUEVEX0RPVUJMRV9RVU9URSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFXcUJBOzs7eUJBVFU7a0VBRUg7b0VBQ0U7eUJBRTBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4RCxJQUFRQyxRQUFrQkMseUJBQWMsQ0FBaENELE9BQU9FLFNBQVdELHlCQUFjLENBQXpCQztBQUVBLElBQUEsQUFBTUgscUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBOztnQkFBTixrQkFBTUEsa0NBQ25CSSx3QkFBQUEscUJBQW9COzs7a0JBRERKOztZQUduQkssS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFDLFNBQVM7Z0JBQ3BCLElBQU1DLFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCQyxvQkFBb0JDLHNCQUFpQixDQUFDQyxXQUFXLENBQUNKO2dCQUV4RCxPQUFPRTtZQUNUOzs7WUFFQUQsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlEO2dCQUVKLElBQU1LLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxpQkFBaUJiLE1BQU1XLGFBQ3ZCRyxlQUFlRCxnQkFDZkUsc0JBQXNCRCxhQUFhUCxVQUFVLElBQzdDUyxVQUFVRCxvQkFBb0JFLEtBQUssQ0FBQyxJQUFJLENBQUNkLGlCQUFpQixHQUMxRGUsY0FBY2hCLE9BQU9jO2dCQUUzQlYsVUFBVVksYUFBYyxHQUFHO2dCQUUzQlosVUFBVWEsZ0JBQWdCYjtnQkFFMUIsT0FBT0E7WUFDVDs7OztZQUVPYyxLQUFBQTttQkFBUCxTQUFPQSwyQ0FBMkNDLFFBQVEsRUFBRVYsVUFBVSxFQUFFVyxPQUFPLEVBQUVDLFVBQVU7Z0JBQUksT0FBT0Msb0JBQWUsQ0FBQ0osMENBQTBDLENBM0I3SXJCLHNCQTJCb0tzQixVQUFVVixZQUFZVyxTQUFTQztZQUFhOzs7V0EzQmhOeEI7RUFBNkJ5QixvQkFBZTtBQThCakUsU0FBU0wsZ0JBQWdCYixPQUFPO0lBQzlCQSxVQUFVQSxRQUNHbUIsT0FBTyxDQUFDLFNBQVNDLDRCQUFpQixFQUNsQ0QsT0FBTyxDQUFDLFFBQVFFLCtCQUFvQjtJQUVqRCxPQUFPckI7QUFDVCJ9