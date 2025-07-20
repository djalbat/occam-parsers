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
                var ruleName;
                var childNodes = this.getChildNodes();
                ruleName = _ruleNames.PART_RULE_NAME;
                var partBNFNodes = (0, _node.nodesFromChildNodesAndRuleName)(childNodes, ruleName);
                ruleName = _ruleNames.PRECEDENCE_RULE_NAME;
                var precedenceBNFNode = (0, _node.nodeFromChildNodesAndRuleName)(childNodes, ruleName), callAhead = false, parts = partBNFNodes.map(function(partBNFNode) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2JuZi9kZWZpbml0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvblwiO1xuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBQQVJUX1JVTEVfTkFNRSwgUFJFQ0VERU5DRV9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyBub2RlRnJvbUNoaWxkTm9kZXNBbmRSdWxlTmFtZSwgbm9kZXNGcm9tQ2hpbGROb2Rlc0FuZFJ1bGVOYW1lIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ub2RlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlZmluaXRpb25CTkZOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVEZWZpbml0aW9uKCkge1xuICAgIGxldCBydWxlTmFtZTtcblxuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKTtcblxuICAgIHJ1bGVOYW1lID0gUEFSVF9SVUxFX05BTUU7XG5cbiAgICBjb25zdCBwYXJ0Qk5GTm9kZXMgPSBub2Rlc0Zyb21DaGlsZE5vZGVzQW5kUnVsZU5hbWUoY2hpbGROb2RlcywgcnVsZU5hbWUpO1xuXG4gICAgcnVsZU5hbWUgPSBQUkVDRURFTkNFX1JVTEVfTkFNRTtcblxuICAgIGNvbnN0IHByZWNlZGVuY2VCTkZOb2RlID0gbm9kZUZyb21DaGlsZE5vZGVzQW5kUnVsZU5hbWUoY2hpbGROb2RlcywgcnVsZU5hbWUpLFxuICAgICAgICAgIGNhbGxBaGVhZCA9IGZhbHNlLCAgLy8vXG4gICAgICAgICAgcGFydHMgPSBwYXJ0Qk5GTm9kZXMubWFwKChwYXJ0Qk5GTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFydCA9IHBhcnRCTkZOb2RlLmdlbmVyYXRlUGFydChjYWxsQWhlYWQpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBwYXJ0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHByZWNlZGVuY2UgPSAocHJlY2VkZW5jZUJORk5vZGUgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlY2VkZW5jZUJORk5vZGUuZ2V0UHJlY2VkZW5jZSgpLFxuICAgICAgICAgIGRlZmluaXRpb24gPSBEZWZpbml0aW9uLmZyb21QYXJ0c0FuZFByZWNlZGVuY2UocGFydHMsIHByZWNlZGVuY2UpO1xuXG4gICAgcmV0dXJuIGRlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShEZWZpbml0aW9uQk5GTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpOyB9XG59XG4iXSwibmFtZXMiOlsiRGVmaW5pdGlvbkJORk5vZGUiLCJnZW5lcmF0ZURlZmluaXRpb24iLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiUEFSVF9SVUxFX05BTUUiLCJwYXJ0Qk5GTm9kZXMiLCJub2Rlc0Zyb21DaGlsZE5vZGVzQW5kUnVsZU5hbWUiLCJQUkVDRURFTkNFX1JVTEVfTkFNRSIsInByZWNlZGVuY2VCTkZOb2RlIiwibm9kZUZyb21DaGlsZE5vZGVzQW5kUnVsZU5hbWUiLCJjYWxsQWhlYWQiLCJwYXJ0cyIsIm1hcCIsInBhcnRCTkZOb2RlIiwicGFydCIsImdlbmVyYXRlUGFydCIsInByZWNlZGVuY2UiLCJnZXRQcmVjZWRlbmNlIiwiZGVmaW5pdGlvbiIsIkRlZmluaXRpb24iLCJmcm9tUGFydHNBbmRQcmVjZWRlbmNlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJvcGFjaXR5IiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7OztpRUFORTtrRUFDSzt5QkFFeUI7b0JBQ3lCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9ELElBQUEsQUFBTUEsa0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQztnQkFFSixJQUFNQyxhQUFhLElBQUksQ0FBQ0MsYUFBYTtnQkFFckNGLFdBQVdHLHlCQUFjO2dCQUV6QixJQUFNQyxlQUFlQyxJQUFBQSxvQ0FBOEIsRUFBQ0osWUFBWUQ7Z0JBRWhFQSxXQUFXTSwrQkFBb0I7Z0JBRS9CLElBQU1DLG9CQUFvQkMsSUFBQUEsbUNBQTZCLEVBQUNQLFlBQVlELFdBQzlEUyxZQUFZLE9BQ1pDLFFBQVFOLGFBQWFPLEdBQUcsQ0FBQyxTQUFDQztvQkFDeEIsSUFBTUMsT0FBT0QsWUFBWUUsWUFBWSxDQUFDTDtvQkFFdEMsT0FBT0k7Z0JBQ1QsSUFDQUUsYUFBYSxBQUFDUixzQkFBc0IsT0FDcEIsT0FDRUEsa0JBQWtCUyxhQUFhLElBQ2pEQyxhQUFhQyxtQkFBVSxDQUFDQyxzQkFBc0IsQ0FBQ1QsT0FBT0s7Z0JBRTVELE9BQU9FO1lBQ1Q7Ozs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0EsaUNBQWlDcEIsUUFBUSxFQUFFQyxVQUFVLEVBQUVvQixPQUFPO2dCQUFJLE9BQU9DLG9CQUFlLENBQUNGLGdDQUFnQyxDQTNCN0d0QixtQkEyQmlJRSxVQUFVQyxZQUFZb0I7WUFBVTs7O1dBM0JqS3ZCO0VBQTBCd0Isb0JBQWUifQ==