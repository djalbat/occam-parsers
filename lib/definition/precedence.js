"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PrecedenceDefinition;
    }
});
var _occamlexers = require("occam-lexers");
var _definition = /*#__PURE__*/ _interop_require_default(require("../definition"));
var _noWhitespace = /*#__PURE__*/ _interop_require_default(require("../part/terminal/noWhitespace"));
var _terminalSymbol = /*#__PURE__*/ _interop_require_default(require("../part/terminal/terminalSymbol"));
var _significantTokenType = /*#__PURE__*/ _interop_require_default(require("../part/terminal/significantTokenType"));
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
var numberType = _occamlexers.types.numberType, openBracket = _occamlexers.specialSymbols.openBracket, closeBracket = _occamlexers.specialSymbols.closeBracket;
var PrecedenceDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(PrecedenceDefinition, Definition);
    var _super = _create_super(PrecedenceDefinition);
    function PrecedenceDefinition() {
        _class_call_check(this, PrecedenceDefinition);
        return _super.apply(this, arguments);
    }
    _create_class(PrecedenceDefinition, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var numberSignificantTokenType = numberType, openBracketTerminalSymbolContent = openBracket, closeBracketTerminalSymbolContent = closeBracket, noWhitespacePart = new _noWhitespace.default(), openBracketTerminalSymbolPart = new _terminalSymbol.default(openBracketTerminalSymbolContent), closeBracketTerminalSymbolPart = new _terminalSymbol.default(closeBracketTerminalSymbolContent), numberSignificantTokenTypePart = new _significantTokenType.default(numberSignificantTokenType), parts = [
                    openBracketTerminalSymbolPart,
                    noWhitespacePart,
                    numberSignificantTokenTypePart,
                    noWhitespacePart,
                    closeBracketTerminalSymbolPart
                ], precedence = null, precedenceDefinition = new PrecedenceDefinition(parts, precedence);
                return precedenceDefinition;
            }
        }
    ]);
    return PrecedenceDefinition;
}(_definition.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL3ByZWNlZGVuY2UuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHR5cGVzLCBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IERlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb25cIjtcbmltcG9ydCBOb1doaXRlc3BhY2VQYXJ0IGZyb20gXCIuLi9wYXJ0L3Rlcm1pbmFsL25vV2hpdGVzcGFjZVwiO1xuaW1wb3J0IFRlcm1pbmFsU3ltYm9sUGFydCBmcm9tIFwiLi4vcGFydC90ZXJtaW5hbC90ZXJtaW5hbFN5bWJvbFwiO1xuaW1wb3J0IFNpZ25pZmljYW50VG9rZW5UeXBlUGFydCBmcm9tIFwiLi4vcGFydC90ZXJtaW5hbC9zaWduaWZpY2FudFRva2VuVHlwZVwiO1xuXG5jb25zdCB7IG51bWJlclR5cGUgfSA9IHR5cGVzLFxuICAgICAgeyBvcGVuQnJhY2tldCwgY2xvc2VCcmFja2V0IH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlY2VkZW5jZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG51bWJlclNpZ25pZmljYW50VG9rZW5UeXBlID0gbnVtYmVyVHlwZSwgIC8vL1xuICAgICAgICAgIG9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50ID0gb3BlbkJyYWNrZXQsIC8vL1xuICAgICAgICAgIGNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sQ29udGVudCA9IGNsb3NlQnJhY2tldCwgLy8vXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlUGFydCA9IG5ldyBOb1doaXRlc3BhY2VQYXJ0KCksXG4gICAgICAgICAgb3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KG9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50KSxcbiAgICAgICAgICBjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KGNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sQ29udGVudCksXG4gICAgICAgICAgbnVtYmVyU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0ID0gbmV3IFNpZ25pZmljYW50VG9rZW5UeXBlUGFydChudW1iZXJTaWduaWZpY2FudFRva2VuVHlwZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBvcGVuQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydCxcbiAgICAgICAgICAgIG5vV2hpdGVzcGFjZVBhcnQsXG4gICAgICAgICAgICBudW1iZXJTaWduaWZpY2FudFRva2VuVHlwZVBhcnQsXG4gICAgICAgICAgICBub1doaXRlc3BhY2VQYXJ0LFxuICAgICAgICAgICAgY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBwcmVjZWRlbmNlID0gbnVsbCxcbiAgICAgICAgICBwcmVjZWRlbmNlRGVmaW5pdGlvbiA9IG5ldyBQcmVjZWRlbmNlRGVmaW5pdGlvbihwYXJ0cywgcHJlY2VkZW5jZSk7XG5cbiAgICByZXR1cm4gcHJlY2VkZW5jZURlZmluaXRpb247XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiUHJlY2VkZW5jZURlZmluaXRpb24iLCJudW1iZXJUeXBlIiwidHlwZXMiLCJvcGVuQnJhY2tldCIsInNwZWNpYWxTeW1ib2xzIiwiY2xvc2VCcmFja2V0IiwiZnJvbU5vdGhpbmciLCJudW1iZXJTaWduaWZpY2FudFRva2VuVHlwZSIsIm9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50IiwiY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50Iiwibm9XaGl0ZXNwYWNlUGFydCIsIk5vV2hpdGVzcGFjZVBhcnQiLCJvcGVuQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydCIsIlRlcm1pbmFsU3ltYm9sUGFydCIsImNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydCIsIm51bWJlclNpZ25pZmljYW50VG9rZW5UeXBlUGFydCIsIlNpZ25pZmljYW50VG9rZW5UeXBlUGFydCIsInBhcnRzIiwicHJlY2VkZW5jZSIsInByZWNlZGVuY2VEZWZpbml0aW9uIiwiRGVmaW5pdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFZcUJBOzs7MkJBVmlCO2lFQUVmO21FQUNNO3FFQUNFOzJFQUNNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJDLElBQU0sQUFBRUMsYUFBZUMsbUJBQWZELFlBQ0FFLGNBQThCQyw0QkFBOUJELGFBQWFFLGVBQWlCRCw0QkFBakJDO0FBRU4sSUFBQSxBQUFNTCxxQ0FBTjtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNaTSxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNQyw2QkFBNkJOLFlBQzdCTyxtQ0FBbUNMLGFBQ25DTSxvQ0FBb0NKLGNBQ3BDSyxtQkFBbUIsSUFBSUMseUJBQ3ZCQyxnQ0FBZ0MsSUFBSUMsd0JBQW1CTCxtQ0FDdkRNLGlDQUFpQyxJQUFJRCx3QkFBbUJKLG9DQUN4RE0saUNBQWlDLElBQUlDLDhCQUF5QlQsNkJBQzlEVSxRQUFRO29CQUNOTDtvQkFDQUY7b0JBQ0FLO29CQUNBTDtvQkFDQUk7aUJBQ0QsRUFDREksYUFBYSxNQUNiQyx1QkFBdUIsSUFqQlpuQixxQkFpQnFDaUIsT0FBT0M7Z0JBRTdELE9BQU9DO1lBQ1Q7OztXQXBCbUJuQjtFQUE2Qm9CIn0=