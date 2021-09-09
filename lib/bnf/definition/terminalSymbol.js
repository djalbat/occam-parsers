"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _definition = _interopRequireDefault(require("../definition"));
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
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var TerminalSymbolDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(TerminalSymbolDefinition, Definition);
    function TerminalSymbolDefinition(content) {
        _classCallCheck(this, TerminalSymbolDefinition);
        var terminalSymbolPart = new _terminalSymbol.default(content), parts = [
            terminalSymbolPart
        ];
        return _possibleConstructorReturn(this, _getPrototypeOf(TerminalSymbolDefinition).call(this, parts));
    }
    return TerminalSymbolDefinition;
}(_definition.default);
exports.default = TerminalSymbolDefinition;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvZGVmaW5pdGlvbi90ZXJtaW5hbFN5bWJvbC5qcyJdLCJuYW1lcyI6WyJEZWZpbml0aW9uIiwiVGVybWluYWxTeW1ib2xQYXJ0IiwiVGVybWluYWxTeW1ib2xEZWZpbml0aW9uIiwiY29uc3RydWN0b3IiLCJjb250ZW50IiwidGVybWluYWxTeW1ib2xQYXJ0IiwicGFydHMiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRVcsR0FBZSxDQUFmLFdBQWU7QUFDUCxHQUFpQyxDQUFqQyxlQUFpQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUUzQyx3QkFBd0IsaUJBQTlCLFFBQVE7Y0FBRix3QkFBd0I7YUFBeEIsd0JBQXdCLENBQy9CLE9BQU87OEJBREEsd0JBQXdCO1FBRXpDLEdBQUssQ0FBQyxrQkFBa0IsR0FBRyxHQUFHLENBSkgsZUFBaUMsU0FJVixPQUFPLEdBQ25ELEtBQUssR0FBRyxDQUFDO1lBQ1Asa0JBQWtCO1FBQ3BCLENBQUM7Z0VBTFUsd0JBQXdCLGFBT25DLEtBQUs7O1dBUE0sd0JBQXdCO0VBSHRCLFdBQWU7a0JBR2pCLHdCQUF3QiJ9