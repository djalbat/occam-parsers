"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ChoiceOfPartsBNFNode;
    }
});
var _nonTerminal = /*#__PURE__*/ _interop_require_default(require("../../node/nonTerminal"));
var _choiceOfParts = /*#__PURE__*/ _interop_require_default(require("../../part/nonTerminal/choiceOfParts"));
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
var ChoiceOfPartsBNFNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(ChoiceOfPartsBNFNode, NonTerminalNode);
    function ChoiceOfPartsBNFNode() {
        _class_call_check(this, ChoiceOfPartsBNFNode);
        return _call_super(this, ChoiceOfPartsBNFNode, arguments);
    }
    _create_class(ChoiceOfPartsBNFNode, [
        {
            key: "generatePart",
            value: function generatePart(lookAhead) {
                var childNodes = this.getChildNodes(), partChoiceBNFNodes = (0, _node.nodesFromChildNodesAndRuleName)(childNodes, _ruleNames.partChoiceRuleName);
                lookAhead = false; ///
                var partChoices = partChoiceBNFNodes.map(function(partChoiceBNFNode) {
                    var partChoice = partChoiceBNFNode.generatePartChoice(lookAhead);
                    return partChoice;
                }), choiceOfPartsPart = _choiceOfParts.default.fromPartChoices(partChoices), part = choiceOfPartsPart; ///
                return part;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _nonTerminal.default.fromRuleNameChildNodesAndOpacity(ChoiceOfPartsBNFNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return ChoiceOfPartsBNFNode;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2JuZi9jaG9pY2VPZlBhcnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL25vblRlcm1pbmFsXCI7XG5pbXBvcnQgQ2hvaWNlT2ZQYXJ0c1BhcnQgZnJvbSBcIi4uLy4uL3BhcnQvbm9uVGVybWluYWwvY2hvaWNlT2ZQYXJ0c1wiO1xuXG5pbXBvcnQgeyBwYXJ0Q2hvaWNlUnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyBub2Rlc0Zyb21DaGlsZE5vZGVzQW5kUnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL25vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hvaWNlT2ZQYXJ0c0JORk5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZVBhcnQobG9va0FoZWFkKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHBhcnRDaG9pY2VCTkZOb2RlcyA9IG5vZGVzRnJvbUNoaWxkTm9kZXNBbmRSdWxlTmFtZShjaGlsZE5vZGVzLCBwYXJ0Q2hvaWNlUnVsZU5hbWUpO1xuXG4gICAgbG9va0FoZWFkID0gZmFsc2U7ICAvLy9cblxuICAgIGNvbnN0IHBhcnRDaG9pY2VzID0gcGFydENob2ljZUJORk5vZGVzLm1hcCgocGFydENob2ljZUJORk5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnRDaG9pY2UgPSBwYXJ0Q2hvaWNlQk5GTm9kZS5nZW5lcmF0ZVBhcnRDaG9pY2UobG9va0FoZWFkKTtcblxuICAgICAgICAgICAgcmV0dXJuIHBhcnRDaG9pY2U7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2hvaWNlT2ZQYXJ0c1BhcnQgPSBDaG9pY2VPZlBhcnRzUGFydC5mcm9tUGFydENob2ljZXMocGFydENob2ljZXMpLFxuICAgICAgICAgIHBhcnQgPSBjaG9pY2VPZlBhcnRzUGFydDsgLy8vXG5cbiAgICByZXR1cm4gcGFydDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KENob2ljZU9mUGFydHNCTkZOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJDaG9pY2VPZlBhcnRzQk5GTm9kZSIsImdlbmVyYXRlUGFydCIsImxvb2tBaGVhZCIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwicGFydENob2ljZUJORk5vZGVzIiwibm9kZXNGcm9tQ2hpbGROb2Rlc0FuZFJ1bGVOYW1lIiwicGFydENob2ljZVJ1bGVOYW1lIiwicGFydENob2ljZXMiLCJtYXAiLCJwYXJ0Q2hvaWNlQk5GTm9kZSIsInBhcnRDaG9pY2UiLCJnZW5lcmF0ZVBhcnRDaG9pY2UiLCJjaG9pY2VPZlBhcnRzUGFydCIsIkNob2ljZU9mUGFydHNQYXJ0IiwiZnJvbVBhcnRDaG9pY2VzIiwicGFydCIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwicnVsZU5hbWUiLCJvcGFjaXR5IiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7OztrRUFOTztvRUFDRTt5QkFFSztvQkFDWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoQyxJQUFBLEFBQU1BLHFDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFDLFNBQVM7Z0JBQ3BCLElBQU1DLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxxQkFBcUJDLElBQUFBLG9DQUE4QixFQUFDSCxZQUFZSSw2QkFBa0I7Z0JBRXhGTCxZQUFZLE9BQVEsR0FBRztnQkFFdkIsSUFBTU0sY0FBY0gsbUJBQW1CSSxHQUFHLENBQUMsU0FBQ0M7b0JBQ3BDLElBQU1DLGFBQWFELGtCQUFrQkUsa0JBQWtCLENBQUNWO29CQUV4RCxPQUFPUztnQkFDVCxJQUNBRSxvQkFBb0JDLHNCQUFpQixDQUFDQyxlQUFlLENBQUNQLGNBQ3REUSxPQUFPSCxtQkFBbUIsR0FBRztnQkFFbkMsT0FBT0c7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxpQ0FBaUNDLFFBQVEsRUFBRWYsVUFBVSxFQUFFZ0IsT0FBTztnQkFBSSxPQUFPQyxvQkFBZSxDQUFDSCxnQ0FBZ0MsQ0FsQjdHakIsc0JBa0JvSWtCLFVBQVVmLFlBQVlnQjtZQUFVOzs7V0FsQnBLbkI7RUFBNkJvQixvQkFBZSJ9