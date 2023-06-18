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
var verticalBar = _occamlexers.specialSymbols.verticalBar, openBracket = _occamlexers.specialSymbols.openBracket, closeBracket = _occamlexers.specialSymbols.closeBracket;
var ChoiceOfPartsDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(ChoiceOfPartsDefinition, Definition);
    var _super = _create_super(ChoiceOfPartsDefinition);
    function ChoiceOfPartsDefinition() {
        _class_call_check(this, ChoiceOfPartsDefinition);
        return _super.apply(this, arguments);
    }
    _create_class(ChoiceOfPartsDefinition, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var parts;
                var verticalBarTerminalSymbolContent = verticalBar, openBracketTerminalSymbolContent = openBracket, closeBracketTerminalSymbolContent = closeBracket, partRuleNamePart = new _ruleName.default(_ruleNames.partRuleName), precedenceRuleNamePart = new _ruleName.default(_ruleNames.precedenceRuleName), verticalBarTerminalSymbolPart = new _terminalSymbol.default(verticalBarTerminalSymbolContent), openBracketTerminalSymbolPart = new _terminalSymbol.default(openBracketTerminalSymbolContent), closeBracketTerminalSymbolPart = new _terminalSymbol.default(closeBracketTerminalSymbolContent), optionalPrecedenceRuleNamePartPart = new _optionalPart.default(precedenceRuleNamePart);
                parts = [
                    verticalBarTerminalSymbolPart,
                    partRuleNamePart,
                    optionalPrecedenceRuleNamePartPart
                ];
                var sequenceOfPartsPart = new _sequenceOfParts.default(parts), oneOrMoreSequenceOfPartsPart = new _oneOrMoreParts.default(sequenceOfPartsPart);
                parts = [
                    openBracketTerminalSymbolPart,
                    partRuleNamePart,
                    optionalPrecedenceRuleNamePartPart,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL2Nob2ljZU9mUGFydHMuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvblwiO1xuaW1wb3J0IFJ1bGVOYW1lUGFydCBmcm9tIFwiLi4vcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZVwiO1xuaW1wb3J0IE9wdGlvbmFsUGFydFBhcnQgZnJvbSBcIi4uL3BhcnQvbm9uVGVybWluYWwvb3B0aW9uYWxQYXJ0XCI7XG5pbXBvcnQgVGVybWluYWxTeW1ib2xQYXJ0IGZyb20gXCIuLi9wYXJ0L3Rlcm1pbmFsL3Rlcm1pbmFsU3ltYm9sXCI7XG5pbXBvcnQgT25lT3JNb3JlUGFydHNQYXJ0IGZyb20gXCIuLi9wYXJ0L25vblRlcm1pbmFsL29uZU9yTW9yZVBhcnRzXCI7XG5pbXBvcnQgU2VxdWVuY2VPZlBhcnRzUGFydCBmcm9tIFwiLi4vcGFydC9ub25UZXJtaW5hbC9zZXF1ZW5jZU9mUGFydHNcIjtcblxuaW1wb3J0IHsgcGFydFJ1bGVOYW1lLCBwcmVjZWRlbmNlUnVsZU5hbWUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHsgdmVydGljYWxCYXIsIG9wZW5CcmFja2V0LCBjbG9zZUJyYWNrZXQgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaG9pY2VPZlBhcnRzRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgbGV0IHBhcnRzO1xuXG4gICAgY29uc3QgdmVydGljYWxCYXJUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSB2ZXJ0aWNhbEJhciwgLy8vXG4gICAgICAgICAgb3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBvcGVuQnJhY2tldCwgLy8vXG4gICAgICAgICAgY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50ID0gY2xvc2VCcmFja2V0LCAvLy9cbiAgICAgICAgICBwYXJ0UnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChwYXJ0UnVsZU5hbWUpLFxuICAgICAgICAgIHByZWNlZGVuY2VSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KHByZWNlZGVuY2VSdWxlTmFtZSksXG4gICAgICAgICAgdmVydGljYWxCYXJUZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KHZlcnRpY2FsQmFyVGVybWluYWxTeW1ib2xDb250ZW50KSxcbiAgICAgICAgICBvcGVuQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQob3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQpLFxuICAgICAgICAgIGNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQoY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50KSxcbiAgICAgICAgICBvcHRpb25hbFByZWNlZGVuY2VSdWxlTmFtZVBhcnRQYXJ0ID0gbmV3IE9wdGlvbmFsUGFydFBhcnQocHJlY2VkZW5jZVJ1bGVOYW1lUGFydCk7XG5cbiAgICBwYXJ0cyA9IFtcbiAgICAgIHZlcnRpY2FsQmFyVGVybWluYWxTeW1ib2xQYXJ0LFxuICAgICAgcGFydFJ1bGVOYW1lUGFydCxcbiAgICAgIG9wdGlvbmFsUHJlY2VkZW5jZVJ1bGVOYW1lUGFydFBhcnRcbiAgICBdO1xuXG4gICAgY29uc3Qgc2VxdWVuY2VPZlBhcnRzUGFydCA9IG5ldyBTZXF1ZW5jZU9mUGFydHNQYXJ0KHBhcnRzKSxcbiAgICAgICAgICBvbmVPck1vcmVTZXF1ZW5jZU9mUGFydHNQYXJ0ID0gbmV3IE9uZU9yTW9yZVBhcnRzUGFydChzZXF1ZW5jZU9mUGFydHNQYXJ0KTtcblxuICAgIHBhcnRzID0gW1xuICAgICAgb3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQsXG4gICAgICBwYXJ0UnVsZU5hbWVQYXJ0LFxuICAgICAgb3B0aW9uYWxQcmVjZWRlbmNlUnVsZU5hbWVQYXJ0UGFydCxcbiAgICAgIG9uZU9yTW9yZVNlcXVlbmNlT2ZQYXJ0c1BhcnQsXG4gICAgICBjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnRcbiAgICBdO1xuXG4gICAgY29uc3QgcHJlY2VkZW5jZSA9IG51bGwsXG4gICAgICAgICAgY2hvaWNlT2ZQYXJ0c0RlZmluaXRpb24gPSBuZXcgQ2hvaWNlT2ZQYXJ0c0RlZmluaXRpb24ocGFydHMsIHByZWNlZGVuY2UpO1xuXG4gICAgcmV0dXJuIGNob2ljZU9mUGFydHNEZWZpbml0aW9uO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkNob2ljZU9mUGFydHNEZWZpbml0aW9uIiwidmVydGljYWxCYXIiLCJzcGVjaWFsU3ltYm9scyIsIm9wZW5CcmFja2V0IiwiY2xvc2VCcmFja2V0IiwiZnJvbU5vdGhpbmciLCJwYXJ0cyIsInZlcnRpY2FsQmFyVGVybWluYWxTeW1ib2xDb250ZW50Iiwib3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJwYXJ0UnVsZU5hbWVQYXJ0IiwiUnVsZU5hbWVQYXJ0IiwicGFydFJ1bGVOYW1lIiwicHJlY2VkZW5jZVJ1bGVOYW1lUGFydCIsInByZWNlZGVuY2VSdWxlTmFtZSIsInZlcnRpY2FsQmFyVGVybWluYWxTeW1ib2xQYXJ0IiwiVGVybWluYWxTeW1ib2xQYXJ0Iiwib3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQiLCJjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQiLCJvcHRpb25hbFByZWNlZGVuY2VSdWxlTmFtZVBhcnRQYXJ0IiwiT3B0aW9uYWxQYXJ0UGFydCIsInNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJTZXF1ZW5jZU9mUGFydHNQYXJ0Iiwib25lT3JNb3JlU2VxdWVuY2VPZlBhcnRzUGFydCIsIk9uZU9yTW9yZVBhcnRzUGFydCIsInByZWNlZGVuY2UiLCJjaG9pY2VPZlBhcnRzRGVmaW5pdGlvbiIsIkRlZmluaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBZXFCQTs7OzJCQWJVO2lFQUVSOytEQUNFO21FQUNJO3FFQUNFO3FFQUNBO3NFQUNDO3lCQUVpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqRCxJQUFRQyxjQUEyQ0MsNEJBQTNDRCxhQUFhRSxjQUE4QkQsNEJBQTlCQyxhQUFhQyxlQUFpQkYsNEJBQWpCRTtBQUVuQixJQUFBLEFBQU1KLHdDQUFOO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ1pLLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQUlDO2dCQUVKLElBQU1DLG1DQUFtQ04sYUFDbkNPLG1DQUFtQ0wsYUFDbkNNLG9DQUFvQ0wsY0FDcENNLG1CQUFtQixJQUFJQyxrQkFBYUMsMEJBQ3BDQyx5QkFBeUIsSUFBSUYsa0JBQWFHLGdDQUMxQ0MsZ0NBQWdDLElBQUlDLHdCQUFtQlQsbUNBQ3ZEVSxnQ0FBZ0MsSUFBSUQsd0JBQW1CUixtQ0FDdkRVLGlDQUFpQyxJQUFJRix3QkFBbUJQLG9DQUN4RFUscUNBQXFDLElBQUlDLHNCQUFpQlA7Z0JBRWhFUCxRQUFRO29CQUNOUztvQkFDQUw7b0JBQ0FTO2lCQUNEO2dCQUVELElBQU1FLHNCQUFzQixJQUFJQyx5QkFBb0JoQixRQUM5Q2lCLCtCQUErQixJQUFJQyx3QkFBbUJIO2dCQUU1RGYsUUFBUTtvQkFDTlc7b0JBQ0FQO29CQUNBUztvQkFDQUk7b0JBQ0FMO2lCQUNEO2dCQUVELElBQU1PLGFBQWEsTUFDYkMsMEJBQTBCLElBaENmMUIsd0JBZ0MyQ00sT0FBT21CO2dCQUVuRSxPQUFPQztZQUNUOzs7V0FuQ21CMUI7RUFBZ0MyQiJ9