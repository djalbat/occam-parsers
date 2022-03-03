"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
var _rule = _interopRequireDefault(require("../rule"));
var _terminalSymbol = _interopRequireDefault(require("../node/bnf/terminalSymbol"));
var _significantTokenType = _interopRequireDefault(require("../definition/significantTokenType"));
var _ruleNames = require("../ruleNames");
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
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
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
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
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var stringLiteralType = _occamLexers.types.stringLiteralType;
var TerminalSymbolRule = /*#__PURE__*/ function(Rule) {
    _inherits(TerminalSymbolRule, Rule);
    var _super = _createSuper(TerminalSymbolRule);
    function TerminalSymbolRule() {
        _classCallCheck(this, TerminalSymbolRule);
        var stringLiteralSignificantTokenType = stringLiteralType, stringLiteralSignificantTokenTypeDefinition = new _significantTokenType.default(stringLiteralSignificantTokenType), name = _ruleNames.TerminalSymbolRuleName, definitions = [
            stringLiteralSignificantTokenTypeDefinition
        ], Node = _terminalSymbol.default;
        return _super.call(this, name, definitions, Node);
    }
    return TerminalSymbolRule;
}(_rule.default);
exports.default = TerminalSymbolRule;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3Rlcm1pbmFsU3ltYm9sLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyB0eXBlcyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBUZXJtaW5hbFN5bWJvbEJORk5vZGUgZnJvbSBcIi4uL25vZGUvYm5mL3Rlcm1pbmFsU3ltYm9sXCI7XG5pbXBvcnQgU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3NpZ25pZmljYW50VG9rZW5UeXBlXCI7XG5cbmltcG9ydCB7IFRlcm1pbmFsU3ltYm9sUnVsZU5hbWUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHsgc3RyaW5nTGl0ZXJhbFR5cGUgfSA9IHR5cGVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXJtaW5hbFN5bWJvbFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3Qgc3RyaW5nTGl0ZXJhbFNpZ25pZmljYW50VG9rZW5UeXBlID0gc3RyaW5nTGl0ZXJhbFR5cGUsICAvLy9cbiAgICAgICAgICBzdHJpbmdMaXRlcmFsU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uID0gbmV3IFNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvbihzdHJpbmdMaXRlcmFsU2lnbmlmaWNhbnRUb2tlblR5cGUpLFxuICAgICAgICAgIG5hbWUgPSBUZXJtaW5hbFN5bWJvbFJ1bGVOYW1lLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgc3RyaW5nTGl0ZXJhbFNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IFRlcm1pbmFsU3ltYm9sQk5GTm9kZTtcblxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG4iXSwibmFtZXMiOlsic3RyaW5nTGl0ZXJhbFR5cGUiLCJ0eXBlcyIsIlRlcm1pbmFsU3ltYm9sUnVsZSIsInN0cmluZ0xpdGVyYWxTaWduaWZpY2FudFRva2VuVHlwZSIsInN0cmluZ0xpdGVyYWxTaWduaWZpY2FudFRva2VuVHlwZURlZmluaXRpb24iLCJTaWduaWZpY2FudFRva2VuVHlwZURlZmluaXRpb24iLCJuYW1lIiwiVGVybWluYWxTeW1ib2xSdWxlTmFtZSIsImRlZmluaXRpb25zIiwiTm9kZSIsIlRlcm1pbmFsU3ltYm9sQk5GTm9kZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVksV0FBQSxDQUFDOzs7RTt3QjtBQUVTLEdBQWMsQ0FBZCxZQUFjO0FBRW5CLEdBQVMsQ0FBVCxLQUFTO0FBQ1EsR0FBNEIsQ0FBNUIsZUFBNEI7QUFDbkIsR0FBb0MsQ0FBcEMscUJBQW9DO0FBRXhDLEdBQWMsQ0FBZCxVQUFjOzs7Ozs7Ozs7Ozs7Ozs7Szs7Ozs7Ozs7Ozs7OztNO3lEOzs7Ozs7Ozs7Ozs7Ozs7dUI7O0s7Ozs7MkI7Ozs7Ozs7O3FGOzs7Ozs7Ozs7Ozs7bUU7O2lEOzs7OztBQUVyRCxHQUFLLENBQUdBLGlCQUFpQixHQUFLQyxZQUFLLE9BQTNCRCxpQkFBaUI7SUFFSkUsa0JBQWtCLGlCQUF4QixRQUFRO3VDOzthQUFGQSxrQkFBa0I7aUQ7UUFFbkMsR0FBSyxDQUFDQyxpQ0FBaUMsR0FBR0gsaUJBQWlCLEVBQ3JESSwyQ0FBMkMsR0FBRyxHQUFHLENBQUNDLHFCQUE4QixTQUFDRixpQ0FBaUMsR0FDbEhHLElBQUksR0FBR0MsVUFBc0IseUJBQzdCQyxXQUFXLEdBQUcsQ0FBQztZQUNiSiwyQ0FBMkM7UUFDN0MsQ0FBQyxFQUNESyxJQUFJLEdBQUdDLGVBQXFCO2lDQUU1QkosSUFBSSxFQUFFRSxXQUFXLEVBQUVDLElBQUk7OztFQVZlRSxLQUFJO2tCQUEvQlQsa0JBQWtCLEEifQ==