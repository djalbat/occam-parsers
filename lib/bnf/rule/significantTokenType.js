"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
var _rule = _interopRequireDefault(require("../rule"));
var _significantTokenType = _interopRequireDefault(require("../node/significantTokenType"));
var _significantTokenType1 = _interopRequireDefault(require("../definition/significantTokenType"));
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
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var typeType = _occamLexers.types.typeType;
var SignificantTokenTypeRule = /*#__PURE__*/ function(Rule) {
    _inherits(SignificantTokenTypeRule, Rule);
    function SignificantTokenTypeRule() {
        _classCallCheck(this, SignificantTokenTypeRule);
        var typeSignificantTokenType = typeType, typeSignificantTokenTypeDefinition = new _significantTokenType1.default(typeSignificantTokenType), name = _ruleNames.SignificantTokenTypeRuleName, definitions = [
            typeSignificantTokenTypeDefinition
        ], Node = _significantTokenType.default;
        return _possibleConstructorReturn(this, _getPrototypeOf(SignificantTokenTypeRule).call(this, name, definitions, Node));
    }
    return SignificantTokenTypeRule;
}(_rule.default);
exports.default = SignificantTokenTypeRule;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvcnVsZS9zaWduaWZpY2FudFRva2VuVHlwZS5qcyJdLCJuYW1lcyI6WyJ0eXBlcyIsIlJ1bGUiLCJTaWduaWZpY2FudFRva2VuVHlwZU5vZGUiLCJTaWduaWZpY2FudFRva2VuVHlwZURlZmluaXRpb24iLCJTaWduaWZpY2FudFRva2VuVHlwZVJ1bGVOYW1lIiwidHlwZVR5cGUiLCJTaWduaWZpY2FudFRva2VuVHlwZVJ1bGUiLCJjb25zdHJ1Y3RvciIsInR5cGVTaWduaWZpY2FudFRva2VuVHlwZSIsInR5cGVTaWduaWZpY2FudFRva2VuVHlwZURlZmluaXRpb24iLCJuYW1lIiwiZGVmaW5pdGlvbnMiLCJOb2RlIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVVLEdBQWMsQ0FBZCxZQUFjO0FBRW5CLEdBQVMsQ0FBVCxLQUFTO0FBQ1csR0FBOEIsQ0FBOUIscUJBQThCO0FBQ3hCLEdBQW9DLENBQXBDLHNCQUFvQztBQUVsQyxHQUFjLENBQWQsVUFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzRCxHQUFLLENBQUcsUUFBUSxHQVJNLFlBQWMsT0FRNUIsUUFBUTtJQUVLLHdCQUF3QixpQkFBOUIsUUFBUTtjQUFGLHdCQUF3QjthQUF4Qix3QkFBd0I7OEJBQXhCLHdCQUF3QjtRQUV6QyxHQUFLLENBQUMsd0JBQXdCLEdBQUcsUUFBUSxFQUNuQyxrQ0FBa0MsR0FBRyxHQUFHLENBVFAsc0JBQW9DLFNBU0csd0JBQXdCLEdBQ2hHLElBQUksR0FSK0IsVUFBYywrQkFTakQsV0FBVyxHQUFHLENBQUM7WUFDYixrQ0FBa0M7UUFDcEMsQ0FBQyxFQUNELElBQUksR0FmdUIscUJBQThCO2dFQU85Qyx3QkFBd0IsYUFVbkMsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJOztXQVZaLHdCQUF3QjtFQVI1QixLQUFTO2tCQVFMLHdCQUF3QiJ9