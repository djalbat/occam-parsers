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
var exclamationMark = _occamLexers.specialSymbols.exclamationMark;
var LookAheadModifierRuleDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(LookAheadModifierRuleDefinition, Definition);
    function LookAheadModifierRuleDefinition() {
        _classCallCheck(this, LookAheadModifierRuleDefinition);
        var content = exclamationMark, terminalSymbolPart = new _terminalSymbol.default(content), parts = [
            terminalSymbolPart
        ];
        return _possibleConstructorReturn(this, _getPrototypeOf(LookAheadModifierRuleDefinition).call(this, parts));
    }
    return LookAheadModifierRuleDefinition;
}(_definition.default);
exports.default = LookAheadModifierRuleDefinition;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvZGVmaW5pdGlvbi9sb29rQWhlYWRNb2RpZmllclJ1bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvblwiO1xuaW1wb3J0IFRlcm1pbmFsU3ltYm9sUGFydCBmcm9tIFwiLi4vcGFydC90ZXJtaW5hbC90ZXJtaW5hbFN5bWJvbFwiO1xuXG5jb25zdCB7IGV4Y2xhbWF0aW9uTWFyayB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvb2tBaGVhZE1vZGlmaWVyUnVsZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGV4Y2xhbWF0aW9uTWFyaywgIC8vL1xuICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQoY29udGVudCksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFBhcnRcbiAgICAgICAgICBdO1xuXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVtQixHQUFjLENBQWQsWUFBYztBQUV0QixHQUFlLENBQWYsV0FBZTtBQUNQLEdBQWlDLENBQWpDLGVBQWlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhFLEdBQUssQ0FBRyxlQUFlLEdBTFEsWUFBYyxnQkFLckMsZUFBZTtJQUVGLCtCQUErQjtjQUEvQiwrQkFBK0I7YUFBL0IsK0JBQStCOzhCQUEvQiwrQkFBK0I7UUFFaEQsR0FBSyxDQUFDLE9BQU8sR0FBRyxlQUFlLEVBQ3pCLGtCQUFrQixHQUFHLEdBQUcsQ0FQSCxlQUFpQyxTQU9WLE9BQU8sR0FDbkQsS0FBSztZQUNILGtCQUFrQjs7Z0VBTFQsK0JBQStCLGFBUTFDLEtBQUs7O1dBUk0sK0JBQStCO0VBTDdCLFdBQWU7a0JBS2pCLCtCQUErQiJ9