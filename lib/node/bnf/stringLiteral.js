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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2JuZi9zdHJpbmdMaXRlcmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9ub25UZXJtaW5hbFwiO1xuaW1wb3J0IFN0cmluZ0xpdGVyYWxQYXJ0IGZyb20gXCIuLi8uLi9wYXJ0L3Rlcm1pbmFsL3N0cmluZ0xpdGVyYWxcIjtcblxuaW1wb3J0IHsgRVNDQVBFRF9CQUNLU0xBU0gsIEVTQ0FQRURfRE9VQkxFX1FVT1RFIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IGZpcnN0LCBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHJpbmdMaXRlcmFsQk5GTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIHJlZ3VsYXJFeHByZXNzaW9uID0gL15cIigoPzpcXFxcLnxbXlwiXFxcXF0pKilcIiQvO1xuXG4gIGdlbmVyYXRlUGFydChjYWxsQWhlYWQpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgc3RyaW5nTGl0ZXJhbFBhcnQgPSBTdHJpbmdMaXRlcmFsUGFydC5mcm9tQ29udGVudChjb250ZW50KTtcblxuICAgIHJldHVybiBzdHJpbmdMaXRlcmFsUGFydDtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgbGV0IGNvbnRlbnQ7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgdGVybWluYWxOb2RlID0gZmlyc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICB0ZXJtaW5hbE5vZGVDb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBtYXRjaGVzID0gdGVybWluYWxOb2RlQ29udGVudC5tYXRjaCh0aGlzLnJlZ3VsYXJFeHByZXNzaW9uKSxcbiAgICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIGNvbnRlbnQgPSBzZWNvbmRNYXRjaDsgIC8vL1xuXG4gICAgY29udGVudCA9IHNhbml0aXNlQ29udGVudChjb250ZW50KTtcblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShTdHJpbmdMaXRlcmFsQk5GTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG5cbmZ1bmN0aW9uIHNhbml0aXNlQ29udGVudChjb250ZW50KSB7XG4gIGNvbnRlbnQgPSBjb250ZW50XG4gICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcXFxcXC9nLCBFU0NBUEVEX0JBQ0tTTEFTSClcbiAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFxcIi9nLCBFU0NBUEVEX0RPVUJMRV9RVU9URSk7XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG4iXSwibmFtZXMiOlsiU3RyaW5nTGl0ZXJhbEJORk5vZGUiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwic2Vjb25kIiwicmVndWxhckV4cHJlc3Npb24iLCJnZW5lcmF0ZVBhcnQiLCJjYWxsQWhlYWQiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInN0cmluZ0xpdGVyYWxQYXJ0IiwiU3RyaW5nTGl0ZXJhbFBhcnQiLCJmcm9tQ29udGVudCIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZmlyc3RDaGlsZE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVDb250ZW50IiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJzYW5pdGlzZUNvbnRlbnQiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJydWxlTmFtZSIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiTm9uVGVybWluYWxOb2RlIiwicmVwbGFjZSIsIkVTQ0FQRURfQkFDS1NMQVNIIiwiRVNDQVBFRF9ET1VCTEVfUVVPVEUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBV3FCQTs7O3lCQVRVO2tFQUVIO29FQUNFO3lCQUUwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEQsSUFBUUMsUUFBa0JDLHlCQUFjLENBQWhDRCxPQUFPRSxTQUFXRCx5QkFBYyxDQUF6QkM7QUFFQSxJQUFBLEFBQU1ILHFDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTs7Z0JBQU4sa0JBQU1BLGtDQUNuQkksd0JBQUFBLHFCQUFvQjs7O2tCQURESjs7WUFHbkJLLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhQyxTQUFTO2dCQUNwQixJQUFNQyxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QkMsb0JBQW9CQyxzQkFBaUIsQ0FBQ0MsV0FBVyxDQUFDSjtnQkFFeEQsT0FBT0U7WUFDVDs7O1lBRUFELEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJRDtnQkFDSixJQUFNSyxhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQkMsaUJBQWlCYixNQUFNVyxhQUN2QkcsZUFBZUQsZ0JBQ2ZFLHNCQUFzQkQsYUFBYVAsVUFBVSxJQUM3Q1MsVUFBVUQsb0JBQW9CRSxLQUFLLENBQUMsSUFBSSxDQUFDZCxpQkFBaUIsR0FDMURlLGNBQWNoQixPQUFPYztnQkFFM0JWLFVBQVVZLGFBQWMsR0FBRztnQkFFM0JaLFVBQVVhLGdCQUFnQmI7Z0JBRTFCLE9BQU9BO1lBQ1Q7Ozs7WUFFT2MsS0FBQUE7bUJBQVAsU0FBT0EsMkNBQTJDQyxRQUFRLEVBQUVWLFVBQVUsRUFBRVcsT0FBTyxFQUFFQyxVQUFVO2dCQUFJLE9BQU9DLG9CQUFlLENBQUNKLDBDQUEwQyxDQTFCN0lyQixzQkEwQm9Lc0IsVUFBVVYsWUFBWVcsU0FBU0M7WUFBYTs7O1dBMUJoTnhCO0VBQTZCeUIsb0JBQWU7QUE2QmpFLFNBQVNMLGdCQUFnQmIsT0FBTztJQUM5QkEsVUFBVUEsUUFDR21CLE9BQU8sQ0FBQyxTQUFTQyw0QkFBaUIsRUFDbENELE9BQU8sQ0FBQyxRQUFRRSwrQkFBb0I7SUFFakQsT0FBT3JCO0FBQ1QifQ==