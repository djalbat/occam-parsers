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
                var childNodes = this.getChildNodes(), partBNFNode = (0, _node.nodeFromChildNodesAndRuleName)(childNodes, _ruleNames.partRuleName), precedenceBNFNode = (0, _node.nodeFromChildNodesAndRuleName)(childNodes, _ruleNames.precedenceRuleName);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2JuZi9wYXJ0Q2hvaWNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUGFydENob2ljZSBmcm9tIFwiLi4vLi4vcGFydENob2ljZVwiO1xuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBub2RlRnJvbUNoaWxkTm9kZXNBbmRSdWxlTmFtZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbm9kZVwiO1xuaW1wb3J0IHsgcGFydFJ1bGVOYW1lLCBwcmVjZWRlbmNlUnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnRDaG9pY2VCTkZOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVQYXJ0Q2hvaWNlKGNhbGxBaGVhZCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBwYXJ0Qk5GTm9kZSA9IG5vZGVGcm9tQ2hpbGROb2Rlc0FuZFJ1bGVOYW1lKGNoaWxkTm9kZXMsIHBhcnRSdWxlTmFtZSksXG4gICAgICAgICAgcHJlY2VkZW5jZUJORk5vZGUgPSBub2RlRnJvbUNoaWxkTm9kZXNBbmRSdWxlTmFtZShjaGlsZE5vZGVzLCBwcmVjZWRlbmNlUnVsZU5hbWUpO1xuXG4gICAgY2FsbEFoZWFkID0gZmFsc2U7ICAvLy9cblxuICAgIGNvbnN0IHBhcnQgPSBwYXJ0Qk5GTm9kZS5nZW5lcmF0ZVBhcnQoY2FsbEFoZWFkKSxcbiAgICAgICAgICBwcmVjZWRlbmNlID0gKHByZWNlZGVuY2VCTkZOb2RlID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWNlZGVuY2VCTkZOb2RlLmdldFByZWNlZGVuY2UoKSxcbiAgICAgICAgICBkZWZpbml0aW9uID0gUGFydENob2ljZS5mcm9tUGFydEFuZFByZWNlZGVuY2UocGFydCwgcHJlY2VkZW5jZSk7XG5cbiAgICByZXR1cm4gZGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KFBhcnRDaG9pY2VCTkZOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJQYXJ0Q2hvaWNlQk5GTm9kZSIsImdlbmVyYXRlUGFydENob2ljZSIsImNhbGxBaGVhZCIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwicGFydEJORk5vZGUiLCJub2RlRnJvbUNoaWxkTm9kZXNBbmRSdWxlTmFtZSIsInBhcnRSdWxlTmFtZSIsInByZWNlZGVuY2VCTkZOb2RlIiwicHJlY2VkZW5jZVJ1bGVOYW1lIiwicGFydCIsImdlbmVyYXRlUGFydCIsInByZWNlZGVuY2UiLCJnZXRQcmVjZWRlbmNlIiwiZGVmaW5pdGlvbiIsIlBhcnRDaG9pY2UiLCJmcm9tUGFydEFuZFByZWNlZGVuY2UiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsInJ1bGVOYW1lIiwib3BhY2l0eSIsIk5vblRlcm1pbmFsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7aUVBTkU7a0VBQ0s7b0JBRWtCO3lCQUNHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxDLElBQUEsQUFBTUEsa0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUJDLFNBQVM7Z0JBQzFCLElBQU1DLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxjQUFjQyxJQUFBQSxtQ0FBNkIsRUFBQ0gsWUFBWUksdUJBQVksR0FDcEVDLG9CQUFvQkYsSUFBQUEsbUNBQTZCLEVBQUNILFlBQVlNLDZCQUFrQjtnQkFFdEZQLFlBQVksT0FBUSxHQUFHO2dCQUV2QixJQUFNUSxPQUFPTCxZQUFZTSxZQUFZLENBQUNULFlBQ2hDVSxhQUFhLEFBQUNKLHNCQUFzQixPQUNwQixPQUNFQSxrQkFBa0JLLGFBQWEsSUFDakRDLGFBQWFDLG1CQUFVLENBQUNDLHFCQUFxQixDQUFDTixNQUFNRTtnQkFFMUQsT0FBT0U7WUFDVDs7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSxpQ0FBaUNDLFFBQVEsRUFBRWYsVUFBVSxFQUFFZ0IsT0FBTztnQkFBSSxPQUFPQyxvQkFBZSxDQUFDSCxnQ0FBZ0MsQ0FqQjdHakIsbUJBaUJpSWtCLFVBQVVmLFlBQVlnQjtZQUFVOzs7V0FqQmpLbkI7RUFBMEJvQixvQkFBZSJ9