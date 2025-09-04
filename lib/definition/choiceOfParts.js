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
var _stringLiteral = /*#__PURE__*/ _interop_require_default(require("../part/terminal/stringLiteral"));
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
                var ruleName = _ruleNames.PART_CHOICE_RULE_NAME, verticalBarStringLiteralContent = verticalBar, openBracketStringLiteralContent = openBracket, closeBracketStringLiteralContent = closeBracket, partChoiceRuleNamePart = _ruleName.default.fromRuleName(ruleName), verticalBarStringLiteralPart = _stringLiteral.default.fromContent(verticalBarStringLiteralContent), openBracketStringLiteralPart = _stringLiteral.default.fromContent(openBracketStringLiteralContent), closeBracketStringLiteralPart = _stringLiteral.default.fromContent(closeBracketStringLiteralContent);
                parts = [
                    verticalBarStringLiteralPart,
                    partChoiceRuleNamePart
                ];
                var sequenceOfPartsPart = _sequenceOfParts.default.fromParts(parts), oneOrMoreSequenceOfPartsPart = _oneOrMoreParts.default.fromPart(sequenceOfPartsPart);
                parts = [
                    openBracketStringLiteralPart,
                    partChoiceRuleNamePart,
                    oneOrMoreSequenceOfPartsPart,
                    closeBracketStringLiteralPart
                ];
                var precedence = null, choiceOfPartsDefinition = new ChoiceOfPartsDefinition(parts, precedence);
                return choiceOfPartsDefinition;
            }
        }
    ]);
    return ChoiceOfPartsDefinition;
}(_definition.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL2Nob2ljZU9mUGFydHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvblwiO1xuaW1wb3J0IFJ1bGVOYW1lUGFydCBmcm9tIFwiLi4vcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZVwiO1xuaW1wb3J0IFN0cmluZ0xpdGVyYWxQYXJ0IGZyb20gXCIuLi9wYXJ0L3Rlcm1pbmFsL3N0cmluZ0xpdGVyYWxcIjtcbmltcG9ydCBPbmVPck1vcmVQYXJ0c1BhcnQgZnJvbSBcIi4uL3BhcnQvbm9uVGVybWluYWwvb25lT3JNb3JlUGFydHNcIjtcbmltcG9ydCBTZXF1ZW5jZU9mUGFydHNQYXJ0IGZyb20gXCIuLi9wYXJ0L25vblRlcm1pbmFsL3NlcXVlbmNlT2ZQYXJ0c1wiO1xuXG5pbXBvcnQgeyBQQVJUX0NIT0lDRV9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHsgdmVydGljYWxCYXIsIG9wZW5CcmFja2V0LCBjbG9zZUJyYWNrZXQgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaG9pY2VPZlBhcnRzRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgbGV0IHBhcnRzO1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBQQVJUX0NIT0lDRV9SVUxFX05BTUUsXG4gICAgICAgICAgdmVydGljYWxCYXJTdHJpbmdMaXRlcmFsQ29udGVudCA9IHZlcnRpY2FsQmFyLCAvLy9cbiAgICAgICAgICBvcGVuQnJhY2tldFN0cmluZ0xpdGVyYWxDb250ZW50ID0gb3BlbkJyYWNrZXQsIC8vL1xuICAgICAgICAgIGNsb3NlQnJhY2tldFN0cmluZ0xpdGVyYWxDb250ZW50ID0gY2xvc2VCcmFja2V0LCAvLy9cbiAgICAgICAgICBwYXJ0Q2hvaWNlUnVsZU5hbWVQYXJ0ID0gUnVsZU5hbWVQYXJ0LmZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgdmVydGljYWxCYXJTdHJpbmdMaXRlcmFsUGFydCA9IFN0cmluZ0xpdGVyYWxQYXJ0LmZyb21Db250ZW50KHZlcnRpY2FsQmFyU3RyaW5nTGl0ZXJhbENvbnRlbnQpLFxuICAgICAgICAgIG9wZW5CcmFja2V0U3RyaW5nTGl0ZXJhbFBhcnQgPSBTdHJpbmdMaXRlcmFsUGFydC5mcm9tQ29udGVudChvcGVuQnJhY2tldFN0cmluZ0xpdGVyYWxDb250ZW50KSxcbiAgICAgICAgICBjbG9zZUJyYWNrZXRTdHJpbmdMaXRlcmFsUGFydCA9IFN0cmluZ0xpdGVyYWxQYXJ0LmZyb21Db250ZW50KGNsb3NlQnJhY2tldFN0cmluZ0xpdGVyYWxDb250ZW50KTtcblxuICAgIHBhcnRzID0gW1xuICAgICAgdmVydGljYWxCYXJTdHJpbmdMaXRlcmFsUGFydCxcbiAgICAgIHBhcnRDaG9pY2VSdWxlTmFtZVBhcnRcbiAgICBdO1xuXG4gICAgY29uc3Qgc2VxdWVuY2VPZlBhcnRzUGFydCA9IFNlcXVlbmNlT2ZQYXJ0c1BhcnQuZnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgICBvbmVPck1vcmVTZXF1ZW5jZU9mUGFydHNQYXJ0ID0gT25lT3JNb3JlUGFydHNQYXJ0LmZyb21QYXJ0KHNlcXVlbmNlT2ZQYXJ0c1BhcnQpO1xuXG4gICAgcGFydHMgPSBbXG4gICAgICBvcGVuQnJhY2tldFN0cmluZ0xpdGVyYWxQYXJ0LFxuICAgICAgcGFydENob2ljZVJ1bGVOYW1lUGFydCxcbiAgICAgIG9uZU9yTW9yZVNlcXVlbmNlT2ZQYXJ0c1BhcnQsXG4gICAgICBjbG9zZUJyYWNrZXRTdHJpbmdMaXRlcmFsUGFydFxuICAgIF07XG5cbiAgICBjb25zdCBwcmVjZWRlbmNlID0gbnVsbCxcbiAgICAgICAgICBjaG9pY2VPZlBhcnRzRGVmaW5pdGlvbiA9IG5ldyBDaG9pY2VPZlBhcnRzRGVmaW5pdGlvbihwYXJ0cywgcHJlY2VkZW5jZSk7XG5cbiAgICByZXR1cm4gY2hvaWNlT2ZQYXJ0c0RlZmluaXRpb247XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDaG9pY2VPZlBhcnRzRGVmaW5pdGlvbiIsInZlcnRpY2FsQmFyIiwic3BlY2lhbFN5bWJvbHMiLCJvcGVuQnJhY2tldCIsImNsb3NlQnJhY2tldCIsImZyb21Ob3RoaW5nIiwicGFydHMiLCJydWxlTmFtZSIsIlBBUlRfQ0hPSUNFX1JVTEVfTkFNRSIsInZlcnRpY2FsQmFyU3RyaW5nTGl0ZXJhbENvbnRlbnQiLCJvcGVuQnJhY2tldFN0cmluZ0xpdGVyYWxDb250ZW50IiwiY2xvc2VCcmFja2V0U3RyaW5nTGl0ZXJhbENvbnRlbnQiLCJwYXJ0Q2hvaWNlUnVsZU5hbWVQYXJ0IiwiUnVsZU5hbWVQYXJ0IiwiZnJvbVJ1bGVOYW1lIiwidmVydGljYWxCYXJTdHJpbmdMaXRlcmFsUGFydCIsIlN0cmluZ0xpdGVyYWxQYXJ0IiwiZnJvbUNvbnRlbnQiLCJvcGVuQnJhY2tldFN0cmluZ0xpdGVyYWxQYXJ0IiwiY2xvc2VCcmFja2V0U3RyaW5nTGl0ZXJhbFBhcnQiLCJzZXF1ZW5jZU9mUGFydHNQYXJ0IiwiU2VxdWVuY2VPZlBhcnRzUGFydCIsImZyb21QYXJ0cyIsIm9uZU9yTW9yZVNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJPbmVPck1vcmVQYXJ0c1BhcnQiLCJmcm9tUGFydCIsInByZWNlZGVuY2UiLCJjaG9pY2VPZlBhcnRzRGVmaW5pdGlvbiIsIkRlZmluaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBY3FCQTs7OzJCQVpVO2lFQUVSOytEQUNFO29FQUNLO3FFQUNDO3NFQUNDO3lCQUVNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQVFDLGNBQTJDQywyQkFBYyxDQUF6REQsYUFBYUUsY0FBOEJELDJCQUFjLENBQTVDQyxhQUFhQyxlQUFpQkYsMkJBQWMsQ0FBL0JFO0FBRW5CLElBQUEsQUFBTUosd0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDWkssS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBSUM7Z0JBRUosSUFBTUMsV0FBV0MsZ0NBQXFCLEVBQ2hDQyxrQ0FBa0NSLGFBQ2xDUyxrQ0FBa0NQLGFBQ2xDUSxtQ0FBbUNQLGNBQ25DUSx5QkFBeUJDLGlCQUFZLENBQUNDLFlBQVksQ0FBQ1AsV0FDbkRRLCtCQUErQkMsc0JBQWlCLENBQUNDLFdBQVcsQ0FBQ1Isa0NBQzdEUywrQkFBK0JGLHNCQUFpQixDQUFDQyxXQUFXLENBQUNQLGtDQUM3RFMsZ0NBQWdDSCxzQkFBaUIsQ0FBQ0MsV0FBVyxDQUFDTjtnQkFFcEVMLFFBQVE7b0JBQ05TO29CQUNBSDtpQkFDRDtnQkFFRCxJQUFNUSxzQkFBc0JDLHdCQUFtQixDQUFDQyxTQUFTLENBQUNoQixRQUNwRGlCLCtCQUErQkMsdUJBQWtCLENBQUNDLFFBQVEsQ0FBQ0w7Z0JBRWpFZCxRQUFRO29CQUNOWTtvQkFDQU47b0JBQ0FXO29CQUNBSjtpQkFDRDtnQkFFRCxJQUFNTyxhQUFhLE1BQ2JDLDBCQUEwQixJQTdCZjNCLHdCQTZCMkNNLE9BQU9vQjtnQkFFbkUsT0FBT0M7WUFDVDs7O1dBaENtQjNCO0VBQWdDNEIsbUJBQVUifQ==