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
var PartChoiceBNFNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(PartChoiceBNFNode, NonTerminalNode);
    var _super = _create_super(PartChoiceBNFNode);
    function PartChoiceBNFNode() {
        _class_call_check(this, PartChoiceBNFNode);
        return _super.apply(this, arguments);
    }
    _create_class(PartChoiceBNFNode, [
        {
            key: "generatePartChoice",
            value: function generatePartChoice(lookAhead) {
                var childNodes = this.getChildNodes(), partBNFNode = (0, _node.nodeFromChildNodesAndRuleName)(childNodes, _ruleNames.partRuleName), precedenceBNFNode = (0, _node.nodeFromChildNodesAndRuleName)(childNodes, _ruleNames.precedenceRuleName);
                lookAhead = false; ///
                var part = partBNFNode.generatePart(lookAhead), precedence = precedenceBNFNode === null ? null : precedenceBNFNode.getPrecedence(), definition = _partChoice.default.fromPartAndPrecedence(part, precedence);
                return definition;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndAmbiguous",
            value: function fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) {
                return _nonTerminal.default.fromRuleNameChildNodesAndAmbiguous(PartChoiceBNFNode, ruleName, childNodes, ambiguous);
            }
        }
    ]);
    return PartChoiceBNFNode;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2JuZi9wYXJ0Q2hvaWNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUGFydENob2ljZSBmcm9tIFwiLi4vLi4vcGFydENob2ljZVwiO1xuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBub2RlRnJvbUNoaWxkTm9kZXNBbmRSdWxlTmFtZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbm9kZVwiO1xuaW1wb3J0IHsgcGFydFJ1bGVOYW1lLCBwcmVjZWRlbmNlUnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnRDaG9pY2VCTkZOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVQYXJ0Q2hvaWNlKGxvb2tBaGVhZCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBwYXJ0Qk5GTm9kZSA9IG5vZGVGcm9tQ2hpbGROb2Rlc0FuZFJ1bGVOYW1lKGNoaWxkTm9kZXMsIHBhcnRSdWxlTmFtZSksXG4gICAgICAgICAgcHJlY2VkZW5jZUJORk5vZGUgPSBub2RlRnJvbUNoaWxkTm9kZXNBbmRSdWxlTmFtZShjaGlsZE5vZGVzLCBwcmVjZWRlbmNlUnVsZU5hbWUpO1xuXG4gICAgbG9va0FoZWFkID0gZmFsc2U7ICAvLy9cblxuICAgIGNvbnN0IHBhcnQgPSBwYXJ0Qk5GTm9kZS5nZW5lcmF0ZVBhcnQobG9va0FoZWFkKSxcbiAgICAgICAgICBwcmVjZWRlbmNlID0gKHByZWNlZGVuY2VCTkZOb2RlID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWNlZGVuY2VCTkZOb2RlLmdldFByZWNlZGVuY2UoKSxcbiAgICAgICAgICBkZWZpbml0aW9uID0gUGFydENob2ljZS5mcm9tUGFydEFuZFByZWNlZGVuY2UocGFydCwgcHJlY2VkZW5jZSk7XG5cbiAgICByZXR1cm4gZGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kQW1iaWd1b3VzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBhbWJpZ3VvdXMpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kQW1iaWd1b3VzKFBhcnRDaG9pY2VCTkZOb2RlLCBydWxlTmFtZSwgY2hpbGROb2RlcywgYW1iaWd1b3VzKTsgfVxufVxuIl0sIm5hbWVzIjpbIlBhcnRDaG9pY2VCTkZOb2RlIiwiZ2VuZXJhdGVQYXJ0Q2hvaWNlIiwibG9va0FoZWFkIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJwYXJ0Qk5GTm9kZSIsIm5vZGVGcm9tQ2hpbGROb2Rlc0FuZFJ1bGVOYW1lIiwicGFydFJ1bGVOYW1lIiwicHJlY2VkZW5jZUJORk5vZGUiLCJwcmVjZWRlbmNlUnVsZU5hbWUiLCJwYXJ0IiwiZ2VuZXJhdGVQYXJ0IiwicHJlY2VkZW5jZSIsImdldFByZWNlZGVuY2UiLCJkZWZpbml0aW9uIiwiUGFydENob2ljZSIsImZyb21QYXJ0QW5kUHJlY2VkZW5jZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRBbWJpZ3VvdXMiLCJydWxlTmFtZSIsImFtYmlndW91cyIsIk5vblRlcm1pbmFsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7aUVBTkU7a0VBQ0s7b0JBRWtCO3lCQUNHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxDLElBQUEsQUFBTUEsa0NBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQkMsU0FBUztnQkFDMUIsSUFBTUMsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLGNBQWNDLElBQUFBLG1DQUE2QixFQUFDSCxZQUFZSSx1QkFBWSxHQUNwRUMsb0JBQW9CRixJQUFBQSxtQ0FBNkIsRUFBQ0gsWUFBWU0sNkJBQWtCO2dCQUV0RlAsWUFBWSxPQUFRLEdBQUc7Z0JBRXZCLElBQU1RLE9BQU9MLFlBQVlNLFlBQVksQ0FBQ1QsWUFDaENVLGFBQWEsQUFBQ0osc0JBQXNCLE9BQ3BCLE9BQ0VBLGtCQUFrQkssYUFBYSxJQUNqREMsYUFBYUMsbUJBQVUsQ0FBQ0MscUJBQXFCLENBQUNOLE1BQU1FO2dCQUUxRCxPQUFPRTtZQUNUOzs7O1lBRU9HLEtBQUFBO21CQUFQLFNBQU9BLG1DQUFtQ0MsUUFBUSxFQUFFZixVQUFVLEVBQUVnQixTQUFTO2dCQUFJLE9BQU9DLG9CQUFlLENBQUNILGtDQUFrQyxDQWpCbkhqQixtQkFpQnVJa0IsVUFBVWYsWUFBWWdCO1lBQVk7OztXQWpCektuQjtFQUEwQm9CLG9CQUFlIn0=