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
        var verticalBarTerminalSymbolContent = verticalBar, openBracketTerminalSymbolContent = openBracket, closeBracketTerminalSymbolContent = closeBracket, partRuleNamePart = new _ruleName.default(_ruleNames.partRuleName), precedenceRuleNamePart = new _ruleName.default(_ruleNames.precedenceRuleName), verticalBarTerminalSymbolPart = new _terminalSymbol.default(verticalBarTerminalSymbolContent), openBracketTerminalSymbolPart = new _terminalSymbol.default(openBracketTerminalSymbolContent), closeBracketTerminalSymbolPart = new _terminalSymbol.default(closeBracketTerminalSymbolContent), optionalPrecedenceRuleNamePartPart = new _optionalPart.default(precedenceRuleNamePart), verticalBarTerminalSymbolThenPartRuleNameParts = [
            verticalBarTerminalSymbolPart,
            partRuleNamePart,
            optionalPrecedenceRuleNamePartPart
        ], sequenceOfPartsPart = new _sequenceOfParts.default(verticalBarTerminalSymbolThenPartRuleNameParts), oneOrMoreSequenceOfPartsPart = new _oneOrMoreParts.default(sequenceOfPartsPart), parts = [
            openBracketTerminalSymbolPart,
            partRuleNamePart,
            optionalPrecedenceRuleNamePartPart,
            oneOrMoreSequenceOfPartsPart,
            closeBracketTerminalSymbolPart
        ];
        return _super.call(this, parts);
    }
    return ChoiceOfPartsDefinition;
}(_definition.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL2Nob2ljZU9mUGFydHMuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvblwiO1xuaW1wb3J0IFJ1bGVOYW1lUGFydCBmcm9tIFwiLi4vcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZVwiO1xuaW1wb3J0IE9wdGlvbmFsUGFydFBhcnQgZnJvbSBcIi4uL3BhcnQvbm9uVGVybWluYWwvb3B0aW9uYWxQYXJ0XCI7XG5pbXBvcnQgVGVybWluYWxTeW1ib2xQYXJ0IGZyb20gXCIuLi9wYXJ0L3Rlcm1pbmFsL3Rlcm1pbmFsU3ltYm9sXCI7XG5pbXBvcnQgT25lT3JNb3JlUGFydHNQYXJ0IGZyb20gXCIuLi9wYXJ0L25vblRlcm1pbmFsL29uZU9yTW9yZVBhcnRzXCI7XG5pbXBvcnQgU2VxdWVuY2VPZlBhcnRzUGFydCBmcm9tIFwiLi4vcGFydC9ub25UZXJtaW5hbC9zZXF1ZW5jZU9mUGFydHNcIjtcblxuaW1wb3J0IHsgcGFydFJ1bGVOYW1lLCBwcmVjZWRlbmNlUnVsZU5hbWUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHsgdmVydGljYWxCYXIsIG9wZW5CcmFja2V0LCBjbG9zZUJyYWNrZXQgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaG9pY2VPZlBhcnRzRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCB2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sQ29udGVudCA9IHZlcnRpY2FsQmFyLCAvLy9cbiAgICAgICAgICBvcGVuQnJhY2tldFRlcm1pbmFsU3ltYm9sQ29udGVudCA9IG9wZW5CcmFja2V0LCAvLy9cbiAgICAgICAgICBjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBjbG9zZUJyYWNrZXQsIC8vL1xuICAgICAgICAgIHBhcnRSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KHBhcnRSdWxlTmFtZSksXG4gICAgICAgICAgcHJlY2VkZW5jZVJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQocHJlY2VkZW5jZVJ1bGVOYW1lKSxcbiAgICAgICAgICB2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQodmVydGljYWxCYXJUZXJtaW5hbFN5bWJvbENvbnRlbnQpLFxuICAgICAgICAgIG9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydChvcGVuQnJhY2tldFRlcm1pbmFsU3ltYm9sQ29udGVudCksXG4gICAgICAgICAgY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydChjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQpLFxuICAgICAgICAgIG9wdGlvbmFsUHJlY2VkZW5jZVJ1bGVOYW1lUGFydFBhcnQgPSBuZXcgT3B0aW9uYWxQYXJ0UGFydChwcmVjZWRlbmNlUnVsZU5hbWVQYXJ0KSxcbiAgICAgICAgICB2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sVGhlblBhcnRSdWxlTmFtZVBhcnRzID0gW1xuICAgICAgICAgICAgdmVydGljYWxCYXJUZXJtaW5hbFN5bWJvbFBhcnQsXG4gICAgICAgICAgICBwYXJ0UnVsZU5hbWVQYXJ0LFxuICAgICAgICAgICAgb3B0aW9uYWxQcmVjZWRlbmNlUnVsZU5hbWVQYXJ0UGFydFxuICAgICAgICAgIF0sXG4gICAgICAgICAgc2VxdWVuY2VPZlBhcnRzUGFydCA9IG5ldyBTZXF1ZW5jZU9mUGFydHNQYXJ0KHZlcnRpY2FsQmFyVGVybWluYWxTeW1ib2xUaGVuUGFydFJ1bGVOYW1lUGFydHMpLFxuICAgICAgICAgIG9uZU9yTW9yZVNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBuZXcgT25lT3JNb3JlUGFydHNQYXJ0KHNlcXVlbmNlT2ZQYXJ0c1BhcnQpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgb3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQsXG4gICAgICAgICAgICBwYXJ0UnVsZU5hbWVQYXJ0LFxuICAgICAgICAgICAgb3B0aW9uYWxQcmVjZWRlbmNlUnVsZU5hbWVQYXJ0UGFydCxcbiAgICAgICAgICAgIG9uZU9yTW9yZVNlcXVlbmNlT2ZQYXJ0c1BhcnQsXG4gICAgICAgICAgICBjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnRcbiAgICAgICAgICBdO1xuXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiQ2hvaWNlT2ZQYXJ0c0RlZmluaXRpb24iLCJ2ZXJ0aWNhbEJhciIsInNwZWNpYWxTeW1ib2xzIiwib3BlbkJyYWNrZXQiLCJjbG9zZUJyYWNrZXQiLCJ2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sQ29udGVudCIsIm9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50IiwiY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50IiwicGFydFJ1bGVOYW1lUGFydCIsIlJ1bGVOYW1lUGFydCIsInBhcnRSdWxlTmFtZSIsInByZWNlZGVuY2VSdWxlTmFtZVBhcnQiLCJwcmVjZWRlbmNlUnVsZU5hbWUiLCJ2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sUGFydCIsIlRlcm1pbmFsU3ltYm9sUGFydCIsIm9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0IiwiY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0Iiwib3B0aW9uYWxQcmVjZWRlbmNlUnVsZU5hbWVQYXJ0UGFydCIsIk9wdGlvbmFsUGFydFBhcnQiLCJ2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sVGhlblBhcnRSdWxlTmFtZVBhcnRzIiwic2VxdWVuY2VPZlBhcnRzUGFydCIsIlNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJvbmVPck1vcmVTZXF1ZW5jZU9mUGFydHNQYXJ0IiwiT25lT3JNb3JlUGFydHNQYXJ0IiwicGFydHMiLCJEZWZpbml0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWVxQkE7OzsyQkFiVTtpRUFFUjsrREFDRTttRUFDSTtxRUFDRTtxRUFDQTtzRUFDQzt5QkFFaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpELElBQVFDLGNBQTJDQyw0QkFBM0NELGFBQWFFLGNBQThCRCw0QkFBOUJDLGFBQWFDLGVBQWlCRiw0QkFBakJFO0FBRW5CLElBQUEsQUFBTUosd0NBQU47Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTtRQUVqQixJQUFNSyxtQ0FBbUNKLGFBQ25DSyxtQ0FBbUNILGFBQ25DSSxvQ0FBb0NILGNBQ3BDSSxtQkFBbUIsSUFBSUMsa0JBQWFDLDBCQUNwQ0MseUJBQXlCLElBQUlGLGtCQUFhRyxnQ0FDMUNDLGdDQUFnQyxJQUFJQyx3QkFBbUJULG1DQUN2RFUsZ0NBQWdDLElBQUlELHdCQUFtQlIsbUNBQ3ZEVSxpQ0FBaUMsSUFBSUYsd0JBQW1CUCxvQ0FDeERVLHFDQUFxQyxJQUFJQyxzQkFBaUJQLHlCQUMxRFEsaURBQWlEO1lBQy9DTjtZQUNBTDtZQUNBUztTQUNELEVBQ0RHLHNCQUFzQixJQUFJQyx5QkFBb0JGLGlEQUM5Q0csK0JBQStCLElBQUlDLHdCQUFtQkgsc0JBQ3RESSxRQUFRO1lBQ05UO1lBQ0FQO1lBQ0FTO1lBQ0FLO1lBQ0FOO1NBQ0Q7aUNBRURROztXQTFCV3hCO0VBQWdDeUIifQ==