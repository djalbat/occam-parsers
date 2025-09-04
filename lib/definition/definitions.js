"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DefinitionsDefinition;
    }
});
var _occamlexers = require("occam-lexers");
var _definition = /*#__PURE__*/ _interop_require_default(require("../definition"));
var _ruleName = /*#__PURE__*/ _interop_require_default(require("../part/nonTerminal/ruleName"));
var _stringLiteral = /*#__PURE__*/ _interop_require_default(require("../part/terminal/stringLiteral"));
var _zeroOrMoreParts = /*#__PURE__*/ _interop_require_default(require("../part/nonTerminal/zeroOrMoreParts"));
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
var verticalBar = _occamlexers.specialSymbols.verticalBar;
var DefinitionsDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(DefinitionsDefinition, Definition);
    function DefinitionsDefinition() {
        _class_call_check(this, DefinitionsDefinition);
        return _call_super(this, DefinitionsDefinition, arguments);
    }
    _create_class(DefinitionsDefinition, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var parts;
                var content = verticalBar, ruleName = _ruleNames.DEFINITION_RULE_NAME, definitionRuleNamePart = _ruleName.default.fromRuleName(ruleName), verticalBarStringLiteralPart = _stringLiteral.default.fromContent(content);
                parts = [
                    verticalBarStringLiteralPart,
                    definitionRuleNamePart
                ];
                var sequenceOfPartsPart = _sequenceOfParts.default.fromParts(parts), zeroOrMoreSequenceOfPartsPart = _zeroOrMoreParts.default.fromPart(sequenceOfPartsPart);
                parts = [
                    definitionRuleNamePart,
                    zeroOrMoreSequenceOfPartsPart
                ];
                var precedence = null, definitionsDefinition = new DefinitionsDefinition(parts, precedence);
                return definitionsDefinition;
            }
        }
    ]);
    return DefinitionsDefinition;
}(_definition.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL2RlZmluaXRpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IERlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb25cIjtcbmltcG9ydCBSdWxlTmFtZVBhcnQgZnJvbSBcIi4uL3BhcnQvbm9uVGVybWluYWwvcnVsZU5hbWVcIjtcbmltcG9ydCBTdHJpbmdMaXRlcmFsUGFydCBmcm9tIFwiLi4vcGFydC90ZXJtaW5hbC9zdHJpbmdMaXRlcmFsXCI7XG5pbXBvcnQgWmVyb09yTW9yZVBhcnRzUGFydCBmcm9tIFwiLi4vcGFydC9ub25UZXJtaW5hbC96ZXJvT3JNb3JlUGFydHNcIjtcbmltcG9ydCBTZXF1ZW5jZU9mUGFydHNQYXJ0IGZyb20gXCIuLi9wYXJ0L25vblRlcm1pbmFsL3NlcXVlbmNlT2ZQYXJ0c1wiO1xuXG5pbXBvcnQgeyBERUZJTklUSU9OX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgeyB2ZXJ0aWNhbEJhciB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlZmluaXRpb25zRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgbGV0IHBhcnRzO1xuXG4gICAgY29uc3QgY29udGVudCA9IHZlcnRpY2FsQmFyLCAgLy8vXG4gICAgICAgICAgcnVsZU5hbWUgPSBERUZJTklUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgICBkZWZpbml0aW9uUnVsZU5hbWVQYXJ0ID0gUnVsZU5hbWVQYXJ0LmZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgdmVydGljYWxCYXJTdHJpbmdMaXRlcmFsUGFydCA9IFN0cmluZ0xpdGVyYWxQYXJ0LmZyb21Db250ZW50KGNvbnRlbnQpO1xuXG4gICAgcGFydHMgPSBbXG4gICAgICB2ZXJ0aWNhbEJhclN0cmluZ0xpdGVyYWxQYXJ0LFxuICAgICAgZGVmaW5pdGlvblJ1bGVOYW1lUGFydFxuICAgIF07XG5cbiAgICBjb25zdCBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gU2VxdWVuY2VPZlBhcnRzUGFydC5mcm9tUGFydHMocGFydHMpLFxuICAgICAgICAgIHplcm9Pck1vcmVTZXF1ZW5jZU9mUGFydHNQYXJ0ID0gWmVyb09yTW9yZVBhcnRzUGFydC5mcm9tUGFydChzZXF1ZW5jZU9mUGFydHNQYXJ0KTtcblxuICAgIHBhcnRzID0gW1xuICAgICAgZGVmaW5pdGlvblJ1bGVOYW1lUGFydCxcbiAgICAgIHplcm9Pck1vcmVTZXF1ZW5jZU9mUGFydHNQYXJ0XG4gICAgXTtcblxuICAgIGNvbnN0IHByZWNlZGVuY2UgPSBudWxsLFxuICAgICAgICAgIGRlZmluaXRpb25zRGVmaW5pdGlvbiA9IG5ldyBEZWZpbml0aW9uc0RlZmluaXRpb24ocGFydHMsIHByZWNlZGVuY2UpO1xuXG4gICAgcmV0dXJuIGRlZmluaXRpb25zRGVmaW5pdGlvbjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkRlZmluaXRpb25zRGVmaW5pdGlvbiIsInZlcnRpY2FsQmFyIiwic3BlY2lhbFN5bWJvbHMiLCJmcm9tTm90aGluZyIsInBhcnRzIiwiY29udGVudCIsInJ1bGVOYW1lIiwiREVGSU5JVElPTl9SVUxFX05BTUUiLCJkZWZpbml0aW9uUnVsZU5hbWVQYXJ0IiwiUnVsZU5hbWVQYXJ0IiwiZnJvbVJ1bGVOYW1lIiwidmVydGljYWxCYXJTdHJpbmdMaXRlcmFsUGFydCIsIlN0cmluZ0xpdGVyYWxQYXJ0IiwiZnJvbUNvbnRlbnQiLCJzZXF1ZW5jZU9mUGFydHNQYXJ0IiwiU2VxdWVuY2VPZlBhcnRzUGFydCIsImZyb21QYXJ0cyIsInplcm9Pck1vcmVTZXF1ZW5jZU9mUGFydHNQYXJ0IiwiWmVyb09yTW9yZVBhcnRzUGFydCIsImZyb21QYXJ0IiwicHJlY2VkZW5jZSIsImRlZmluaXRpb25zRGVmaW5pdGlvbiIsIkRlZmluaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBY3FCQTs7OzJCQVpVO2lFQUVSOytEQUNFO29FQUNLO3NFQUNFO3NFQUNBO3lCQUVLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJDLElBQU0sQUFBRUMsY0FBZ0JDLDJCQUFjLENBQTlCRDtBQUVPLElBQUEsQUFBTUQsc0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDWkcsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBSUM7Z0JBRUosSUFBTUMsVUFBVUosYUFDVkssV0FBV0MsK0JBQW9CLEVBQy9CQyx5QkFBeUJDLGlCQUFZLENBQUNDLFlBQVksQ0FBQ0osV0FDbkRLLCtCQUErQkMsc0JBQWlCLENBQUNDLFdBQVcsQ0FBQ1I7Z0JBRW5FRCxRQUFRO29CQUNOTztvQkFDQUg7aUJBQ0Q7Z0JBRUQsSUFBTU0sc0JBQXNCQyx3QkFBbUIsQ0FBQ0MsU0FBUyxDQUFDWixRQUNwRGEsZ0NBQWdDQyx3QkFBbUIsQ0FBQ0MsUUFBUSxDQUFDTDtnQkFFbkVWLFFBQVE7b0JBQ05JO29CQUNBUztpQkFDRDtnQkFFRCxJQUFNRyxhQUFhLE1BQ2JDLHdCQUF3QixJQXZCYnJCLHNCQXVCdUNJLE9BQU9nQjtnQkFFL0QsT0FBT0M7WUFDVDs7O1dBMUJtQnJCO0VBQThCc0IsbUJBQVUifQ==