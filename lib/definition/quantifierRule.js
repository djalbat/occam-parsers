"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _definition = _interopRequireDefault(require("../definition"));
var _noWhitespace = _interopRequireDefault(require("../part/terminal/noWhitespace"));
var _terminalSymbol = _interopRequireDefault(require("../part/terminal/terminalSymbol"));
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
function _getPrototypeOf(o1) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o1);
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
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
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
var QuantifierRuleDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(QuantifierRuleDefinition, Definition);
    var _super = _createSuper(QuantifierRuleDefinition);
    function QuantifierRuleDefinition(terminalSymbolContent) {
        _classCallCheck(this, QuantifierRuleDefinition);
        var content = terminalSymbolContent, noWhitespacePart = new _noWhitespace.default(), terminalSymbolPart = new _terminalSymbol.default(content), parts = [
            noWhitespacePart,
            terminalSymbolPart
        ];
        return _super.call(this, parts);
    }
    return QuantifierRuleDefinition;
}(_definition.default);
exports.default = QuantifierRuleDefinition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL3F1YW50aWZpZXJSdWxlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvblwiO1xuaW1wb3J0IE5vV2hpdGVzcGFjZVBhcnQgZnJvbSBcIi4uL3BhcnQvdGVybWluYWwvbm9XaGl0ZXNwYWNlXCI7XG5pbXBvcnQgVGVybWluYWxTeW1ib2xQYXJ0IGZyb20gXCIuLi9wYXJ0L3Rlcm1pbmFsL3Rlcm1pbmFsU3ltYm9sXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3Rvcih0ZXJtaW5hbFN5bWJvbENvbnRlbnQpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGVybWluYWxTeW1ib2xDb250ZW50LCAgLy8vXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlUGFydCA9IG5ldyBOb1doaXRlc3BhY2VQYXJ0KCksXG4gICAgICAgICAgdGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydChjb250ZW50KSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIG5vV2hpdGVzcGFjZVBhcnQsXG4gICAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFBhcnRcbiAgICAgICAgICBdO1xuXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiUXVhbnRpZmllclJ1bGVEZWZpbml0aW9uIiwidGVybWluYWxTeW1ib2xDb250ZW50IiwiY29udGVudCIsIm5vV2hpdGVzcGFjZVBhcnQiLCJOb1doaXRlc3BhY2VQYXJ0IiwidGVybWluYWxTeW1ib2xQYXJ0IiwiVGVybWluYWxTeW1ib2xQYXJ0IiwicGFydHMiLCJEZWZpbml0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRVUsSUFBQSxXQUFlLGtDQUFmLGVBQWUsRUFBQTtBQUNULElBQUEsYUFBK0Isa0NBQS9CLCtCQUErQixFQUFBO0FBQzdCLElBQUEsZUFBaUMsa0NBQWpDLGlDQUFpQyxFQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqRCxJQUFBLEFBQU1BLHdCQUF3QixpQkFBOUI7OzthQUFNQSx3QkFBd0IsQ0FDL0JDLHFCQUFxQjs7UUFDL0IsSUFBTUMsT0FBTyxHQUFHRCxxQkFBcUIsRUFDL0JFLGdCQUFnQixHQUFHLElBQUlDLGFBQWdCLFFBQUEsRUFBRSxFQUN6Q0Msa0JBQWtCLEdBQUcsSUFBSUMsZUFBa0IsUUFBQSxDQUFDSixPQUFPLENBQUMsRUFDcERLLEtBQUssR0FBRztZQUNOSixnQkFBZ0I7WUFDaEJFLGtCQUFrQjtTQUNuQixBQUFDO2lDQUVGRSxLQUFLOzs7Q0FFZCxDQVpxREMsV0FBVSxRQUFBLENBWS9EO2tCQVpvQlIsd0JBQXdCIn0=