"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return AmbiguousModifierRuleDefinition;
    }
});
var _occamLexers = require("occam-lexers");
var _definition = /*#__PURE__*/ _interopRequireDefault(require("../definition"));
var _noWhitespace = /*#__PURE__*/ _interopRequireDefault(require("../part/terminal/noWhitespace"));
var _terminalSymbol = /*#__PURE__*/ _interopRequireDefault(require("../part/terminal/terminalSymbol"));
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
var exclamationMark = _occamLexers.specialSymbols.exclamationMark;
var AmbiguousModifierRuleDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(AmbiguousModifierRuleDefinition, Definition);
    var _super = _createSuper(AmbiguousModifierRuleDefinition);
    function AmbiguousModifierRuleDefinition() {
        _classCallCheck(this, AmbiguousModifierRuleDefinition);
        var content = exclamationMark, noWhitespacePart = new _noWhitespace.default(), terminalSymbolPart = new _terminalSymbol.default(content), parts = [
            noWhitespacePart,
            terminalSymbolPart
        ];
        return _super.call(this, parts);
    }
    return AmbiguousModifierRuleDefinition;
}(_definition.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL2FtYmlndW91c01vZGlmaWVyUnVsZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uXCI7XG5pbXBvcnQgTm9XaGl0ZXNwYWNlUGFydCBmcm9tIFwiLi4vcGFydC90ZXJtaW5hbC9ub1doaXRlc3BhY2VcIjtcbmltcG9ydCBUZXJtaW5hbFN5bWJvbFBhcnQgZnJvbSBcIi4uL3BhcnQvdGVybWluYWwvdGVybWluYWxTeW1ib2xcIjtcblxuY29uc3QgeyBleGNsYW1hdGlvbk1hcmsgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbWJpZ3VvdXNNb2RpZmllclJ1bGVEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBleGNsYW1hdGlvbk1hcmssICAvLy9cbiAgICAgICAgICBub1doaXRlc3BhY2VQYXJ0ID0gbmV3IE5vV2hpdGVzcGFjZVBhcnQoKSxcbiAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KGNvbnRlbnQpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgbm9XaGl0ZXNwYWNlUGFydCxcbiAgICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUGFydFxuICAgICAgICAgIF07XG5cbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJBbWJpZ3VvdXNNb2RpZmllclJ1bGVEZWZpbml0aW9uIiwiZXhjbGFtYXRpb25NYXJrIiwic3BlY2lhbFN5bWJvbHMiLCJjb250ZW50Iiwibm9XaGl0ZXNwYWNlUGFydCIsIk5vV2hpdGVzcGFjZVBhcnQiLCJ0ZXJtaW5hbFN5bWJvbFBhcnQiLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJwYXJ0cyIsIkRlZmluaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7OztlQVVRQSwrQkFBK0I7OzsyQkFSckIsY0FBYzsrREFFdEIsZUFBZTtpRUFDVCwrQkFBK0I7bUVBQzdCLGlDQUFpQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEUsSUFBTSxBQUFFQyxlQUFlLEdBQUtDLFlBQWMsZUFBQSxDQUFsQ0QsZUFBZSxBQUFtQixBQUFDO0FBRTVCLElBQUEsQUFBTUQsK0JBQStCLGlCQUFyQzs7O2FBQU1BLCtCQUErQjs7UUFFaEQsSUFBTUcsT0FBTyxHQUFHRixlQUFlLEVBQ3pCRyxnQkFBZ0IsR0FBRyxJQUFJQyxhQUFnQixRQUFBLEVBQUUsRUFDekNDLGtCQUFrQixHQUFHLElBQUlDLGVBQWtCLFFBQUEsQ0FBQ0osT0FBTyxDQUFDLEVBQ3BESyxLQUFLLEdBQUc7WUFDTkosZ0JBQWdCO1lBQ2hCRSxrQkFBa0I7U0FDbkIsQUFBQztpQ0FFRkUsS0FBSzs7O0NBRWQsQ0FaNERDLFdBQVUsUUFBQSxDQVl0RSJ9