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
var DefinitionBNFNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(DefinitionBNFNode, NonTerminalNode);
    var _super = _create_super(DefinitionBNFNode);
    function DefinitionBNFNode() {
        _class_call_check(this, DefinitionBNFNode);
        return _super.apply(this, arguments);
    }
    _create_class(DefinitionBNFNode, [
        {
            key: "generateDefinition",
            value: function generateDefinition() {
                var childNodes = this.getChildNodes(), partBNFNodes = (0, _node.nodesFromChildNodesAndRuleName)(childNodes, _ruleNames.partRuleName), precedenceBNFNode = (0, _node.nodeFromChildNodesAndRuleName)(childNodes, _ruleNames.precedenceRuleName), lookAhead = false, parts = partBNFNodes.map(function(partBNFNode) {
                    var part = partBNFNode.generatePart(lookAhead);
                    return part;
                }), precedence = precedenceBNFNode === null ? null : precedenceBNFNode.getPrecedence(), definition = _definition.default.fromPartsAndPrecedence(parts, precedence);
                return definition;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndAmbiguous",
            value: function fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) {
                return _nonTerminal.default.fromRuleNameChildNodesAndAmbiguous(DefinitionBNFNode, ruleName, childNodes, ambiguous);
            }
        }
    ]);
    return DefinitionBNFNode;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2JuZi9kZWZpbml0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvblwiO1xuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBwYXJ0UnVsZU5hbWUsIHByZWNlZGVuY2VSdWxlTmFtZSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IG5vZGVGcm9tQ2hpbGROb2Rlc0FuZFJ1bGVOYW1lLCBub2Rlc0Zyb21DaGlsZE5vZGVzQW5kUnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL25vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVmaW5pdGlvbkJORk5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZURlZmluaXRpb24oKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHBhcnRCTkZOb2RlcyA9IG5vZGVzRnJvbUNoaWxkTm9kZXNBbmRSdWxlTmFtZShjaGlsZE5vZGVzLCBwYXJ0UnVsZU5hbWUpLFxuICAgICAgICAgIHByZWNlZGVuY2VCTkZOb2RlID0gbm9kZUZyb21DaGlsZE5vZGVzQW5kUnVsZU5hbWUoY2hpbGROb2RlcywgcHJlY2VkZW5jZVJ1bGVOYW1lKSxcbiAgICAgICAgICBsb29rQWhlYWQgPSBmYWxzZSwgIC8vL1xuICAgICAgICAgIHBhcnRzID0gcGFydEJORk5vZGVzLm1hcCgocGFydEJORk5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnQgPSBwYXJ0Qk5GTm9kZS5nZW5lcmF0ZVBhcnQobG9va0FoZWFkKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gcGFydDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBwcmVjZWRlbmNlID0gKHByZWNlZGVuY2VCTkZOb2RlID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWNlZGVuY2VCTkZOb2RlLmdldFByZWNlZGVuY2UoKSxcbiAgICAgICAgICBkZWZpbml0aW9uID0gRGVmaW5pdGlvbi5mcm9tUGFydHNBbmRQcmVjZWRlbmNlKHBhcnRzLCBwcmVjZWRlbmNlKTtcblxuICAgIHJldHVybiBkZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRBbWJpZ3VvdXMocnVsZU5hbWUsIGNoaWxkTm9kZXMsIGFtYmlndW91cykgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRBbWJpZ3VvdXMoRGVmaW5pdGlvbkJORk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBhbWJpZ3VvdXMpOyB9XG59XG4iXSwibmFtZXMiOlsiRGVmaW5pdGlvbkJORk5vZGUiLCJnZW5lcmF0ZURlZmluaXRpb24iLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInBhcnRCTkZOb2RlcyIsIm5vZGVzRnJvbUNoaWxkTm9kZXNBbmRSdWxlTmFtZSIsInBhcnRSdWxlTmFtZSIsInByZWNlZGVuY2VCTkZOb2RlIiwibm9kZUZyb21DaGlsZE5vZGVzQW5kUnVsZU5hbWUiLCJwcmVjZWRlbmNlUnVsZU5hbWUiLCJsb29rQWhlYWQiLCJwYXJ0cyIsIm1hcCIsInBhcnRCTkZOb2RlIiwicGFydCIsImdlbmVyYXRlUGFydCIsInByZWNlZGVuY2UiLCJnZXRQcmVjZWRlbmNlIiwiZGVmaW5pdGlvbiIsIkRlZmluaXRpb24iLCJmcm9tUGFydHNBbmRQcmVjZWRlbmNlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZEFtYmlndW91cyIsInJ1bGVOYW1lIiwiYW1iaWd1b3VzIiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7OztpRUFORTtrRUFDSzt5QkFFcUI7b0JBQzZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9ELElBQUEsQUFBTUEsa0NBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxlQUFlQyxJQUFBQSxvQ0FBOEIsRUFBQ0gsWUFBWUksdUJBQVksR0FDdEVDLG9CQUFvQkMsSUFBQUEsbUNBQTZCLEVBQUNOLFlBQVlPLDZCQUFrQixHQUNoRkMsWUFBWSxPQUNaQyxRQUFRUCxhQUFhUSxHQUFHLENBQUMsU0FBQ0M7b0JBQ3hCLElBQU1DLE9BQU9ELFlBQVlFLFlBQVksQ0FBQ0w7b0JBRXRDLE9BQU9JO2dCQUNULElBQ0FFLGFBQWEsQUFBQ1Qsc0JBQXNCLE9BQ3BCLE9BQ0VBLGtCQUFrQlUsYUFBYSxJQUNqREMsYUFBYUMsbUJBQVUsQ0FBQ0Msc0JBQXNCLENBQUNULE9BQU9LO2dCQUU1RCxPQUFPRTtZQUNUOzs7O1lBRU9HLEtBQUFBO21CQUFQLFNBQU9BLG1DQUFtQ0MsUUFBUSxFQUFFcEIsVUFBVSxFQUFFcUIsU0FBUztnQkFBSSxPQUFPQyxvQkFBZSxDQUFDSCxrQ0FBa0MsQ0FuQm5IckIsbUJBbUJ1SXNCLFVBQVVwQixZQUFZcUI7WUFBWTs7O1dBbkJ6S3ZCO0VBQTBCd0Isb0JBQWUifQ==