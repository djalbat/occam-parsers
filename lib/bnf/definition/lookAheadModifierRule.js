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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvZGVmaW5pdGlvbi9sb29rQWhlYWRNb2RpZmllclJ1bGUuanMiXSwibmFtZXMiOlsic3BlY2lhbFN5bWJvbHMiLCJEZWZpbml0aW9uIiwiVGVybWluYWxTeW1ib2xQYXJ0IiwiZXhjbGFtYXRpb25NYXJrIiwiTG9va0FoZWFkTW9kaWZpZXJSdWxlRGVmaW5pdGlvbiIsImNvbnN0cnVjdG9yIiwiY29udGVudCIsInRlcm1pbmFsU3ltYm9sUGFydCIsInBhcnRzIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVtQixHQUFjLENBQWQsWUFBYztBQUV0QixHQUFlLENBQWYsV0FBZTtBQUNQLEdBQWlDLENBQWpDLGVBQWlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhFLEdBQUssQ0FBRyxlQUFlLEdBTFEsWUFBYyxnQkFLckMsZUFBZTtJQUVGLCtCQUErQixpQkFBckMsUUFBUTtjQUFGLCtCQUErQjthQUEvQiwrQkFBK0I7OEJBQS9CLCtCQUErQjtRQUVoRCxHQUFLLENBQUMsT0FBTyxHQUFHLGVBQWUsRUFDekIsa0JBQWtCLEdBQUcsR0FBRyxDQVBILGVBQWlDLFNBT1YsT0FBTyxHQUNuRCxLQUFLLEdBQUcsQ0FBQztZQUNQLGtCQUFrQjtRQUNwQixDQUFDO2dFQU5VLCtCQUErQixhQVExQyxLQUFLOztXQVJNLCtCQUErQjtFQUw3QixXQUFlO2tCQUtqQiwrQkFBK0IifQ==