"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ChoiceOfPartsDefinition;
    }
});
var _occamlexers = require("occam-lexers");
var _definition = /*#__PURE__*/ _interop_require_default(require("../definition"));
var _ruleName = /*#__PURE__*/ _interop_require_default(require("../part/nonTerminal/ruleName"));
var _optionalPart = /*#__PURE__*/ _interop_require_default(require("../part/nonTerminal/optionalPart"));
var _terminalSymbol = /*#__PURE__*/ _interop_require_default(require("../part/terminal/terminalSymbol"));
var _oneOrMoreParts = /*#__PURE__*/ _interop_require_default(require("../part/nonTerminal/oneOrMoreParts"));
var _sequenceOfParts = /*#__PURE__*/ _interop_require_default(require("../part/nonTerminal/sequenceOfParts"));
var _ruleNames = require("../ruleNames");
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
var verticalBar = _occamlexers.specialSymbols.verticalBar, openBracket = _occamlexers.specialSymbols.openBracket, closeBracket = _occamlexers.specialSymbols.closeBracket;
var ChoiceOfPartsDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(ChoiceOfPartsDefinition, Definition);
    function ChoiceOfPartsDefinition() {
        _class_call_check(this, ChoiceOfPartsDefinition);
        return _call_super(this, ChoiceOfPartsDefinition, arguments);
    }
    _create_class(ChoiceOfPartsDefinition, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var parts;
                var verticalBarTerminalSymbolContent = verticalBar, openBracketTerminalSymbolContent = openBracket, closeBracketTerminalSymbolContent = closeBracket, partChoiceRuleNamePart = _ruleName.default.fromRuleName(_ruleNames.partChoiceRuleName), verticalBarTerminalSymbolPart = _terminalSymbol.default.fromContent(verticalBarTerminalSymbolContent), openBracketTerminalSymbolPart = _terminalSymbol.default.fromContent(openBracketTerminalSymbolContent), closeBracketTerminalSymbolPart = _terminalSymbol.default.fromContent(closeBracketTerminalSymbolContent);
                parts = [
                    verticalBarTerminalSymbolPart,
                    partChoiceRuleNamePart
                ];
                var sequenceOfPartsPart = _sequenceOfParts.default.fromParts(parts), oneOrMoreSequenceOfPartsPart = _oneOrMoreParts.default.fromPart(sequenceOfPartsPart);
                parts = [
                    openBracketTerminalSymbolPart,
                    partChoiceRuleNamePart,
                    oneOrMoreSequenceOfPartsPart,
                    closeBracketTerminalSymbolPart
                ];
                var precedence = null, choiceOfPartsDefinition = new ChoiceOfPartsDefinition(parts, precedence);
                return choiceOfPartsDefinition;
            }
        }
    ]);
    return ChoiceOfPartsDefinition;
}(_definition.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL2Nob2ljZU9mUGFydHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvblwiO1xuaW1wb3J0IFJ1bGVOYW1lUGFydCBmcm9tIFwiLi4vcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZVwiO1xuaW1wb3J0IE9wdGlvbmFsUGFydFBhcnQgZnJvbSBcIi4uL3BhcnQvbm9uVGVybWluYWwvb3B0aW9uYWxQYXJ0XCI7XG5pbXBvcnQgVGVybWluYWxTeW1ib2xQYXJ0IGZyb20gXCIuLi9wYXJ0L3Rlcm1pbmFsL3Rlcm1pbmFsU3ltYm9sXCI7XG5pbXBvcnQgT25lT3JNb3JlUGFydHNQYXJ0IGZyb20gXCIuLi9wYXJ0L25vblRlcm1pbmFsL29uZU9yTW9yZVBhcnRzXCI7XG5pbXBvcnQgU2VxdWVuY2VPZlBhcnRzUGFydCBmcm9tIFwiLi4vcGFydC9ub25UZXJtaW5hbC9zZXF1ZW5jZU9mUGFydHNcIjtcblxuaW1wb3J0IHsgcGFydENob2ljZVJ1bGVOYW1lIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCB7IHZlcnRpY2FsQmFyLFxuICAgICAgICBvcGVuQnJhY2tldCxcbiAgICAgICAgY2xvc2VCcmFja2V0IH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hvaWNlT2ZQYXJ0c0RlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGxldCBwYXJ0cztcblxuICAgIGNvbnN0IHZlcnRpY2FsQmFyVGVybWluYWxTeW1ib2xDb250ZW50ID0gdmVydGljYWxCYXIsIC8vL1xuICAgICAgICAgIG9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50ID0gb3BlbkJyYWNrZXQsIC8vL1xuICAgICAgICAgIGNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sQ29udGVudCA9IGNsb3NlQnJhY2tldCwgLy8vXG4gICAgICAgICAgcGFydENob2ljZVJ1bGVOYW1lUGFydCA9IFJ1bGVOYW1lUGFydC5mcm9tUnVsZU5hbWUocGFydENob2ljZVJ1bGVOYW1lKSxcbiAgICAgICAgICB2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sUGFydCA9IFRlcm1pbmFsU3ltYm9sUGFydC5mcm9tQ29udGVudCh2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sQ29udGVudCksXG4gICAgICAgICAgb3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQgPSBUZXJtaW5hbFN5bWJvbFBhcnQuZnJvbUNvbnRlbnQob3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQpLFxuICAgICAgICAgIGNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydCA9IFRlcm1pbmFsU3ltYm9sUGFydC5mcm9tQ29udGVudChjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQpO1xuXG4gICAgcGFydHMgPSBbXG4gICAgICB2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sUGFydCxcbiAgICAgIHBhcnRDaG9pY2VSdWxlTmFtZVBhcnRcbiAgICBdO1xuXG4gICAgY29uc3Qgc2VxdWVuY2VPZlBhcnRzUGFydCA9IFNlcXVlbmNlT2ZQYXJ0c1BhcnQuZnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgICBvbmVPck1vcmVTZXF1ZW5jZU9mUGFydHNQYXJ0ID0gT25lT3JNb3JlUGFydHNQYXJ0LmZyb21QYXJ0KHNlcXVlbmNlT2ZQYXJ0c1BhcnQpO1xuXG4gICAgcGFydHMgPSBbXG4gICAgICBvcGVuQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydCxcbiAgICAgIHBhcnRDaG9pY2VSdWxlTmFtZVBhcnQsXG4gICAgICBvbmVPck1vcmVTZXF1ZW5jZU9mUGFydHNQYXJ0LFxuICAgICAgY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0XG4gICAgXTtcblxuICAgIGNvbnN0IHByZWNlZGVuY2UgPSBudWxsLFxuICAgICAgICAgIGNob2ljZU9mUGFydHNEZWZpbml0aW9uID0gbmV3IENob2ljZU9mUGFydHNEZWZpbml0aW9uKHBhcnRzLCBwcmVjZWRlbmNlKTtcblxuICAgIHJldHVybiBjaG9pY2VPZlBhcnRzRGVmaW5pdGlvbjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNob2ljZU9mUGFydHNEZWZpbml0aW9uIiwidmVydGljYWxCYXIiLCJzcGVjaWFsU3ltYm9scyIsIm9wZW5CcmFja2V0IiwiY2xvc2VCcmFja2V0IiwiZnJvbU5vdGhpbmciLCJwYXJ0cyIsInZlcnRpY2FsQmFyVGVybWluYWxTeW1ib2xDb250ZW50Iiwib3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJwYXJ0Q2hvaWNlUnVsZU5hbWVQYXJ0IiwiUnVsZU5hbWVQYXJ0IiwiZnJvbVJ1bGVOYW1lIiwicGFydENob2ljZVJ1bGVOYW1lIiwidmVydGljYWxCYXJUZXJtaW5hbFN5bWJvbFBhcnQiLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJmcm9tQ29udGVudCIsIm9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0IiwiY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0Iiwic2VxdWVuY2VPZlBhcnRzUGFydCIsIlNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJmcm9tUGFydHMiLCJvbmVPck1vcmVTZXF1ZW5jZU9mUGFydHNQYXJ0IiwiT25lT3JNb3JlUGFydHNQYXJ0IiwiZnJvbVBhcnQiLCJwcmVjZWRlbmNlIiwiY2hvaWNlT2ZQYXJ0c0RlZmluaXRpb24iLCJEZWZpbml0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWlCcUJBOzs7MkJBZlU7aUVBRVI7K0RBQ0U7bUVBQ0k7cUVBQ0U7cUVBQ0E7c0VBQ0M7eUJBRUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkMsSUFBUUMsY0FFaUJDLDJCQUFjLENBRi9CRCxhQUNBRSxjQUNpQkQsMkJBQWMsQ0FEL0JDLGFBQ0FDLGVBQWlCRiwyQkFBYyxDQUEvQkU7QUFFTyxJQUFBLEFBQU1KLHdDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDWkssS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBSUM7Z0JBRUosSUFBTUMsbUNBQW1DTixhQUNuQ08sbUNBQW1DTCxhQUNuQ00sb0NBQW9DTCxjQUNwQ00seUJBQXlCQyxpQkFBWSxDQUFDQyxZQUFZLENBQUNDLDZCQUFrQixHQUNyRUMsZ0NBQWdDQyx1QkFBa0IsQ0FBQ0MsV0FBVyxDQUFDVCxtQ0FDL0RVLGdDQUFnQ0YsdUJBQWtCLENBQUNDLFdBQVcsQ0FBQ1IsbUNBQy9EVSxpQ0FBaUNILHVCQUFrQixDQUFDQyxXQUFXLENBQUNQO2dCQUV0RUgsUUFBUTtvQkFDTlE7b0JBQ0FKO2lCQUNEO2dCQUVELElBQU1TLHNCQUFzQkMsd0JBQW1CLENBQUNDLFNBQVMsQ0FBQ2YsUUFDcERnQiwrQkFBK0JDLHVCQUFrQixDQUFDQyxRQUFRLENBQUNMO2dCQUVqRWIsUUFBUTtvQkFDTlc7b0JBQ0FQO29CQUNBWTtvQkFDQUo7aUJBQ0Q7Z0JBRUQsSUFBTU8sYUFBYSxNQUNiQywwQkFBMEIsSUE1QmYxQix3QkE0QjJDTSxPQUFPbUI7Z0JBRW5FLE9BQU9DO1lBQ1Q7OztXQS9CbUIxQjtFQUFnQzJCLG1CQUFVIn0=