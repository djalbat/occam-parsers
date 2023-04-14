"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TerminalSymbolRule;
    }
});
var _occamlexers = require("occam-lexers");
var _rule = /*#__PURE__*/ _interop_require_default(require("../rule"));
var _terminalSymbol = /*#__PURE__*/ _interop_require_default(require("../node/bnf/terminalSymbol"));
var _significantTokenType = /*#__PURE__*/ _interop_require_default(require("../definition/significantTokenType"));
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
var stringLiteralType = _occamlexers.types.stringLiteralType;
var TerminalSymbolRule = /*#__PURE__*/ function(Rule) {
    _inherits(TerminalSymbolRule, Rule);
    var _super = _create_super(TerminalSymbolRule);
    function TerminalSymbolRule() {
        _class_call_check(this, TerminalSymbolRule);
        var stringLiteralSignificantTokenType = stringLiteralType, stringLiteralSignificantTokenTypeDefinition = new _significantTokenType.default(stringLiteralSignificantTokenType), name = _ruleNames.terminalSymbolRuleName, ambiguous = false, definitions = [
            stringLiteralSignificantTokenTypeDefinition
        ], Node = _terminalSymbol.default;
        return _super.call(this, name, ambiguous, definitions, Node);
    }
    return TerminalSymbolRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3Rlcm1pbmFsU3ltYm9sLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyB0eXBlcyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBUZXJtaW5hbFN5bWJvbEJORk5vZGUgZnJvbSBcIi4uL25vZGUvYm5mL3Rlcm1pbmFsU3ltYm9sXCI7XG5pbXBvcnQgU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3NpZ25pZmljYW50VG9rZW5UeXBlXCI7XG5cbmltcG9ydCB7IHRlcm1pbmFsU3ltYm9sUnVsZU5hbWUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHsgc3RyaW5nTGl0ZXJhbFR5cGUgfSA9IHR5cGVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXJtaW5hbFN5bWJvbFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3Qgc3RyaW5nTGl0ZXJhbFNpZ25pZmljYW50VG9rZW5UeXBlID0gc3RyaW5nTGl0ZXJhbFR5cGUsICAvLy9cbiAgICAgICAgICBzdHJpbmdMaXRlcmFsU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uID0gbmV3IFNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvbihzdHJpbmdMaXRlcmFsU2lnbmlmaWNhbnRUb2tlblR5cGUpLFxuICAgICAgICAgIG5hbWUgPSB0ZXJtaW5hbFN5bWJvbFJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgYW1iaWd1b3VzID0gZmFsc2UsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBzdHJpbmdMaXRlcmFsU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gVGVybWluYWxTeW1ib2xCTkZOb2RlO1xuXG4gICAgc3VwZXIobmFtZSwgYW1iaWd1b3VzLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJUZXJtaW5hbFN5bWJvbFJ1bGUiLCJzdHJpbmdMaXRlcmFsVHlwZSIsInR5cGVzIiwic3RyaW5nTGl0ZXJhbFNpZ25pZmljYW50VG9rZW5UeXBlIiwic3RyaW5nTGl0ZXJhbFNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvbiIsIlNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvbiIsIm5hbWUiLCJ0ZXJtaW5hbFN5bWJvbFJ1bGVOYW1lIiwiYW1iaWd1b3VzIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwiVGVybWluYWxTeW1ib2xCTkZOb2RlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFZcUJBOzs7MkJBVkM7MkRBRUw7cUVBQ2lCOzJFQUNTO3lCQUVKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QyxJQUFNLEFBQUVDLG9CQUFzQkMsa0JBQUssQ0FBM0JEO0FBRU8sSUFBQSxBQUFNRCxtQ0FBTjtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBO1FBRWpCLElBQU1HLG9DQUFvQ0YsbUJBQ3BDRyw4Q0FBOEMsSUFBSUMsNkJBQThCLENBQUNGLG9DQUNqRkcsT0FBT0MsaUNBQXNCLEVBQzdCQyxZQUFZLEtBQUssRUFDakJDLGNBQWM7WUFDWkw7U0FDRCxFQUNETSxPQUFPQyx1QkFBcUI7aUNBRTVCTCxNQUFNRSxXQUFXQyxhQUFhQzs7V0FYbkJWO0VBQTJCWSxhQUFJIn0=