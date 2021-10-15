"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
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
var NO_WHITESPACE = _occamLexers.specialSymbols.NO_WHITESPACE;
var NoWhitespacePartDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(NoWhitespacePartDefinition, Definition);
    function NoWhitespacePartDefinition() {
        _classCallCheck(this, NoWhitespacePartDefinition);
        var content = NO_WHITESPACE, terminalSymbolPart = new _terminalSymbol.default(content), parts = [
            terminalSymbolPart
        ];
        return _possibleConstructorReturn(this, _getPrototypeOf(NoWhitespacePartDefinition).call(this, parts));
    }
    return NoWhitespacePartDefinition;
}(_definition.default);
exports.default = NoWhitespacePartDefinition;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvZGVmaW5pdGlvbi9ub1doaXRlc3BhY2VQYXJ0LmpzIl0sIm5hbWVzIjpbInNwZWNpYWxTeW1ib2xzIiwiRGVmaW5pdGlvbiIsIlRlcm1pbmFsU3ltYm9sUGFydCIsIk5PX1dISVRFU1BBQ0UiLCJOb1doaXRlc3BhY2VQYXJ0RGVmaW5pdGlvbiIsImNvbnN0cnVjdG9yIiwiY29udGVudCIsInRlcm1pbmFsU3ltYm9sUGFydCIsInBhcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVtQixHQUFjLENBQWQsWUFBYztBQUV0QixHQUFlLENBQWYsV0FBZTtBQUNQLEdBQWlDLENBQWpDLGVBQWlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhFLEdBQUssQ0FBRyxhQUFhLEdBTFUsWUFBYyxnQkFLckMsYUFBYTtJQUVBLDBCQUEwQixpQkFBaEMsUUFBUTtjQUFGLDBCQUEwQjthQUExQiwwQkFBMEI7OEJBQTFCLDBCQUEwQjtRQUUzQyxHQUFLLENBQUMsT0FBTyxHQUFHLGFBQWEsRUFDdkIsa0JBQWtCLEdBQUcsR0FBRyxDQVBILGVBQWlDLFNBT1YsT0FBTyxHQUNuRCxLQUFLLEdBQUcsQ0FBQztZQUNQLGtCQUFrQjtRQUNwQixDQUFDO2dFQU5VLDBCQUEwQixhQVFyQyxLQUFLOztXQVJNLDBCQUEwQjtFQUx4QixXQUFlO2tCQUtqQiwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uXCI7XG5pbXBvcnQgVGVybWluYWxTeW1ib2xQYXJ0IGZyb20gXCIuLi9wYXJ0L3Rlcm1pbmFsL3Rlcm1pbmFsU3ltYm9sXCI7XG5cbmNvbnN0IHsgTk9fV0hJVEVTUEFDRSB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vV2hpdGVzcGFjZVBhcnREZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBOT19XSElURVNQQUNFLFxuICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQoY29udGVudCksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFBhcnRcbiAgICAgICAgICBdO1xuXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cbiJdfQ==