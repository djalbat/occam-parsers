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
var _stringLiteral = /*#__PURE__*/ _interop_require_default(require("../part/terminal/stringLiteral"));
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
                var ruleName = _ruleNames.PART_RULE_NAME, openBracketStringLiteralContent = openBracket, closeBracketStringLiteralContent = closeBracket, partRuleNamePart = _ruleName.default.fromRuleName(ruleName), openBracketStringLiteralPart = _stringLiteral.default.fromContent(openBracketStringLiteralContent), closeBracketStringLiteralPart = _stringLiteral.default.fromContent(closeBracketStringLiteralContent), oneOrMorePartRuleNamePartsPart = _oneOrMoreParts.default.fromPart(partRuleNamePart), parts = [
                    openBracketStringLiteralPart,
                    partRuleNamePart,
                    oneOrMorePartRuleNamePartsPart,
                    closeBracketStringLiteralPart
                ], precedence = null, sequenceOfPartsDefinition = new SequenceOfPartsDefinition(parts, precedence);
                return sequenceOfPartsDefinition;
            }
        }
    ]);
    return SequenceOfPartsDefinition;
}(_definition.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL3NlcXVlbmNlT2ZQYXJ0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uXCI7XG5pbXBvcnQgUnVsZU5hbWVQYXJ0IGZyb20gXCIuLi9wYXJ0L25vblRlcm1pbmFsL3J1bGVOYW1lXCI7XG5pbXBvcnQgU3RyaW5nTGl0ZXJhbFBhcnQgZnJvbSBcIi4uL3BhcnQvdGVybWluYWwvc3RyaW5nTGl0ZXJhbFwiO1xuaW1wb3J0IE9uZU9yTW9yZVBhcnRzUGFydCBmcm9tIFwiLi4vcGFydC9ub25UZXJtaW5hbC9vbmVPck1vcmVQYXJ0c1wiO1xuXG5pbXBvcnQgeyBQQVJUX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgeyBvcGVuQnJhY2tldCwgY2xvc2VCcmFja2V0IH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VxdWVuY2VPZlBhcnRzRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBQQVJUX1JVTEVfTkFNRSwgIC8vL1xuICAgICAgICAgIG9wZW5CcmFja2V0U3RyaW5nTGl0ZXJhbENvbnRlbnQgPSBvcGVuQnJhY2tldCwgLy8vXG4gICAgICAgICAgY2xvc2VCcmFja2V0U3RyaW5nTGl0ZXJhbENvbnRlbnQgPSBjbG9zZUJyYWNrZXQsIC8vL1xuICAgICAgICAgIHBhcnRSdWxlTmFtZVBhcnQgPSBSdWxlTmFtZVBhcnQuZnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICBvcGVuQnJhY2tldFN0cmluZ0xpdGVyYWxQYXJ0ID0gU3RyaW5nTGl0ZXJhbFBhcnQuZnJvbUNvbnRlbnQob3BlbkJyYWNrZXRTdHJpbmdMaXRlcmFsQ29udGVudCksXG4gICAgICAgICAgY2xvc2VCcmFja2V0U3RyaW5nTGl0ZXJhbFBhcnQgPSBTdHJpbmdMaXRlcmFsUGFydC5mcm9tQ29udGVudChjbG9zZUJyYWNrZXRTdHJpbmdMaXRlcmFsQ29udGVudCksXG4gICAgICAgICAgb25lT3JNb3JlUGFydFJ1bGVOYW1lUGFydHNQYXJ0ID0gT25lT3JNb3JlUGFydHNQYXJ0LmZyb21QYXJ0KHBhcnRSdWxlTmFtZVBhcnQpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgb3BlbkJyYWNrZXRTdHJpbmdMaXRlcmFsUGFydCxcbiAgICAgICAgICAgIHBhcnRSdWxlTmFtZVBhcnQsXG4gICAgICAgICAgICBvbmVPck1vcmVQYXJ0UnVsZU5hbWVQYXJ0c1BhcnQsXG4gICAgICAgICAgICBjbG9zZUJyYWNrZXRTdHJpbmdMaXRlcmFsUGFydFxuICAgICAgICAgIF0sXG4gICAgICAgICAgcHJlY2VkZW5jZSA9IG51bGwsXG4gICAgICAgICAgc2VxdWVuY2VPZlBhcnRzRGVmaW5pdGlvbiA9IG5ldyBTZXF1ZW5jZU9mUGFydHNEZWZpbml0aW9uKHBhcnRzLCBwcmVjZWRlbmNlKTtcblxuICAgIHJldHVybiBzZXF1ZW5jZU9mUGFydHNEZWZpbml0aW9uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiU2VxdWVuY2VPZlBhcnRzRGVmaW5pdGlvbiIsIm9wZW5CcmFja2V0Iiwic3BlY2lhbFN5bWJvbHMiLCJjbG9zZUJyYWNrZXQiLCJmcm9tTm90aGluZyIsInJ1bGVOYW1lIiwiUEFSVF9SVUxFX05BTUUiLCJvcGVuQnJhY2tldFN0cmluZ0xpdGVyYWxDb250ZW50IiwiY2xvc2VCcmFja2V0U3RyaW5nTGl0ZXJhbENvbnRlbnQiLCJwYXJ0UnVsZU5hbWVQYXJ0IiwiUnVsZU5hbWVQYXJ0IiwiZnJvbVJ1bGVOYW1lIiwib3BlbkJyYWNrZXRTdHJpbmdMaXRlcmFsUGFydCIsIlN0cmluZ0xpdGVyYWxQYXJ0IiwiZnJvbUNvbnRlbnQiLCJjbG9zZUJyYWNrZXRTdHJpbmdMaXRlcmFsUGFydCIsIm9uZU9yTW9yZVBhcnRSdWxlTmFtZVBhcnRzUGFydCIsIk9uZU9yTW9yZVBhcnRzUGFydCIsImZyb21QYXJ0IiwicGFydHMiLCJwcmVjZWRlbmNlIiwic2VxdWVuY2VPZlBhcnRzRGVmaW5pdGlvbiIsIkRlZmluaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBYXFCQTs7OzJCQVhVO2lFQUVSOytEQUNFO29FQUNLO3FFQUNDO3lCQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9CLElBQVFDLGNBQThCQywyQkFBYyxDQUE1Q0QsYUFBYUUsZUFBaUJELDJCQUFjLENBQS9CQztBQUVOLElBQUEsQUFBTUgsMENBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDWkksS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTUMsV0FBV0MseUJBQWMsRUFDekJDLGtDQUFrQ04sYUFDbENPLG1DQUFtQ0wsY0FDbkNNLG1CQUFtQkMsaUJBQVksQ0FBQ0MsWUFBWSxDQUFDTixXQUM3Q08sK0JBQStCQyxzQkFBaUIsQ0FBQ0MsV0FBVyxDQUFDUCxrQ0FDN0RRLGdDQUFnQ0Ysc0JBQWlCLENBQUNDLFdBQVcsQ0FBQ04sbUNBQzlEUSxpQ0FBaUNDLHVCQUFrQixDQUFDQyxRQUFRLENBQUNULG1CQUM3RFUsUUFBUTtvQkFDTlA7b0JBQ0FIO29CQUNBTztvQkFDQUQ7aUJBQ0QsRUFDREssYUFBYSxNQUNiQyw0QkFBNEIsSUFoQmpCckIsMEJBZ0IrQ21CLE9BQU9DO2dCQUV2RSxPQUFPQztZQUNUOzs7V0FuQm1CckI7RUFBa0NzQixtQkFBVSJ9