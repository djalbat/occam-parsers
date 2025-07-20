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
            value: function generatePart(callAhead) {
                var ruleName = _ruleNames.PART_CHOICE_RULE_NAME, childNodes = this.getChildNodes(), partChoiceBNFNodes = (0, _node.nodesFromChildNodesAndRuleName)(childNodes, ruleName);
                callAhead = false; ///
                var partChoices = partChoiceBNFNodes.map(function(partChoiceBNFNode) {
                    var partChoice = partChoiceBNFNode.generatePartChoice(callAhead);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2JuZi9jaG9pY2VPZlBhcnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL25vblRlcm1pbmFsXCI7XG5pbXBvcnQgQ2hvaWNlT2ZQYXJ0c1BhcnQgZnJvbSBcIi4uLy4uL3BhcnQvbm9uVGVybWluYWwvY2hvaWNlT2ZQYXJ0c1wiO1xuXG5pbXBvcnQgeyBQQVJUX0NIT0lDRV9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyBub2Rlc0Zyb21DaGlsZE5vZGVzQW5kUnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL25vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hvaWNlT2ZQYXJ0c0JORk5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZVBhcnQoY2FsbEFoZWFkKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBQQVJUX0NIT0lDRV9SVUxFX05BTUUsXG4gICAgICAgICAgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHBhcnRDaG9pY2VCTkZOb2RlcyA9IG5vZGVzRnJvbUNoaWxkTm9kZXNBbmRSdWxlTmFtZShjaGlsZE5vZGVzLCBydWxlTmFtZSk7XG5cbiAgICBjYWxsQWhlYWQgPSBmYWxzZTsgIC8vL1xuXG4gICAgY29uc3QgcGFydENob2ljZXMgPSBwYXJ0Q2hvaWNlQk5GTm9kZXMubWFwKChwYXJ0Q2hvaWNlQk5GTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFydENob2ljZSA9IHBhcnRDaG9pY2VCTkZOb2RlLmdlbmVyYXRlUGFydENob2ljZShjYWxsQWhlYWQpO1xuXG4gICAgICAgICAgICByZXR1cm4gcGFydENob2ljZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjaG9pY2VPZlBhcnRzUGFydCA9IENob2ljZU9mUGFydHNQYXJ0LmZyb21QYXJ0Q2hvaWNlcyhwYXJ0Q2hvaWNlcyksXG4gICAgICAgICAgcGFydCA9IGNob2ljZU9mUGFydHNQYXJ0OyAvLy9cblxuICAgIHJldHVybiBwYXJ0O1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoQ2hvaWNlT2ZQYXJ0c0JORk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTsgfVxufVxuIl0sIm5hbWVzIjpbIkNob2ljZU9mUGFydHNCTkZOb2RlIiwiZ2VuZXJhdGVQYXJ0IiwiY2FsbEFoZWFkIiwicnVsZU5hbWUiLCJQQVJUX0NIT0lDRV9SVUxFX05BTUUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInBhcnRDaG9pY2VCTkZOb2RlcyIsIm5vZGVzRnJvbUNoaWxkTm9kZXNBbmRSdWxlTmFtZSIsInBhcnRDaG9pY2VzIiwibWFwIiwicGFydENob2ljZUJORk5vZGUiLCJwYXJ0Q2hvaWNlIiwiZ2VuZXJhdGVQYXJ0Q2hvaWNlIiwiY2hvaWNlT2ZQYXJ0c1BhcnQiLCJDaG9pY2VPZlBhcnRzUGFydCIsImZyb21QYXJ0Q2hvaWNlcyIsInBhcnQiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsIm9wYWNpdHkiLCJOb25UZXJtaW5hbE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7O2tFQU5PO29FQUNFO3lCQUVRO29CQUNTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhDLElBQUEsQUFBTUEscUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhQyxTQUFTO2dCQUNwQixJQUFNQyxXQUFXQyxnQ0FBcUIsRUFDaENDLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxxQkFBcUJDLElBQUFBLG9DQUE4QixFQUFDSCxZQUFZRjtnQkFFdEVELFlBQVksT0FBUSxHQUFHO2dCQUV2QixJQUFNTyxjQUFjRixtQkFBbUJHLEdBQUcsQ0FBQyxTQUFDQztvQkFDcEMsSUFBTUMsYUFBYUQsa0JBQWtCRSxrQkFBa0IsQ0FBQ1g7b0JBRXhELE9BQU9VO2dCQUNULElBQ0FFLG9CQUFvQkMsc0JBQWlCLENBQUNDLGVBQWUsQ0FBQ1AsY0FDdERRLE9BQU9ILG1CQUFtQixHQUFHO2dCQUVuQyxPQUFPRztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGlDQUFpQ2YsUUFBUSxFQUFFRSxVQUFVLEVBQUVjLE9BQU87Z0JBQUksT0FBT0Msb0JBQWUsQ0FBQ0YsZ0NBQWdDLENBbkI3R2xCLHNCQW1Cb0lHLFVBQVVFLFlBQVljO1lBQVU7OztXQW5CcEtuQjtFQUE2Qm9CLG9CQUFlIn0=