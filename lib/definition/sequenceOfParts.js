"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SequenceOfPartsDefinition;
    }
});
var _occamlexers = require("occam-lexers");
var _definition = /*#__PURE__*/ _interop_require_default(require("../definition"));
var _ruleName = /*#__PURE__*/ _interop_require_default(require("../part/nonTerminal/ruleName"));
var _terminalSymbol = /*#__PURE__*/ _interop_require_default(require("../part/terminal/terminalSymbol"));
var _oneOrMoreParts = /*#__PURE__*/ _interop_require_default(require("../part/nonTerminal/oneOrMoreParts"));
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
var openBracket = _occamlexers.specialSymbols.openBracket, closeBracket = _occamlexers.specialSymbols.closeBracket;
var SequenceOfPartsDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(SequenceOfPartsDefinition, Definition);
    function SequenceOfPartsDefinition() {
        _class_call_check(this, SequenceOfPartsDefinition);
        return _call_super(this, SequenceOfPartsDefinition, arguments);
    }
    _create_class(SequenceOfPartsDefinition, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var openBracketTerminalSymbolContent = openBracket, closeBracketTerminalSymbolContent = closeBracket, partRuleNamePart = _ruleName.default.fromRuleName(_ruleNames.partRuleName), openBracketTerminalSymbolPart = _terminalSymbol.default.fromContent(openBracketTerminalSymbolContent), closeBracketTerminalSymbolPart = _terminalSymbol.default.fromContent(closeBracketTerminalSymbolContent), oneOrMorePartRuleNamePartsPart = _oneOrMoreParts.default.fromPart(partRuleNamePart), parts = [
                    openBracketTerminalSymbolPart,
                    partRuleNamePart,
                    oneOrMorePartRuleNamePartsPart,
                    closeBracketTerminalSymbolPart
                ], precedence = null, sequenceOfPartsDefinition = new SequenceOfPartsDefinition(parts, precedence);
                return sequenceOfPartsDefinition;
            }
        }
    ]);
    return SequenceOfPartsDefinition;
}(_definition.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL3NlcXVlbmNlT2ZQYXJ0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uXCI7XG5pbXBvcnQgUnVsZU5hbWVQYXJ0IGZyb20gXCIuLi9wYXJ0L25vblRlcm1pbmFsL3J1bGVOYW1lXCI7XG5pbXBvcnQgVGVybWluYWxTeW1ib2xQYXJ0IGZyb20gXCIuLi9wYXJ0L3Rlcm1pbmFsL3Rlcm1pbmFsU3ltYm9sXCI7XG5pbXBvcnQgT25lT3JNb3JlUGFydHNQYXJ0IGZyb20gXCIuLi9wYXJ0L25vblRlcm1pbmFsL29uZU9yTW9yZVBhcnRzXCI7XG5cbmltcG9ydCB7IHBhcnRSdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgeyBvcGVuQnJhY2tldCwgY2xvc2VCcmFja2V0IH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VxdWVuY2VPZlBhcnRzRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3Qgb3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBvcGVuQnJhY2tldCwgLy8vXG4gICAgICAgICAgY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50ID0gY2xvc2VCcmFja2V0LCAvLy9cbiAgICAgICAgICBwYXJ0UnVsZU5hbWVQYXJ0ID0gUnVsZU5hbWVQYXJ0LmZyb21SdWxlTmFtZShwYXJ0UnVsZU5hbWUpLFxuICAgICAgICAgIG9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0ID0gVGVybWluYWxTeW1ib2xQYXJ0LmZyb21Db250ZW50KG9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50KSxcbiAgICAgICAgICBjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQgPSBUZXJtaW5hbFN5bWJvbFBhcnQuZnJvbUNvbnRlbnQoY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50KSxcbiAgICAgICAgICBvbmVPck1vcmVQYXJ0UnVsZU5hbWVQYXJ0c1BhcnQgPSBPbmVPck1vcmVQYXJ0c1BhcnQuZnJvbVBhcnQocGFydFJ1bGVOYW1lUGFydCksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBvcGVuQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydCxcbiAgICAgICAgICAgIHBhcnRSdWxlTmFtZVBhcnQsXG4gICAgICAgICAgICBvbmVPck1vcmVQYXJ0UnVsZU5hbWVQYXJ0c1BhcnQsXG4gICAgICAgICAgICBjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnRcbiAgICAgICAgICBdLFxuICAgICAgICAgIHByZWNlZGVuY2UgPSBudWxsLFxuICAgICAgICAgIHNlcXVlbmNlT2ZQYXJ0c0RlZmluaXRpb24gPSBuZXcgU2VxdWVuY2VPZlBhcnRzRGVmaW5pdGlvbihwYXJ0cywgcHJlY2VkZW5jZSk7XG5cbiAgICByZXR1cm4gc2VxdWVuY2VPZlBhcnRzRGVmaW5pdGlvbjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlNlcXVlbmNlT2ZQYXJ0c0RlZmluaXRpb24iLCJvcGVuQnJhY2tldCIsInNwZWNpYWxTeW1ib2xzIiwiY2xvc2VCcmFja2V0IiwiZnJvbU5vdGhpbmciLCJvcGVuQnJhY2tldFRlcm1pbmFsU3ltYm9sQ29udGVudCIsImNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sQ29udGVudCIsInBhcnRSdWxlTmFtZVBhcnQiLCJSdWxlTmFtZVBhcnQiLCJmcm9tUnVsZU5hbWUiLCJwYXJ0UnVsZU5hbWUiLCJvcGVuQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydCIsIlRlcm1pbmFsU3ltYm9sUGFydCIsImZyb21Db250ZW50IiwiY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0Iiwib25lT3JNb3JlUGFydFJ1bGVOYW1lUGFydHNQYXJ0IiwiT25lT3JNb3JlUGFydHNQYXJ0IiwiZnJvbVBhcnQiLCJwYXJ0cyIsInByZWNlZGVuY2UiLCJzZXF1ZW5jZU9mUGFydHNEZWZpbml0aW9uIiwiRGVmaW5pdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFhcUJBOzs7MkJBWFU7aUVBRVI7K0RBQ0U7cUVBQ007cUVBQ0E7eUJBRUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0IsSUFBUUMsY0FBOEJDLDJCQUFjLENBQTVDRCxhQUFhRSxlQUFpQkQsMkJBQWMsQ0FBL0JDO0FBRU4sSUFBQSxBQUFNSCwwQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7aUNBQUFBOztrQkFBQUE7O1lBQ1pJLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU1DLG1DQUFtQ0osYUFDbkNLLG9DQUFvQ0gsY0FDcENJLG1CQUFtQkMsaUJBQVksQ0FBQ0MsWUFBWSxDQUFDQyx1QkFBWSxHQUN6REMsZ0NBQWdDQyx1QkFBa0IsQ0FBQ0MsV0FBVyxDQUFDUixtQ0FDL0RTLGlDQUFpQ0YsdUJBQWtCLENBQUNDLFdBQVcsQ0FBQ1Asb0NBQ2hFUyxpQ0FBaUNDLHVCQUFrQixDQUFDQyxRQUFRLENBQUNWLG1CQUM3RFcsUUFBUTtvQkFDTlA7b0JBQ0FKO29CQUNBUTtvQkFDQUQ7aUJBQ0QsRUFDREssYUFBYSxNQUNiQyw0QkFBNEIsSUFmakJwQiwwQkFlK0NrQixPQUFPQztnQkFFdkUsT0FBT0M7WUFDVDs7O1dBbEJtQnBCO0VBQWtDcUIsbUJBQVUifQ==