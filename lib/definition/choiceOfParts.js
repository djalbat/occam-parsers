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
                var ruleName = _ruleNames.PART_CHOICE_RULE_NAME, verticalBarTerminalSymbolContent = verticalBar, openBracketTerminalSymbolContent = openBracket, closeBracketTerminalSymbolContent = closeBracket, partChoiceRuleNamePart = _ruleName.default.fromRuleName(ruleName), verticalBarTerminalSymbolPart = _terminalSymbol.default.fromContent(verticalBarTerminalSymbolContent), openBracketTerminalSymbolPart = _terminalSymbol.default.fromContent(openBracketTerminalSymbolContent), closeBracketTerminalSymbolPart = _terminalSymbol.default.fromContent(closeBracketTerminalSymbolContent);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL2Nob2ljZU9mUGFydHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvblwiO1xuaW1wb3J0IFJ1bGVOYW1lUGFydCBmcm9tIFwiLi4vcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZVwiO1xuaW1wb3J0IFRlcm1pbmFsU3ltYm9sUGFydCBmcm9tIFwiLi4vcGFydC90ZXJtaW5hbC90ZXJtaW5hbFN5bWJvbFwiO1xuaW1wb3J0IE9uZU9yTW9yZVBhcnRzUGFydCBmcm9tIFwiLi4vcGFydC9ub25UZXJtaW5hbC9vbmVPck1vcmVQYXJ0c1wiO1xuaW1wb3J0IFNlcXVlbmNlT2ZQYXJ0c1BhcnQgZnJvbSBcIi4uL3BhcnQvbm9uVGVybWluYWwvc2VxdWVuY2VPZlBhcnRzXCI7XG5cbmltcG9ydCB7IFBBUlRfQ0hPSUNFX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgeyB2ZXJ0aWNhbEJhciwgb3BlbkJyYWNrZXQsIGNsb3NlQnJhY2tldCB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENob2ljZU9mUGFydHNEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBsZXQgcGFydHM7XG5cbiAgICBjb25zdCBydWxlTmFtZSA9IFBBUlRfQ0hPSUNFX1JVTEVfTkFNRSxcbiAgICAgICAgICB2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sQ29udGVudCA9IHZlcnRpY2FsQmFyLCAvLy9cbiAgICAgICAgICBvcGVuQnJhY2tldFRlcm1pbmFsU3ltYm9sQ29udGVudCA9IG9wZW5CcmFja2V0LCAvLy9cbiAgICAgICAgICBjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBjbG9zZUJyYWNrZXQsIC8vL1xuICAgICAgICAgIHBhcnRDaG9pY2VSdWxlTmFtZVBhcnQgPSBSdWxlTmFtZVBhcnQuZnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICB2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sUGFydCA9IFRlcm1pbmFsU3ltYm9sUGFydC5mcm9tQ29udGVudCh2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sQ29udGVudCksXG4gICAgICAgICAgb3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQgPSBUZXJtaW5hbFN5bWJvbFBhcnQuZnJvbUNvbnRlbnQob3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQpLFxuICAgICAgICAgIGNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydCA9IFRlcm1pbmFsU3ltYm9sUGFydC5mcm9tQ29udGVudChjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQpO1xuXG4gICAgcGFydHMgPSBbXG4gICAgICB2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sUGFydCxcbiAgICAgIHBhcnRDaG9pY2VSdWxlTmFtZVBhcnRcbiAgICBdO1xuXG4gICAgY29uc3Qgc2VxdWVuY2VPZlBhcnRzUGFydCA9IFNlcXVlbmNlT2ZQYXJ0c1BhcnQuZnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgICBvbmVPck1vcmVTZXF1ZW5jZU9mUGFydHNQYXJ0ID0gT25lT3JNb3JlUGFydHNQYXJ0LmZyb21QYXJ0KHNlcXVlbmNlT2ZQYXJ0c1BhcnQpO1xuXG4gICAgcGFydHMgPSBbXG4gICAgICBvcGVuQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydCxcbiAgICAgIHBhcnRDaG9pY2VSdWxlTmFtZVBhcnQsXG4gICAgICBvbmVPck1vcmVTZXF1ZW5jZU9mUGFydHNQYXJ0LFxuICAgICAgY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0XG4gICAgXTtcblxuICAgIGNvbnN0IHByZWNlZGVuY2UgPSBudWxsLFxuICAgICAgICAgIGNob2ljZU9mUGFydHNEZWZpbml0aW9uID0gbmV3IENob2ljZU9mUGFydHNEZWZpbml0aW9uKHBhcnRzLCBwcmVjZWRlbmNlKTtcblxuICAgIHJldHVybiBjaG9pY2VPZlBhcnRzRGVmaW5pdGlvbjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNob2ljZU9mUGFydHNEZWZpbml0aW9uIiwidmVydGljYWxCYXIiLCJzcGVjaWFsU3ltYm9scyIsIm9wZW5CcmFja2V0IiwiY2xvc2VCcmFja2V0IiwiZnJvbU5vdGhpbmciLCJwYXJ0cyIsInJ1bGVOYW1lIiwiUEFSVF9DSE9JQ0VfUlVMRV9OQU1FIiwidmVydGljYWxCYXJUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJvcGVuQnJhY2tldFRlcm1pbmFsU3ltYm9sQ29udGVudCIsImNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sQ29udGVudCIsInBhcnRDaG9pY2VSdWxlTmFtZVBhcnQiLCJSdWxlTmFtZVBhcnQiLCJmcm9tUnVsZU5hbWUiLCJ2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sUGFydCIsIlRlcm1pbmFsU3ltYm9sUGFydCIsImZyb21Db250ZW50Iiwib3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQiLCJjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQiLCJzZXF1ZW5jZU9mUGFydHNQYXJ0IiwiU2VxdWVuY2VPZlBhcnRzUGFydCIsImZyb21QYXJ0cyIsIm9uZU9yTW9yZVNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJPbmVPck1vcmVQYXJ0c1BhcnQiLCJmcm9tUGFydCIsInByZWNlZGVuY2UiLCJjaG9pY2VPZlBhcnRzRGVmaW5pdGlvbiIsIkRlZmluaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBY3FCQTs7OzJCQVpVO2lFQUVSOytEQUNFO3FFQUNNO3FFQUNBO3NFQUNDO3lCQUVNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQVFDLGNBQTJDQywyQkFBYyxDQUF6REQsYUFBYUUsY0FBOEJELDJCQUFjLENBQTVDQyxhQUFhQyxlQUFpQkYsMkJBQWMsQ0FBL0JFO0FBRW5CLElBQUEsQUFBTUosd0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDWkssS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBSUM7Z0JBRUosSUFBTUMsV0FBV0MsZ0NBQXFCLEVBQ2hDQyxtQ0FBbUNSLGFBQ25DUyxtQ0FBbUNQLGFBQ25DUSxvQ0FBb0NQLGNBQ3BDUSx5QkFBeUJDLGlCQUFZLENBQUNDLFlBQVksQ0FBQ1AsV0FDbkRRLGdDQUFnQ0MsdUJBQWtCLENBQUNDLFdBQVcsQ0FBQ1IsbUNBQy9EUyxnQ0FBZ0NGLHVCQUFrQixDQUFDQyxXQUFXLENBQUNQLG1DQUMvRFMsaUNBQWlDSCx1QkFBa0IsQ0FBQ0MsV0FBVyxDQUFDTjtnQkFFdEVMLFFBQVE7b0JBQ05TO29CQUNBSDtpQkFDRDtnQkFFRCxJQUFNUSxzQkFBc0JDLHdCQUFtQixDQUFDQyxTQUFTLENBQUNoQixRQUNwRGlCLCtCQUErQkMsdUJBQWtCLENBQUNDLFFBQVEsQ0FBQ0w7Z0JBRWpFZCxRQUFRO29CQUNOWTtvQkFDQU47b0JBQ0FXO29CQUNBSjtpQkFDRDtnQkFFRCxJQUFNTyxhQUFhLE1BQ2JDLDBCQUEwQixJQTdCZjNCLHdCQTZCMkNNLE9BQU9vQjtnQkFFbkUsT0FBT0M7WUFDVDs7O1dBaENtQjNCO0VBQWdDNEIsbUJBQVUifQ==