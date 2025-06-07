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
var _terminalSymbol = /*#__PURE__*/ _interop_require_default(require("../part/terminal/terminalSymbol"));
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
                var content = verticalBar, definitionRuleNamePart = _ruleName.default.fromRuleName(_ruleNames.definitionRuleName), verticalBarTerminalSymbolPart = _terminalSymbol.default.fromContent(content);
                parts = [
                    verticalBarTerminalSymbolPart,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL2RlZmluaXRpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IERlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb25cIjtcbmltcG9ydCBSdWxlTmFtZVBhcnQgZnJvbSBcIi4uL3BhcnQvbm9uVGVybWluYWwvcnVsZU5hbWVcIjtcbmltcG9ydCBUZXJtaW5hbFN5bWJvbFBhcnQgZnJvbSBcIi4uL3BhcnQvdGVybWluYWwvdGVybWluYWxTeW1ib2xcIjtcbmltcG9ydCBaZXJvT3JNb3JlUGFydHNQYXJ0IGZyb20gXCIuLi9wYXJ0L25vblRlcm1pbmFsL3plcm9Pck1vcmVQYXJ0c1wiO1xuaW1wb3J0IFNlcXVlbmNlT2ZQYXJ0c1BhcnQgZnJvbSBcIi4uL3BhcnQvbm9uVGVybWluYWwvc2VxdWVuY2VPZlBhcnRzXCI7XG5cbmltcG9ydCB7IGRlZmluaXRpb25SdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgeyB2ZXJ0aWNhbEJhciB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlZmluaXRpb25zRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgbGV0IHBhcnRzO1xuXG4gICAgY29uc3QgY29udGVudCA9IHZlcnRpY2FsQmFyLCAgLy8vXG4gICAgICAgICAgZGVmaW5pdGlvblJ1bGVOYW1lUGFydCA9IFJ1bGVOYW1lUGFydC5mcm9tUnVsZU5hbWUoZGVmaW5pdGlvblJ1bGVOYW1lKSxcbiAgICAgICAgICB2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sUGFydCA9IFRlcm1pbmFsU3ltYm9sUGFydC5mcm9tQ29udGVudChjb250ZW50KTtcblxuICAgIHBhcnRzID0gW1xuICAgICAgdmVydGljYWxCYXJUZXJtaW5hbFN5bWJvbFBhcnQsXG4gICAgICBkZWZpbml0aW9uUnVsZU5hbWVQYXJ0XG4gICAgXTtcblxuICAgIGNvbnN0IHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBTZXF1ZW5jZU9mUGFydHNQYXJ0LmZyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgICAgemVyb09yTW9yZVNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBaZXJvT3JNb3JlUGFydHNQYXJ0LmZyb21QYXJ0KHNlcXVlbmNlT2ZQYXJ0c1BhcnQpO1xuXG4gICAgcGFydHMgPSBbXG4gICAgICBkZWZpbml0aW9uUnVsZU5hbWVQYXJ0LFxuICAgICAgemVyb09yTW9yZVNlcXVlbmNlT2ZQYXJ0c1BhcnRcbiAgICBdO1xuXG4gICAgY29uc3QgcHJlY2VkZW5jZSA9IG51bGwsXG4gICAgICAgICAgZGVmaW5pdGlvbnNEZWZpbml0aW9uID0gbmV3IERlZmluaXRpb25zRGVmaW5pdGlvbihwYXJ0cywgcHJlY2VkZW5jZSk7XG5cbiAgICByZXR1cm4gZGVmaW5pdGlvbnNEZWZpbml0aW9uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRGVmaW5pdGlvbnNEZWZpbml0aW9uIiwidmVydGljYWxCYXIiLCJzcGVjaWFsU3ltYm9scyIsImZyb21Ob3RoaW5nIiwicGFydHMiLCJjb250ZW50IiwiZGVmaW5pdGlvblJ1bGVOYW1lUGFydCIsIlJ1bGVOYW1lUGFydCIsImZyb21SdWxlTmFtZSIsImRlZmluaXRpb25SdWxlTmFtZSIsInZlcnRpY2FsQmFyVGVybWluYWxTeW1ib2xQYXJ0IiwiVGVybWluYWxTeW1ib2xQYXJ0IiwiZnJvbUNvbnRlbnQiLCJzZXF1ZW5jZU9mUGFydHNQYXJ0IiwiU2VxdWVuY2VPZlBhcnRzUGFydCIsImZyb21QYXJ0cyIsInplcm9Pck1vcmVTZXF1ZW5jZU9mUGFydHNQYXJ0IiwiWmVyb09yTW9yZVBhcnRzUGFydCIsImZyb21QYXJ0IiwicHJlY2VkZW5jZSIsImRlZmluaXRpb25zRGVmaW5pdGlvbiIsIkRlZmluaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBY3FCQTs7OzJCQVpVO2lFQUVSOytEQUNFO3FFQUNNO3NFQUNDO3NFQUNBO3lCQUVHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5DLElBQU0sQUFBRUMsY0FBZ0JDLDJCQUFjLENBQTlCRDtBQUVPLElBQUEsQUFBTUQsc0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDWkcsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBSUM7Z0JBRUosSUFBTUMsVUFBVUosYUFDVksseUJBQXlCQyxpQkFBWSxDQUFDQyxZQUFZLENBQUNDLDZCQUFrQixHQUNyRUMsZ0NBQWdDQyx1QkFBa0IsQ0FBQ0MsV0FBVyxDQUFDUDtnQkFFckVELFFBQVE7b0JBQ05NO29CQUNBSjtpQkFDRDtnQkFFRCxJQUFNTyxzQkFBc0JDLHdCQUFtQixDQUFDQyxTQUFTLENBQUNYLFFBQ3BEWSxnQ0FBZ0NDLHdCQUFtQixDQUFDQyxRQUFRLENBQUNMO2dCQUVuRVQsUUFBUTtvQkFDTkU7b0JBQ0FVO2lCQUNEO2dCQUVELElBQU1HLGFBQWEsTUFDYkMsd0JBQXdCLElBdEJicEIsc0JBc0J1Q0ksT0FBT2U7Z0JBRS9ELE9BQU9DO1lBQ1Q7OztXQXpCbUJwQjtFQUE4QnFCLG1CQUFVIn0=