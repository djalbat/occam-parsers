"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PartChoiceBNFNode;
    }
});
var _partChoice = /*#__PURE__*/ _interop_require_default(require("../../partChoice"));
var _nonTerminal = /*#__PURE__*/ _interop_require_default(require("../../node/nonTerminal"));
var _node = require("../../utilities/node");
var _ruleNames = require("../../ruleNames");
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
var PartChoiceBNFNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(PartChoiceBNFNode, NonTerminalNode);
    function PartChoiceBNFNode() {
        _class_call_check(this, PartChoiceBNFNode);
        return _call_super(this, PartChoiceBNFNode, arguments);
    }
    _create_class(PartChoiceBNFNode, [
        {
            key: "generatePartChoice",
            value: function generatePartChoice(callAhead) {
                var ruleName;
                var childNodes = this.getChildNodes();
                ruleName = _ruleNames.PART_RULE_NAME;
                var partBNFNode = (0, _node.nodeFromChildNodesAndRuleName)(childNodes, ruleName);
                ruleName = _ruleNames.PRECEDENCE_RULE_NAME;
                var precedenceBNFNode = (0, _node.nodeFromChildNodesAndRuleName)(childNodes, ruleName);
                callAhead = false; ///
                var part = partBNFNode.generatePart(callAhead), precedence = precedenceBNFNode === null ? null : precedenceBNFNode.getPrecedence(), definition = _partChoice.default.fromPartAndPrecedence(part, precedence);
                return definition;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _nonTerminal.default.fromRuleNameChildNodesAndOpacity(PartChoiceBNFNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return PartChoiceBNFNode;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2JuZi9wYXJ0Q2hvaWNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUGFydENob2ljZSBmcm9tIFwiLi4vLi4vcGFydENob2ljZVwiO1xuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBub2RlRnJvbUNoaWxkTm9kZXNBbmRSdWxlTmFtZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbm9kZVwiO1xuaW1wb3J0IHsgUEFSVF9SVUxFX05BTUUsIFBSRUNFREVOQ0VfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJ0Q2hvaWNlQk5GTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUGFydENob2ljZShjYWxsQWhlYWQpIHtcbiAgICBsZXQgcnVsZU5hbWU7XG5cbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICBydWxlTmFtZSA9IFBBUlRfUlVMRV9OQU1FO1xuXG4gICAgY29uc3QgcGFydEJORk5vZGUgPSBub2RlRnJvbUNoaWxkTm9kZXNBbmRSdWxlTmFtZShjaGlsZE5vZGVzLCBydWxlTmFtZSk7XG5cbiAgICBydWxlTmFtZSA9IFBSRUNFREVOQ0VfUlVMRV9OQU1FO1xuXG4gICAgY29uc3QgcHJlY2VkZW5jZUJORk5vZGUgPSBub2RlRnJvbUNoaWxkTm9kZXNBbmRSdWxlTmFtZShjaGlsZE5vZGVzLCBydWxlTmFtZSk7XG5cbiAgICBjYWxsQWhlYWQgPSBmYWxzZTsgIC8vL1xuXG4gICAgY29uc3QgcGFydCA9IHBhcnRCTkZOb2RlLmdlbmVyYXRlUGFydChjYWxsQWhlYWQpLFxuICAgICAgICAgIHByZWNlZGVuY2UgPSAocHJlY2VkZW5jZUJORk5vZGUgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlY2VkZW5jZUJORk5vZGUuZ2V0UHJlY2VkZW5jZSgpLFxuICAgICAgICAgIGRlZmluaXRpb24gPSBQYXJ0Q2hvaWNlLmZyb21QYXJ0QW5kUHJlY2VkZW5jZShwYXJ0LCBwcmVjZWRlbmNlKTtcblxuICAgIHJldHVybiBkZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoUGFydENob2ljZUJORk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTsgfVxufVxuIl0sIm5hbWVzIjpbIlBhcnRDaG9pY2VCTkZOb2RlIiwiZ2VuZXJhdGVQYXJ0Q2hvaWNlIiwiY2FsbEFoZWFkIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsIlBBUlRfUlVMRV9OQU1FIiwicGFydEJORk5vZGUiLCJub2RlRnJvbUNoaWxkTm9kZXNBbmRSdWxlTmFtZSIsIlBSRUNFREVOQ0VfUlVMRV9OQU1FIiwicHJlY2VkZW5jZUJORk5vZGUiLCJwYXJ0IiwiZ2VuZXJhdGVQYXJ0IiwicHJlY2VkZW5jZSIsImdldFByZWNlZGVuY2UiLCJkZWZpbml0aW9uIiwiUGFydENob2ljZSIsImZyb21QYXJ0QW5kUHJlY2VkZW5jZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5Iiwib3BhY2l0eSIsIk5vblRlcm1pbmFsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7aUVBTkU7a0VBQ0s7b0JBRWtCO3lCQUNPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQUEsQUFBTUEsa0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUJDLFNBQVM7Z0JBQzFCLElBQUlDO2dCQUVKLElBQU1DLGFBQWEsSUFBSSxDQUFDQyxhQUFhO2dCQUVyQ0YsV0FBV0cseUJBQWM7Z0JBRXpCLElBQU1DLGNBQWNDLElBQUFBLG1DQUE2QixFQUFDSixZQUFZRDtnQkFFOURBLFdBQVdNLCtCQUFvQjtnQkFFL0IsSUFBTUMsb0JBQW9CRixJQUFBQSxtQ0FBNkIsRUFBQ0osWUFBWUQ7Z0JBRXBFRCxZQUFZLE9BQVEsR0FBRztnQkFFdkIsSUFBTVMsT0FBT0osWUFBWUssWUFBWSxDQUFDVixZQUNoQ1csYUFBYSxBQUFDSCxzQkFBc0IsT0FDcEIsT0FDRUEsa0JBQWtCSSxhQUFhLElBQ2pEQyxhQUFhQyxtQkFBVSxDQUFDQyxxQkFBcUIsQ0FBQ04sTUFBTUU7Z0JBRTFELE9BQU9FO1lBQ1Q7Ozs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0EsaUNBQWlDZixRQUFRLEVBQUVDLFVBQVUsRUFBRWUsT0FBTztnQkFBSSxPQUFPQyxvQkFBZSxDQUFDRixnQ0FBZ0MsQ0F6QjdHbEIsbUJBeUJpSUcsVUFBVUMsWUFBWWU7WUFBVTs7O1dBekJqS25CO0VBQTBCb0Isb0JBQWUifQ==